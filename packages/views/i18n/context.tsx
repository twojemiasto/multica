"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { en } from "./en";
import { pl } from "./pl";
import type { AppDict, Locale } from "./types";

const dictionaries: Record<Locale, AppDict> = { en, pl };

export const LOCALE_STORAGE_KEY = "multica-locale";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

type LocaleContextValue = {
  locale: Locale;
  t: AppDict;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function persistLocale(locale: Locale) {
  if (typeof document !== "undefined") {
    document.cookie = `${LOCALE_STORAGE_KEY}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
  }
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // localStorage unavailable (private mode) — cookie is enough
    }
  }
}

function readClientLocale(): Locale | null {
  if (typeof document !== "undefined") {
    const match = document.cookie.match(/(?:^|;\s*)multica-locale=(\w+)/);
    const fromCookie = match?.[1];
    if (fromCookie === "en" || fromCookie === "pl") return fromCookie;
  }
  if (typeof window !== "undefined") {
    try {
      const fromStorage = window.localStorage.getItem(LOCALE_STORAGE_KEY);
      if (fromStorage === "en" || fromStorage === "pl") return fromStorage;
    } catch {
      // ignore
    }
  }
  return null;
}

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale ?? "en");

  useEffect(() => {
    if (initialLocale) return;
    const detected = readClientLocale();
    if (detected && detected !== locale) setLocaleState(detected);
  }, [initialLocale, locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    persistLocale(next);
    if (typeof document !== "undefined") {
      document.documentElement.lang = next;
    }
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, t: dictionaries[locale], setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function useT() {
  return useLocale().t;
}
