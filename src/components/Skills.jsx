import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";
import jsLogo from "../assets/logos/javascript.jpg";
import reactLogo from "../assets/logos/react.png";
import reduxLogo from "../assets/logos/redux.png";
import figmaLogo from "../assets/logos/figma.jpg";
import nodejsLogo from "../assets/logos/nodejs.jpg";
import vscodeLogo from "../assets/logos/vscode.png";

export default function Skills() {
  const { siteData, loading } = useContext(SiteContext);
  const iconMap = {
    javascript: jsLogo,
    react: reactLogo,
    redux: reduxLogo,
    figma: figmaLogo,
    nodejs: nodejsLogo,
    vscode: vscodeLogo,
  };
  if (loading || !siteData) return null;
  const { title, list } = siteData.skills;

  return (
    <section className=" relative w-full bg-white dark:bg-[#1A1A1A] overflow-hidden">
      {/* GRİ YARIM ELİPS- sol */}
      <div
        className="absolute bg-[#525252] hidden xl:block"
        style={{
          width: "150px",
          height: "59px",
          bottom: "15%",
          left: "0",
          borderTopRightRadius: "29.5px",
          borderBottomRightRadius: "29.5px",
        }}
      ></div>

      <div
        id="skills"
        className="py-20 px-6 max-w-5xl mx-auto text-center md:text-left"
      >
        {/* Bölüm Başlığı */}
        <h2 className="text-4xl font-medium mb-16 text-[#1F2937] dark:text-white tracking-wide text-center">
          {title}
        </h2>

        {/* Görseldeki gibi yan yana dizilen 6'lı ızgara (Grid) yapısı */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
          {list.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              {/* İkon Kutusu */}
              <div
                className="w-20 h-20 bg-slate-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center 
                shadow-sm transition-all duration-300 
                hover:shadow-2xl hover:scale-105 hover:bg-slate-200 dark:hover:bg-zinc-700"
              >
                <img
                  src={iconMap[skill.iconName]}
                  alt={skill.name}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>

              {/* Yetenek İsmi */}
              <span className="text-xs font-bold tracking-wider text-[#777777] dark:text-zinc-400 uppercase">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
