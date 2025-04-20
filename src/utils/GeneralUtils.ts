import {LocalStorageService} from "@dota/service/local-storage.service.ts";

export function toggleDark() {
  const value = document.documentElement.classList.toggle("dark");
  document.documentElement.classList.toggle("bg-slate-950");
  return value;
}

export class GeneralUtils {

  static toggleDarkMode() {
    const isDarkMode = document.documentElement.classList.toggle('dark');
    document.documentElement.classList.toggle('bg-slate-950', isDarkMode);
    LocalStorageService.add('theme', isDarkMode ? 'dark' : 'light');
  }

  static getBrowserTheme() {
    const theme = LocalStorageService.get('theme');
    if (theme) {
      return theme;
    }

    // Otherwise, check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    // Default to light if no preference is found
    return 'light';
  }

  static setBrowserTheme(theme: string) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.add('bg-slate-950');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.remove('bg-slate-950');
    }
  }

  static scrollToTop(behavior: 'smooth' | 'instant' = 'smooth') {
    window.scrollTo({ top: 0, behavior: behavior });
  }

}