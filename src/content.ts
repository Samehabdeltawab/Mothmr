// All user-facing copy, per language. Arabic is the default language.
// To add a string: add it to `ar` first, then to `en` (TypeScript enforces the same shape).

export type Lang = "ar" | "en"

const ar = {
  meta: {
    title: "مثمر للتطوير العقاري",
    description:
      "مُثمر للتطوير العقاري - مشاريع سكنية وتجارية متميزة. احجز استشارتك العقارية المجانية.",
  },
  lang: {
    // Label of the button = the language you switch TO
    switchLabel: "EN",
    switchLang: "en",
    switchAria: "التبديل إلى اللغة الإنجليزية",
  },
  topbar: {
    intro: "مُثمر للتطوير العقاري - خطوة نحو المستقبل",
    place: "مول الداون تاون - حدائق أكتوبر الدور الثاني - مكتب رقم 7",
  },
  header: {
    brandAria: "مُثمر للتطوير العقاري",
    logoAlt: "Mothmr Developments",
    navAria: "التنقل الرئيسي",
    nav: {
      home: "الرئيسية",
      vision: "رؤيتنا ومهمتنا",
      projects: "مشاريعنا",
      values: "قيَمُنا",
    },
    cta: "حجز موعد معاينة",
    menuOpen: "فتح القائمة",
    menuClose: "إغلاق القائمة",
  },
  hero: {
    eyebrow: "ريادة في التطوير العقاري",
    title: "خطوة نحو المستقبل",
    introPre: "شركة ",
    company: "مٌثمر للتطوير العقاري (Mothmr Developments)",
    introPost:
      " هي شركة تعمل في السوق العقاري المصري (تركز بشكل أساسي في غرب القاهرة وحدائق أكتوبر)، ولها خبرة في مجال المقاولات والتطوير العقاري، وتقدم حلولاً سكنية واستثمارية متنوعة.",
    fields: {
      label: "مجال العمل:",
      text: "الاستثمار العقاري، المقاولات العامة، التطوير العمراني، وتصميم الديكورات والتشطيبات.",
    },
    area: {
      label: "منطقة التمركز الرئيسية:",
      text: "غرب القاهرة (مثل حدائق أكتوبر، وصلة دهشور الجنوبية، وغيرها).",
    },
    activity: {
      label: "طبيعة النشاط:",
      lines: [
        "تقديم مشروعات عقارية سكنية وتجارية وإدارية، والاهتمام بالتصميمات الذكية",
        "واستغلال المساحات وتوصيل الخدمات القريبة من المحاور الرئيسية.",
      ],
    },
    stat: "التزام هندسي",
    explore: "استكشف مشروعاتنا",
    card: {
      title: "مُثمر للتطوير العقاري",
      subtitle: "Mothmr Developments",
      text: "مشروعات متكاملة ومواقع استراتيجية في مدن الجيل الرابع بتشطيبات فندقية وأنظمة سداد مرنة بدون فوائد.",
      available: "الحجز والاستفسار متاح الآن",
      contact: "تواصل معنا",
    },
  },
  vision: {
    title: "رؤيتنا ومهمتنا",
    subtitle:
      "نسترشد برؤية طموحة ومهمة واضحة تستهدف إحداث نقلة نوعية في قطاع التطوير العقاري بمصر",
    // Arabic uses the artwork images (text is baked into them); English renders these as text cards.
    cards: [] as { title: string; text: string }[],
  },
  project: {
    completedLabel: "مشاريع منفّذة",
    deliveredTitle: "أعمال تم تسليمها",
    openAria: (n: string) => `تفاصيل مشروع مسلسل 2 قطعة ${n}`,
    coverAlt: (n: string) => `مشروع مسلسل 2 قطعة ${n}`,
    inProgressLabel: "مشاريع تحت التنفيذ",
    inProgressTitle: "أعمال تحت الإنشاء",
    inProgressAlt: "مشروع تحت التنفيذ",
    back: "→ رجوع للمشاريع",
    detailTitle: (n: string) => `مسلسل 2 - قطعة ${n}`,
    detailTitleEm: "| تحفة سكنية فريدة",
    detailIntro:
      "صُمم خصيصاً للباحثين عن الرقي والخصوصية والواجهات الكلاسيكية الفخمة في أرقى المواقع الاستراتيجية.",
    badge: "مشروع متميز",
    kicker: "نمط نيوكلاسيكي فاخر · تصميم معماري متزن",
    heading: (n: string) => `بوابة المستقبل السكنية (${n})`,
    description:
      "مبنى سكني فندقي فاخر يتكون من دور أرضي وثلاثة أدوار متكررة (G+3) بواجهة حجرية فاخرة ومداخل فندقية من أرقى أنواع الرخام، مع نظام أمني سمارت وإنتركم مرئي ومصاعد إيطالية مستوردة.",
    facts: (min: number, max?: number) => [
      {
        label: "المساحات",
        value: max ? `من ${min} م² إلى ${max} م²` : `تبدأ من ${min} م²`,
      },
      { label: "الارتفاع المعماري", value: "أرضي + 3 أدوار (G+3)" },
      { label: "تاريخ التسليم", value: "ديسمبر 2025" },
      { label: "مستوى التشطيب", value: "طوب أحمر / نصف تشطيب / ألترا سوبر لوكس" },
    ],
    checks: [
      "مداخل فندقية مزودة بأحدث أنظمة الإضاءة الذكية والرخام الإسباني.",
      "بوابات حديد كريتال إلكترونية وجراجات خاصة مؤمنة بالكامل.",
      "تطل مباشرة على مساحات خضراء وطرق رئيسية ميسرة التنقل.",
    ],
    download: "تحميل البروشور",
    inquire: "استفسار فوري",
  },
  gallery: {
    prev: "السابق",
    next: "التالي",
    photo: (n: number) => `صورة ${n}`,
    imageOf: (i: number, total: number) => `صورة ${i} من ${total}`,
  },
  contact: {
    kicker: "تواصل مباشر مع مستشارينا",
    titleLines: ["ابدأ خطوتك نحو المستقبل", "اليوم"],
    intro: "فريق مستشارينا العقاريين جاهز للإجابة عن كافة استفساراتكم.",
    cards: {
      address: {
        label: "العنوان",
        value: "مول الداون تاون - حدائق أكتوبر الدور الثاني - مكتب رقم 7",
      },
      hours: {
        label: "ساعات استقبال العملاء",
        value: "يومياً ماعدا الجمعة من 10 صباحاً وحتى 8 مساءً",
      },
    },
    social: {
      facebook: "فيس بوك",
      linkedin: "لينكدان",
      instagram: "انستجرام",
      whatsapp: "واتس اب",
      call: "اتصل بنا",
      tiktok: "تيك توك",
      location: "موقعنا: مول الداون تاون - حدائق أكتوبر الدور الثاني - مكتب رقم 7",
    },
    copied: "تم نسخ الرقم +201000281416",
    form: {
      title: "تواصل معنا الآن",
      subtitle: "احجز استشارتك العقارية وسيقوم أحد خبرائنا العقاريين بالتواصل معك",
      name: "الاسم بالكامل *",
      namePlaceholder: "مثال: أحمد محمد",
      phone: "رقم الهاتف / واتساب *",
      countryCode: "كود الدولة",
      interest: "نوع الاهتمام",
      interestPlaceholder: "اختر نوع الاهتمام",
      interests: {
        residential: "سكني",
        commercial: "تجاري",
        administrative: "إداري",
        medical: "طبي",
        coastal: "ساحلي",
      },
      time: "الوقت المفضل للاتصال",
      times: {
        morning: "صباحاً (10 ص - 2 ظ)",
        evening: "مساءً (4 م - 8 م)",
      },
      notes: "ملاحظات أو استفسار خاص",
      notesPlaceholder: "أود الاستفسار عن تفاصيل المساحات وأنظمة السداد المتاحة...",
      submit: "إرسال طلب الحجز والاستفسار",
      privacy: "بياناتكم محمية بالكامل ولن يتم استخدامها إلا لمتابعة طلبكم فقط.",
      phoneInvalid: (dial: string, example: string) =>
        `أدخل رقماً صحيحاً لـ ${dial} مثل ${example}`,
      phoneBadCountry: (example: string) => `رقم غير صحيح لهذه الدولة (مثال: ${example})`,
      whatsapp: {
        title: "طلب حجز / استفسار جديد",
        name: "الاسم",
        phone: "الهاتف",
        interest: "نوع الاهتمام",
        time: "الوقت المفضل",
        notes: "ملاحظات",
      },
    },
  },
  footer: {
    rightsPre: "جميع الحقوق محفوظة © 2026 لشركة ",
    brand: "LavidaTech",
    rightsPost: ".",
    links: "خطوة نحو المستقبل　•　سياسة الخصوصية　•　الشروط والأحكام",
  },
  values: {
    title: "قيَمُنا",
    alt: (n: number) => `قيمة ${n}`,
  },
  whatsappAria: "تواصل عبر واتساب",
}

