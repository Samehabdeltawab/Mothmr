import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { content, type Content, type Lang } from "./content"

type I18n = {
  lang: Lang
  dir: "rtl" | "ltr"
  t: Content
  toggle: () => void
}

const I18nContext = createContext<I18n | null>(null)

// Priority: ?lang=en|ar in the URL -> Arabic (default, saved choice is ignored)
function readInitialLang(): Lang {
  try {
    const q = new URLSearchParams(window.location.search).get("lang")
    if (q === "en" || q === "ar") return q
    return "ar"
  } catch {
    return "ar"
  }
}

// Keep the address bar shareable (?lang=en) without adding history entries
function syncUrl(lang: Lang) {
  try {
    const url = new URL(window.location.href)
    url.searchParams.set("lang", lang)
    window.history.replaceState(null, "", url)
  } catch {
    /* ignore */
  }
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readInitialLang)
  const t = content[lang]
  const dir: "rtl" | "ltr" = lang === "ar" ? "rtl" : "ltr"

  // Layout effect: apply lang/dir before the first paint (no RTL flash on ?lang=en)
  useLayoutEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = dir
    document.title = t.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.meta.description)
  }, [lang, dir, t])

  const toggle = useCallback(() => {
    const next: Lang = lang === "ar" ? "en" : "ar"
    setLang(next)
    syncUrl(next)
  }, [lang])

  const value = useMemo(() => ({ lang, dir, t, toggle }), [lang, dir, t, toggle])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18n {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>")
  return ctx
}
