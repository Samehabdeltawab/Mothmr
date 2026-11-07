import { useState } from "react"

// Prefix for public files (works with any Vite `base`, e.g. GitHub Pages sub-path)
const B = import.meta.env.BASE_URL.replace(/\/$/, "")
const A = `${B}/assets`

const projectFacts = [
  ["المساحات", "تبدأ من 150 م²", "9fc11.svg"],
  ["الارتفاع المعماري", "أرضي + 3 أدوار (G+3)", "26bc0.svg"],
  ["تاريخ التسليم", "ديسمبر 2025", "dedb7.svg"],
  ["مستوى التشطيب", "طوب أحمر / نصف تشطيب / ألترا سوبر لوكس", "1a43e.svg"],
]

const socialLinks = [
  [
    "فيس بوك",
    "https://www.facebook.com/profile.php?id=61566804325351",
    "M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z",
    "#1877f2",
  ],
  [
    "لينكدان",
    "https://www.linkedin.com/company/mothmr-development/about/",
    "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z",
    "#0a66c2",
  ],
  [
    "انستجرام",
    "https://www.instagram.com/",
    "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12c0-3.2.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z",
    "#e1306c",
  ],
  [
    "واتس اب",
    "https://wa.me/201000281416",
    "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.78h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.88-9.89 9.88zM20.52 3.45A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41z",
    "#25d366",
  ],
  [
    "اتصل بنا",
    "tel:+201000281416",
    "M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z",
    "#0d2562",
  ],
  [
    "تيك توك",
    "https://www.tiktok.com/",
    "M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
    "#000000",
  ],
  [
    "موقعنا: مول الداون تاون - حدائق أكتوبر الدور الثاني - مكتب رقم 7",
    "https://share.google/iyF4gJTwgTutcDSrg",
    "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z",
    "#dc2626",
  ],
]

const contactCards = [
  [
    "العنوان",
    "مول الداون تاون - حدائق أكتوبر الدور الثاني - مكتب رقم 7",
    "2826a.svg",
    "https://share.google/iyF4gJTwgTutcDSrg",
  ],
  ["ساعات استقبال العملاء", "يومياً ماعدا الجمعة من 10 صباحاً وحتى 8 مساءً", "fd14d.svg", "#contact"],
]

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className="brand" href="#home" aria-label="مُثمر للتطوير العقاري">
      <span className="brand-copy">
        <strong className={light ? "text-white" : ""}>مُثمِــــر</strong>
        <small>MOTHMR DEVELOPMENTS</small>
        <em>للتطوير العقاري</em>
      </span>
      <img src={`${A}/2e513.svg`} alt="" />
    </a>
  )
}

