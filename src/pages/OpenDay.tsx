import { useEffect, useRef, useState } from "react";

const slides = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
];

export default function OpenDay() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const containerRef = useRef<HTMLDivElement>(null);

  const next = () => setCurrent((c) => Math.min(c + 1, total - 1));
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", " "].includes(e.key)) { e.preventDefault(); next(); }
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const onClick = (e: React.MouseEvent) => {
    if (e.clientX > window.innerWidth / 2) next(); else prev();
  };

  const progress = ((current + 1) / total) * 100;

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      style={{
        width: "100vw", height: "100vh", overflow: "hidden", position: "relative",
        fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        cursor: "default", userSelect: "none",
      }}
    >
      {/* Progress bar */}
      <div style={{
        position: "fixed", top: 0, left: 0, height: 7, width: `${progress}%`,
        background: "#E63329", zIndex: 200, transition: "width 0.3s ease",
      }} />

      {/* Nav hint */}
      <div style={{
        position: "fixed", bottom: "1.5rem", right: "2rem", fontSize: "0.75rem",
        fontWeight: 700, textTransform: "uppercase", zIndex: 200, color: "#aaa",
        letterSpacing: "0.08em", pointerEvents: "none",
      }}>
        {current + 1} / {total} · ←→ / Space
      </div>

      {/* Slides */}
      {slides.map((s, i) => (
        <SlideWrapper key={s.id} active={i === current}>
          {i === 0 && <Slide01 />}
          {i === 1 && <Slide02 />}
          {i === 2 && <Slide03 />}
          {i === 3 && <Slide04 />}
          {i === 4 && <Slide05 />}
          {i === 5 && <Slide06 />}
          {i === 6 && <Slide07 />}
          {i === 7 && <Slide08 />}
          {i === 8 && <Slide09 />}
          {i === 9 && <Slide10 />}
          {i === 10 && <Slide11 />}
          {i === 11 && <Slide12 />}
        </SlideWrapper>
      ))}
    </div>
  );
}

/* ─── Slide Wrapper ─────────────────────────────────────── */
function SlideWrapper({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div style={{
      position: "absolute", inset: 0,
      opacity: active ? 1 : 0,
      pointerEvents: active ? "auto" : "none",
      transition: "opacity 0.55s cubic-bezier(0.4,0,0.2,1)",
      zIndex: active ? 10 : 0,
    }}>
      {children}
    </div>
  );
}

/* ─── Typography helpers ─────────────────────────────────── */
const R = "#E63329";
const BG = "#F4F4F4";
const INK = "#111111";

function Grid({ children, bg = BG, style = {} }: { children: React.ReactNode; bg?: string; style?: React.CSSProperties }) {
  return (
    <div style={{
      width: "100%", height: "100%", backgroundColor: bg,
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: "repeat(12, 1fr)",
      gap: "1.2rem", padding: "2.5rem",
      boxSizing: "border-box",
      ...style,
    }}>
      {children}
    </div>
  );
}

function Tag({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <span style={{
      display: "inline-block", padding: "0.35rem 0.85rem",
      border: `2px solid ${dark ? BG : INK}`,
      fontWeight: 700, textTransform: "uppercase",
      fontSize: "clamp(0.6rem, 0.9vw, 1rem)",
      marginRight: "0.5rem", marginBottom: "0.5rem",
      color: dark ? BG : INK,
      letterSpacing: "0.04em",
    }}>
      {children}
    </span>
  );
}

function Img({ src, alt, style = {} }: { src: string; alt: string; style?: React.CSSProperties }) {
  return (
    <div style={{ overflow: "hidden", ...style }}>
      <img src={src} alt={alt} style={{
        width: "100%", height: "100%", objectFit: "cover",
        display: "block",
      }} />
    </div>
  );
}

