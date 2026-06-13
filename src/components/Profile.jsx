import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";

export default function Profile() {
  const { siteData, loading } = useContext(SiteContext);

  if (loading || !siteData) return null;

  const { title, infoTitle, aboutTitle, aboutText, details } = siteData.profile;

  return (
    <section className="w-full bg-[#F4F4F4] dark:bg-[#1A1A1A]">
      <div id="profile" className="py-16 px-6 max-w-5xl mx-auto text-left">
        {/* Ana Bölüm Başlığı */}
        <h2 className="text-4xl font-medium mb-10 md:mb-16 text-[#1F2937] dark:text-white tracking-wide text-center">
          {title}
        </h2>

        {/* Yan Yana İki Ana Sütun */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-12 items-start mt-0 md:mt-0">
          {/* Sol Sütun: Havada Duran Şık Bilgi Kartı */}
          <div className="flex-1 w-full bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-zinc-800">
            <h3 className="font-playfair text-2xl text-[#EA2678] mb-6">
              {infoTitle}
            </h3>
            <div className="space-y-4">
              {Object.entries(details).map(([key, value]) => (
                <div key={key} className="flex text-sm">
                  {/* Sol Başlık Kısmı */}
                  <span className="w-1/3 font-bold text-[#1F2937] dark:text-white">
                    {key}
                  </span>
                  {/* Sağ Değer Kısmı */}
                  <span className="w-2/3 text-slate-600 dark:text-zinc-300">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Sağ Sütun: About Me Başlığı ve Açıklama Paragrafı */}
          <div className="flex-1 md:pt-2 px-6 md:px-0">
            <h3 className="font-playfair relative text-2xl text-[#1F2937] dark:text-white mb-6">
              {/* Hightlight Kutusu */}
              <span
                className="absolute bg-[#82BBFF] dark:bg-[#3B82F6] dark:opacity-30 rounded-[4px] z-0"
                style={{
                  width: "6rem",
                  height: "1rem",
                  bottom: "0rem",
                  left: "-5px",
                }}
              ></span>
              <span className="relative z-10">{aboutTitle}</span>
            </h3>
            <p className="text-base leading-relaxed text-slate-600 dark:text-zinc-300">
              {aboutText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