function TopBar() {
  return (
    <div className="topbar" dir="rtl">
      <div className="shell topbar-inner">
        <div className="topbar-intro">
          <img src={`${A}/fbfeb.svg`} alt="" />
          <span className="gold">مُثمر للتطوير العقاري - خطوة نحو المستقبل</span>
          <a
            className="topbar-place"
            href="https://share.google/iyF4gJTwgTutcDSrg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={`${A}/4ecfc.svg`} alt="" />
            مول الداون تاون - حدائق أكتوبر الدور الثاني - مكتب رقم 7
          </a>
        </div>
        <div className="topbar-contact">
          <a href="tel:01000281416">
            <img src={`${A}/b40f6.svg`} alt="" />
            01000 28 14 16
          </a>
        </div>
      </div>
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="header" dir="rtl">
      <div className="shell nav-row">
        <a className="header-logo" href="#home" aria-label="مُثمر للتطوير العقاري">
          <img src={`${B}/logo.webp`} alt="Mothmr Developments" decoding="async" />
        </a>
        <nav aria-label="التنقل الرئيسي">
          <a className="active" href="#home">
            الرئيسية
          </a>
          <a href="#vision">رؤيتنا ومهمتنا</a>
          <a href="#projects">مشاريعنا</a>
          <a href="#values">قيَمُنا</a>
        </nav>
        <div className="nav-actions">
          <a className="btn btn-primary" href="#contact">
            <img src={`${A}/c1940.svg`} alt="" />
            حجز موعد معاينة
          </a>
        </div>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {open && (
        <div className="mobile-menu">
          <a href="#home" onClick={close}>الرئيسية</a>
          <a href="#vision" onClick={close}>رؤيتنا ومهمتنا</a>
          <a href="#projects" onClick={close}>مشاريعنا</a>
          <a href="#values" onClick={close}>قيَمُنا</a>
          <a className="btn btn-primary" href="#contact" onClick={close}>
            حجز موعد معاينة
          </a>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero" dir="rtl">
      <div className="hero-bg" aria-hidden="true">
        <img src={`${B}${encodeURI("/project-333/future.webp")}`} alt="" fetchPriority="high" decoding="async" />
      </div>
      <div className="shell hero-grid">
        <div className="hero-copy">
          <div className="eyebrow dark">
            <img src={`${A}/797a8.svg`} alt="" />
            ريادة في التطوير العقاري
          </div>
          <h1 className="sr-only">خطوة نحو المستقبل</h1>
          <p>
            شركة{" "}
            <strong>مٌثمر للتطوير العقاري (Mothmr Developments)</strong> هي شركة
            تعمل في السوق العقاري المصري (تركز بشكل أساسي في غرب القاهرة وحدائق
            أكتوبر)، ولها خبرة في مجال المقاولات والتطوير العقاري، وتقدم حلولاً
            سكنية واستثمارية متنوعة.
          </p>
          <ul>
            <li>
              <strong>مجال العمل:</strong> الاستثمار العقاري، المقاولات العامة، التطوير العمراني،
              وتصميم الديكورات والتشطيبات.
            </li>
            <li>
              <strong>منطقة التمركز الرئيسية:</strong> غرب القاهرة (مثل حدائق أكتوبر، وصلة دهشور
              الجنوبية، وغيرها).
            </li>
            <li>
              <strong>طبيعة النشاط:</strong> تقديم مشروعات عقارية سكنية وتجارية وإدارية،
              والاهتمام بالتصميمات الذكية <br />واستغلال المساحات وتوصيل الخدمات
              القريبة من المحاور الرئيسية.
            </li>
          </ul>
          <div className="stats-row">
            <div className="stats">
              <div>
                <strong className="blue">100%</strong>
                <span>التزام هندسي</span>
              </div>
            </div>
            <div className="hero-actions">
              <a className="btn btn-gold" href="#projects">
                <img src={`${A}/0fc57.svg`} alt="" />
                استكشف مشروعاتنا
              </a>
            </div>
          </div>
        </div>
        <aside className="hero-card">
          <div className="hero-card-title">
            <div>
              <strong>مُثمر للتطوير العقاري</strong>
              <span>Mothmr Developments</span>
            </div>
            <span className="mini-logo">
              <img src={`${A}/1f8a1.svg`} alt="" />
            </span>
          </div>
          <p>
            مشروعات متكاملة ومواقع استراتيجية في مدن الجيل الرابع بتشطيبات
            فندقية وأنظمة سداد مرنة بدون فوائد.
          </p>
          <div className="hero-card-foot">
            <span className="available">
              <i />
              الحجز والاستفسار متاح الآن
            </span>
            <a href="#contact">
              تواصل معنا <img src={`${A}/62932.svg`} alt="" />
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}

function Vision() {
  const cards = [
    {
      image: "8cb45.webp",
      label: "OUR VISION",
    },
    {
      image: "6570e.webp",
      label: "OUR MISSION",
    },
  ]
  return (
    <section id="vision" className="section vision" dir="rtl">
      <div className="shell">
        <div className="section-head section-head-dark">
          <h2>رؤيتنا ومهمتنا</h2>
          <p>
            نسترشد برؤية طموحة ومهمة واضحة تستهدف إحداث نقلة نوعية في قطاع
            التطوير العقاري بمصر
          </p>
        </div>
        <div className="vision-grid">
          {cards.map((card) => (
            <article className="vision-card" key={card.label}>
              <div className="vision-image">
                <img src={`${A}/${card.image}`} alt="" loading="lazy" decoding="async" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const galleryImages = ["1.webp", "2.webp"].map((n) =>
  `${B}${encodeURI(`/project-333/${n}`)}`,
)

function Gallery({ images }: { images: string[] }) {
  const [i, setI] = useState(0)
  const go = (d: number) => setI((i + d + images.length) % images.length)
  const arrow = {
    position: "absolute" as const,
    top: "50%",
    transform: "translateY(-50%)",
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: 0,
    background: "rgba(15,23,42,.7)",
    color: "#fff",
    fontSize: 20,
    cursor: "pointer",
    zIndex: 2,
  }
  return (
    <>
      <img className="gallery-bg" src={images[i]} alt="" aria-hidden="true" />
      <img className="gallery-main" src={images[i]} alt={`صورة ${i + 1} من ${images.length}`} decoding="async" />
      <button type="button" aria-label="السابق" style={{ ...arrow, right: 12 }} onClick={() => go(-1)}>
        ›
      </button>
      <button type="button" aria-label="التالي" style={{ ...arrow, left: 12 }} onClick={() => go(1)}>
        ‹
      </button>
      <div style={{ position: "absolute", bottom: 12, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 8, zIndex: 2 }}>
        {images.map((_, k) => (
          <button
            key={k}
            type="button"
            aria-label={`صورة ${k + 1}`}
            onClick={() => setI(k)}
            style={{ width: 10, height: 10, borderRadius: "50%", border: 0, padding: 0, cursor: "pointer", background: k === i ? "#c9a227" : "rgba(255,255,255,.8)" }}
          />
        ))}
      </div>
    </>
  )
}

function Project() {
  const [details, setDetails] = useState(false)

  if (details) {
    return (
      <section id="projects" className="section project-section" dir="rtl">
        <div className="shell">
          <button
            className="btn btn-soft"
            style={{ marginBottom: 24 }}
            onClick={() => setDetails(false)}
          >
            → رجوع للمشاريع
          </button>
          <div className="project-head">
            <div>
              <span className="project-label">
                <img src={`${A}/443ab.svg`} alt="" />
                مشاريع منفّذة
              </span>
              <h2>
                مسلسل 2 - قطعة 333 <em>| تحفة سكنية فريدة</em>
              </h2>
            </div>
            <p>
              صُمم خصيصاً للباحثين عن الرقي والخصوصية والواجهات الكلاسيكية الفخمة في
              أرقى المواقع الاستراتيجية.
            </p>
          </div>
          <div className="project-card project-detail">
            <div className="project-image">
              <Gallery images={galleryImages} />
              <span className="project-badge">
                مشروع متميز <img src={`${A}/7b359.svg`} alt="" />
              </span>
            </div>
            <div className="project-content">
              <span className="project-kicker">
                نمط نيوكلاسيكي فاخر · تصميم معماري متزن
              </span>
              <h3>بوابة المستقبل السكنية (333)</h3>
              <p>
                مبنى سكني فندقي فاخر يتكون من دور أرضي وثلاثة أدوار متكررة (G+3)
                بواجهة حجرية فاخرة ومداخل فندقية من أرقى أنواع الرخام، مع نظام
                أمني سمارت وإنتركم مرئي ومصاعد إيطالية مستوردة.
              </p>
              <div className="facts">
                {projectFacts.map(([label, value, icon]) => (
                  <div key={label}>
                    <span>
                      {label}
                      <img src={`${A}/${icon}`} alt="" />
                    </span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
              <ul className="checks">
                <li>
                  مداخل فندقية مزودة بأحدث أنظمة الإضاءة الذكية والرخام الإسباني.
                </li>
                <li>بوابات حديد كريتال إلكترونية وجراجات خاصة مؤمنة بالكامل.</li>
                <li>تطل مباشرة على مساحات خضراء وطرق رئيسية ميسرة التنقل.</li>
              </ul>
              <div className="project-actions">
                <a
                  className="btn btn-primary"
                  href={`${B}${encodeURI("/project-333/333.pdf")}`}
                  download="333.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={`${A}/37390.svg`} alt="" />
                  تحميل البروشور
                </a>
                <a className="btn btn-soft" href="#contact">
                  <img src={`${A}/0d062.svg`} alt="" />
                  استفسار فوري
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="section project-section" dir="rtl">
      <div className="shell projects-split">
        <div className="projects-col">
        <div className="project-head">
          <div>
            <span className="project-label">
              <img src={`${A}/443ab.svg`} alt="" />
              مشاريع منفّذة
            </span>
            <h2>أعمال تم تسليمها</h2>
          </div>
        </div>
        <button
          type="button"
          className="project-card"
          onClick={() => {
            setDetails(true)
            document.getElementById("projects")?.scrollIntoView()
          }}
          aria-label="تفاصيل مشروع مسلسل 2 قطعة 333"
          style={{ display: "block", cursor: "pointer", width: "100%", padding: 0, textAlign: "inherit" }}
        >
          <div className="project-image">
            <img src={`${B}/shared.webp`} alt="مشروع مسلسل 2 قطعة 333" loading="lazy" decoding="async" />
          </div>
        </button>
        </div>
        <div className="projects-col">
        <div className="project-head">
          <div>
            <span className="project-label">
              <img src={`${A}/443ab.svg`} alt="" />
              مشاريع تحت التنفيذ
            </span>
            <h2>أعمال تحت الإنشاء</h2>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
            <img
              src={`${B}${encodeURI("/project-333/inprogress.webp")}`}
              alt="مشروع تحت التنفيذ"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)

  const onSocialClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("tel:")) return
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)
    if (isMobile) return
    event.preventDefault()
    const number = href.replace("tel:", "")
    navigator.clipboard?.writeText(number).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="section contact" dir="rtl">
      <div className="shell contact-grid">
        <div className="contact-info">
          <span className="contact-kicker">تواصل مباشر مع مستشارينا</span>
          <h2>
            ابدأ خطوتك نحو المستقبل
            <br />
            اليوم
          </h2>
          <p>
            فريق مستشارينا العقاريين جاهز للإجابة عن كافة استفساراتكم.
          </p>
          <div className="contact-cards">
            {contactCards.map(([label, value, icon, href]) => (
              <a
                href={href}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                key={label}
              >
                <span>
                  <small>{label}</small>
                  <strong>{value}</strong>
                </span>
                <i>
                  <img src={`${A}/${icon}`} alt="" />
                </i>
              </a>
            ))}
          </div>
          <div className="social-row">
            {socialLinks.map(([label, href, path, color]) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                style={{ background: color }}
                onClick={(event) => onSocialClick(event, href)}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff" aria-hidden="true">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
          {copied && (
            <div className="copy-toast" role="status">
              تم نسخ الرقم +201000281416
            </div>
          )}
        </div>
        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault()
            const f = event.currentTarget
            const d = new FormData(f)
            const sel = (n: string) => {
              const el = f.elements.namedItem(n) as HTMLSelectElement | null
              return el && el.selectedIndex >= 0 && el.value
                ? el.options[el.selectedIndex].text
                : "-"
            }
            const phone = `${d.get("dial") ?? ""}${String(d.get("phone") ?? "").replace(/^0+/, "")}`
            const msg = [
              "طلب حجز / استفسار جديد",
              `الاسم: ${d.get("fullname") ?? ""}`,
              `الهاتف: ${phone}`,
              `نوع الاهتمام: ${sel("interest")}`,
              `الوقت المفضل: ${sel("time")}`,
              `ملاحظات: ${d.get("notes") || "-"}`,
            ].join("\n")
            const url = `https://wa.me/201000281416?text=${encodeURIComponent(msg)}`
            const w = window.open(url, "_blank", "noopener")
            if (!w) window.location.href = url
            f.reset()
          }}
        >
          <div className="form-head">
            <h3>تواصل معنا الآن</h3>
            <p>احجز استشارتك العقارية وسيقوم أحد خبرائنا العقاريين بالتواصل معك</p>
          </div>
          <div className="form-row">
            <label>
              الاسم بالكامل *<input name="fullname" required maxLength={30} placeholder="مثال: أحمد محمد" />
            </label>
            <PhoneField />
          </div>
          <div className="form-row">
            <label>
              نوع الاهتمام
              <select name="interest" defaultValue="">
                <option value="" disabled>
                  اختر نوع الاهتمام
                </option>
                <option value="residential">سكني</option>
                <option value="commercial">تجاري</option>
                <option value="administrative">إداري</option>
                <option value="medical">طبي</option>
                <option value="coastal">ساحلي</option>
              </select>
            </label>
            <label>
              الوقت المفضل للاتصال
              <select name="time" defaultValue="morning">
                <option value="morning">صباحاً (10 ص - 2 ظ)</option>
                <option value="evening">مساءً (4 م - 8 م)</option>
              </select>
            </label>
          </div>
          <label>
            ملاحظات أو استفسار خاص
            <textarea
              name="notes"
              maxLength={500}
              rows={3}
              placeholder="أود الاستفسار عن تفاصيل المساحات وأنظمة السداد المتاحة..."
            />
          </label>
          <button type="submit">
            إرسال طلب الحجز والاستفسار <img src={`${A}/0b8df.svg`} alt="" />
          </button>
          <small className="privacy-note">
            بياناتكم محمية بالكامل ولن يتم استخدامها إلا لمتابعة طلبكم فقط.
          </small>
        </form>
      </div>
    </section>
  )
}

// [name, dial code, national number pattern (without leading 0), example]
const countries: [string, string, RegExp, string][] = [
  ["🇪🇬 مصر", "+20", /^1[0125]\d{8}$/, "1012345678"],
  ["🇸🇦 السعودية", "+966", /^5\d{8}$/, "512345678"],
  ["🇦🇪 الإمارات", "+971", /^5[0245678]\d{7}$/, "501234567"],
  ["🇰🇼 الكويت", "+965", /^[569]\d{7}$/, "51234567"],
  ["🇶🇦 قطر", "+974", /^[3567]\d{7}$/, "33123456"],
  ["🇧🇭 البحرين", "+973", /^[36]\d{7}$/, "36001234"],
  ["🇴🇲 عُمان", "+968", /^[79]\d{7}$/, "91234567"],
  ["🇯🇴 الأردن", "+962", /^7[789]\d{7}$/, "791234567"],
  ["🇱🇧 لبنان", "+961", /^(3|7[0169]|81)\d{6}$/, "71123456"],
  ["🇱🇾 ليبيا", "+218", /^9[1-6]\d{7}$/, "912345678"],
  ["🇸🇩 السودان", "+249", /^9[0-9]\d{7}$/, "912345678"],
  ["🇲🇦 المغرب", "+212", /^[67]\d{8}$/, "612345678"],
  ["🇩🇿 الجزائر", "+213", /^[567]\d{8}$/, "551234567"],
  ["🇹🇳 تونس", "+216", /^[2459]\d{7}$/, "20123456"],
  ["🇬🇧 بريطانيا", "+44", /^7\d{9}$/, "7123456789"],
  ["🇺🇸 أمريكا/كندا", "+1", /^[2-9]\d{2}[2-9]\d{6}$/, "2025550123"],
]

const isoCodes: Record<string, string> = {
  "+20": "EG", "+966": "SA", "+971": "AE", "+965": "KW", "+974": "QA",
  "+973": "BH", "+968": "OM", "+962": "JO", "+961": "LB", "+218": "LY",
  "+249": "SD", "+212": "MA", "+213": "DZ", "+216": "TN", "+44": "GB",
  "+1": "US",
}

function PhoneField() {
  const [idx, setIdx] = useState(0)
  const [value, setValue] = useState("")
  const [, dial, pattern, example] = countries[idx]

  const validate = (digits: string, i: number) => {
    const national = digits.replace(/^0+/, "")
    return countries[i][2].test(national)
  }

  return (
    <label>
      رقم الهاتف / واتساب *
      <span className="phone-field" dir="ltr">
        <select
          value={idx}
          aria-label="كود الدولة"
          onChange={(e) => setIdx(Number(e.target.value))}
        >
          {countries.map(([, code], i) => (
            <option key={code} value={i}>
              {isoCodes[code] ?? ""} ({code})
            </option>
          ))}
        </select>
        <input type="hidden" name="dial" value={dial} />
        <input
          name="phone"
          required
          type="tel"
          inputMode="numeric"
          value={value}
          placeholder={example}
          onChange={(e) => setValue(e.target.value.replace(/\D/g, ""))}
          onInvalid={(e) =>
            e.currentTarget.setCustomValidity(
              `أدخل رقماً صحيحاً لـ ${dial} مثل ${example}`,
            )
          }
          onInput={(e) => e.currentTarget.setCustomValidity("")}
          ref={(el) => {
            if (el) {
              el.setCustomValidity(
                value && !validate(value, idx)
                  ? `أدخل رقماً صحيحاً لـ ${dial} مثل ${example}`
                  : "",
              )
            }
          }}
        />
      </span>
      {value && !pattern.test(value.replace(/^0+/, "")) && (
        <small style={{ color: "#dc2626" }}>
          رقم غير صحيح لهذه الدولة (مثال: {example})
        </small>
      )}
    </label>
  )
}

function Footer() {
  return (
    <footer className="footer" dir="rtl">
      <div className="shell footer-row">
        <a className="footer-logo" href="#home" aria-label="مُثمر للتطوير العقاري">
          <img src={`${B}/logo.webp`} alt="Mothmr Developments" loading="lazy" decoding="async" />
        </a>
        <div className="footer-bottom">
          <span>
            جميع الحقوق محفوظة © 2026 لشركة{" "}
            <strong>LavidaTech</strong>.
          </span>
          <span>خطوة نحو المستقبل　•　سياسة الخصوصية　•　الشروط والأحكام</span>
        </div>
      </div>
    </footer>
  )
}

const valuesImages = [1, 2, 3, 4, 5]

function Values() {
  return (
    <section id="values" className="section values-section" dir="rtl">
      <div className="shell">
        <div className="section-head">
          <h2>قيَمُنا</h2>
        </div>
        <div className="values-grid" dir="ltr">
          {valuesImages.map((n) => (
            <div key={n} className="value-card">
              <img src={`${B}/Values/${n}.webp`} alt={`قيمة ${n}`} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="app">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Vision />
        <Project />
        <Values />
        <Contact />
      </main>
      <Footer />
      <a
        className="whatsapp"
        href="https://wa.me/201000281416"
        aria-label="تواصل عبر واتساب"
      >
        <img src={`${A}/5495d.svg`} alt="" />
      </a>
    </div>
  )
}