export type Content = typeof ar

const en: Content = {
  meta: {
    title: "Mothmr Developments | Real Estate Development",
    description:
      "Mothmr Developments - distinctive residential and commercial projects in West Cairo and Hadayek October. Book your real estate consultation.",
  },
  lang: {
    switchLabel: "AR",
    switchLang: "ar",
    switchAria: "Switch to Arabic",
  },
  topbar: {
    intro: "Mothmr Developments - A Step Toward the Future",
    place: "Downtown Mall - Hadayek October, 2nd Floor - Office 7",
  },
  header: {
    brandAria: "Mothmr Developments",
    logoAlt: "Mothmr Developments",
    navAria: "Main navigation",
    nav: {
      home: "Home",
      vision: "Vision & Mission",
      projects: "Our Projects",
      values: "Our Values",
    },
    cta: "Book a Viewing",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  hero: {
    eyebrow: "Leading Real Estate Development",
    title: "A Step Toward the Future",
    introPre: "",
    company: "Mothmr Developments",
    introPost:
      " is a company operating in the Egyptian real estate market (focused mainly on West Cairo and Hadayek October), with experience in contracting and real estate development, offering a diverse range of residential and investment solutions.",
    fields: {
      label: "Fields of work:",
      text: "Real estate investment, general contracting, urban development, and interior design and finishing.",
    },
    area: {
      label: "Main area of operation:",
      text: "West Cairo (such as Hadayek October, the Southern Dahshur Link, and others).",
    },
    activity: {
      label: "Nature of activity:",
      lines: [
        "Delivering residential, commercial and administrative real estate projects, with a focus on smart design, efficient use of space, and services close to the main roads.",
      ],
    },
    stat: "Engineering commitment",
    explore: "Explore Our Projects",
    card: {
      title: "Mothmr Developments",
      subtitle: "Real Estate Development",
      text: "Integrated projects in strategic locations across fourth-generation cities, with hotel-standard finishing and flexible interest-free payment plans.",
      available: "Booking and inquiries are open now",
      contact: "Contact us",
    },
  },
  vision: {
    title: "Our Vision & Mission",
    subtitle:
      "We are guided by an ambitious vision and a clear mission to bring a qualitative leap to Egypt's real estate development sector",
    cards: [
      {
        title: "Our Vision",
        text: "We build today with tomorrow's mindset, to reach a leading position among the top real estate development companies in the Fourth Generation cities and the new cities.",
      },
      {
        title: "Our Mission",
        text: "To deliver the best value to our clients in terms of quality and commitment to international standards, across residential, commercial and administrative levels, and to develop real estate with the latest technology in the Fourth Generation cities and smart cities, in line with the State's plan.",
      },
    ],
  },
  project: {
    completedLabel: "Completed projects",
    deliveredTitle: "Delivered works",
    openAria: (n: string) => `Project details: Series 2, Plot ${n}`,
    coverAlt: (n: string) => `Series 2 - Plot ${n} project`,
    inProgressLabel: "Projects under construction",
    inProgressTitle: "Works in progress",
    inProgressAlt: "Project under construction",
    back: "← Back to projects",
    detailTitle: (n: string) => `Series 2 - Plot ${n}`,
    detailTitleEm: "| A Unique Residential Masterpiece",
    detailIntro:
      "Designed for those who seek elegance, privacy and luxurious classic façades in the most prestigious strategic locations.",
    badge: "Featured project",
    kicker: "Luxury neoclassical style · Balanced architectural design",
    heading: (n: string) => `The Residential Gateway to the Future (${n})`,
    description:
      "A luxury hotel-style residential building of a ground floor and three typical floors (G+3), with a premium stone façade and hotel-grade entrances in the finest marble, plus a smart security system, video intercom and imported Italian elevators.",
    facts: (min: number, max?: number) => [
      {
        label: "Areas",
        value: max ? `${min} m² to ${max} m²` : `Starting from ${min} m²`,
      },
      { label: "Building height", value: "Ground + 3 floors (G+3)" },
      { label: "Delivery date", value: "December 2025" },
      { label: "Finishing level", value: "Red brick / Semi-finished / Ultra super lux" },
    ],
    checks: [
      "Hotel-style entrances with the latest smart lighting systems and Spanish marble.",
      "Electronic Crittall steel gates and fully secured private garages.",
      "Directly overlooking green spaces and main roads with easy access.",
    ],
    download: "Download brochure",
    inquire: "Instant inquiry",
  },
  gallery: {
    prev: "Previous",
    next: "Next",
    photo: (n: number) => `Image ${n}`,
    imageOf: (i: number, total: number) => `Image ${i} of ${total}`,
  },
  contact: {
    kicker: "Talk directly to our consultants",
    titleLines: ["Take your step toward", "the future today"],
    intro: "Our real estate consultants are ready to answer all your questions.",
    cards: {
      address: {
        label: "Address",
        value: "Downtown Mall - Hadayek October, 2nd Floor - Office 7",
      },
      hours: {
        label: "Customer reception hours",
        value: "Daily except Friday, from 10 AM to 8 PM",
      },
    },
    social: {
      facebook: "Facebook",
      linkedin: "LinkedIn",
      instagram: "Instagram",
      whatsapp: "WhatsApp",
      call: "Call us",
      tiktok: "TikTok",
      location: "Our location: Downtown Mall - Hadayek October, 2nd Floor - Office 7",
    },
    copied: "Number copied: +201000281416",
    form: {
      title: "Contact us now",
      subtitle: "Book your real estate consultation and one of our experts will contact you",
      name: "Full name *",
      namePlaceholder: "e.g. John Smith",
      phone: "Phone / WhatsApp *",
      countryCode: "Country code",
      interest: "Type of interest",
      interestPlaceholder: "Select type of interest",
      interests: {
        residential: "Residential",
        commercial: "Commercial",
        administrative: "Administrative",
        medical: "Medical",
        coastal: "Coastal",
      },
      time: "Preferred contact time",
      times: {
        morning: "Morning (10 AM - 2 PM)",
        evening: "Evening (4 PM - 8 PM)",
      },
      notes: "Notes or special inquiry",
      notesPlaceholder: "I'd like to ask about unit sizes and the available payment plans...",
      submit: "Send booking & inquiry request",
      privacy: "Your data is fully protected and will only be used to follow up on your request.",
      phoneInvalid: (dial: string, example: string) =>
        `Enter a valid number for ${dial}, e.g. ${example}`,
      phoneBadCountry: (example: string) => `Invalid number for this country (e.g. ${example})`,
      whatsapp: {
        title: "New booking / inquiry request",
        name: "Name",
        phone: "Phone",
        interest: "Type of interest",
        time: "Preferred time",
        notes: "Notes",
      },
    },
  },
  footer: {
    rightsPre: "All rights reserved © 2026 ",
    brand: "LavidaTech",
    rightsPost: ".",
    links: "A Step Toward the Future　•　Privacy Policy　•　Terms & Conditions",
  },
  values: {
    title: "Our Values",
    alt: (n: number) => `Value ${n}`,
  },
  whatsappAria: "Chat on WhatsApp",
}

export const content: Record<Lang, Content> = { ar, en }
