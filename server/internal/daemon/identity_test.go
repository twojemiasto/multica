package daemon

import (
	"os"
	"path/filepath"
	"reflect"
	"strings"
	"testing"

	"github.com/google/uuid"
)

func TestEnsureDaemonID_Persists(t *testing.T) {
	home := t.TempDir()
	t.Setenv("HOME", home)

	first, err := EnsureDaemonID("")
	if err != nil {
		t.Fatalf("EnsureDaemonID first call: %v", err)
	}
	if _, err := uuid.Parse(first); err != nil {
		t.Fatalf("EnsureDaemonID returned non-UUID: %q", first)
	}

	path := filepath.Join(home, ".multica", "daemon.id")
	data, err := os.ReadFile(path)
	if err != nil {
		t.Fatalf("daemon.id not written: %v", err)
	}
	if strings.TrimSpace(string(data)) != first {
		t.Fatalf("file contents %q differ from returned UUID %q", data, first)
	}

	second, err := EnsureDaemonID("")
	if err != nil {
		t.Fatalf("EnsureDaemonID second call: %v", err)
	}
	if second != first {
		t.Fatalf("UUID changed on second call: %q → %q", first, second)
	}
}

func TestEnsureDaemonID_ProfileIsolated(t *testing.T) {
	home := t.TempDir()
	t.Setenv("HOME", home)

	defaultID, err := EnsureDaemonID("")
	if err != nil {
		t.Fatalf("default profile: %v", err)
	}
	stagingID, err := EnsureDaemonID("staging")
	if err != nil {
		t.Fatalf("staging profile: %v", err)
	}
	if defaultID == stagingID {
		t.Fatalf("profiles shared the same daemon id: %s", defaultID)
	}

	if _, err := os.Stat(filepath.Join(home, ".multica", "profiles", "staging", "daemon.id")); err != nil {
		t.Fatalf("profile-scoped daemon.id missing: %v", err)
	}
}

func TestEnsureDaemonID_RegeneratesCorruptFile(t *testing.T) {
	home := t.TempDir()
	t.Setenv("HOME", home)

	dir := filepath.Join(home, ".multica")
	if err := os.MkdirAll(dir, 0o755); err != nil {
		t.Fatalf("mkdir: %v", err)
	}
	path := filepath.Join(dir, "daemon.id")
	if err := os.WriteFile(path, []byte("not-a-uuid"), 0o600); err != nil {
		t.Fatalf("seed corrupt file: %v", err)
	}

	id, err := EnsureDaemonID("")
	if err != nil {
		t.Fatalf("EnsureDaemonID: %v", err)
	}
	if _, err := uuid.Parse(id); err != nil {
		t.Fatalf("expected valid UUID, got %q", id)
	}

	data, _ := os.ReadFile(path)
	if strings.TrimSpace(string(data)) != id {
		t.Fatalf("file not rewritten with new UUID")
	}
}

func TestLegacyDaemonIDs(t *testing.T) {
	cases := []struct {
		name     string
		hostname string
		profile  string
		want     []string
	}{
		{
			name:     "plain hostname, no profile",
			hostname: "MacBook-Pro",
			want:     []string{"MacBook-Pro"},
		},
		{
			name:     "dot-local hostname, no profile",
			hostname: "MacBook-Pro.local",
			want:     []string{"MacBook-Pro.local", "MacBook-Pro"},
		},
		{
			name:     "plain hostname with profile",
			hostname: "MacBook-Pro",
			profile:  "staging",
			want:     []string{"MacBook-Pro", "MacBook-Pro-staging"},
		},
		{
			name:     "dot-local hostname with profile",
			hostname: "MacBook-Pro.local",
			profile:  "staging",
			want: []string{
				"MacBook-Pro.local",
				"MacBook-Pro",
				"MacBook-Pro.local-staging",
				"MacBook-Pro-staging",
			},
		},
		{
			name:     "empty hostname",
			hostname: "",
			want:     nil,
		},
	}

	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			got := LegacyDaemonIDs(tc.hostname, tc.profile)
			if !reflect.DeepEqual(got, tc.want) {
				t.Fatalf("LegacyDaemonIDs(%q, %q) = %v, want %v", tc.hostname, tc.profile, got, tc.want)
			}
		})
	}
}
