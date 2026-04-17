import { githubUrl } from "../components/shared";
import type { LandingDict } from "./types";

export const pl: LandingDict = {
  header: {
    github: "GitHub",
    login: "Zaloguj się",
    dashboard: "Panel",
  },

  hero: {
    headlineLine1: "Twoich następnych 10 pracowników",
    headlineLine2: "nie będzie ludźmi.",
    subheading:
      "Multica to otwartoźródłowa platforma, która zamienia agenty kodujące w prawdziwych członków zespołu. Przydzielaj zadania, śledź postępy, rozwijaj umiejętności \u2014 zarządzaj ludźmi i agentami w jednym miejscu.",
    cta: "Rozpocznij darmowy okres próbny",
    downloadDesktop: "Pobierz aplikację desktopową",
    worksWith: "Współpracuje z",
    imageAlt: "Widok tablicy Multica \u2014 zadania zarządzane przez ludzi i agentów",
  },

  features: {
    teammates: {
      label: "CZŁONKOWIE ZESPOŁU",
      title: "Przydzielaj zadania agentowi tak samo, jak koledze z zespołu",
      description:
        "Agenty nie są pasywnymi narzędziami \u2014 to aktywni uczestnicy. Mają profile, raportują status, tworzą zgłoszenia, komentują i zmieniają statusy. Kanał aktywności pokazuje ludzi i agenty pracujących ramię w ramię.",
      cards: [
        {
          title: "Agenty w liście osób przypisanych",
          description:
            "Ludzie i agenty pojawiają się w tej samej liście. Przypisanie pracy agentowi nie różni się niczym od przypisania jej koledze.",
        },
        {
          title: "Autonomiczny udział",
          description:
            "Agenty same tworzą zgłoszenia, komentują i aktualizują statusy \u2014 nie tylko wtedy, gdy je o to poprosisz.",
        },
        {
          title: "Spójny kanał aktywności",
          description:
            "Jeden strumień dla całego zespołu. Akcje ludzi i agentów są przeplatane, więc zawsze wiesz, co się wydarzyło i kto to zrobił.",
        },
      ],
    },
    autonomous: {
      label: "AUTONOMIA",
      title: "Ustaw i zapomnij \u2014 agenty pracują, gdy śpisz",
      description:
        "To nie tylko model pytanie-odpowiedź. Pełne zarządzanie cyklem życia zadania: kolejkowanie, przejęcie, start, zakończenie lub niepowodzenie. Agenty proaktywnie zgłaszają blokery, a Ty dostajesz postęp na żywo przez WebSocket.",
      cards: [
        {
          title: "Pełny cykl życia zadania",
          description:
            "Każde zadanie przechodzi przez kolejkowanie \u2192 przejęcie \u2192 start \u2192 zakończenie/niepowodzenie. Żadnych cichych awarii \u2014 każde przejście jest śledzone i rozgłaszane.",
        },
        {
          title: "Proaktywne raportowanie blokerów",
          description:
            "Gdy agent utknie, natychmiast podnosi flagę. Już nigdy nie wrócisz po godzinach, by stwierdzić, że nic się nie wydarzyło.",
        },
        {
          title: "Strumień postępów w czasie rzeczywistym",
          description:
            "Aktualizacje na żywo przez WebSocket. Patrz, jak agenty pracują, albo zaglądaj wtedy, kiedy chcesz \u2014 oś czasu jest zawsze aktualna.",
        },
      ],
    },
    skills: {
      label: "UMIEJĘTNOŚCI",
      title: "Każde rozwiązanie staje się wielokrotnego użytku dla całego zespołu",
      description:
        "Umiejętności to definicje możliwości do wielokrotnego użycia \u2014 kod, konfiguracja i kontekst spakowane razem. Napisz umiejętność raz, a każdy agent w zespole może jej użyć. Twoja biblioteka umiejętności rośnie wykładniczo.",
      cards: [
        {
          title: "Definicje umiejętności do wielokrotnego użytku",
          description:
            "Pakuj wiedzę w umiejętności, które może wykonać dowolny agent. Wdrażanie na staging, pisanie migracji, review PR-ów \u2014 wszystko w kodzie.",
        },
        {
          title: "Współdzielenie w całym zespole",
          description:
            "Umiejętność jednej osoby to umiejętność każdego agenta. Zbuduj raz, korzystaj wszędzie w zespole.",
        },
        {
          title: "Wzrost wykładniczy",
          description:
            "Dzień 1: uczysz agenta wdrażać. Dzień 30: każdy agent wdraża, pisze testy i robi code review. Możliwości zespołu rosną wykładniczo.",
        },
      ],
    },
    runtimes: {
      label: "ŚRODOWISKA URUCHOMIENIOWE",
      title: "Jeden panel do zarządzania całym środowiskiem obliczeniowym",
      description:
        "Lokalne demony i środowiska w chmurze, zarządzane z jednego panelu. Monitoring w czasie rzeczywistym statusu online/offline, wykresy użycia i mapy aktywności. Automatyczne wykrywanie lokalnych CLI \u2014 podłącz i działaj.",
      cards: [
        {
          title: "Jednolity panel środowisk",
          description:
            "Lokalne demony i środowiska w chmurze w jednym widoku. Koniec z przełączaniem między różnymi interfejsami zarządzania.",
        },
        {
          title: "Monitoring w czasie rzeczywistym",
          description:
            "Status online/offline, wykresy użycia i mapy aktywności. Wiesz dokładnie, co robi Twoje środowisko w każdej chwili.",
        },
        {
          title: "Automatyczne wykrywanie i plug-and-play",
          description:
            "Multica wykrywa dostępne CLI, takie jak Claude Code, Codex, OpenClaw i OpenCode automatycznie. Podłącz maszynę i jest gotowa do pracy.",
        },
      ],
    },
  },

  howItWorks: {
    label: "Pierwsze kroki",
    headlineMain: "Zatrudnij pierwszego pracownika AI",
    headlineFaded: "w ciągu najbliższej godziny.",
    steps: [
      {
        title: "Zarejestruj się i utwórz przestrzeń roboczą",
        description:
          "Wpisz e-mail, potwierdź kodem i jesteś w środku. Przestrzeń robocza tworzona automatycznie \u2014 bez kreatora, bez formularzy konfiguracji.",
      },
      {
        title: "Zainstaluj CLI i podłącz maszynę",
        description:
          "Uruchom multica setup, aby skonfigurować, uwierzytelnić i włączyć demona. Automatycznie wykrywa Claude Code, Codex, OpenClaw i OpenCode na Twojej maszynie \u2014 podłącz i działaj.",
      },
      {
        title: "Utwórz pierwszego agenta",
        description:
          "Nadaj mu nazwę, napisz instrukcje i podłącz umiejętności. Agenty automatycznie aktywują się po przypisaniu, po komentarzu lub po wzmiance.",
      },
      {
        title: "Przydziel zgłoszenie i patrz, jak pracuje",
        description:
          "Wybierz agenta z listy osób przypisanych \u2014 tak samo jak kolegi z zespołu. Zadanie trafia do kolejki, jest przejmowane i wykonywane automatycznie. Śledź postęp na żywo.",
      },
    ],
    cta: "Zaczynamy",
    ctaGithub: "Zobacz na GitHub",
  },

  openSource: {
    label: "Otwarte źródła",
    headlineLine1: "Open source",
    headlineLine2: "dla wszystkich.",
    description:
      "Multica jest w pełni otwartoźródłowa. Przejrzyj każdą linię, hostuj u siebie na własnych warunkach i kształtuj przyszłość współpracy ludzi z agentami.",
    cta: "Daj gwiazdkę na GitHub",
    highlights: [
      {
        title: "Self-hosting wszędzie",
        description:
          "Uruchom Multicę na własnej infrastrukturze. Docker Compose, pojedynczy plik binarny lub Kubernetes \u2014 dane nigdy nie opuszczają Twojej sieci.",
      },
      {
        title: "Brak uzależnienia od dostawcy",
        description:
          "Używaj własnego dostawcy LLM, wymieniaj backendy agentów, rozszerzaj API. Jesteś właścicielem całego stosu, od góry do dołu.",
      },
      {
        title: "Przejrzystość domyślnie",
        description:
          "Każda linia kodu jest audytowalna. Zobacz dokładnie, jak agenty podejmują decyzje, jak trafiają zadania i dokąd płyną dane.",
      },
      {
        title: "Napędzane przez społeczność",
        description:
          "Tworzone ze społecznością, nie tylko dla niej. Wnoś umiejętności, integracje i backendy agentów, z których skorzystają wszyscy.",
      },
    ],
  },

  faq: {
    label: "FAQ",
    headline: "Pytania i odpowiedzi.",
    items: [
      {
        question: "Które agenty kodujące obsługuje Multica?",
        answer:
          "Multica obsługuje obecnie Claude Code, Codex, OpenClaw i OpenCode od razu po instalacji. Demon automatycznie wykrywa CLI, które masz zainstalowane. Ponieważ to open source, możesz też dodawać własne backendy.",
      },
      {
        question: "Muszę hostować samodzielnie, czy jest wersja w chmurze?",
        answer:
          "Obie opcje. Możesz hostować Multicę na własnej infrastrukturze przez Docker Compose lub Kubernetes, albo korzystać z naszej wersji w chmurze. Twoje dane, Twój wybór.",
      },
      {
        question:
          "Czym to się różni od używania agentów kodujących bezpośrednio?",
        answer:
          "Agenty kodujące świetnie wykonują polecenia. Multica dodaje warstwę zarządzania: kolejki zadań, koordynację zespołu, ponowne użycie umiejętności, monitoring środowisk i jednolity widok tego, co robi każdy agent. Pomyśl o tym jak o project managerze dla Twoich agentów.",
      },
      {
        question: "Czy agenty mogą autonomicznie pracować nad długimi zadaniami?",
        answer:
          "Tak. Multica zarządza pełnym cyklem życia zadania \u2014 kolejkowanie, przejęcie, wykonanie, zakończenie lub niepowodzenie. Agenty proaktywnie zgłaszają blokery i strumieniują postęp na żywo. Możesz zaglądać wtedy, kiedy chcesz, albo zostawić je na noc.",
      },
      {
        question: "Czy mój kod jest bezpieczny? Gdzie wykonują się agenty?",
        answer:
          "Wykonanie agentów odbywa się na Twojej maszynie (lokalny demon) lub Twojej infrastrukturze chmurowej. Kod nigdy nie przechodzi przez serwery Multica. Platforma koordynuje tylko stan zadań i rozgłasza zdarzenia.",
      },
      {
        question: "Ile agentów mogę uruchomić?",
        answer:
          "Tyle, ile obsłuży Twój sprzęt. Każdy agent ma konfigurowalne limity współbieżności, a Ty możesz podłączyć wiele maszyn jako środowiska uruchomieniowe. W wersji open source nie ma sztucznych limitów.",
      },
    ],
  },

  footer: {
    tagline:
      "Zarządzanie projektami dla zespołów ludzi i agentów. Open source, self-hosted, zbudowane z myślą o przyszłości pracy.",
    cta: "Zaczynamy",
    groups: {
      product: {
        label: "Produkt",
        links: [
          { label: "Funkcje", href: "#features" },
          { label: "Jak to działa", href: "#how-it-works" },
          { label: "Historia zmian", href: "/changelog" },
          { label: "Desktop", href: "https://github.com/multica-ai/multica/releases/latest" },
        ],
      },
      resources: {
        label: "Zasoby",
        links: [
          { label: "Dokumentacja", href: githubUrl },
          { label: "API", href: githubUrl },
          { label: "X (Twitter)", href: "https://x.com/MulticaAI" },
        ],
      },
      company: {
        label: "Firma",
        links: [
          { label: "O projekcie", href: "/about" },
          { label: "Open Source", href: "#open-source" },
          { label: "GitHub", href: githubUrl },
        ],
      },
    },
    copyright: "\u00a9 {year} Multica. Wszelkie prawa zastrzeżone.",
  },

  about: {
    title: "O Multica",
    nameLine: {
      prefix: "Multica \u2014 ",
      mul: "Mul",
      tiplexed: "tiplexed ",
      i: "I",
      nformationAnd: "nformation and ",
      c: "C",
      omputing: "omputing ",
      a: "A",
      gent: "gent.",
    },
    paragraphs: [
      "Nazwa jest ukłonem w stronę Multicsa \u2014 pionierskiego systemu operacyjnego z lat 60., który wprowadził podział czasu (time-sharing), pozwalając wielu użytkownikom korzystać z jednej maszyny tak, jakby każdy miał ją tylko dla siebie. Unix narodził się jako świadome uproszczenie Multicsa: jeden użytkownik, jedno zadanie, jedna elegancka filozofia.",
      "Sądzimy, że ten sam punkt zwrotny dzieje się ponownie. Przez dekady zespoły programistyczne były jednowątkowe \u2014 jeden inżynier, jedno zadanie, jedno przełączenie kontekstu naraz. Agenty AI zmieniają to równanie. Multica przywraca podział czasu, ale w erze, w której \u201eużytkownikami\u201d multipleksującymi system są zarówno ludzie, jak i autonomiczne agenty.",
      "W Multica agenty są pełnoprawnymi członkami zespołu. Dostają przydziały zgłoszeń, raportują postępy, zgłaszają blokery i wysyłają kod \u2014 zupełnie jak ich ludzcy koledzy. Lista osób przypisanych, oś czasu aktywności, cykl życia zadania i infrastruktura uruchomieniowa są zbudowane wokół tej idei od pierwszego dnia.",
      "Podobnie jak Multics przed nią, stawiamy na multipleksowanie: mały zespół nie powinien czuć się mały. Z odpowiednim systemem dwóch inżynierów i flotylla agentów może poruszać się jak dwudziestu.",
      "Platforma jest w pełni otwartoźródłowa i można ją hostować samodzielnie. Twoje dane zostają na Twojej infrastrukturze. Przejrzyj każdą linię, rozszerz API, przynieś własnych dostawców LLM i wnieś wkład do społeczności.",
    ],
    cta: "Zobacz na GitHub",
  },

  changelog: {
    title: "Historia zmian",
    subtitle: "Nowe aktualizacje i ulepszenia Multica.",
    categories: {
      features: "Nowe funkcje",
      improvements: "Ulepszenia",
      fixes: "Poprawki błędów",
    },
    entries: [
      {
        version: "0.2.1",
        date: "2026-04-16",
        title: "Nowe środowiska agentów",
        changes: [],
        features: [
          "Obsługa GitHub Copilot CLI jako środowiska agenta",
          "Obsługa Cursor Agent CLI jako środowiska agenta",
          "Obsługa środowiska agenta Pi",
          "Refaktor URL przestrzeni roboczej \u2014 routing po slugu (`/{slug}/issues`) z przekierowaniem starych URL-i",
        ],
        fixes: [
          "Wątki Codex wznawiają się między zadaniami w tym samym zgłoszeniu",
          "Błędy tury Codex są teraz raportowane zamiast pustego wyjścia",
          "Użycie przestrzeni roboczej poprawnie grupowane po czasie zakończenia zadania",
          "Wiersze historii Autopilot w pełni klikalne",
          "Izolacja przestrzeni roboczej wymuszona na dodatkowych endpointach demona i GC (bezpieczeństwo)",
          "HTML-escape nazw przestrzeni roboczej i zapraszającego w e-mailach z zaproszeniami",
          "Instancje dev i produkcyjne aplikacji desktopowej mogą teraz współistnieć",
        ],
      },
      {
        version: "0.2.0",
        date: "2026-04-15",
        title: "Aplikacja desktopowa, Autopilot i zaproszenia",
        changes: [],
        features: [
          "Aplikacja desktopowa dla macOS \u2014 natywna aplikacja Electron z systemem kart, wbudowanym zarządzaniem demonem, trybem immersyjnym i auto-update",
          "Autopilot \u2014 zaplanowane i wyzwalane automatyzacje dla agentów AI",
          "Zaproszenia do przestrzeni roboczej z powiadomieniami e-mail i dedykowaną stroną akceptacji",
          "Własne argumenty CLI per agent do zaawansowanej konfiguracji środowiska",
          "Przeprojektowany czat ze śledzeniem nieprzeczytanych wiadomości i lepszym zarządzaniem sesjami",
          "Dialog tworzenia agenta pokazuje właściciela środowiska z filtrem Moje/Wszystkie",
        ],
        improvements: [
          "Font Inter z fallbackiem CJK i automatycznym odstępem CJK+Latin",
          "Menu użytkownika w pasku bocznym przeprojektowane jako popover pełnoszerokościowy",
          "Heartbeat ping/pong WebSocket do wykrywania martwych połączeń",
          "Członkowie mogą teraz tworzyć agentów i zarządzać własnymi umiejętnościami",
        ],
        fixes: [
          "Agent wyzwalany przy odpowiedzi w wątkach, w których już uczestniczył",
          "Self-hosting: lokalne uploady zachowywane w Dockerze, URL WebSocket auto-wykrywany dla dostępu w LAN",
          "Stare pozycje \u201enajnowsze zgłoszenia\u201d w cmd+k są teraz aktualne",
        ],
      },
      {
        version: "0.1.33",
        date: "2026-04-14",
        title: "Gemini CLI i zmienne środowiskowe agenta",
        changes: [],
        features: [
          "Google Gemini CLI jako nowe środowisko agenta z transmisją logów na żywo",
          "Własne zmienne środowiskowe dla agentów (tryb router/proxy) z dedykowaną zakładką ustawień",
          "Akcje \u201eUstaw zgłoszenie nadrzędne\u201d i \u201eDodaj pod-zgłoszenie\u201d w menu kontekstowym zgłoszenia",
          "Flaga CLI `--parent` dla aktualizacji zgłoszenia oraz `--content-stdin` do przekazywania treści komentarza",
          "Pod-zgłoszenia automatycznie dziedziczą projekt rodzica",
        ],
        improvements: [
          "Bańka edytora i podgląd linków przepisane na nowo dla niezawodności",
          "Ulepszenia P0+P1 backendu OpenClaw (wieloliniowy JSON, parsowanie przyrostowe)",
          "URL WebSocket w self-hostingu auto-wykrywany dla dostępu w LAN",
        ],
        fixes: [
          "Klucze uploadu S3 zawężone do przestrzeni roboczej (bezpieczeństwo)",
          "Walidacja członkostwa w przestrzeni roboczej dla subskrypcji i uploadów (bezpieczeństwo)",
          "Aktywne zadania automatycznie anulowane, gdy status zgłoszenia zmienia się na anulowany",
          "Zawieszanie zadania agenta, gdy proces wisi na stdout",
          "Prompt wyzwalający demona zawiera teraz rzeczywistą treść wyzwalającego komentarza",
          "Poprawki stabilności logowania i przekierowań do panelu",
        ],
      },
      {
        version: "0.1.28",
        date: "2026-04-13",
        title: "Wsparcie Windows, uwierzytelnianie i onboarding",
        changes: [],
        features: [
          "Wsparcie Windows \u2014 instalacja CLI, demon i buildy release",
          "Uwierzytelnianie przeniesione na HttpOnly Cookie z whitelistą WebSocket Origin",
          "Pełnoekranowy kreator onboardingu dla nowych przestrzeni roboczych",
          "Skalowalne okno czatu Master Agent z lepszą historią sesji",
          "Skanowanie logów zużycia tokenów dla środowisk OpenCode, OpenClaw i Hermes",
        ],
        fixes: [
          "Poprawka bezpieczeństwa pierwszej wiadomości uwierzytelniającej WebSocket",
          "Nagłówek odpowiedzi Content-Security-Policy",
          "Postęp pod-zgłoszeń obliczany z bazy zamiast paginowanej pamięci klienta",
        ],
      },
      {
        version: "0.1.27",
        date: "2026-04-12",
        title: "Instalacja jednym kliknięciem, self-hosting i stabilność",
        changes: [],
        features: [
          "Instalacja i setup jednym kliknięciem \u2014 `curl | bash` instaluje CLI, `--with-server` uruchamia pełen self-hosting, `multica setup` konfiguruje środowisko",
          "Self-hosted storage \u2014 lokalny fallback plikowy, gdy S3 jest niedostępne, oraz obsługa własnego endpointu S3 (MinIO)",
          "Edycja właściwości inline (priorytet, status, lead) na liście projektów",
        ],
        improvements: [
          "Stare zadania agenta automatycznie sprzątane; karta live agenta pokazuje się natychmiast bez oczekiwania na pierwszą wiadomość",
          "Załączniki do komentarzy przesyłane przez CLI są teraz widoczne w UI",
          "Przypięte elementy zawężone per użytkownik, poprawiona akcja przypinania w pasku bocznym",
        ],
        fixes: [
          "Sprawdzanie właściciela przestrzeni roboczej w trasach API demona i uploadach załączników",
          "Sanitizer Markdown zachowuje bloki kodu przed ucieczką encji HTML",
          "Next.js zaktualizowany do ^16.2.3 dla CVE-2026-23869",
          "Backend OpenClaw przepisany pod rzeczywisty interfejs CLI",
        ],
      },
      {
        version: "0.1.24",
        date: "2026-04-11",
        title: "Bezpieczeństwo i powiadomienia",
        changes: [],
        features: [
          "Subskrybenci zgłoszenia nadrzędnego powiadamiani o zmianach pod-zgłoszeń",
          "Filtr `--project` w CLI dla listy zgłoszeń",
        ],
        improvements: [
          "Meta-skill workflow deleguje do umiejętności agenta zamiast zaszytej logiki",
        ],
        fixes: [
          "Sprawdzanie właściciela przestrzeni roboczej we wszystkich trasach API demona",
          "Walidacja właściciela przestrzeni roboczej dla uploadów załączników i zapytań",
          "Wzmianki w odpowiedziach nie dziedziczą już wzmianek agentów z wątku nadrzędnego",
          "Brakujące ID przestrzeni roboczej przy tworzeniu komentarza agenta",
          "Niepowodzenia buildu Docker self-hosting (uprawnienia plików, CRLF, brakujące zależności)",
        ],
      },
      {
        version: "0.1.23",
        date: "2026-04-11",
        title: "Przypinanie, Cmd+K i projekty",
        changes: [],
        features: [
          "Przypinanie zgłoszeń i projektów do paska bocznego z drag-and-drop",
          "Paleta poleceń Cmd+K \u2014 ostatnie zgłoszenia, nawigacja i wyszukiwanie projektów",
          "Pasek boczny szczegółów projektu z panelem właściwości (zastępuje zakładkę przeglądu)",
          "Filtr projektów w zakładce Zgłoszenia",
          "Postęp ukończenia projektu na liście projektów",
          "Auto-wypełnianie projektu przy tworzeniu zgłoszenia skrótem \u201eC\u201d na stronie projektu",
          "Lista przypisanych posortowana po częstotliwości przypisań użytkownika",
        ],
        fixes: [
          "XSS w Markdown \u2014 sanityzacja HTML w komentarzach przez rehype-sanitize i bluemonday po stronie serwera",
          "Błędne liczniki zgłoszeń na tablicy kanban projektu",
          "Brakujące zależności tsconfig w buildzie Docker self-hosting",
          "Cmd+K wymagający podwójnego ESC do zamknięcia",
        ],
      },
      {
        version: "0.1.22",
        date: "2026-04-10",
        title: "Self-hosting, ACP i dokumentacja",
        changes: [],
        features: [
          "Pełen Docker Compose do self-hostingu jedną komendą",
          "Hermes Agent Provider przez protokół ACP",
          "Strona dokumentacji z Fumadocs (Getting Started, dokumentacja CLI, przewodnik po agentach)",
          "Responsywny pasek boczny i układ inboxa na mobile",
          "Wyświetlanie zużycia tokenów per zgłoszenie w panelu szczegółów",
          "Zmiana środowiska agenta z poziomu UI",
          "Skrót \u201eC\u201d do szybkiego tworzenia zgłoszenia",
          "Panel historii sesji czatu dla archiwalnych rozmów",
          "Sprawdzanie minimalnej wersji CLI w demonie dla Claude Code i Codex",
          "OpenClaw i OpenCode dodane do strony głównej",
          "`make dev` \u2014 setup developerski jedną komendą",
        ],
        improvements: [
          "Redesign paska bocznego \u2014 grupowanie Osobiste / Przestrzeń robocza, stopka z profilem, pole wyszukiwania \u2318K",
          "Ranking wyszukiwania \u2014 dopasowanie case-insensitive, szukanie po identyfikatorze (MUL-123), obsługa wielu słów",
          "Podświetlanie słów kluczowych w wynikach wyszukiwania",
          "Dzienny wykres zużycia tokenów z czytelniejszą osią Y i tooltipem per kategoria",
          "Obsługa wieloliniowego inputu Master Agent",
          "Ujednolicone komponenty picker (Status, Priorytet, Termin, Projekt, Przypisana osoba) we wszystkich widokach",
          "Izolacja storage zawężona do przestrzeni roboczej z auto-rehydracją przy przełączaniu",
          "Ostrzeżenia startowe o brakujących zmiennych env w deployach self-hosting",
        ],
        fixes: [
          "Usunięcie pod-zgłoszenia nie unieważniało cache dzieci rodzica",
          "Kompatybilność indeksu wyszukiwania z pg_bigm 1.2 na RDS",
          "Create Agent pokazujący \u201eNo runtime available\u201d przy istniejących środowiskach",
          "Zawieszanie się startu Claude stream-json",
          "Kilka agentów nie mogło kolejkować zadań na tym samym zgłoszeniu",
          "Wylogowanie nie czyściło przestrzeni roboczej i cache zapytań",
          "Obszar drag-drop zbyt mały w pustych edytorach",
          "Import umiejętności zaszyty na \u201emain\u201d jako domyślny branch",
          "Uwierzytelnianie PAT nie działało na endpoincie WebSocket",
          "Usuwanie środowiska blokowane, gdy wszyscy podłączeni agenci byli zarchiwizowani",
        ],
      },
      {
        version: "0.1.21",
        date: "2026-04-09",
        title: "Projekty, wyszukiwanie i monorepo",
        changes: [
          "Encja projektu z pełnym CRUD \u2014 twórz, edytuj i organizuj zgłoszenia wg projektu",
          "Wybór projektu w modalu tworzenia zgłoszenia i komendy CLI dla projektów",
          "Pełnotekstowe wyszukiwanie zgłoszeń z pg_bigm",
          "Wydzielenie monorepo \u2014 współdzielone pakiety core, UI i views (Turborepo)",
          "Pełnoekranowy widok transkryptu wykonania agenta",
          "Drag-and-drop upload plików z wyświetlaniem karty pliku w edytorze",
          "Sekcja załączników z siatką obrazów i kartami plików w zgłoszeniach",
          "Śledzenie właściciela środowiska, filtrowanie, awatar i powiadomienia point-to-point o aktualizacjach",
          "Wskaźnik postępu pod-zgłoszeń w wierszach widoku listy",
          "Paginacja ukończonych zgłoszeń w widoku listy",
          "Skanowanie logów sesji Codex do raportowania zużycia tokenów",
          "Poprawka cache repo demona dla przestarzałych początkowych snapshotów",
        ],
      },
      {
        version: "0.1.20",
        date: "2026-04-08",
        title: "Pod-zgłoszenia, TanStack Query i śledzenie zużycia",
        changes: [
          "Obsługa pod-zgłoszeń \u2014 twórz, przeglądaj i zarządzaj zgłoszeniami potomnymi w dowolnym zgłoszeniu",
          "Pełna migracja do TanStack Query dla stanu serwera (zgłoszenia, inbox, przestrzeń robocza, środowiska)",
          "Śledzenie zużycia tokenów per zadanie we wszystkich dostawcach agentów",
          "Wielu agentów może teraz pracować równolegle nad tym samym zgłoszeniem",
          "Widok tablicy: kolumna Ukończone pokazuje łączną liczbę z infinite scroll",
          "Komponent ReadonlyContent do lekkiego wyświetlania Markdown w komentarzach",
          "Optymistyczne aktualizacje UI dla reakcji i mutacji z rollbackiem",
          "Unieważnianie cache przez WebSocket zastępuje polling i refetch-on-focus",
          "Sesja przeglądarki utrzymuje się podczas logowania z CLI",
          "Demon ponownie używa istniejących worktree aktualizując do najnowszego remote",
          "Poprawione wolne przełączanie kart spowodowane dynamicznym root layout",
        ],
      },
      {
        version: "0.1.18",
        date: "2026-04-07",
        title: "OAuth, OpenClaw i ładowanie zgłoszeń",
        changes: [
          "Logowanie Google OAuth",
          "Obsługa środowiska OpenClaw do uruchamiania agentów na infrastrukturze OpenClaw",
          "Przeprojektowana karta live agenta \u2014 zawsze przyklejona z ręcznym toggle rozwiń/zwiń",
          "Ładowanie wszystkich otwartych zgłoszeń bez limitu paginacji; zamknięte paginują się przy scrollu",
          "Czas życia cookies JWT i CloudFront wydłużony z 72 godzin do 30 dni",
          "Zapamiętywanie ostatnio wybranej przestrzeni roboczej po ponownym logowaniu",
          "Demon zapewnia multica CLI w PATH w środowisku zadania agenta",
          "Szablon PR i przewodnik instalacji CLI dla setupu sterowanego agentem",
        ],
      },
      {
        version: "0.1.17",
        date: "2026-04-05",
        title: "Paginacja komentarzy i wygładzenie CLI",
        changes: [
          "Paginacja listy komentarzy w API i CLI",
          "Archiwizacja inboxa odrzuca teraz wszystkie pozycje dla tego samego zgłoszenia naraz",
          "Pomoc CLI przeprojektowana w stylu gh CLI z przykładami",
          "Załączniki używają UUIDv7 jako klucza S3 i są automatycznie linkowane przy tworzeniu zgłoszenia/komentarza",
          "Wzmianki @ przypisanych agentów na zgłoszeniach ukończonych lub anulowanych",
          "Dziedziczenie wzmianek @ w odpowiedziach pomijane, gdy odpowiedź wzmiankuje tylko członków",
          "Setup worktree zachowuje istniejące zmienne .env.worktree",
        ],
      },
      {
        version: "0.1.15",
        date: "2026-04-03",
        title: "Przebudowa edytora i cykl życia agenta",
        changes: [
          "Ujednolicony edytor Tiptap z jednym pipeline Markdown do edycji i wyświetlania",
          "Niezawodne wklejanie Markdown, odstępy w inline code i stylowanie linków",
          "Archiwizacja i przywracanie agenta \u2014 soft delete zastępuje hard delete",
          "Zarchiwizowani agenci ukryci z domyślnej listy agentów",
          "Stany skeleton loading, toasty błędów i dialogi potwierdzeń w całej aplikacji",
          "OpenCode dodany jako obsługiwany dostawca agenta",
          "Zadania agenta wyzwalane przez odpowiedź dziedziczą teraz wzmianki @ z głównego wątku",
          "Granularna obsługa zdarzeń real-time dla zgłoszeń i inboxa \u2014 koniec z pełnymi refetch",
          "Ujednolicony flow uploadu obrazów dla wklejania i przycisku w edytorze",
        ],
      },
      {
        version: "0.1.14",
        date: "2026-04-02",
        title: "Wzmianki i uprawnienia",
        changes: [
          "Wzmianki @ zgłoszeń w komentarzach z auto-ekspansją po stronie serwera",
          "Wzmianka @all powiadamia każdego członka przestrzeni roboczej",
          "Inbox auto-scrolluje do komentarza, o którym mówi powiadomienie",
          "Repozytoria wydzielone do osobnej zakładki ustawień",
          "Obsługa aktualizacji CLI ze strony środowiska w webie i bezpośrednie pobieranie dla instalacji spoza Homebrew",
          "Komendy CLI do przeglądania uruchomień wykonania zgłoszenia i wiadomości uruchomienia",
          "Model uprawnień agentów \u2014 właściciele i adminowie zarządzają agentami, członkowie umiejętnościami swoich agentów",
          "Szeregowa egzekucja per zgłoszenie zapobiega kolizjom współbieżnych zadań",
          "Upload plików obsługuje teraz wszystkie typy plików",
          "Redesign README z przewodnikiem quickstart",
        ],
      },
      {
        version: "0.1.13",
        date: "2026-04-01",
        title: "Moje zgłoszenia i i18n",
        changes: [
          "Strona Moje zgłoszenia z tablicą kanban, widokiem listy i zakładkami zakresu",
          "Lokalizacja strony głównej na chiński uproszczony",
          "Strony O projekcie i Historia zmian dla strony marketingowej",
          "Upload awatara agenta w ustawieniach",
          "Obsługa załączników dla komentarzy CLI i API zgłoszeń/komentarzy",
          "Ujednolicony rendering awatarów z ActorAvatar we wszystkich pickerach",
          "Optymalizacja SEO i usprawnienia flow uwierzytelniania dla stron głównych",
          "CLI domyślnie używa produkcyjnych URL-i API",
          "Licencja zmieniona na Apache 2.0",
        ],
      },
      {
        version: "0.1.3",
        date: "2026-03-31",
        title: "Inteligencja agentów",
        changes: [
          "Wyzwalanie agentów przez wzmiankę @ w komentarzach",
          "Strumień wyjścia agenta na żywo na stronie szczegółów zgłoszenia",
          "Edytor tekstu sformatowanego \u2014 wzmianki, wklejanie linków, reakcje emoji, zwijane wątki",
          "Upload plików z podpisanymi URL-ami S3 + CloudFront i śledzeniem załączników",
          "Checkout repo sterowany agentem z cache klonu bare dla izolacji zadań",
          "Operacje masowe dla widoku listy zgłoszeń",
          "Wzmocnienie uwierzytelniania i bezpieczeństwa demona",
        ],
      },
      {
        version: "0.1.2",
        date: "2026-03-28",
        title: "Współpraca",
        changes: [
          "Logowanie z weryfikacją e-mail i uwierzytelnianie CLI w przeglądarce",
          "Wielo-workspace-owy demon z hot-reload",
          "Panel środowisk z wykresami użycia i mapami aktywności",
          "Model powiadomień oparty na subskrybentach zastępuje zaszyte wyzwalacze",
          "Ujednolicona oś czasu aktywności z wątkowymi odpowiedziami do komentarzy",
          "Redesign tablicy kanban z sortowaniem drag, filtrami i ustawieniami wyświetlania",
          "Czytelne dla człowieka identyfikatory zgłoszeń (np. JIA-1)",
          "Import umiejętności z ClawHub i Skills.sh",
        ],
      },
      {
        version: "0.1.1",
        date: "2026-03-25",
        title: "Rdzeń platformy",
        changes: [
          "Przełączanie i tworzenie wielu przestrzeni roboczych",
          "UI zarządzania agentami z umiejętnościami",
          "Ujednolicony SDK agenta wspierający backendy Claude Code i Codex",
          "CRUD komentarzy z aktualizacjami real-time przez WebSocket",
          "Warstwa serwisu zadań i protokół REST demona",
          "Szyna zdarzeń z izolacją WebSocket zawężoną do przestrzeni roboczej",
          "Powiadomienia w inboxie z licznikiem nieprzeczytanych i archiwizacją",
          "CLI z subkomendami cobra do zarządzania przestrzenią roboczą i zgłoszeniami",
        ],
      },
      {
        version: "0.1.0",
        date: "2026-03-22",
        title: "Fundament",
        changes: [
          "Backend Go z REST API, uwierzytelnianiem JWT i WebSocket real-time",
          "Frontend Next.js z UI inspirowanym Linear",
          "Zgłoszenia z widokami tablicy i listy oraz drag-and-drop kanban",
          "Strony Agenci, Inbox i Ustawienia",
          "Setup jednym kliknięciem, CLI migracji i narzędzie seedowania",
          "Kompletny zestaw testów \u2014 unit/integration w Go, Vitest, E2E Playwright",
        ],
      },
    ],
  },
};