/* Phone mockup — put portrait screenshots inside */
function PhoneMockup({ src, alt, style = {} }: { src: string; alt: string; style?: React.CSSProperties }) {
  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "flex-start",
      height: "100%", overflow: "visible", ...style,
    }}>
      <div style={{
        position: "relative",
        height: "clamp(460px, 108vh, 2400px)",
        width: "auto",
        maxWidth: "100%",
        aspectRatio: "9 / 19.5",
        background: "#1c1c1e",
        borderRadius: "clamp(1.5rem, 3vh, 3rem)",
        boxShadow: "0 0 0 3px #3a3a3c, 0 40px 80px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.08)",
        overflow: "hidden",
      }}>
        {/* Dynamic Island */}
        <div style={{
          position: "absolute", top: "0.85rem", left: "50%",
          transform: "translateX(-50%)",
          width: "28%", height: "1.1rem",
          background: "#1c1c1e",
          borderRadius: "2rem",
          zIndex: 20,
        }} />
        {/* Screen content */}
        <img
          src={src} alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        {/* Bottom home bar */}
        <div style={{
          position: "absolute", bottom: "0.6rem", left: "50%",
          transform: "translateX(-50%)",
          width: "33%", height: "0.28rem",
          background: "rgba(255,255,255,0.4)",
          borderRadius: "2rem",
          zIndex: 20,
        }} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 01 — ТИТУЛЬНЫЙ
   Dark bg, hero photo, huge title, names
