import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";

export default function Header() {
  const { lang, theme, toggleLang, toggleTheme } = useContext(SiteContext);

  return (
    <header className="w-full bg-[#F4F4F4] dark:bg-[#1A1A1A]">
      <section className="max-w-5xl mx-auto px-6 pt-10 pb-6 flex justify-end items-center gap-4 text-xs font-bold tracking-widest relative overflow-visible select-none z-50">
        {/* ── SÜS: Üst Ortadaki Yarım Gri Daire (Mobilde sola yaklaştı) ── */}
        <div className="absolute top-0 left-[0%] md:left-[20%] -translate-x-1/2 w-28 h-14 bg-[#D9D9D9] dark:bg-zinc-800 rounded-b-full pointer-events-none -z-10"></div>

        {/* Tema Değiştirme Alanı */}
        <button
          onClick={toggleTheme}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Butonun Görünümü */}
          {/* Butonun Dış Gövdesi */}
          <div
            className={`w-11 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out flex items-center ${
              theme === "light" ? "bg-[#E92577]" : "bg-zinc-700"
            }`}
          >
            {/* Butonun İçi */}
            <div
              className={`w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                theme === "light"
                  ? "translate-x-5 bg-[#FFE86E]"
                  : "translate-x-0 bg-white"
              }`}
            ></div>
          </div>

          {/* Yazı */}
          <span className="text-[#777777] dark:text-[#B7B7B7] uppercase tracking-wider font-extrabold group-hover:opacity-80 transition-opacity">
            {lang === "tr"
              ? theme === "light"
                ? "AYDINLIK MOD"
                : "KARANLIK MOD"
              : theme === "light"
                ? "Dark Mode"
                : "Light Mode"}
          </span>
        </button>

        <span className="text-slate-300 dark:text-zinc-700">|</span>

        {/* Dil Değiştirme Butonu */}
        <button
          onClick={toggleLang}
          className="text-gray-600 dark:text-gray-300 uppercase tracking-wider font-bold hover:opacity-80 transition-opacity cursor-pointer"
        >
          {lang === "tr" ? (
            <>
              Switch to <span className="text-[#EA2678]">English</span>
            </>
          ) : (
            <>
              <span className="text-[#EA2678]">Türkçe</span>'ye Geç
            </>
          )}
        </button>
      </section>
    </header>
  );
}
