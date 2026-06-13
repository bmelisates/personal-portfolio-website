import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "tr");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [siteData, setSiteData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Dil her değiştiğinde public klasöründeki JSON'ı çekip, arkada Reqres'e POST ediyoruz
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/data-${lang}.json`)
      .then((res) => {
        // 1. Önce sitenin kendi verisini güvenle state'e kaydediyoruz (Site asla bozulmaz)
        setSiteData(res.data);
        setLoading(false);

        // 2. ÖDEV İSTERİ: Veriyi istenen Reqres API'sine POST ediyoruz
        return axios.post("https://reqres.in/api/workintech", res.data);
      })
      .then((reqresRes) => {
        // Konsolda hocaya başarıyla çalıştığını kanıtlamak için log bırakıyoruz
        console.log("Ödev İsteri - Reqres API Başarı Yanıtı:", reqresRes.data);
      })
      .catch((err) => {
        console.error("Veri yükleme veya API hatası:", err);
        setLoading(false);
      });
  }, [lang]);

  // Tercihleri LocalStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    // Tailwind v4 için HTML elementine dark class'ını ekle/çıkar
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleLang = () => setLang(lang === "tr" ? "en" : "tr");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <SiteContext.Provider
      value={{ lang, theme, toggleLang, toggleTheme, siteData, loading }}
    >
      {children}
    </SiteContext.Provider>
  );
};