═══════════════════════════════════════════════════════════ */
function Slide01() {
  return (
    <Grid bg={INK}>
      {/* Badge top-left */}
      <div style={{
        gridColumn: "1 / 5", gridRow: "1 / 2",
        color: "#666", fontWeight: 700, fontSize: "clamp(0.6rem, 1.1vw, 1rem)",
        textTransform: "uppercase", letterSpacing: "0.1em",
        alignSelf: "start",
      }}>
        День открытых дверей<br />АГУ · 2026
      </div>

      {/* Hero image */}
      <Img
        src="https://www.adygnet.ru/upload/iblock/7cb/ym403kipiznp7umzgtti5iscr8nghn6a/%D0%94%D0%9E%D0%94_%D0%90%D0%93%D0%A3%20%282%29.jpg"
        alt="АГУ День открытых дверей"
        style={{
          gridColumn: "6 / 13", gridRow: "1 / 13",
          clipPath: "polygon(15% 0%, 100% 0, 100% 100%, 0% 100%)",
          filter: "grayscale(100%)",
        }}
      />

      {/* Giant headline */}
      <div style={{
        gridColumn: "1 / 9", gridRow: "7 / 12",
        zIndex: 2, alignSelf: "end",
      }}>
        <div style={{
          fontSize: "clamp(3.5rem, 10vw, 11rem)",
          fontWeight: 900, letterSpacing: "-0.04em",
          lineHeight: 0.9, textTransform: "uppercase",
          color: BG, mixBlendMode: "normal",
        }}>
          Создаём<br /><span style={{ color: R }}>будущее</span>
        </div>
        <div style={{
          marginTop: "1.2rem", color: "#aaa",
          fontSize: "clamp(0.9rem, 1.8vw, 1.6rem)", fontWeight: 700,
          letterSpacing: "0.02em",
        }}>
          Артемий Морозов &amp; Салим Сокуров
        </div>
      </div>

      {/* Year */}
      <div style={{
        gridColumn: "1 / 3", gridRow: "11 / 13",
        color: "#444", fontWeight: 900,
        fontSize: "clamp(1.5rem, 3vw, 3rem)",
        alignSelf: "end", letterSpacing: "-0.03em",
      }}>
        2026
      </div>
    </Grid>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 02 — ЧЕСТНОЕ НАЧАЛО
   White, huge provocation + image on right
═══════════════════════════════════════════════════════════ */
function Slide02() {
  return (
    <Grid bg={BG}>
      {/* Label "Year ago" */}
      <div style={{
        gridColumn: "1 / 8", gridRow: "1 / 4",
        fontSize: "clamp(0.75rem, 1.3vw, 1.2rem)",
        fontWeight: 700, textTransform: "uppercase",
        letterSpacing: "0.1em", color: "#999",
        alignSelf: "end",
      }}>
        Год назад
      </div>

      {/* Main Headline */}
      <div style={{
        gridColumn: "1 / 8", gridRow: "3 / 11",
        fontSize: "clamp(2.8rem, 6vw, 7rem)", // Slightly smaller to fit width
        fontWeight: 900, letterSpacing: "-0.035em",
        lineHeight: 1, color: INK, alignSelf: "center",
      }}>
        Мы не умели<br />программировать.<br />
        <span style={{ color: R }}>Вообще.</span>
      </div>

      {/* Detail Text */}
      <div style={{
        gridColumn: "1 / 7", gridRow: "10 / 12",
        fontSize: "clamp(1rem, 1.8vw, 1.8rem)",
        fontWeight: 400, lineHeight: 1.35,
        color: "#555", alignSelf: "start",
      }}>
        Единственное, что мы умели написать — это «Hello, World».<br />
        И то гуглили, как это делается.
      </div>

      {/* Footer Info - Moved to left/bottom to clear image area */}
      <div style={{
        gridColumn: "1 / 7", gridRow: "12 / 13",
        borderTop: `4px solid ${R}`, paddingTop: "0.5rem",
        fontSize: "clamp(0.6rem, 0.9vw, 1rem)",
        fontWeight: 700, textTransform: "uppercase",
        color: "#999", letterSpacing: "0.08em",
        alignSelf: "start",
      }}>
        АГУ · Прикладная<br />математика · 2 курс
      </div>

      {/* Right Image: Coding background */}
      <div style={{
        gridColumn: "8 / 13", gridRow: "1 / 13",
        overflow: "hidden"
      }}>
        <img 
          src="/images/university_teamwork_2.webp" 
          alt="Teamwork"
          style={{
            width: "100%", height: "100%", 
            objectFit: "cover",
            display: "block",
          }} 
        />
      </div>
    </Grid>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 03 — ТАЙМЛАЙН
   Dark bg, horizontal timeline
═══════════════════════════════════════════════════════════ */
function Slide03() {
  const steps = [
    { num: "01", label: "Первые учебные проекты", sub: "Проектное мышление с первых недель" },
    { num: "02", label: "Первый Telegram-бот", sub: "Криво, но работает — и это кайф" },
    { num: "03", label: "Первые сайты", sub: "React, TypeScript, всё усложняется" },
    { num: "04", label: "Серьёзные приложения", sub: "2 мобильных приложения" },
  ];

  return (
    <Grid bg={INK}>
      <div style={{
        gridColumn: "1 / 13", gridRow: "1 / 3",
        color: "#555", fontWeight: 700,
        fontSize: "clamp(0.7rem, 1.2vw, 1.1rem)",
        textTransform: "uppercase", letterSpacing: "0.1em",
        alignSelf: "end",
      }}>
        История роста · 1 год
      </div>

      <div style={{
        gridColumn: "1 / 13", gridRow: "3 / 5",
        fontSize: "clamp(2rem, 5vw, 6rem)",
        fontWeight: 900, color: BG,
        letterSpacing: "-0.035em", lineHeight: 0.9,
      }}>
        КАК ЭТО<br /><span style={{ color: R }}>НАЧАЛОСЬ</span>
      </div>

      {/* Timeline bar */}
      <div style={{
        gridColumn: "1 / 13", gridRow: "6 / 7",
        alignSelf: "center", position: "relative",
        display: "flex", alignItems: "center",
      }}>
        <div style={{ height: 2, background: "#333", width: "100%" }} />
      </div>

      {/* Steps */}
      {steps.map((step, i) => (
        <div key={i} style={{
          gridColumn: `${1 + i * 3} / ${i === 3 ? 13 : 4 + i * 3}`,
          gridRow: "5 / 13",
          display: "flex", flexDirection: "column",
          borderTop: `3px solid ${i === 3 ? R : "#444"}`,
          paddingTop: "1.2rem", gap: "0.75rem",
        }}>
          <div style={{
            fontSize: "clamp(2.5rem, 6vw, 7rem)",
            fontWeight: 900, color: i === 3 ? R : "#333",
            lineHeight: 1, letterSpacing: "-0.04em",
          }}>
            {step.num}
          </div>
          <div style={{
            fontSize: "clamp(1rem, 1.8vw, 1.7rem)",
            fontWeight: 700, color: BG,
            textTransform: "uppercase", letterSpacing: "-0.01em",
            lineHeight: 1.2,
          }}>
            {step.label}
          </div>
          <div style={{
            fontSize: "clamp(0.85rem, 1.3vw, 1.2rem)",
            color: "#666", lineHeight: 1.3,
          }}>
            {step.sub}
          </div>
        </div>
      ))}
    </Grid>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 04 — OBRAZZ INTRO
   White, bold name, big statement
═══════════════════════════════════════════════════════════ */
function Slide04() {
  return (
    <Grid bg={BG}>
      {/* Left text */}
      <div style={{
        gridColumn: "1 / 7", gridRow: "1 / 13",
        display: "flex", flexDirection: "column",
        justifyContent: "center", gap: "2rem",
      }}>
        <div style={{
          fontSize: "clamp(0.7rem, 1.2vw, 1.1rem)",
          fontWeight: 700, textTransform: "uppercase",
          letterSpacing: "0.12em", color: "#999",
        }}>
          Проект 01
        </div>
        <div style={{
          fontSize: "clamp(3.5rem, 10vw, 11rem)",
          fontWeight: 900, letterSpacing: "-0.05em",
          lineHeight: 0.85, color: INK,
        }}>
          OBRAZZ
        </div>
        <div style={{
          fontSize: "clamp(1.2rem, 2.8vw, 2.5rem)",
          fontWeight: 700, color: R,
          textTransform: "uppercase", letterSpacing: "-0.01em",
          lineHeight: 1.2,
        }}>
          AI-гардероб<br />в твоём телефоне
        </div>
        <div style={{
          fontSize: "clamp(1.1rem, 2.2vw, 2rem)",
          color: "#555", lineHeight: 1.4, maxWidth: "32ch",
        }}>
          Персональный стилист, который всегда рядом. Мы загрузили свои вещи — получили готовые образы.
        </div>
        <div>
          <Tag>React Native</Tag>
          <Tag>Expo</Tag>
          <Tag>Supabase</Tag>
        </div>
      </div>

      {/* Right — phone mockup */}
      <PhoneMockup
        src="/images/placeholders/2026-02-09%2018.37.47.jpg"
        alt="Obrazz App"
        style={{ gridColumn: "7 / 13", gridRow: "1 / 13" }}
      />
    </Grid>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 05 — OBRAZZ FEATURES
   Red bg, 4 features
═══════════════════════════════════════════════════════════ */
function Slide05() {
  const features = [
    { num: "01", title: "Цифровой гардероб", desc: "Фото из шкафа или ссылка из интернета. Авто-удаление фона." },
    { num: "02", title: "Собрать образ вручную", desc: "Перетаскивай вещи и создавай луки в удобном редакторе." },
    { num: "03", title: "AI-подборка образа", desc: "Попроси ИИ — он составит модный образ из твоего гардероба." },
    { num: "04", title: "Примерь на своё фото", desc: "Загрузи своё фото и \"надень\" любую вещь без примерочной." },
  ];

  return (
    <Grid bg={R}>
      <div style={{
        gridColumn: "1 / 13", gridRow: "1 / 2",
        color: "rgba(255,255,255,0.5)",
        fontWeight: 700, fontSize: "clamp(0.7rem, 1.1vw, 1rem)",
        textTransform: "uppercase", letterSpacing: "0.1em",
        alignSelf: "end",
      }}>
        OBRAZZ · Функции
      </div>

      <div style={{
        gridColumn: "1 / 7", gridRow: "2 / 5",
        fontSize: "clamp(2rem, 5vw, 5rem)",
        fontWeight: 900, color: BG,
        letterSpacing: "-0.04em", lineHeight: 0.9,
        alignSelf: "center",
      }}>
        ЧТО<br />УМЕЕТ
      </div>

      {features.map((f, i) => (
        <div key={i} style={{
          gridColumn: `${1 + (i % 2) * 6} / ${i % 2 === 0 ? 7 : 13}`,
          gridRow: `${5 + Math.floor(i / 2) * 4} / ${9 + Math.floor(i / 2) * 4}`,
          borderTop: "2px solid rgba(255,255,255,0.3)",
          paddingTop: "1rem",
          display: "flex", flexDirection: "column", gap: "0.6rem",
        }}>
          <div style={{
            fontSize: "clamp(1.5rem, 3vw, 3rem)",
            fontWeight: 900, color: "rgba(255,255,255,0.25)",
            letterSpacing: "-0.04em",
          }}>
            {f.num}
          </div>
          <div style={{
            fontSize: "clamp(1.1rem, 2.2vw, 2rem)",
            fontWeight: 900, color: BG,
            textTransform: "uppercase", letterSpacing: "-0.01em",
            lineHeight: 1.1,
          }}>
            {f.title}
          </div>
          <div style={{
            fontSize: "clamp(0.9rem, 1.4vw, 1.3rem)",
            color: "rgba(255,255,255,0.8)", lineHeight: 1.35,
          }}>
            {f.desc}
          </div>
        </div>
      ))}
    </Grid>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 06 — OBRAZZ SCREENS
   White, 2 phone screens
═══════════════════════════════════════════════════════════ */
function Slide06() {
  return (
    <Grid bg={BG}>
      <div style={{
        gridColumn: "1 / 6", gridRow: "1 / 13",
        display: "flex", flexDirection: "column",
        justifyContent: "center", gap: "2rem",
      }}>
        <div style={{
          fontSize: "clamp(1.5rem, 3.5vw, 3.5rem)",
          fontWeight: 900, color: INK,
          letterSpacing: "-0.04em", lineHeight: 1,
          textTransform: "uppercase",
        }}>
          Скоро в открытом<br />доступе
        </div>
        <div style={{
          width: "8rem", height: 4, background: R,
        }} />
        <div style={{
          fontSize: "clamp(1rem, 1.8vw, 1.6rem)",
          color: "#555", lineHeight: 1.45,
        }}>
          Реакция на тест-запуск превзошла ожидания. Первая волна откроется уже совсем скоро.
        </div>
        <div style={{
          fontSize: "clamp(1.2rem, 2.2vw, 2rem)",
          fontWeight: 900, color: R, textTransform: "uppercase",
          letterSpacing: "0.02em",
        }}>
          Запомни: OBRAZZ
        </div>
      </div>

      <PhoneMockup
        src="/images/placeholders/2026-02-09%2018.37.51.jpg"
        alt="Obrazz Screen 2"
        style={{ gridColumn: "5 / 9", gridRow: "1 / 13" }}
      />
      <PhoneMockup
        src="/images/placeholders/2026-02-09%2018.37.55.jpg"
        alt="Obrazz Screen 3"
        style={{ gridColumn: "9 / 13", gridRow: "2 / 12" }}
      />
    </Grid>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 07 — ADYGGIS INTRO
   Dark bg, bold name
═══════════════════════════════════════════════════════════ */
function Slide07() {
  return (
    <Grid bg={INK}>
      <div style={{
        gridColumn: "1 / 13", gridRow: "1 / 2",
        color: "#555", fontWeight: 700,
        fontSize: "clamp(0.7rem, 1.1vw, 1rem)",
        textTransform: "uppercase", letterSpacing: "0.1em",
        alignSelf: "end",
      }}>
        Проект 02
      </div>

      {/* Huge name */}
      <div style={{
        gridColumn: "1 / 13", gridRow: "2 / 7",
        fontSize: "clamp(3rem, 10vw, 11rem)",
        fontWeight: 900, color: BG,
        letterSpacing: "-0.05em", lineHeight: 0.85,
        alignSelf: "center",
      }}>
        adyg<span style={{ color: R }}>GIS</span>
      </div>

      {/* Subtitle */}
      <div style={{
        gridColumn: "1 / 8", gridRow: "7 / 9",
        fontSize: "clamp(1.2rem, 3vw, 2.8rem)",
        fontWeight: 700, color: "#aaa",
        textTransform: "uppercase", letterSpacing: "-0.01em",
        alignSelf: "start",
      }}>
        Интерактивная карта<br />Майкопа и Адыгеи
      </div>

      {/* Phone mockup */}
      <PhoneMockup
        src="/images/adygyes_map_screens_1.png"
        alt="AdygGIS Map"
        style={{ gridColumn: "7 / 13", gridRow: "4 / 13" }}
      />

      {/* Bottom strip */}
      <div style={{
        gridColumn: "1 / 7", gridRow: "10 / 13",
        display: "flex", flexDirection: "column",
        justifyContent: "flex-end", gap: "0.5rem",
      }}>
        <Tag dark>Kotlin</Tag>
        <Tag dark>Jetpack Compose</Tag>
        <Tag dark>Яндекс Карты</Tag>
      </div>
    </Grid>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 08 — ADYGGIS FEATURES
   White, 3 features + map mockup
═══════════════════════════════════════════════════════════ */
function Slide08() {
  const features = [
    { title: "Интересные места", desc: "Скрытые жемчужины города и республики — не только то, что в путеводителе." },
    { title: "Маршруты", desc: "Пешие и велосипедные маршруты с подробным описанием." },
    { title: "Оффлайн-режим", desc: "Карта работает без интернета. Критично в горах и заповедниках." },
  ];

  return (
    <Grid bg={BG}>
      <div style={{
        gridColumn: "1 / 7", gridRow: "1 / 4",
        fontSize: "clamp(2rem, 4.5vw, 4.5rem)",
        fontWeight: 900, color: INK,
        textTransform: "uppercase", letterSpacing: "-0.03em",
        lineHeight: 1, alignSelf: "center",
      }}>
        Майкоп<br /><span style={{ color: R }}>интереснее,</span><br />чем кажется
      </div>

      <PhoneMockup
        src="/images/adygyes_map_screens_2.jpeg"
        alt="AdygGIS Mockup"
        style={{ gridColumn: "7 / 13", gridRow: "1 / 13" }}
      />

      {features.map((f, i) => (
        <div key={i} style={{
          gridColumn: "1 / 7",
          gridRow: `${4 + i * 3} / ${7 + i * 3}`,
          borderTop: `3px solid ${i === 0 ? R : "#ddd"}`,
          paddingTop: "0.8rem",
        }}>
          <div style={{
            fontSize: "clamp(1.1rem, 2.2vw, 2rem)",
            fontWeight: 900, color: INK,
            textTransform: "uppercase", letterSpacing: "-0.01em",
            marginBottom: "0.4rem",
          }}>
            {f.title}
          </div>
          <div style={{
            fontSize: "clamp(0.9rem, 1.4vw, 1.3rem)",
            color: "#666", lineHeight: 1.35,
          }}>
            {f.desc}
          </div>
        </div>
      ))}
    </Grid>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 09 — ADYGGIS УЧАСТИЕ
   Red, invite people
═══════════════════════════════════════════════════════════ */
function Slide09() {
  return (
    <Grid bg={R}>
      {/* Left — text */}
      <div style={{
        gridColumn: "1 / 8", gridRow: "1 / 13",
        display: "flex", flexDirection: "column",
        justifyContent: "center",
        gap: "2rem",
      }}>
        <div style={{
          fontSize: "clamp(0.8rem, 1.2vw, 1.1rem)",
          fontWeight: 700, color: "rgba(255,255,255,0.5)",
          textTransform: "uppercase", letterSpacing: "0.1em",
        }}>
          adygGIS · Места обновляются динамически
        </div>

        <div style={{
          fontSize: "clamp(2.8rem, 7.5vw, 9rem)",
          fontWeight: 900, color: BG,
          letterSpacing: "-0.04em", lineHeight: 0.88,
          textTransform: "uppercase",
        }}>
          Знаешь<br />классное<br />место?
        </div>

        <div style={{
          fontSize: "clamp(1.1rem, 2.2vw, 2rem)",
          fontWeight: 700, color: "rgba(255,255,255,0.85)",
          lineHeight: 1.35,
        }}>
          Напишите нам — добавим на карту.<br />
          Места обновляются в реальном времени.
        </div>

        <div style={{
          fontSize: "clamp(1.3rem, 2.8vw, 2.8rem)",
          fontWeight: 900, color: BG,
          letterSpacing: "0.02em",
          borderBottom: "3px solid rgba(255,255,255,0.4)",
          paddingBottom: "0.75rem",
          display: "inline-block",
        }}>
          → @MaykopTech
        </div>
      </div>

      {/* Right — QR code */}
      <div style={{
        gridColumn: "8 / 13", gridRow: "2 / 12",
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        gap: "1.5rem",
      }}>
        <img
          src="/images/placeholders/frame-Photoroom.png"
          alt="QR adygGIS"
          style={{
            width: "min(100%, 450px)", aspectRatio: "1/1",
            objectFit: "cover",
            filter: "invert(1)",
            border: `8px solid ${BG}`,
            borderRadius: "0.5rem",
          }}
        />
        <div style={{
          fontSize: "clamp(1rem, 2vw, 1.8rem)",
          fontWeight: 900, color: BG,
          textTransform: "uppercase", letterSpacing: "0.04em",
          textAlign: "center",
        }}>
          Напишите нам
        </div>
      </div>
    </Grid>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 10 — СТЕК И НАВЫКИ
   Dark bg, tech poster
═══════════════════════════════════════════════════════════ */
function Slide10() {
  const stack = [
    { name: "React Native", size: "2.1vw" },
    { name: "Expo", size: "2.7vw" },
    { name: "Supabase", size: "2.3vw" },
    { name: "Kotlin", size: "3.6vw" },
    { name: "Jetpack Compose", size: "1.7vw" },
    { name: "TypeScript", size: "2.5vw" },
    { name: "Python", size: "3.3vw" },
    { name: "JavaScript", size: "2.3vw" },
    { name: "Java", size: "2.9vw" },
    { name: "Swift", size: "3.1vw" },
    { name: "React", size: "2.7vw" },
    { name: "Tailwind", size: "2.0vw" },
    { name: "Rails", size: "2.4vw" },
    { name: "PostgreSQL", size: "2.1vw" },
    { name: "Git", size: "3.9vw" },
    { name: "GitHub", size: "2.4vw" },
    { name: "Maps", size: "3.0vw" },
    { name: "Store", size: "2.5vw" },
    { name: "Метрика", size: "2.7vw" },
  ];

  const images = [
    { 
      src: "https://art-frost.vercel.app/assets/images/projects/biogram/2.png", 
      col: "6 / 10", row: "1 / 7",
      alt: "Teamwork" 
    },
    { 
      src: "https://art-frost.vercel.app/assets/images/projects/vivid/1.png", 
      col: "10 / 13", row: "1 / 7",
      alt: "Late Night Coding" 
    },
    { 
      src: "/images/placeholders/telegram-cloud-photo-size-2-5194968871473974271-w.jpg", 
      col: "6 / 9", row: "7 / 13",
      alt: "Photo" 
    },
    { 
      src: "/images/placeholders/image.png", 
      col: "9 / 13", row: "7 / 13",
      alt: "Image" 
    }
  ];

  return (
    <Grid bg={INK}>
      {/* ─── LEFT COLUMN: TYPOGRAPHY ─── */}
      <div style={{
        gridColumn: "1 / 6", gridRow: "1 / 3",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        zIndex: 10
      }}>
        <div style={{
          fontSize: "clamp(1.8rem, 3.5vw, 4rem)",
          fontWeight: 900, color: BG,
          textTransform: "uppercase", letterSpacing: "-0.03em",
          lineHeight: 0.95,
        }}>
          Какой опыт мы<br />
          получили<br />
          <span style={{ color: R }}>за этот год</span>
        </div>
      </div>

      <div style={{
        gridColumn: "1 / 6", gridRow: "3 / 13",
        display: "flex", flexWrap: "wrap",
        alignContent: "flex-start", gap: "0.2rem 0.8rem",
        alignSelf: "start", paddingTop: "1rem"
      }}>
        {stack.map((item, i) => (
          <div key={i} style={{
            fontSize: `clamp(0.8rem, ${item.size}, 4rem)`,
            fontWeight: 900, letterSpacing: "-0.04em",
            lineHeight: 1.1,
            color: i % 3 === 0 ? R : i % 3 === 1 ? BG : "#555",
            whiteSpace: "nowrap"
          }}>
            {item.name}
          </div>
        ))}
      </div>

      {/* ─── RIGHT COLUMN: IMAGE GRID ─── */}
      {images.map((img, i) => (
        <div key={i} style={{
          gridColumn: img.col,
          gridRow: img.row,
          backgroundImage: `url(${img.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#222",
        }} />
      ))}
    </Grid>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 11 — @MAYKOPTECH + QR
   White, community invite
═══════════════════════════════════════════════════════════ */
function Slide11() {
  return (
    <Grid bg={BG}>
      <div style={{
        gridColumn: "1 / 13", gridRow: "1 / 3",
        fontSize: "clamp(0.7rem, 1.1vw, 1rem)",
        fontWeight: 700, textTransform: "uppercase",
        letterSpacing: "0.1em", color: "#999",
        alignSelf: "end",
      }}>
        Присоединяйтесь
      </div>

      <div style={{
        gridColumn: "1 / 7", gridRow: "2 / 9",
        display: "flex", flexDirection: "column",
        gap: "1.5rem", justifyContent: "center",
      }}>
        <div style={{
          fontSize: "clamp(2.5rem, 7vw, 7.5rem)",
          fontWeight: 900, color: INK,
          letterSpacing: "-0.04em", lineHeight: 0.9,
          textTransform: "uppercase",
        }}>
          @Maykop<span style={{ color: R }}>Tech</span>
        </div>
        <div style={{ width: "6rem", height: 5, background: R }} />
        <div style={{
          fontSize: "clamp(1rem, 1.8vw, 1.6rem)",
          color: "#555", lineHeight: 1.45,
        }}>
          IT-сообщество Майкопа. Новости проектов, технологии, коллаборации.<br /><br />
          Хотите попасть первыми в Obrazz? Хотите добавить место в adygGIS? Есть идея? Всё — здесь.
        </div>
      </div>

      {/* QR codes */}
      <div style={{
        gridColumn: "7 / 13", gridRow: "2 / 13",
        display: "flex", flexDirection: "column",
        gap: "1.5rem", justifyContent: "center", alignItems: "center",
      }}>
        <img
          src="/images/placeholders/frame-Photoroom.png"
          alt="QR MaykopTech"
          style={{
            width: "min(80%, 500px)", aspectRatio: "1/1",
            objectFit: "cover",
            border: `8px solid ${INK}`,
            borderRadius: "0.5rem",
          }}
        />
        <div style={{
          fontSize: "clamp(1.2rem, 2.5vw, 2.2rem)",
          fontWeight: 900, textTransform: "uppercase",
          letterSpacing: "0.02em", color: INK,
          textAlign: "center",
        }}>
          Сканируй прямо сейчас
        </div>
      </div>

      {/* Bottom text */}
      <div style={{
        gridColumn: "1 / 7", gridRow: "9 / 13",
        display: "flex", flexDirection: "column",
        justifyContent: "flex-end", gap: "0.5rem",
      }}>
        <div style={{
          fontSize: "clamp(1.3rem, 2.8vw, 2.5rem)",
          fontWeight: 900, color: R,
        }}>
          Достань телефон сейчас.
        </div>
        <div style={{
          fontSize: "clamp(0.9rem, 1.4vw, 1.3rem)",
          color: "#999",
        }}>
          Это займёт 10 секунд.
        </div>
      </div>
    </Grid>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 12 — ФИНАЛ
   Red bg, call to action
═══════════════════════════════════════════════════════════ */
function Slide12() {
  return (
    <Grid bg={R}>
      {/* Right — campus photo */}
      <Img
        src="/images/university_campus_collaboration_20251114_202320.png"
        alt="AGU Campus"
        style={{
          gridColumn: "5 / 13", gridRow: "1 / 13",
          clipPath: "polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      {/* Top-left label */}
      <div style={{
        gridColumn: "1 / 8", gridRow: "1 / 2",
        fontSize: "clamp(0.8rem, 1.2vw, 1.1rem)",
        fontWeight: 700, color: "rgba(255,255,255,0.45)",
        textTransform: "uppercase", letterSpacing: "0.1em",
        alignSelf: "center",
      }}>
        Год назад — нули. Сегодня — полноценные продукты.
      </div>

      {/* Main headline */}
      <div style={{
        gridColumn: "1 / 8", gridRow: "2 / 8",
        display: "flex", flexDirection: "column",
        justifyContent: "center", gap: "0.8rem",
      }}>
        <div style={{
          fontSize: "clamp(3.5rem, 9vw, 10rem)",
          fontWeight: 900, color: BG,
          letterSpacing: "-0.04em", lineHeight: 0.85,
          textTransform: "uppercase",
        }}>
          Поступай<br />в АГУ
        </div>
        <div style={{
          fontSize: "clamp(1.1rem, 2.2vw, 2rem)",
          fontWeight: 700, color: "rgba(255,255,255,0.8)",
          lineHeight: 1.3,
        }}>
          Прикладная математика · АГУ<br />
          Правильная среда меняет всё.
        </div>
      </div>

      {/* QR block */}
      <div style={{
        gridColumn: "1 / 5", gridRow: "8 / 13",
        display: "flex", flexDirection: "column",
        justifyContent: "flex-end", gap: "0.8rem",
        paddingBottom: "0.5rem",
      }}>
        <img
          src="/images/placeholders/frame-Photoroom.png"
          alt="QR MaykopTech"
          style={{
            width: "min(100%, 300px)", aspectRatio: "1/1",
            objectFit: "cover",
            filter: "invert(1)",
            border: `6px solid ${BG}`,
            borderRadius: "0.4rem",
          }}
        />
        <div style={{
          fontSize: "clamp(1.1rem, 2vw, 1.8rem)",
          fontWeight: 900, color: BG,
          letterSpacing: "0.02em",
        }}>
          @MaykopTech
        </div>
        <div style={{
          fontSize: "clamp(0.8rem, 1.2vw, 1.1rem)",
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.3,
        }}>
          А если не поступите —<br />подпишитесь хотя бы на Telegram 😄
        </div>
      </div>

      {/* Year watermark */}
      <div style={{
        gridColumn: "5 / 8", gridRow: "10 / 13",
        display: "flex", alignItems: "flex-end",
        paddingBottom: "0.5rem",
      }}>
        <div style={{
          fontSize: "clamp(3rem, 7vw, 7rem)",
          fontWeight: 900, color: "rgba(255,255,255,0.12)",
          letterSpacing: "-0.05em", lineHeight: 1,
        }}>
          2026
        </div>
      </div>
    </Grid>
  );
}
