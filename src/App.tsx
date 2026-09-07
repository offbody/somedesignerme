"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Locale = "en" | "ru";

type LocalizedText = {
  en: string;
  ru: string;
};

type WorkDefinition = {
  image: string;
  desktopImage?: string;
  title: LocalizedText;
  mobileTitle: LocalizedText;
  tags: { en: string[]; ru: string[] };
  impact: Array<{ value: string; label: LocalizedText }>;
  impactStatement: LocalizedText;
  storyEyebrow: LocalizedText;
  storyTitle: LocalizedText;
  storyCopy: LocalizedText;
  roadmap: Array<{ title: LocalizedText; copy: LocalizedText }>;
};

type Work = {
  image: string;
  desktopImage?: string;
  title: string;
  mobileTitle: string;
  tags: string[];
  impact: Array<{ value: string; label: string }>;
  impactStatement: string;
  storyEyebrow: string;
  storyTitle: string;
  storyCopy: string;
  roadmap: Array<{ title: string; copy: string }>;
};

type FutureWorkAnchor = {
  title: string;
  image: string;
  desktopImage?: string;
};

const text = (en: string, ru: string): LocalizedText => ({ en, ru });
const DEFAULT_LOCALE: Locale = "en";

const workDefinitions: WorkDefinition[] = [
  {
    image: "/portfolio/case-02-img.png",
    title: text("Smart Targets\nTraining Application", "Приложение для тренировки по умным мишеням"),
    mobileTitle: text("Smart Targets\nTraining Application", "Умные мишени\nдля тренировок"),
    tags: {
      en: ["Mobile App", "IOT", "Tokens & Variables UI", "JTBD"],
      ru: ["Мобильное приложение", "IoT", "Токены и переменные", "JTBD"],
    },
    impact: [
      { value: "2", label: text("Types of IOT-targets have their own interface layer", "Типа IoT-мишеней со своим интерфейсным слоем") },
      { value: "-86%", label: text("The time spent analyzing the shooting decreased", "Время на анализ стрельбы сократилось") },
      { value: "2mm", label: text("Shot coordinate accuracy across target zones", "Точность координат выстрела по зонам мишени") },
      { value: "<1 s", label: text("Feedback from impact to interface", "От попадания до обратной связи в интерфейсе") },
    ],
    impactStatement: text("Every shot becomes immediate, readable feedback.", "Каждый выстрел превращается в мгновенную и понятную обратную связь."),
    storyEyebrow: text("Real-time Experience", "Опыт в реальном времени"),
    storyTitle: text("Telemetry that stays clear under pressure.", "Телеметрия, которая остаётся понятной под давлением."),
    storyCopy: text(
      "The product translates target signals into a compact training language: hits, timing, zones, split time and progress. I designed the hierarchy for one-handed use, fast scanning and rapid comparison, while the token-based system keeps every state consistent.",
      "Продукт переводит сигналы мишени в компактный язык тренировки: попадания, тайминг, зоны, сплиты и прогресс. Я спроектировал иерархию для работы одной рукой, быстрого сканирования и сравнения, а токенизированная система сохраняет согласованность всех состояний.",
    ),
    roadmap: [
      { title: text("Signal Mapping", "Карта сигналов"), copy: text("Connected sensor events with the actions and decisions a shooter makes during training.", "Связал события датчиков с действиями и решениями стрелка во время тренировки.") },
      { title: text("Training Logic", "Логика тренировки"), copy: text("Structured hits, zones, split time and scoring into a single interaction model.", "Собрал попадания, зоны, сплиты и счёт в единую модель взаимодействия.") },
      { title: text("Field Prototype", "Полевой прототип"), copy: text("Validated one-handed navigation and fast scanning in realistic training conditions.", "Проверил навигацию одной рукой и быстрое считывание данных в реальных условиях.") },
      { title: text("Performance UI", "Рабочий интерфейс"), copy: text("Built a token-based system for dense telemetry, live states and future modes.", "Создал токенизированную систему для плотной телеметрии, состояний в реальном времени и новых режимов.") },
    ],
  },
  {
    image: "/portfolio/case-05-img.png",
    title: text("Sustain & Mitigation\nAI-Platform", "ИИ-платформа устойчивого развития"),
    mobileTitle: text("Sustain & Mitigation\nAI-Platform", "ИИ-платформа\nустойчивого развития"),
    tags: {
      en: ["Grant-oriented product", "Compliance", "End-to-End"],
      ru: ["Грантовый продукт", "Комплаенс", "Сквозная реализация"],
    },
    impact: [
      { value: "86", label: text("Sustainability indicators made operational", "Показателей устойчивости, превращённых в рабочую систему") },
      { value: "6", label: text("Analytical modules in one workspace", "Аналитических модулей в одном пространстве") },
      { value: "3", label: text("Compliance frameworks aligned", "Согласованных фреймворка комплаенса") },
      { value: "1", label: text("Live score for management decisions", "Динамический рейтинг для управленческих решений") },
    ],
    impactStatement: text("Sustainability data turned into an operating system.", "Данные устойчивого развития, превращённые в операционную систему."),
    storyEyebrow: text("Enterprise Platform", "Корпоративная платформа"),
    storyTitle: text("Making compliance useful between reports.", "Комплаенс, полезный не только в момент отчёта."),
    storyCopy: text(
      "I transformed a dense reporting model into a working product for continuous management. The interface connects questionnaires, evidence, indicators, risks and recommendations, giving every role a clear next action instead of another static dashboard.",
      "Я превратил плотную отчётную модель в рабочий продукт для непрерывного управления. Интерфейс связывает анкеты, доказательства, показатели, риски и рекомендации, предлагая каждой роли понятное следующее действие вместо очередного статичного дашборда.",
    ),
    roadmap: [
      { title: text("Criteria Audit", "Аудит критериев"), copy: text("Connected 86 indicators with standards, evidence and real enterprise workflows.", "Связал 86 показателей со стандартами, доказательствами и реальными процессами компании.") },
      { title: text("Role Architecture", "Архитектура ролей"), copy: text("Defined distinct decision paths for managers, analysts, experts and data owners.", "Определил разные пути принятия решений для руководителей, аналитиков, экспертов и владельцев данных.") },
      { title: text("Analytical Prototype", "Аналитический прототип"), copy: text("Tested questionnaires, scores, risks and recommendations as one continuous flow.", "Проверил анкеты, рейтинги, риски и рекомендации как единый непрерывный сценарий.") },
      { title: text("Operating System", "Операционная система"), copy: text("Unified modules and tokens into a platform designed for continuous compliance.", "Объединил модули и токены в платформу для непрерывного управления комплаенсом.") },
    ],
  },
];

export const futureWorkAnchors: FutureWorkAnchor[] = [
  {
    title: "Corporate Video Conferencing Service",
    image: "/portfolio/case-01-img.png",
    desktopImage: "/portfolio/case-01-img-desktop.png",
  },
  {
    title: "ESG Compliance Company Page",
    image: "/portfolio/case-03-img.png",
  },
  {
    title: "Real Estate Developer Site",
    image: "/portfolio/case-04-img.png",
    desktopImage: "/portfolio/case-04-img-desktop.png",
  },
  {
    title: "Business Simulator SaaS Platform",
    image: "/portfolio/case-06-img.png",
  },
];

const localizeWorks = (locale: Locale): Work[] =>
  workDefinitions.map((work) => ({
    image: work.image,
    desktopImage: work.desktopImage,
    title: work.title[locale],
    mobileTitle: work.mobileTitle[locale],
    tags: work.tags[locale],
    impact: work.impact.map((item) => ({ value: item.value, label: item.label[locale] })),
    impactStatement: work.impactStatement[locale],
    storyEyebrow: work.storyEyebrow[locale],
    storyTitle: work.storyTitle[locale],
    storyCopy: work.storyCopy[locale],
    roadmap: work.roadmap.map((step) => ({ title: step.title[locale], copy: step.copy[locale] })),
  }));

const desktopPrinciples = [
  { en: "Empathy", ru: "Эмпатия", icon: "\ue87e" },
  { en: "Curiosity", ru: "Любопытство", icon: "\ue8b6" },
  { en: "Bias for Action", ru: "Склонность к действию", icon: "\uea0b" },
  { en: "Values", ru: "Ценности", icon: "\uead5" },
  { en: "Systems", ru: "Системы", icon: "\ue4fd" },
  { en: "Clarity", ru: "Ясность", icon: "\ue3b4" },
  { en: "Iteration", ru: "Итерации", icon: "\ue863" },
  { en: "Reframing", ru: "Переосмысление", icon: "\ue437" },
  { en: "Ambiguity", ru: "Неопределённость", icon: "\ue8fd" },
  { en: "Prototypes", ru: "Прототипы", icon: "\uea4b" },
  { en: "Context", ru: "Контекст", icon: "\ue87a" },
  { en: "Evidence", ru: "Доказательства", icon: "\uef3e" },
];

const mobilePrinciples = [
  { en: "Empathy", ru: "Эмпатия", icon: "\ue87d" },
  { en: "Curiosity", ru: "Любопытство", icon: "\ue8b6" },
  { en: "Bias for Action", ru: "Действие", icon: "\uea0b" },
  { en: "Values", ru: "Ценности", icon: "\uead5" },
  { en: "Systems", ru: "Системы", icon: "\ue4fd" },
  { en: "Clarity", ru: "Ясность", icon: "\ue3b4" },
  { en: "Iteration", ru: "Итерации", icon: "\ue863" },
  { en: "Reframing", ru: "Переосмысление", icon: "\ue437" },
  { en: "Ambiguity", ru: "Неопределённость", icon: "\ue887" },
  { en: "Prototypes", ru: "Прототипы", icon: "\uea4b" },
  { en: "Context", ru: "Контекст", icon: "\ue87a" },
  { en: "Evidence", ru: "Доказательства", icon: "\uef3e" },
  { en: "Active Listening", ru: "Активное слушание", icon: "\ue023" },
  { en: "Synthesis", ru: "Синтез", icon: "\ue9f4" },
  { en: "Inclusion", ru: "Инклюзивность", icon: "\uf8d9" },
  { en: "Focus", ru: "Фокус", icon: "\ue3dc" },
  { en: "Experiment", ru: "Эксперимент", icon: "\uea3a" },
  { en: "Patterns", ru: "Паттерны", icon: "\uf043" },
  { en: "Momentum", ru: "Импульс", icon: "\ue8e5" },
  { en: "Simplicity", ru: "Простота", icon: "\ue0f0" },
  { en: "Constraints", ru: "Ограничения", icon: "\uf1c2" },
  { en: "Learning", ru: "Обучение", icon: "\ue80c" },
  { en: "Craft", ru: "Мастерство", icon: "\uf10a" },
  { en: "Outcomes", ru: "Результаты", icon: "\ue153" },
];

const accessiblePrinciples = Array.from(
  new Map([...desktopPrinciples, ...mobilePrinciples].map((principle) => [principle.en, principle])).values(),
);

const heroTags = {
  en: [
    "Mixed Metods",
    "Complex Research Workflows",
    "Evidence Led",
    "8+ YOE",
    "Figma to Code / AI-Dev",
    "All Type Prototyping",
    "Atoms / Tokens / Variables",
    "JTBD",
    "Low-end / Hi-end MVP",
    "AI-Driven Research",
    "UI-Kits & Design Systems",
    "CJM",
  ],
  ru: [
    "Figma to Code / AI-Dev",
    "Все виды прототипирования",
    "Атомы / Токены / Переменные",
    "JTBD",
    "Low-end / Hi-end MVP",
    "ИИ-исследования",
    "UI-киты и дизайн-системы",
    "CJM",
  ],
};

const preloaderApps = [
  { name: "Figma", icon: "/portfolio/figma-icon.svg" },
  { name: "Sketch", icon: "/portfolio/sketch-icon.svg" },
  { name: "ChatGPT", icon: "/portfolio/gpt-icon.svg" },
  { name: "Sublime", icon: "/portfolio/sublime-icon.svg" },
  // { name: "Notion", icon: "/portfolio/notion-icon.svg" },
];

const budgetOptions = {
  en: ["Up to $10,000", "$10,000–$30,000", "$30,000–$50,000", "$50,000–$100,000", "$100,000+"],
  ru: ["До $10 000", "$10 000–$30 000", "$30 000–$50 000", "$50 000–$100 000", "От $100 000"],
};

const uiCopy = {
  en: {
    task: "Task",
    language: "Language",
    menuAria: {
      open: "Open menu",
      close: "Close menu",
      closeTask: "Close task form",
      back: "Back to task form",
    },
    navigation: [
      ["Works", "#works"],
      ["Mindset", "#mindset"],
      ["Skills", "#skills"],
      ["Contact", "#contact"],
    ],
    socials: "Socials",
    credits: "Credits",
    name: "Ihar Bahdanau",
    role: "Product Research & Design",
    remote: "Remote / Open to relocation",
    signature: "Ihar Bahdanau · Product Research & Design",
    preloaderBrandDesktop: "Ihar Bahdanau / Portfolio",
    preloaderBrandMobile: "Ihar Bahdanau / Portfolio",
    preloaderTagline: "Turning complexity into clear products.",
    heroName: "Ihar Bahdanau @ Somedesigner",
    heroTitle: ["Product Designer", "UX/CX Analyst"],
    heroDisciplines: "Core disciplines",
    heroIntro: "Helping brands achieve their goals in a digital environment",
    heroIntroLines: ["Helping brands achieve", "their goals in a digital", "environment"],
    year: "yr",
    statDesign: "Multidisciplinary Design",
    statResearch: "UI/UX Design & Research",
    selected: "Selected · 2023—2026",
    recentWorks: "Recent Works",
    readyLines: ["Ready", "for a design", "adventure."],
    newProject: "New project",
    startNewProject: "Start a new project",
    moreProjects: "More projects",
    mindsetTitle: "My Mindset",
    mindsetLeadBefore: "I treat design as a way to ",
    mindsetLeadEmphasis: "reduce uncertainty",
    mindsetLeadAfter: " around real human needs—not as a layer of decoration.",
    mindsetParagraphs: [
      "I begin with empathy: I step into the user’s real constraints, listen for what is not being said, and reframe the brief until the actual problem becomes visible.",
      "Then I move. I prototype early, test assumptions, and let evidence reshape the path. Ambiguity is not a flaw in the process—it is where useful questions begin.",
    ],
    canvasAria: "Interactive infinite canvas of design principles. Drag to explore.",
    canvasHint: "Drag to explore · hover to focus",
    art: "Art can add layers for emotional expression.",
    yes: "Yes",
    designStrong: "Design removes the unnecessary",
    designAfter: " until a functional idea becomes clear.",
    but: "But",
    skillsTitle: "Core Skills",
    skills: [
      {
        title: "Design",
        meta: "UI / GRAPHIC / BRANDS",
        copy: "Building clear visual languages, scalable interfaces, and brand systems that hold together across every touchpoint.",
      },
      {
        title: "Research",
        meta: "UX / CX",
        copy: "Finding the real task through interviews, journey mapping, JTBD, behavioral patterns, and evidence-led product decisions.",
      },
      {
        title: "Creative",
        meta: "KEY VISUAL",
        copy: "Turning strategy into memorable concepts without sacrificing legibility, purpose, or the product’s everyday usefulness.",
      },
      {
        title: "AI-Dev",
        meta: "MCP / CLI / FE / BE",
        copy: "Bridging design and working software with AI-assisted prototyping, design-to-code workflows, and production-minded implementation.",
      },
    ],
    availability: "Available for selected projects",
    footerTitle: "Let’s design something useful, clear and lasting.",
    footerTitleLines: ["Let’s design", "something useful,", "clear and lasting."],
    startProject: "Start a Project",
    backTop: "Back to Top",
    gotVision: ["Got a vision?", "Let's bring it to life."],
    footerNavigation: "Navigation",
    footerWorks: "Works",
    footerServices: "Services",
    project: {
      open: "Open case",
      close: "Close project",
      disciplines: "Project disciplines",
      case: "Case",
      outcome: "Outcome · Selected",
      impact: ["Obtained", "Result"],
      roadmapEyebrow: "Process · Roadmap",
      roadmapTitle: "Roadmap",
      next: "Next project",
      openNext: "Open next case",
      explore: "Explore the work",
      storyImage: "interface presentation",
    },
    form: {
      title: ["Tell me about", "your project"],
      subtitle: "Briefly describe your task, and I will get in touch with you as soon as possible.",
      name: "Name",
      phone: "Phone",
      company: "Company",
      email: "E-mail",
      budget: "Project budget",
      budgetPlaceholder: "Select a range",
      message: "Message",
      messagePlaceholder: "Briefly describe the project: goals, timing, context and key expectations",
      consentBefore: "By clicking “Send Task”, I give my consent to the ",
      consentLink: "processing of my personal data",
      send: "Send Task",
      sending: "Sending…",
      sent: "Task sent.",
      failed: "I could not send the task. Please try again.",
    },
    policy: {
      eyebrow: "Privacy",
      title: "Personal Data Processing Policy",
      effective: "Effective July 23, 2026",
      sections: [
        {
          title: "1. Controller and scope",
          body: "This policy explains how Ihar Bahdanau, Product Research & Design, processes personal data submitted through this portfolio. Questions and privacy requests can be sent to",
        },
        {
          title: "2. Data I collect",
          body: "I may collect your name, phone number, company, e-mail address, preferred project budget and the information you include in your message. Basic technical delivery and security data may also be processed by the hosting infrastructure when you use the website.",
        },
        {
          title: "3. Purpose and legal basis",
          body: "I use this data only to review your request, reply to you, discuss a potential project, maintain the security of the form and keep a necessary record of our communication. The legal basis is your explicit consent, which you may withdraw at any time.",
        },
        {
          title: "4. Processing and recipients",
          body: "Processing may include collection, recording, organisation, storage, use, transmission for message delivery and deletion. Data is not sold and is not used for advertising or automated decision-making. It may be handled by the website hosting provider and Telegram solely to deliver your request.",
        },
        {
          title: "5. Retention and security",
          body: "Enquiries are kept only as long as reasonably necessary to answer you and manage a potential working relationship, normally no longer than 12 months unless a longer period is required by law or an active contract. Reasonable technical and organisational safeguards are used to protect the data.",
        },
        {
          title: "6. Your rights",
          body: "You may request access, correction, deletion, restriction or a copy of your data, object where applicable, and withdraw consent without affecting prior lawful processing. You may also contact the competent data protection authority in your country.",
        },
      ],
    },
  },
  ru: {
    task: "Задача",
    language: "Язык",
    menuAria: {
      open: "Открыть меню",
      close: "Закрыть меню",
      closeTask: "Закрыть форму задачи",
      back: "Вернуться к форме задачи",
    },
    navigation: [
      ["Работы", "#works"],
      ["Подход", "#mindset"],
      ["Навыки", "#skills"],
      ["Контакты", "#contact"],
    ],
    socials: "Соцсети",
    credits: "Автор",
    name: "Игорь Богданов",
    role: "UI/UX и продуктовый дизайнер",
    remote: "Удалённо / Готов к переезду",
    signature: "Игорь Богданов · Product / UI / UX",
    preloaderBrandDesktop: "Игорь Богданов / Портфолио",
    preloaderBrandMobile: "Игорь Богданов / Портфолио",
    preloaderTagline: "Превращаю сложность в понятные продукты.",
    heroName: "Игорь Богданов @ Somedesigner",
    heroTitle: ["UI/UX дизайнер", "CX-аналитик"],
    heroDisciplines: "Ключевые направления",
    heroIntro: "Помогаю брендам достигать целей в цифровой среде",
    heroIntroLines: ["Помогаю брендам", "достигать целей", "в цифровой среде"],
    year: "лет",
    statDesign: "Мультидисциплинарный\nдизайн",
    statResearch: "UI/UX дизайн\nи исследования",
    selected: "Избранное · 2023—2026",
    recentWorks: "Последние работы",
    readyLines: ["Готов", "к дизайн-", "приключению."],
    newProject: "Новый проект",
    startNewProject: "Начать новый проект",
    moreProjects: "Больше проектов",
    mindsetTitle: "Мой подход",
    mindsetLeadBefore: "Я отношусь к дизайну как к способу ",
    mindsetLeadEmphasis: "уменьшать неопределённость",
    mindsetLeadAfter: " вокруг реальных потребностей людей, а не как к слою декора.",
    mindsetParagraphs: [
      "Я начинаю с эмпатии: погружаюсь в реальные ограничения пользователя, слышу то, что осталось невысказанным, и переосмысливаю задачу, пока не становится видна настоящая проблема.",
      "Затем я действую. Рано создаю прототипы, проверяю предположения и позволяю фактам менять направление. Неопределённость — не ошибка процесса, а место, где появляются полезные вопросы.",
    ],
    canvasAria: "Интерактивный бесконечный канвас принципов дизайна. Перемещайте, чтобы исследовать.",
    canvasHint: "Перемещайте · наведите для фокуса",
    art: "Искусство может добавлять слои для эмоционального выражения.",
    yes: "Да",
    designStrong: "Дизайн убирает лишнее",
    designAfter: ", пока функциональная идея не становится ясной.",
    but: "Но",
    skillsTitle: "Ключевые навыки",
    skills: [
      {
        title: "Дизайн",
        meta: "UI / ГРАФИКА / БРЕНДЫ",
        copy: "Создаю ясные визуальные языки, масштабируемые интерфейсы и бренд-системы, которые остаются целостными во всех точках контакта.",
      },
      {
        title: "Исследования",
        meta: "UX / CX",
        copy: "Нахожу реальную задачу через интервью, карту пути клиента, JTBD, поведенческие паттерны и решения, основанные на данных.",
      },
      {
        title: "Креатив",
        meta: "КЛЮЧЕВОЙ ВИЗУАЛ",
        copy: "Превращаю стратегию в запоминающиеся концепции, не жертвуя читаемостью, назначением и повседневной полезностью продукта.",
      },
      {
        title: "ИИ-разработка",
        meta: "MCP / CLI / FE / BE",
        copy: "Соединяю дизайн и работающее ПО через ИИ-прототипирование, design-to-code процессы и ориентированную на production разработку.",
      },
    ],
    availability: "Доступен для новых задач",
    footerTitle: "Давайте создадим что-то полезное, ясное и долговечное.",
    footerTitleLines: ["Давайте", "создадим что-то", "полезное и ясное", "долговечное"],
    startProject: "Начать проект",
    backTop: "Наверх",
    gotVision: ["Есть идея?", "Давайте воплотим её."],
    footerNavigation: "Навигация",
    footerWorks: "Работы",
    footerServices: "Услуги",
    project: {
      open: "Открыть кейс",
      close: "Закрыть проект",
      disciplines: "Направления проекта",
      case: "Кейс",
      outcome: "Результат · Избранное",
      impact: ["Полученный", "результат"],
      roadmapEyebrow: "Процесс · Дорожная карта",
      roadmapTitle: "Roadmap",
      next: "Следующий проект",
      openNext: "Открыть следующий кейс",
      explore: "Посмотреть работу",
      storyImage: "презентация интерфейса",
    },
    form: {
      title: ["Расскажите мне", "о вашем проекте"],
      subtitle: "Кратко опишите задачу, и я свяжусь с вами в ближайшее время.",
      name: "Имя",
      phone: "Телефон",
      company: "Компания",
      email: "E-mail",
      budget: "Бюджет проекта",
      budgetPlaceholder: "Выберите диапазон",
      message: "Сообщение",
      messagePlaceholder: "Кратко опишите проект: цели, сроки, контекст и ключевые ожидания",
      consentBefore: "Нажимая «Отправить задачу», я даю согласие на ",
      consentLink: "обработку моих персональных данных",
      send: "Отправить задачу",
      sending: "Отправка…",
      sent: "Задача отправлена.",
      failed: "Не удалось отправить задачу. Пожалуйста, попробуйте ещё раз.",
    },
    policy: {
      eyebrow: "Конфиденциальность",
      title: "Политика обработки персональных данных",
      effective: "Действует с 23 июля 2026 года",
      sections: [
        {
          title: "1. Оператор и область действия",
          body: "Настоящая политика описывает, как Игорь Богданов, UI/UX и продуктовый дизайнер, обрабатывает персональные данные, переданные через это портфолио. Вопросы и запросы, связанные с конфиденциальностью, можно направлять по адресу",
        },
        {
          title: "2. Какие данные я собираю",
          body: "Я могу собирать ваше имя, номер телефона, название компании, адрес электронной почты, предпочтительный бюджет проекта и информацию из сообщения. При использовании сайта инфраструктура хостинга также может обрабатывать базовые технические данные, необходимые для доставки контента и обеспечения безопасности.",
        },
        {
          title: "3. Цели и правовые основания",
          body: "Я использую данные только для рассмотрения запроса, ответа, обсуждения потенциального проекта, обеспечения безопасности формы и хранения необходимой истории коммуникации. Правовым основанием является ваше явное согласие, которое можно отозвать в любое время.",
        },
        {
          title: "4. Обработка и получатели",
          body: "Обработка может включать сбор, запись, систематизацию, хранение, использование, передачу для доставки сообщения и удаление. Данные не продаются, не используются для рекламы или автоматизированного принятия решений. Хостинг-провайдер и Telegram могут обрабатывать их исключительно для доставки вашего запроса.",
        },
        {
          title: "5. Срок хранения и безопасность",
          body: "Запросы хранятся только столько, сколько разумно необходимо для ответа и управления потенциальными рабочими отношениями, как правило не более 12 месяцев, если более длительный срок не требуется законом или действующим договором. Для защиты данных применяются разумные технические и организационные меры.",
        },
        {
          title: "6. Ваши права",
          body: "Вы можете запросить доступ, исправление, удаление, ограничение обработки или копию своих данных, заявить возражение в предусмотренных законом случаях и отозвать согласие без влияния на законность предшествующей обработки. Вы также можете обратиться в компетентный орган по защите данных своей страны.",
        },
      ],
    },
  },
} as const;

function ChipRail({
  tags,
  auto = false,
  label,
}: {
  tags: string[];
  auto?: boolean;
  label: string;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    const rail = railRef.current;
    const group = groupRef.current;
    if (!rail || !group) return;
    const measure = () => setOverflowing(group.scrollWidth + 16 > rail.clientWidth);
    const observer = new ResizeObserver(measure);
    observer.observe(rail);
    observer.observe(group);
    measure();
    return () => observer.disconnect();
  }, [tags]);

  return (
    <div
      ref={railRef}
      className={`chips-rail ${overflowing ? "is-overflowing" : ""} ${auto ? "is-auto" : ""}`}
      aria-label={label}
    >
      <div className="chips-track">
        <div ref={groupRef} className="chips-group">
          {tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        {auto && (
          <div className="chips-group" aria-hidden="true">
            {tags.map((tag) => <span key={`repeat-${tag}`}>{tag}</span>)}
          </div>
        )}
      </div>
    </div>
  );
}

function MindsetCanvas({ locale }: { locale: Locale }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number | null>(null);
  const stateRef = useRef({
    offsetX: 0,
    offsetY: 0,
    velocityX: 0,
    velocityY: 0,
    down: false,
    lastX: 0,
    lastY: 0,
    focusX: 0,
    focusY: 0,
    hover: false,
    moved: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const sceneCanvas = document.createElement("canvas");
    const sceneContext = sceneCanvas.getContext("2d");
    if (!sceneContext) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let inViewport = false;
    let introStarted = false;
    let introStart = 0;
    const textWidthCache = new Map<string, number>();
    const pointerFine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const overlaysOpen = () =>
      document.body.classList.contains("task-active") ||
      document.body.classList.contains("menu-active");
    const shouldAnimate = () => inViewport && !document.hidden && !overlaysOpen();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, pointerFine.matches ? 1.5 : 1.25);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      sceneCanvas.width = Math.round(width * dpr);
      sceneCanvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      sceneContext.setTransform(dpr, 0, 0, dpr, 0, 0);
      textWidthCache.clear();
      if (!stateRef.current.moved) {
        stateRef.current.focusX = width / 2;
        stateRef.current.focusY = height / 2;
      }
    };

    const roundedRect = (
      target: CanvasRenderingContext2D,
      x: number,
      y: number,
      w: number,
      h: number,
      radius: number,
    ) => {
      const r = Math.min(radius, w / 2, h / 2);
      target.beginPath();
      target.moveTo(x + r, y);
      target.arcTo(x + w, y, x + w, y + h, r);
      target.arcTo(x + w, y + h, x, y + h, r);
      target.arcTo(x, y + h, x, y, r);
      target.arcTo(x, y, x + w, y, r);
      target.closePath();
    };

    const render = (now: number) => {
      frameRef.current = null;
      if (!shouldAnimate()) return;

      const state = stateRef.current;
      if (!state.down) {
        state.offsetX -= reduceMotion.matches ? 0 : 0.205;
        state.offsetX += state.velocityX;
        state.offsetY += state.velocityY;
        state.velocityX *= 0.89;
        state.velocityY *= 0.89;
      }

      sceneContext.clearRect(0, 0, width, height);
      const focusX = pointerFine.matches && state.hover ? state.focusX : width / 2;
      const focusY = pointerFine.matches && state.hover ? state.focusY : height / 2;
      const activePrinciples = pointerFine.matches ? desktopPrinciples : mobilePrinciples;
      const iconFont = pointerFine.matches ? "Material Icons Outlined" : "Material Icons";
      const isRussian = locale === "ru";
      const dx = pointerFine.matches
        ? isRussian
          ? Math.max(238, Math.min(width / 2.25, 292))
          : Math.max(190, Math.min(width / 2.55, 242))
        : isRussian
          ? 236
          : 184;
      const dy = pointerFine.matches
        ? isRussian
          ? Math.max(82, dx * 0.39)
          : Math.max(76, dx * 0.43)
        : isRussian
          ? 68
          : 62;
      const overscan = pointerFine.matches ? 2 : 1;
      const minColumn = Math.floor((-state.offsetX - dx * overscan) / dx);
      const maxColumn = Math.ceil((width - state.offsetX + dx * overscan) / dx);
      const minRow = Math.floor((-state.offsetY - dy * overscan) / dy);
      const maxRow = Math.ceil((height - state.offsetY + dy * overscan) / dy);
      const lens = Math.max(130, Math.min(width, height) * 0.35);
      const lensSquared = 2 * lens * lens;
      const introProgress = reduceMotion.matches
        ? 1
        : Math.min(1, Math.max(0, (now - introStart) / 720));
      const introEase = 1 - Math.pow(1 - introProgress, 3);
      const positionReveal = 0.82 + introEase * 0.18;
      const scaleReveal = 0.46 + introEase * 0.54;

      for (let row = minRow; row <= maxRow; row += 1) {
        for (let column = minColumn; column <= maxColumn; column += 1) {
          const rawX = column * dx + (row % 2 ? dx / 2 : 0) + state.offsetX;
          const rawY = row * dy + state.offsetY;
          const x = focusX + (rawX - focusX) * positionReveal;
          const y = focusY + (rawY - focusY) * positionReveal;
          const deltaFocusX = x - focusX;
          const deltaFocusY = y - focusY;
          const influence = Math.exp(-((deltaFocusX * deltaFocusX) + (deltaFocusY * deltaFocusY)) / lensSquared);
          const baseScale = pointerFine.matches
            ? 0.68 + influence * 0.62
            : 0.62 + influence * 0.5;
          const scale = baseScale * scaleReveal;
          const rawHash = column + row * 5;
          const hash = ((rawHash % activePrinciples.length) + activePrinciples.length) % activePrinciples.length;
          const principle = activePrinciples[hash];
          const label = principle[locale];
          const fontSize = Math.round(pointerFine.matches ? 13 + 7 * scale : 12 + 6 * scale);

          sceneContext.font = `400 ${fontSize}px Geist, Arial, Helvetica, sans-serif`;
          const widthKey = `${label}-${fontSize}`;
          let textWidth = textWidthCache.get(widthKey);
          if (textWidth === undefined) {
            textWidth = sceneContext.measureText(label).width;
            textWidthCache.set(widthKey, textWidth);
          }
          const iconSize = 14 * scale;
          const iconGap = 8 * scale;
          const pillWidth = textWidth + iconSize + iconGap + 32 * scale;
          const pillHeight = 36 * scale;
          const pillX = x - pillWidth / 2;
          const pillY = y - pillHeight / 2;

          roundedRect(sceneContext, pillX, pillY, pillWidth, pillHeight, pillHeight / 2);
          sceneContext.strokeStyle = `rgba(28, 30, 33, ${(0.18 + influence * 0.55) * introEase})`;
          sceneContext.lineWidth = 1;
          sceneContext.stroke();
          sceneContext.fillStyle = `rgba(28, 30, 33, ${(0.38 + influence * 0.62) * introEase})`;
          sceneContext.textAlign = "left";
          sceneContext.textBaseline = "middle";
          sceneContext.font = `400 ${iconSize}px "${iconFont}"`;
          const contentWidth = iconSize + iconGap + textWidth;
          const contentX = x - contentWidth / 2;
          sceneContext.fillText(principle.icon, contentX, y + 0.5);
          sceneContext.font = `400 ${fontSize}px Geist, Arial, Helvetica, sans-serif`;
          sceneContext.fillText(label, contentX + iconSize + iconGap, y + 0.5);

          sceneContext.beginPath();
          sceneContext.arc(x + dx / 2, y + dy / 2, 1.1, 0, Math.PI * 2);
          sceneContext.fillStyle = `rgba(28, 30, 33, ${(0.07 + influence * 0.08) * introEase})`;
          sceneContext.fill();
        }
      }

      context.clearRect(0, 0, width, height);
      context.filter = "none";
      context.globalCompositeOperation = "source-over";
      context.drawImage(sceneCanvas, 0, 0, width, height);

      const edge = Math.min(104, width * 0.22);
      context.globalCompositeOperation = "destination-in";
      const fade = context.createLinearGradient(0, 0, width, 0);
      fade.addColorStop(0, "rgba(0,0,0,0)");
      fade.addColorStop(Math.min(0.18, edge / width), "rgba(0,0,0,1)");
      fade.addColorStop(Math.max(0.82, 1 - edge / width), "rgba(0,0,0,1)");
      fade.addColorStop(1, "rgba(0,0,0,0)");
      context.fillStyle = fade;
      context.fillRect(0, 0, width, height);
      context.globalCompositeOperation = "source-over";

      if (shouldAnimate()) frameRef.current = window.requestAnimationFrame(render);
    };

    const syncAnimation = () => {
      if (shouldAnimate()) {
        if (frameRef.current === null) frameRef.current = window.requestAnimationFrame(render);
      } else if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };

    const point = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      return { x: event.clientX - rect.left, y: event.clientY - rect.top };
    };
    const pointerDown = (event: PointerEvent) => {
      const p = point(event);
      canvas.setPointerCapture(event.pointerId);
      Object.assign(stateRef.current, {
        down: true,
        lastX: p.x,
        lastY: p.y,
        focusX: p.x,
        focusY: p.y,
        velocityX: 0,
        velocityY: 0,
        hover: true,
        moved: true,
      });
    };
    const pointerMove = (event: PointerEvent) => {
      const p = point(event);
      const state = stateRef.current;
      state.focusX = p.x;
      state.focusY = p.y;
      state.hover = true;
      if (state.down) {
        const deltaX = p.x - state.lastX;
        const deltaY = p.y - state.lastY;
        state.offsetX += deltaX;
        state.offsetY += deltaY;
        state.velocityX = Math.max(-24, Math.min(24, deltaX));
        state.velocityY = Math.max(-24, Math.min(24, deltaY));
        state.lastX = p.x;
        state.lastY = p.y;
      }
    };
    const pointerUp = (event: PointerEvent) => {
      stateRef.current.down = false;
      if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    };
    const pointerLeave = () => {
      stateRef.current.hover = false;
      stateRef.current.down = false;
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        inViewport = entry.isIntersecting;
        if (inViewport && !introStarted) {
          introStarted = true;
          introStart = performance.now();
        }
        syncAnimation();
      },
      { rootMargin: "80px 0px", threshold: 0.01 },
    );
    visibilityObserver.observe(canvas);
    const bodyObserver = new MutationObserver(syncAnimation);
    bodyObserver.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    document.addEventListener("visibilitychange", syncAnimation);
    Promise.all([
      document.fonts.load('18px "Material Icons"'),
      document.fonts.load('18px "Material Icons Outlined"'),
    ]).then(() => {
      resize();
      syncAnimation();
    });
    canvas.addEventListener("pointerdown", pointerDown);
    canvas.addEventListener("pointermove", pointerMove);
    canvas.addEventListener("pointerup", pointerUp);
    canvas.addEventListener("pointercancel", pointerUp);
    canvas.addEventListener("pointerleave", pointerLeave);
    resize();
    syncAnimation();

    return () => {
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      bodyObserver.disconnect();
      document.removeEventListener("visibilitychange", syncAnimation);
      canvas.removeEventListener("pointerdown", pointerDown);
      canvas.removeEventListener("pointermove", pointerMove);
      canvas.removeEventListener("pointerup", pointerUp);
      canvas.removeEventListener("pointercancel", pointerUp);
      canvas.removeEventListener("pointerleave", pointerLeave);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, [locale]);

  return (
    <div className="mindset-canvas-wrap">
      <canvas
        ref={canvasRef}
        className="mindset-canvas"
        aria-label={uiCopy[locale].canvasAria}
      />
      <p className="canvas-hint"><span /> {uiCopy[locale].canvasHint}</p>
      <ul className="sr-only">
        {accessiblePrinciples.map((principle) => <li key={principle.en}>{principle[locale]}</li>)}
      </ul>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

type ProjectOrigin = {
  x: number;
  y: number;
  width: number;
  height: number;
};

function WorkImage({
  work,
  alt,
  loading,
}: {
  work: Work;
  alt: string;
  loading?: "eager" | "lazy";
}) {
  return (
    <picture className="work-picture">
      {work.desktopImage && <source media="(min-width: 1024px)" srcSet={work.desktopImage} />}
      <img src={work.image} alt={alt} loading={loading} />
    </picture>
  );
}

type CaseMetric = {
  value: string;
  label: LocalizedText;
};

type LocalizedCell = string | LocalizedText;

type CaseStageItem = {
  eyebrow: LocalizedCell;
  copy: LocalizedText;
  emphasis?: LocalizedCell;
  flow?: boolean;
};

type CaseStage = {
  label: LocalizedText;
  items: CaseStageItem[];
};

type CaseTextBlock = {
  eyebrow: LocalizedText;
  title: LocalizedText;
  copy?: LocalizedText;
};

const smartTargetsAssets = {
  hero: "/portfolio/smart-targets/hero.png",
  grain: "/portfolio/smart-targets/grain.png",
  grainDark: "/portfolio/smart-targets/grain-dark.png",
  projectCore: "/portfolio/smart-targets/project-core.png",
  projectCoreFigma: "/portfolio/smart-targets/project-core-figma.png",
  discoveryJelena: "/portfolio/smart-targets/discovery-jelena.png",
  discoverySerg: "/portfolio/smart-targets/discovery-serg.png",
  discoveryDmitry: "/portfolio/smart-targets/discovery-dmitry.png",
  keyDecisionSeparateMode: "/portfolio/smart-targets/key-decision-separate-mode.png",
  keyDecisionShootingLog: "/portfolio/smart-targets/key-decision-shooting-log.png",
  keyDecisionTrainerMode: "/portfolio/smart-targets/key-decision-trainer-mode.png",
  keyDecisionLiveTraining: "/portfolio/smart-targets/key-decision-live-training.png",
  keyDecisionPostTrainingSummary: "/portfolio/smart-targets/key-decision-post-training-summary.png",
  keyDecisionPostTrainingDetails: "/portfolio/smart-targets/key-decision-post-training-details.png",
  outcomeHero: "/portfolio/smart-targets/outcome-hero.png",
  outcomeFinalGraphic: "/portfolio/smart-targets/outcome-final-graphic.png",
  deviceBack: "/portfolio/smart-targets/device-back.png",
  deviceA: "/portfolio/smart-targets/device-screen-a.png",
  deviceB: "/portfolio/smart-targets/device-screen-b.png",
  deviceC: "/portfolio/smart-targets/device-screen-c.png",
  deviceD: "/portfolio/smart-targets/device-screen-d.png",
  deviceE: "/portfolio/smart-targets/device-screen-e.png",
};

const smartTargetsImpact: CaseMetric[] = [
  { value: "2", label: text("Types of IOT-targets have their own interface layer", "Типа IoT-мишеней со своим интерфейсным слоем") },
  { value: "-86%", label: text("The time spent analyzing the shooting decreased", "Время на анализ стрельбы сократилось") },
  { value: "2mm", label: text("Shot coordinate accuracy across target zones", "Точность координат выстрела по зонам мишени") },
  { value: "<1 s", label: text("Feedback from hardware to interface", "Обратная связь от оборудования к интерфейсу") },
];

const smartTargetsFinalImpact: CaseMetric[] = [
  { value: "-57%", label: text("Task Completion Time\nActive Training", "Время выполнения задачи\nАктивная тренировка") },
  { value: "-50%", label: text("Interpretation Errors\nActive Training", "Ошибки интерпретации\nАктивная тренировка") },
  { value: "4/4", label: text("Actionable Insights Identified\nPost-Training Analysis", "Практические выводы найдены\nАнализ после тренировки") },
  { value: "100%", label: text("Analysis Tasks Completed\nPost-Training Analysis", "Аналитические задачи завершены\nАнализ после тренировки") },
];

const smartTargetsOutcome = {
  eyebrow: text("Outcome", "Результат"),
  title: text("The right information, at the right moment.", "Правильная информация в правильный момент."),
  copyBefore: text(
    "The key insight was that shooters don't need less information - ",
    "Ключевой вывод: стрелкам не нужно меньше информации - ",
  ),
  copyStrong: text(
    "they need the right information at the right moment.",
    "им нужна правильная информация в правильный момент.",
  ),
  copyAfter: text(
    "During active training, a focused stream of critical real-time data reduces cognitive load and helps shooters stay in the flow. Once the session ends, the context changes: with attention no longer divided, the shooter can engage with a richer layer of data to understand performance and identify areas for improvement.\n\nThe resulting experience supports a continuous loop:",
    "Во время активной тренировки сфокусированный поток критичных данных в реальном времени снижает когнитивную нагрузку и помогает стрелкам оставаться в потоке. Когда сессия завершена, контекст меняется: внимание больше не разделено, и стрелок может работать с более глубоким слоем данных, чтобы понять результат и зоны роста.\n\nИтоговый опыт поддерживает непрерывный цикл:",
  ),
  loop: text("FOCUS → PERFORM → REVIEW → LEARN → IMPROVE", "ФОКУС → ДЕЙСТВИЕ → РАЗБОР → ОБУЧЕНИЕ → УЛУЧШЕНИЕ"),
};

const smartTargetsReflection = {
  eyebrow: text("Reflection", "Вывод"),
  title: text("Information density should follow the user's cognitive state.", "Плотность информации должна следовать когнитивному состоянию пользователя."),
  copy: text(
    "This shifted my approach from designing individual screens to designing a context-aware information system that supports the full training loop.",
    "Это сместило мой подход от проектирования отдельных экранов к контекстной информационной системе, которая поддерживает полный тренировочный цикл.",
  ),
};

const smartTargetsRoleRows = [
  {
    label: text("Responsibility", "Ответственность"),
    body: text(
      "User scenario generation; information architecture; interactive prototypes; visual system; components and states; delivery of the solution to developers.",
      "Пользовательские сценарии; информационная архитектура; интерактивные прототипы; визуальная система; компоненты и состояния; передача решения разработчикам.",
    ),
  },
  {
    label: text("In Team", "В команде"),
    body: text(
      "Identifying technical limitations; Training mode logic; Telemetry accuracy testing; MVP prioritization.",
      "Выявление технических ограничений; логика тренировочного режима; тестирование точности телеметрии; приоритизация MVP.",
    ),
  },
];

const smartTargetsMetaRows = [
  { label: text("Scope", "Объём"), value: text("Research, UX, UI, Design System", "Исследование, UX, UI, дизайн-система") },
  { label: text("Team", "Команда"), value: text("PM, Engineers, Hardware", "PM, инженеры, оборудование") },
  { label: text("Duration", "Длительность"), value: text("12 months", "12 месяцев") },
  { label: text("Status", "Статус"), value: text("Launched", "Запущено") },
];

const smartTargetsSteps = [
  {
    number: "01",
    eyebrow: text("Challenge", "Вызов"),
    copy: text(
      "Complex target's data was difficult to interpret during active session - split shots, bullet velocity, flight angle and impact coordinates.",
      "Сложные данные мишени было трудно интерпретировать во время активной сессии: сплиты, скорость пули, угол полёта и координаты попадания.",
    ),
  },
  {
    number: "02",
    eyebrow: text("My Contribution", "Мой вклад"),
    copy: text(
      "I analyzed the IPSC shooting methodology, developed a model of interaction within the key rules, designed the main data flows and created a scalable interface system.",
      "Я проанализировал методологию IPSC, разработал модель взаимодействия в рамках ключевых правил, спроектировал основные потоки данных и масштабируемую интерфейсную систему.",
    ),
  },
  {
    number: "03",
    eyebrow: text("Outcome", "Результат"),
    copy: text(
      "One environment connected session setup, live feedback and post-training analysis.",
      "Единая среда связала настройку сессии, обратную связь в реальном времени и анализ после тренировки.",
    ),
  },
];

const smartTargetsProjectCore = {
  eyebrow: text("Project Core", "Ядро проекта"),
  title: text("From complex hardware telemetry to fast readable action", "От сложной телеметрии оборудования к быстрым и понятным действиям"),
  copy: text(
    "A Smart Targets Training Application - that turns target telemetry into immediate, readable feedback during live shooting sessions.",
    "Приложение Smart Targets превращает телеметрию мишени в мгновенную и понятную обратную связь во время живых тренировок.",
  ),
  points: smartTargetsSteps,
};

const smartTargetsDiscovery = {
  eyebrow: text("Discovery", "Исследование"),
  title: text("Interview. Analysis. Hypothesis.", "Интервью. Анализ. Гипотеза."),
  copy: text(
    "Initial assumptions were based on stakeholder interviews and domain analysis. Field testing was planned for the next phase of product development.",
    "Первичные предположения строились на интервью со стейкхолдерами и анализе предметной области. Полевое тестирование было запланировано на следующую фазу развития продукта.",
  ),
  methodEyebrow: text("Discovery / Version 1", "Исследование / Версия 1"),
  methodTitle: text("Jobs to Be Done", "Jobs to Be Done"),
  methodCopy: text(
    "Based on JTBD interviews with a small group of competitive IPSC shooters, three primary triggers for developing the initial product hypotheses were identified:",
    "На базе JTBD-интервью с небольшой группой соревнующихся IPSC-стрелков были выявлены три ключевых триггера для формирования первых продуктовых гипотез:",
  ),
};

const smartTargetsDiscoveryQuotes = [
  {
    avatar: smartTargetsAssets.discoveryJelena,
    name: "Jelena Davies",
    role: text("Trainer in practical IPSC-shooting", "Тренер по практической IPSC-стрельбе"),
    quote: text(
      "The desire to reduce cognitive load during training",
      "Желание снизить когнитивную нагрузку во время тренировки",
    ),
  },
  {
    avatar: smartTargetsAssets.discoverySerg,
    name: "Serg Terentev",
    role: text("A practicing sniper, 30+ years of experience", "Практикующий снайпер, опыт 30+ лет"),
    quote: text(
      "Reduce overall training time by receiving all necessary telemetry on a phone",
      "Сократить общее время тренировки, получая всю необходимую телеметрию на телефоне",
    ),
  },
  {
    avatar: smartTargetsAssets.discoveryDmitry,
    name: "Dmitry Fedoseev",
    role: text("IPSC shooter and blogger, Gun Gun Style", "IPSC-стрелок и блогер, Gun Gun Style"),
    quote: text(
      "The desire to improve shooting performance, and multitool setting",
      "Желание улучшать результативность стрельбы и гибко настраивать инструмент",
    ),
  },
];

const smartTargetsKeyDecisionOne = {
  eyebrow: text("Key Decision 01", "Ключевое решение 01"),
  title: text("Separate action from analysis.", "Разделить действие и анализ."),
  copy: text(
    "From the initial interview session, right through to the field research, it became clear that shooters value both real-time telemetry and the shooting log. Therefore, the decision was made to design the first version of the main screen as separate modules: the main screen with the target scoreboard, the main target telemetry, and the shooting log with detailed telemetry and shooting calculations. The ability to switch modes was also added, with a focus on the shooting log.",
    "От первых интервью до полевого исследования стало понятно, что стрелкам важны и телеметрия в реальном времени, и журнал стрельбы. Поэтому первая версия главного экрана была разделена на модули: экран с табло мишени, основная телеметрия мишени и журнал стрельбы с детальными расчетами. Также была добавлена возможность переключать режимы с акцентом на журнал.",
  ),
};

const smartTargetsKeyDecisionVisuals = [
  {
    label: text("Separate Mode", "Раздельный режим"),
    image: smartTargetsAssets.keyDecisionSeparateMode,
  },
  {
    label: text("Shooting Log Mode", "Режим журнала стрельбы"),
    image: smartTargetsAssets.keyDecisionShootingLog,
  },
];

const smartTargetsKeyDecisionValidation = {
  title: text("The first hierarchy was wrong.", "Первая иерархия оказалась неверной."),
  copy: text(
    "Field research revealed a clear need to re-prioritize the hierarchy of displayed data, shifting the focus from the shooting log to live telemetry - what's happening in the moment.",
    "Полевое исследование показало необходимость пересобрать иерархию данных: сместить фокус с журнала стрельбы на телеметрию в реальном времени — то, что происходит в моменте.",
  ),
  cardEyebrow: text("Validation / Version 2", "Валидация / Версия 2"),
  cardTitle: text("Field Research", "Полевое исследование"),
  hypothesisTitle: text("Hypothesis", "Гипотеза"),
  hypothesisCopy: text(
    "The user considers the indicator important, but does not actually notice it in the interface. I adapted the presentation of information to the actual user behavior.",
    "Пользователь считает показатель важным, но фактически не замечает его в интерфейсе. Я адаптировал подачу информации под реальное поведение пользователя.",
  ),
  hypothesisResult: text(
    "Version 2 should allow users to find important educational information faster and with less effort.",
    "Вторая версия должна помочь пользователям находить важную тренировочную информацию быстрее и с меньшими усилиями.",
  ),
  targetTitle: text("Target Group", "Целевая группа"),
};

const smartTargetsTargetGroup = [
  {
    label: text("Participant 01 / IPSC Coach", "Участник 01 / IPSC-тренер"),
    copy: text(
      "Understand overall training performance and identify areas for improvement",
      "Понять общую эффективность тренировки и зоны для улучшения",
    ),
  },
  {
    label: text("Participant 02 / Precision / Long-range Shooter", "Участник 02 / стрелок на дальние дистанции"),
    copy: text(
      "Analyze technical performance and identify deviations in shot results.",
      "Проанализировать техническое выполнение и выявить отклонения в результатах выстрелов.",
    ),
  },
  {
    label: text("Participant 03 / Regular IPSC shooter", "Участник 03 / IPSC-стрелок"),
    copy: text(
      "Quickly understand current performance and session results.",
      "Быстро понять текущую эффективность и результаты сессии.",
    ),
  },
];

const smartTargetsFieldStages: CaseStage[] = [
  {
    label: text("Baseline", "Базовый сценарий"),
    items: [
      {
        eyebrow: text("Task 1", "Задача 1"),
        copy: text(
          "\"You're conducting a training session as a shooter/coach. Tell us about the process, the structure, what's going on, and the results.\"",
          "\"Вы проводите тренировку как стрелок/тренер. Расскажите о процессе, структуре, происходящем и результатах.\"",
        ),
      },
      {
        eyebrow: text("Research", "Метрика"),
        copy: text(
          "Time to first correct answer; Number of errors; Number of follow-up questions; Which elements the user notices first.",
          "Время до первого правильного ответа; количество ошибок; количество уточняющих вопросов; элементы, которые пользователь замечает первыми.",
        ),
      },
    ],
  },
  {
    label: text("Information Retrieval Tasks", "Задачи на поиск информации"),
    items: [
      {
        eyebrow: text("Task 01 - Findability", "Задача 01 - поиск"),
        copy: text("\"Which type of data performed best?\"", "\"Какой тип данных показал лучший результат?\""),
      },
      {
        eyebrow: text("Task 02 - Anomaly", "Задача 02 - аномалия"),
        copy: text("\"Which type of data requires attention?\"", "\"Какой тип данных требует внимания?\""),
      },
      {
        eyebrow: text("Task 02 - Comparison", "Задача 03 - сравнение"),
        copy: text("\"What is the main difference between Version 1 and Version 2?\"", "\"В чем главное отличие первой версии от второй?\""),
      },
    ],
  },
  {
    label: text("Qualitative Interview", "Качественное интервью"),
    items: [
      { eyebrow: "Q1", copy: text("\"How easy was it to understand the information on this screen?\"", "\"Насколько легко было понять информацию на этом экране?\"") },
      { eyebrow: "Q2", copy: text("\"How confident are you that you understood the situation correctly?\"", "\"Насколько вы уверены, что правильно поняли ситуацию?\"") },
      { eyebrow: "Q3", copy: text("\"What did you notice first?\"", "\"Что вы заметили первым?\"") },
      { eyebrow: "Q4", copy: text("\"What information was difficult to find?\"", "\"Какую информацию было трудно найти?\"") },
      { eyebrow: "Q5", copy: text("\"What information did you expect to see but didn't notice immediately?\"", "\"Какую информацию вы ожидали увидеть, но не заметили сразу?\"") },
    ],
  },
];

const smartTargetsUxDecision = {
  label: text("UX Decision", "UX-решение"),
  copy: text(
    "Version 2 improved information findability and comprehension, allowing users to identify critical training data faster and with greater confidence. A decision was made to divide the main training screen into two data models:",
    "Вторая версия улучшила поиск и понимание информации, позволяя пользователям быстрее и увереннее определять критичные тренировочные данные. Было принято решение разделить главный тренировочный экран на две модели данных:",
  ),
  items: [
      {
        eyebrow: text("01 - Trainer Mode", "01 - Режим тренера"),
        emphasis: text("Observe → Analysis → Adjust", "Наблюдение → Анализ → Коррекция"),
        copy: text(
          "Observe → Analysis → Adjust. An integrated data model that enables the supervising coach to analyze performance and adjust the shooter's behavior in real time during training.",
          "Наблюдение → Анализ → Коррекция. Интегрированная модель данных для тренера, которая помогает анализировать результат и корректировать поведение стрелка в реальном времени.",
        ),
      },
      {
        eyebrow: text("02 - Live Training", "02 - Активная тренировка"),
        emphasis: text("Act → Observe → React", "Действие → Наблюдение → Реакция"),
        copy: text(
          "Act → Observe → React. A simplified, high-priority data model focused on immediate feedback and situational awareness. Only information required to make decisions during training is surfaced.",
          "Действие → Наблюдение → Реакция. Упрощенная модель данных с приоритетом на мгновенную обратную связь и ситуационную осведомленность. Показывается только информация, нужная для решений во время тренировки.",
        ),
      },
  ],
};

const smartTargetsKeyDecisionFinalVisuals = [
  {
    label: text("Trainer Mode", "Режим тренера"),
    image: smartTargetsAssets.keyDecisionTrainerMode,
  },
  {
    label: text("Live Training", "Активная тренировка"),
    image: smartTargetsAssets.keyDecisionLiveTraining,
  },
];

const smartTargetsContextRows: LocalizedCell[][] = [
  [text("User State", "Состояние пользователя"), text("Focused", "Сфокусирован")],
  [text("Environment", "Среда"), text("Dynamic", "Динамичная")],
  [text("Attention", "Внимание"), text("Divided", "Разделено")],
  [text("Time pressure", "Давление времени"), text("High", "Высокое")],
  [text("Primary goal", "Главная цель"), text("Monitor performance", "Следить за результатом")],
  [text("Information need", "Потребность в данных"), text("Critical signals", "Критичные сигналы")],
  [text("Information density", "Плотность информации"), text("Low", "Низкая")],
  [text("Interaction", "Взаимодействие"), text("Glanceable", "Быстрое считывание")],
  [text("UI priority", "UI-приоритет"), text("Speed", "Скорость")],
];

const smartTargetsContextComparisonRows: LocalizedCell[][] = [
  [text("Context", "Контекст"), text("Live-Training", "Активная тренировка")],
  ...smartTargetsContextRows,
];

const smartTargetsResearchRows: LocalizedCell[][] = [
  [text("Metric", "Метрика"), text("Version 1", "Версия 1"), text("Version 2", "Версия 2"), text("Impact", "Эффект")],
  [text("Task completion time", "Время выполнения задачи"), text("6.0 sec", "6.0 с"), text("2.6 sec", "2.6 с"), "-57%"],
  [text("Time to first correct answer", "Время до первого верного ответа"), text("3.5 sec", "3.5 с"), text("2.5 sec", "2.5 с"), "-29%"],
  [text("Errors", "Ошибки"), "1.0", "0.5", "-50%"],
  [text("Perceived ease", "Ощущаемая простота"), "4.8 / 7", "6.0 / 7", "+25%"],
  [text("Confidence", "Уверенность"), "5.0 / 7", "6.2 / 7", "+24%"],
];

const smartTargetsKeyDecisionTwo = {
  eyebrow: text("Key Decision 02", "Ключевое решение 02"),
  title: text("One data source. Two cognitive contexts.", "Один источник данных. Два когнитивных контекста."),
  copy: text(
    "As I mentioned above, real-time data impacts performance in live shooting sessions. But it's also important for the user to subsequently monitor and record their sessions in detail. If training data has two fundamentally different moments of use - this is where the need for a context-driven data architecture.",
    "Как уже было видно выше, данные в реальном времени влияют на результат во время активной сессии. Но пользователю также важно позже подробно просматривать и фиксировать тренировку. Если у тренировочных данных есть два принципиально разных момента использования, возникает потребность в контекстной архитектуре данных.",
  ),
};

const smartTargetsKeyDecisionTwoValidation = {
  cardEyebrow: text("Validation", "Валидация"),
  cardTitle: text("Field Research", "Полевое исследование"),
  title: text("Concept Validation", "Валидация концепции"),
  subtitle: text("Success context mismatch", "Несовпадение контекстов успеха"),
  copy: text(
    "The first design iteration successfully matched the analytical needs identified during Field Research.\n\nThe live training interface intentionally limits information to critical real-time data. This reduces cognitive load during the session and allows the post-training experience to introduce a richer analytical layer without overwhelming the user.",
    "Первая дизайн-итерация подтвердила аналитические потребности, выявленные во время полевого исследования.\n\nИнтерфейс активной тренировки намеренно ограничивает данные до критичных сигналов в реальном времени. Это снижает когнитивную нагрузку во время сессии и позволяет сценарию после тренировки раскрывать более глубокий аналитический слой без перегрузки пользователя.",
  ),
  conclusion: text(
    "Less information during training → Better focus → More capacity for analysis after training",
    "Меньше информации во время тренировки → больше фокуса → больше ресурса на анализ после тренировки",
  ),
};

const smartTargetsKeyDecisionTwoHypotheses = [
  {
    title: text("Hypothesis - 01", "Гипотеза - 01"),
    copy: text(
      "Shooters don't need all training data at once. They need information progressively, according to the phase of the training session. During training, shooters need immediate signals. After training, they need context and detail.",
      "Стрелкам не нужны все тренировочные данные сразу. Информация должна раскрываться постепенно, в зависимости от фазы тренировки: во время сессии нужны мгновенные сигналы, после сессии - контекст и детали.",
    ),
  },
  {
    title: text("Hypothesis - 02", "Гипотеза - 02"),
    copy: text(
      "If detailed training data is presented after the session, when the shooter is no longer under time pressure, the user can explore a richer set of metrics and derive actionable insights from the training.",
      "Если подробные данные показывать после сессии, когда стрелок уже не находится под давлением времени, пользователь может изучать более богатый набор метрик и получать прикладные выводы из тренировки.",
    ),
  },
  {
    title: text("Research Question", "Исследовательский вопрос"),
    copy: text(
      "How do shooters make sense of their performance after a training session?",
      "Как стрелки осмысляют свой результат после тренировочной сессии?",
    ),
  },
];

const smartTargetsKeyDecisionTwoTargetGroup = [
  {
    label: text("Participant 01 / IPSC Coach", "Участник 01 / IPSC-тренер"),
    copy: text("What is the first thing a shooter wants to know after a session ends?", "Что стрелок хочет понять первым после завершения сессии?"),
  },
  {
    label: text("Participant 02 / Precision / Long-range Shooter", "Участник 02 / стрелок на дальние дистанции"),
    copy: text("What data helps him understand the result?", "Какие данные помогают ему понять результат?"),
  },
  {
    label: text("Participant 03 / Regular IPSC shooter", "Участник 03 / IPSC-стрелок"),
    copy: text("How does he move from the overall result to the details?", "Как он переходит от общего результата к деталям?"),
  },
  {
    label: text("Participant 04 / IPSC Amateur shooter", "Участник 04 / IPSC-любитель"),
    copy: text("What data helps him make a decision about the next session?", "Какие данные помогают ему принять решение о следующей тренировке?"),
  },
];

const smartTargetsKeyDecisionTwoStages: CaseStage[] = [
  {
    label: text("Observe", "Наблюдение"),
    items: [
      {
        eyebrow: text("Task 1", "Задача 1"),
        copy: text(
          "Observe the real post-training behavior:\n\n\"Your training session is finished. Please review your results and tell me how the session went.\"",
          "Наблюдение за реальным поведением после тренировки:\n\n\"Тренировочная сессия завершена. Посмотрите результаты и расскажите, как прошла тренировка.\"",
        ),
      },
    ],
  },
  {
    label: text("Analytical Workflow", "Аналитический сценарий"),
    items: [
      {
        eyebrow: text("Task 1", "Задача 1"),
        copy: text("\"Review your training session and tell me how you performed.\"", "\"Просмотрите тренировочную сессию и расскажите, как вы выступили.\""),
      },
      {
        eyebrow: text("Example", "Пример"),
        flow: true,
        copy: text(
          "Overall result\n↓\nHit Factor\n↓\nTarget A vs Target B\n↓\nHit distribution\n↓\nIdentify weak area\n↓\nTraining conclusion",
          "Общий результат\n↓\nHit Factor\n↓\nМишень A vs мишень B\n↓\nРаспределение попаданий\n↓\nОпределение слабой зоны\n↓\nВывод по тренировке",
        ),
      },
    ],
  },
  {
    label: text("Contextual Interview", "Контекстное интервью"),
    items: [
      { eyebrow: text("Q1 - Primary Information Need", "Q1 - главная потребность"), copy: text("“What did you want to understand first?”", "“Что вы хотели понять первым?”") },
      { eyebrow: text("Q2 - High-Value Metrics", "Q2 - ценные метрики"), copy: text("“What helped you understand your performance?”", "“Что помогло вам понять свой результат?”") },
      { eyebrow: text("Q3 - Natural Information Flow", "Q3 - естественный поток"), copy: text("“What did you look at next?”", "“На что вы посмотрели дальше?”") },
      { eyebrow: text("Q4 - Information Gaps", "Q4 - пробелы в данных"), copy: text("“Was anything missing?”", "“Чего-то не хватало?”") },
      { eyebrow: text("Q5 - Action Impact", "Q5 - влияние на действие"), copy: text("“What would you change in your next training session?”", "“Что бы вы изменили в следующей тренировке?”") },
    ],
  },
  {
    label: text("UX Decision", "UX-решение"),
    items: [
      {
        eyebrow: text("Decision", "Решение"),
        copy: text(
          "I designed two contextual data models around the user's mental state and task (progressive disclosure by training phase):",
          "Я спроектировал две контекстные модели данных вокруг состояния пользователя и его задачи: постепенное раскрытие информации по фазам тренировки.",
        ),
      },
      {
        eyebrow: text("01 - Live Training", "01 - Активная тренировка"),
        emphasis: text("Act → Observe → React", "Действие → Наблюдение → Реакция"),
        copy: text(
          "Act → Observe → React. A simplified, high-priority data model focused on immediate feedback and situational awareness. Only information required to make decisions during training is surfaced.",
          "Действие → Наблюдение → Реакция. Упрощенная приоритетная модель для мгновенной обратной связи и ситуационной осведомленности.",
        ),
      },
      {
        eyebrow: text("02 - Post-Training Analysis", "02 - Анализ после тренировки"),
        emphasis: text("Review → Compare → Understand", "Разбор → Сравнение → Понимание"),
        copy: text(
          "Review → Compare → Understand. A richer, multidimensional data model that allows users to explore performance retrospectively, identify patterns, and understand the causes behind their results.",
          "Разбор → Сравнение → Понимание. Более глубокая многомерная модель данных для ретроспективного анализа, поиска паттернов и понимания причин результата.",
        ),
      },
    ],
  },
];

const smartTargetsKeyDecisionTwoVisuals = [
  {
    label: text("Post-Training Analysis", "Анализ после тренировки"),
    image: smartTargetsAssets.keyDecisionPostTrainingSummary,
  },
  {
    label: text("Post-Training Analysis", "Анализ после тренировки"),
    image: smartTargetsAssets.keyDecisionPostTrainingDetails,
  },
];

const smartTargetsContextComparisonFullRows: LocalizedCell[][] = [
  [text("Context", "Контекст"), text("Live-Training", "Активная тренировка"), text("Post-Training", "После тренировки")],
  [text("User State", "Состояние пользователя"), text("Focused", "Сфокусирован"), text("Relaxed", "Расслаблен")],
  [text("Environment", "Среда"), text("Dynamic", "Динамичная"), text("Stable", "Стабильная")],
  [text("Attention", "Внимание"), text("Divided", "Разделено"), text("Available", "Доступно")],
  [text("Time pressure", "Давление времени"), text("High", "Высокое"), text("Low", "Низкое")],
  [text("Primary goal", "Главная цель"), text("Monitor performance", "Следить за результатом"), text("Analyze performance", "Анализировать результат")],
  [text("Information need", "Потребность в данных"), text("Critical signals", "Критичные сигналы"), text("Full context", "Полный контекст")],
  [text("Information density", "Плотность информации"), text("Low", "Низкая"), text("Medium / High", "Средняя / высокая")],
  [text("Interaction", "Взаимодействие"), text("Glanceable", "Быстрое считывание"), text("Exploratory", "Исследование деталей")],
  [text("UI priority", "UI-приоритет"), text("Speed", "Скорость"), text("Depth", "Глубина")],
];

const smartTargetsKeyDecisionTwoValidationTasks = {
  label: text("Validation", "Валидация"),
  items: [
    { eyebrow: text("Task 1", "Задача 1"), copy: text("Tell me how your training session went.", "Расскажите, как прошла ваша тренировка.") },
    { eyebrow: text("Task 2", "Задача 2"), copy: text("Identify the area where you performed worst.", "Определите зону, где результат был хуже всего.") },
    {
      eyebrow: text("Task 3", "Задача 3"),
      copy: text(
        "Based on these results, what would you focus on in your next training session?",
        "На чем бы вы сфокусировались в следующей тренировке, опираясь на эти результаты?",
      ),
    },
  ],
};

const smartTargetsKeyDecisionTwoSuccessRows: LocalizedCell[][] = [
  [text("Success Metric", "Метрика успеха"), text("Result", "Результат")],
  [text("Participants who successfully understood their overall performance", "Участники, которые поняли общий результат"), "4/4"],
  [text("Participants who identified a specific weakness", "Участники, которые нашли конкретную слабую зону"), "4/4"],
  [text("Participants who identified a clear next training focus", "Участники, которые определили фокус следующей тренировки"), "4/4"],
  [text("Critical analytical tasks completed", "Критичные аналитические задачи выполнены"), "6/6"],
];

const mitigationAssets = {
  projectCore: "/portfolio/mitigation/project-core.png",
  indicatorModel: "/portfolio/mitigation/indicator-model.png",
  categoryModel: "/portfolio/mitigation/category-model.png",
  dataModel: "/portfolio/mitigation/data-model.png",
  linearCagr: "/portfolio/mitigation/linear-cagr.png",
  sustainabilityMatrix: "/portfolio/mitigation/sustainability-matrix.png",
  forecastModule: "/portfolio/mitigation/forecast-module.png",
  questionnaire: "/portfolio/mitigation/questionnaire.png",
  expertNetwork: "/portfolio/mitigation/expert-network.png",
  formulaCagrGrowth: "/portfolio/mitigation/formula-cagr-growth.svg",
  formulaCagrPredict: "/portfolio/mitigation/formula-cagr-predict.svg",
  formulaLinearFallback: "/portfolio/mitigation/formula-linear-fallback.svg",
  formulaCo2Total: "/portfolio/mitigation/formula-co2-total.svg",
};

const mitigationImpact: CaseMetric[] = [
  { value: "86", label: text("Sustainability indicators mapped", "Показателей устойчивости сопоставлены") },
  { value: "20", label: text("MVP priorities", "Приоритетов для MVP") },
  { value: "6", label: text("Analytical modules in one workspace", "Аналитических модулей в одном пространстве") },
  { value: "1", label: text("Grant-ready business & technical case", "Готовый грантовый бизнес- и технический кейс") },
];

const mitigationFinalImpact: CaseMetric[] = [
  { value: "0→1", label: text("Product hypothesis", "Продуктовая гипотеза") },
  { value: "4", label: text("Connected modules", "Связанных модуля") },
  { value: "12 mo", label: text("Research & Dev Roadmap", "R&D-дорожная карта") },
  { value: "1", label: text("Grant-ready business & technical case", "Готовый грантовый бизнес- и технический кейс") },
];

const mitigationRoleRows = [
  {
    label: text("Responsibility", "Ответственность"),
    body: text(
      "end-to-end product design from discovery to MVP;\nuser scenario generation;\ndefined product strategy and information architecture;\ninteractive prototypes;\nvisual system;\ncomponents and states;\ndevelopment of financial models.",
      "сквозной продуктовый дизайн от исследования до MVP;\nгенерация пользовательских сценариев;\nпродуктовая стратегия и информационная архитектура;\nинтерактивные прототипы;\nвизуальная система;\nкомпоненты и состояния;\nфинансовые модели.",
    ),
  },
  {
    label: text("In Team", "В команде"),
    body: text(
      "Identifying technical limitations;\nMultifactor data processing logic;\nScoring by metrics;\nMVP prioritization.",
      "Выявление технических ограничений;\nмногофакторная логика обработки данных;\nоценка по метрикам;\nприоритизация MVP.",
    ),
  },
];

const mitigationMetaRows = [
  { label: text("Scope", "Зона"), value: text("Domain Analysis, Product Strategy, UX, UI, Business Model", "Анализ предметной области, продуктовая стратегия, UX, UI, бизнес-модель") },
  { label: text("Team", "Команда"), value: text("Analytics, Automation, Engineering, Domain Experts", "Аналитика, автоматизация, инженерия, эксперты предметной области") },
  { label: text("Duration", "Длительность"), value: text("6 months", "6 месяцев") },
  { label: text("Stage", "Этап"), value: text("0 > 1", "0 > 1") },
];

const mitigationAbout = {
  eyebrow: text("About", "О кейсе"),
  title: text("Compliance is a traceability problem.", "Комплаенс - это проблема прослеживаемости."),
  copy: text(
    "The practice of public non-financial reporting has been developing globally for over 20 years. Most multinational and large national companies, as well as a number of government and municipal organizations worldwide, publish non-financial reports. Approximately 90 percent of Fortune Global 500 and S&P 500 companies publish regular reports.\n\nThe system under development was created to centralize and process complex regulatory requirements and ERP data in a single digital system using extrapolation analytics, CAGR forecasting, and artificial intelligence.\n\nThe platform addresses the following areas:\n- СОКБ / ЭКГ metric management and reporting,\n- compliance with industry and supranational regulations,\n- supply chain monitoring and analysis,\n- risk and non-compliance identification,\n- reporting and audit automation.",
    "Практика публичной нефинансовой отчетности развивается в мире более 20 лет. Большинство транснациональных и крупных национальных компаний, а также ряд государственных и муниципальных организаций публикуют нефинансовую отчетность.\n\nРазрабатываемая система централизует сложные регуляторные требования и ERP-данные в единой цифровой системе с экстраполяционной аналитикой, CAGR-прогнозированием и искусственным интеллектом.\n\nПлатформа покрывает следующие направления:\n- управление и отчетность по метрикам СОКБ / ЭКГ,\n- соответствие отраслевым и наднациональным требованиям,\n- мониторинг и анализ цепочек поставок,\n- выявление рисков и несоответствий,\n- автоматизация отчетности и аудита.",
  ),
};

const mitigationProjectCore = {
  eyebrow: text("Project Core", "Ядро проекта"),
  title: text("From a strategic priority to a grant-ready product", "От стратегического приоритета к грантовому продукту"),
  copy: text(
    "Russia's sanctions pressure has shifted its strategic priorities, displacing universal global business valuation models like ESG.\n\nIn response, a nationally focused business valuation methodology was developed, based on 86 responsible business practice indicators.\n\nAt the time of developing the product hypothesis, the value of individual indicators was manually calculated using ERP system data, supporting documents, publicly available information, and expert assessment.\n\nThe product being developed preserves this chain without overburdening the organization with the complexity of the underlying processes - it automates data collection via customizable APIs, calculates indicators, and forecasts sustainable business growth linearly and at a CAGR rate.",
    "Санкционное давление изменило стратегические приоритеты и сместило универсальные модели оценки бизнеса вроде ESG.\n\nВ ответ была разработана национально ориентированная методология оценки бизнеса на базе 86 показателей ответственной деловой практики.\n\nНа этапе продуктовой гипотезы значения отдельных показателей рассчитывались вручную по ERP-данным, подтверждающим документам, публичной информации и экспертной оценке.\n\nРазрабатываемый продукт сохраняет эту цепочку, но снимает с организации сложность процессов: автоматизирует сбор данных через настраиваемые API, рассчитывает показатели и прогнозирует устойчивый рост линейно и по CAGR.",
  ),
  points: [
    {
      number: "01",
      eyebrow: text("Challenge", "Вызов"),
      copy: text(
        "Transform the new sustainable development methodology into a trustworthy digital product useful for both business and government.",
        "Преобразовать новую методологию устойчивого развития в надежный цифровой продукт для бизнеса и государства.",
      ),
    },
    {
      number: "02",
      eyebrow: text("My Contribution", "Мой вклад"),
      copy: text(
        "I developed a product hypothesis, conducted a subject area and market analysis, prepared a complete mathematical model for calculating 86 indicators and linear/CAGR formulas for their short-term forecasting, developed a UX architecture, an interactive prototype, a business plan, and a financial model.",
        "Я разработал продуктовую гипотезу, провел анализ предметной области и рынка, подготовил математическую модель расчета 86 показателей и формулы линейного/CAGR-прогноза, UX-архитектуру, интерактивный прототип, бизнес-план и финансовую модель.",
      ),
    },
    {
      number: "03",
      eyebrow: text("Delivered", "Что было сделано"),
      copy: text(
        "A grant-ready R&D case connecting product logic, business viability and a 12-month development roadmap.",
        "Готовый к грантовой подаче R&D-кейс, связывающий продуктовую логику, бизнес-жизнеспособность и 12-месячную дорожную карту.",
      ),
    },
  ],
};

const mitigationMarketRows = [
  { number: "01", label: text("Foreign Tools", "Зарубежные инструменты"), copy: text("No native СОКБ / ЭКГ model\nComplex implementation", "Нет нативной модели СОКБ / ЭКГ\nСложное внедрение") },
  { number: "02", label: text("Local Tools", "Локальные инструменты"), copy: text("Just reporting or consulting tools\nFragmented manual workflows\nNo unified evidence chain", "Только отчетность или консалтинг\nФрагментированные ручные процессы\nНет единой цепочки доказательств") },
  { number: "03", label: text("Product Opportunity", "Продуктовая возможность"), copy: text("Russian-first methodology;\nMulti-company architecture;\nData → Evidence → Score → Forecast", "Методология, ориентированная на российский контекст;\nмультикомпанейская архитектура;\nданные → доказательства → рейтинг → прогноз") },
];

const mitigationDiscoveryRows = [
  { number: "01", label: text("Scattered evidence", "Разрозненные доказательства"), copy: text("KPI inputs were distributed across systems, files and departments.", "Входные данные KPI были распределены по системам, файлам и подразделениям.") },
  { number: "02", label: text("Different confidence", "Разная степень доверия"), copy: text("Imported, calculated and expert-verified values could not look identical.", "Импортированные, рассчитанные и экспертно подтвержденные значения не могли выглядеть одинаково.") },
  { number: "03", label: text("One evolving standard", "Развивающийся стандарт"), copy: text("The product had to scale from the core list of indicators to future modifications or additions.", "Продукт должен был масштабироваться от базового списка показателей к будущим изменениям и дополнениям.") },
];

const mitigationDomainRows = [
  { number: "01", label: text("Model The Standard", "Смоделировать стандарт"), copy: text("86 indicators classified by category, data source, 1C module, priority and implementation complexity.", "86 показателей классифицированы по категории, источнику данных, модулю 1C, приоритету и сложности внедрения.") },
  { number: "02", label: text("Prioritize the MVP", "Приоритизировать MVP"), copy: text("A 20-item MVP shortlist selected from the complete standard.", "Из полного стандарта выбран MVP-список из 20 элементов.") },
  { number: "03", label: text("Specify The Data Contract", "Описать контракт данных"), copy: text("Each indicator defined by unit, period, source, evidence, input UI, formula, forecast rule and automation level.", "Для каждого показателя определены единица, период, источник, доказательства, интерфейс ввода, формула, правило прогноза и уровень автоматизации.") },
];

const mitigationForecastRows = [
  { number: "01", label: text("Additive Metrics", "Аддитивные метрики"), copy: text("CAGR (Compound Annual Growth Rate)\nLinear fallback", "CAGR\nЛинейный резервный сценарий") },
  { number: "02", label: text("Ratios / Shares", "Доли / отношения"), copy: text("Linear trend\nClip to valid range", "Линейный тренд\nОграничение допустимым диапазоном") },
  { number: "03", label: text("Boolean Metrics", "Булевые метрики"), copy: text("Carry the last verified value", "Перенос последнего подтвержденного значения") },
  { number: "04", label: text("Composite Metrics", "Составные метрики"), copy: text("Forecast components\nRecalculate total", "Прогноз компонентов\nПерерасчет итогового значения") },
];

const mitigationBusinessVisuals = [
  { label: text("Sustainability Matrix", "Матрица устойчивости"), image: mitigationAssets.sustainabilityMatrix },
  { label: text("AI-Based Forecast Module", "Модуль ИИ-прогноза"), image: mitigationAssets.forecastModule },
  { label: text("СОКБ Questionnaire", "Анкета СОКБ"), image: mitigationAssets.questionnaire },
  { label: text("Expert Network", "Экспертная сеть"), image: mitigationAssets.expertNetwork },
];

const mitigationPersonalImpact = [
  text("Translated a national standard into UX and data logic", "Перевел национальный стандарт в UX и логику данных"),
  text("Classified indicators by source, priority, complexity and 1C readiness", "Классифицировал показатели по источнику, приоритету, сложности и готовности к 1C"),
  text("Defined formulas, forecast behavior and evidence requirements", "Определил формулы, поведение прогнозов и требования к доказательствам"),
  text("Built the business plan, financial model and 12-month R&D roadmap", "Собрал бизнес-план, финансовую модель и 12-месячную R&D-дорожную карту"),
];

type ResearchCasePoint = {
  number: string;
  label: LocalizedText;
  copy: LocalizedText;
};

type ResearchCaseDecision = CaseTextBlock & {
  flowLabel: LocalizedText;
  flow: LocalizedText[];
  rows: LocalizedCell[][];
  conclusion: LocalizedText;
};

type ResearchCaseDefinition = {
  className: string;
  visual: string;
  desktopVisual?: string;
  about: CaseTextBlock;
  impact: CaseMetric[];
  roleTitle: LocalizedText;
  roleRows: Array<{ label: LocalizedText; body: LocalizedText }>;
  metaRows: Array<{ label: LocalizedText; value: LocalizedText }>;
  projectCore: CaseTextBlock & { points: ResearchCasePoint[] };
  discovery: CaseTextBlock & {
    sample: CaseMetric[];
    methods: ResearchCasePoint[];
    insights: ResearchCasePoint[];
  };
  decisions: ResearchCaseDecision[];
  outcome: CaseTextBlock & {
    metrics: CaseMetric[];
    reflection: LocalizedText;
  };
};

const researchCaseDefinitions: Partial<Record<number, ResearchCaseDefinition>> = {};

function resolveText(value: LocalizedCell, locale: Locale) {
  return typeof value === "string" ? value : value[locale];
}

function SmartTargetsTable({ rows, locale, className = "" }: { rows: LocalizedCell[][]; locale: Locale; className?: string }) {
  return (
    <div className={`smart-case-table ${className}`.trim()} data-columns={rows[0]?.length ?? 2} style={{ "--columns": rows[0]?.length ?? 2 } as React.CSSProperties}>
      {rows.map((row, rowIndex) => row.map((cell, cellIndex) => (
        <span key={`${rowIndex}-${cellIndex}`} data-column={cellIndex} className={rowIndex === 0 ? "is-heading" : ""}>{resolveText(cell, locale)}</span>
      )))}
    </div>
  );
}

function SmartTargetsRichCopy({ text, emphasis }: { text: string; emphasis?: string }) {
  if (!emphasis || !text.startsWith(emphasis)) {
    return <p>{text}</p>;
  }

  return (
    <p>
      <strong>{emphasis}</strong>
      {text.slice(emphasis.length)}
    </p>
  );
}

function CaseSection({ block, locale, children }: { block: CaseTextBlock; locale: Locale; children?: React.ReactNode }) {
  return (
    <section className="smart-case-section smart-case-module smart-case-module-split">
      <p className="smart-case-eyebrow">{block.eyebrow[locale]}</p>
      <h2>{block.title[locale]}</h2>
      {block.copy && <p className="smart-case-copy">{block.copy[locale]}</p>}
      {children}
    </section>
  );
}

function CaseMetricGrid({
  metrics,
  locale,
  tone = "light",
}: {
  metrics: CaseMetric[];
  locale: Locale;
  tone?: "light" | "dark";
}) {
  return (
    <div className={`smart-case-metrics smart-case-metrics-${tone}`}>
      {metrics.map((metric) => {
        const measurement = metric.value.match(/^(.+?)\s*(mm|mo|s)$/);
        return (
          <article key={`${metric.value}-${metric.label.en}`}>
            <strong>{measurement ? <>{measurement[1]}<span className="case-metric-unit">{measurement[2]}</span></> : metric.value}</strong>
            <p>{metric.label[locale]}</p>
          </article>
        );
      })}
    </div>
  );
}

function SmartTargetsVisual({
  label,
  children,
  dark = false,
}: {
  label?: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <figure className={`smart-case-visual ${dark ? "is-dark" : ""}`}>
      {label && <figcaption>{label}</figcaption>}
      <div>{children}</div>
    </figure>
  );
}

function SmartTargetsPhones({
  label,
  screens,
}: {
  label: string;
  screens: string[];
}) {
  return (
    <SmartTargetsVisual label={label} dark>
      <div className={`smart-phone-stage phone-count-${screens.length}`}>
        {screens.map((screen, screenIndex) => (
          <div className="smart-phone" key={screen}>
            <img className="smart-phone-back" src={smartTargetsAssets.deviceBack} alt="" loading="lazy" />
            <img className="smart-phone-screen" src={screen} alt="" loading="lazy" />
            <span aria-hidden="true">{screenIndex + 1}</span>
          </div>
        ))}
      </div>
    </SmartTargetsVisual>
  );
}

function CaseProjectCore({ locale }: { locale: Locale }) {
  return (
    <section className="smart-case-project-core smart-case-module smart-case-module-media-split">
      <figure className="smart-case-project-core-media">
        <img src={smartTargetsAssets.projectCoreFigma} width={748} height={496} alt="" loading="lazy" />
      </figure>

      <header className="smart-case-project-core-intro">
        <p className="smart-case-eyebrow">{smartTargetsProjectCore.eyebrow[locale]}</p>
        <h2>{smartTargetsProjectCore.title[locale]}</h2>
        <p>{smartTargetsProjectCore.copy[locale]}</p>
      </header>

      <div className="smart-case-project-core-list">
        {smartTargetsProjectCore.points.map((point) => (
          <article key={point.number}>
            <div>
              <p className="smart-case-eyebrow">{point.eyebrow[locale]}</p>
              <p>{point.copy[locale]}</p>
            </div>
            <strong>{point.number}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function CaseDiscovery({ locale }: { locale: Locale }) {
  return (
    <section className="smart-case-discovery smart-case-module smart-case-module-feature">
      <header className="smart-case-discovery-intro">
        <p className="smart-case-eyebrow">{smartTargetsDiscovery.eyebrow[locale]}</p>
        <h2>{smartTargetsDiscovery.title[locale]}</h2>
        <p>{smartTargetsDiscovery.copy[locale]}</p>
      </header>

      <div className="smart-case-discovery-panel">
        <div className="smart-case-discovery-panel-copy">
          <p className="smart-case-eyebrow">{smartTargetsDiscovery.methodEyebrow[locale]}</p>
          <h3>{smartTargetsDiscovery.methodTitle[locale]}</h3>
          <p>{smartTargetsDiscovery.methodCopy[locale]}</p>
        </div>

        <div className="smart-case-discovery-quotes">
          {smartTargetsDiscoveryQuotes.map((item) => (
            <article key={item.name}>
              <div>
                <img src={item.avatar} alt="" loading="lazy" />
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role[locale]}</span>
                </div>
              </div>
              <p>“{item.quote[locale]}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseKeyDecisionOne({ locale }: { locale: Locale }) {
  return (
    <section className="smart-case-key-decision smart-case-module smart-case-module-narrative">
      <header className="smart-case-key-decision-intro">
        <p className="smart-case-eyebrow">{smartTargetsKeyDecisionOne.eyebrow[locale]}</p>
        <h2>{smartTargetsKeyDecisionOne.title[locale]}</h2>
        <p>{smartTargetsKeyDecisionOne.copy[locale]}</p>
      </header>

      <div className="smart-case-key-visuals">
        {smartTargetsKeyDecisionVisuals.map((visual) => (
          <figure key={visual.label.en}>
            <figcaption>{visual.label[locale]}</figcaption>
            <img src={visual.image} width={748} height={960} alt="" loading="lazy" />
          </figure>
        ))}
      </div>

      <section className="smart-case-validation smart-case-module-block smart-case-module-split">
        <header>
          <h3>{smartTargetsKeyDecisionValidation.title[locale]}</h3>
          <p>{smartTargetsKeyDecisionValidation.copy[locale]}</p>
        </header>

        <SmartTargetsTable rows={smartTargetsContextComparisonRows} locale={locale} />

        <div className="smart-case-validation-panel">
          <div className="smart-case-validation-panel-head">
            <p className="smart-case-eyebrow">{smartTargetsKeyDecisionValidation.cardEyebrow[locale]}</p>
            <h3>{smartTargetsKeyDecisionValidation.cardTitle[locale]}</h3>
          </div>

          <div className="smart-case-dark-grid">
            <article>
              <h4>{smartTargetsKeyDecisionValidation.hypothesisTitle[locale]}</h4>
              <p>{smartTargetsKeyDecisionValidation.hypothesisCopy[locale]}</p>
              <p>{smartTargetsKeyDecisionValidation.hypothesisResult[locale]}</p>
            </article>

            <article>
              <h4>{smartTargetsKeyDecisionValidation.targetTitle[locale]}</h4>
              {smartTargetsTargetGroup.map((item) => (
                <div key={item.label.en}>
                  <span>{item.label[locale]}</span>
                  <p>{item.copy[locale]}</p>
                </div>
              ))}
            </article>
          </div>
        </div>
      </section>

      <section className="smart-case-field-research smart-case-module-block smart-case-module-split">
        <header>
          <p className="smart-case-eyebrow">{locale === "ru" ? "Полевое исследование" : "Field Research"}</p>
          <h3>{locale === "ru" ? "Этапы версий 1 и 2" : "Stages Version 1 & Version 2"}</h3>
        </header>

        <div className="smart-case-row-list smart-case-field-stages">
          {smartTargetsFieldStages.map((stage) => (
            <div className="smart-case-row" key={stage.label.en}>
              <span>{stage.label[locale]}</span>
              <div>
                {stage.items.map((item) => (
                  <article key={resolveText(item.eyebrow, "en")}>
                    <p className="smart-case-pill">{resolveText(item.eyebrow, locale)}</p>
                    {stage.label.en === "Analytical Workflow" && resolveText(item.eyebrow, "en") === "Example" ? (
                      <p className="smart-case-flow">{item.copy[locale]}</p>
                    ) : (
                      <p>{item.copy[locale]}</p>
                    )}
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="smart-case-field-result">
          <header>
            <p className="smart-case-eyebrow">{locale === "ru" ? "Полевое исследование" : "Field Research"}</p>
            <h3>{locale === "ru" ? "Результат" : "Result"}</h3>
          </header>
          <SmartTargetsTable rows={smartTargetsResearchRows} locale={locale} />
        </div>

        <div className="smart-case-row smart-case-ux-decision">
          <span>{smartTargetsUxDecision.label[locale]}</span>
          <div>
            <p>{smartTargetsUxDecision.copy[locale]}</p>
            {smartTargetsUxDecision.items.map((item) => (
              <article key={resolveText(item.eyebrow, "en")}>
                <p className="smart-case-pill">{resolveText(item.eyebrow, locale)}</p>
                <SmartTargetsRichCopy text={item.copy[locale]} emphasis={resolveText(item.emphasis, locale)} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="smart-case-key-visuals">
        {smartTargetsKeyDecisionFinalVisuals.map((visual) => (
          <figure key={visual.label.en}>
            <figcaption>{visual.label[locale]}</figcaption>
            <img src={visual.image} width={748} height={960} alt="" loading="lazy" />
          </figure>
        ))}
      </div>

      <section className="smart-case-effect smart-case-key-effect smart-case-module-block smart-case-module-callout">
        <p className="smart-case-eyebrow">{locale === "ru" ? "Эффект" : "Effect"}</p>
        <strong>-57%</strong>
        <h2>{locale === "ru" ? "Время выполнения задачи" : "Task Completion Time"}</h2>
        <p>{locale === "ru" ? "Участники выполняли задачу на интерпретацию информации на 57% быстрее во второй версии." : "Participants completed the information interpretation task 57% faster with Version 2."}</p>
        <div className="smart-case-pills">
          <span>{locale === "ru" ? "-50% ошибок интерпретации" : "-50% Interpretation Errors"}</span>
          <span>{locale === "ru" ? "+24% уверенности в интерпретации" : "+24% Confidence in Interpretation"}</span>
        </div>
      </section>
    </section>
  );
}

function CaseKeyDecisionTwo({ locale }: { locale: Locale }) {
  return (
    <section className="smart-case-key-decision smart-case-key-decision-two smart-case-module smart-case-module-narrative">
      <header className="smart-case-key-decision-intro">
        <p className="smart-case-eyebrow">{smartTargetsKeyDecisionTwo.eyebrow[locale]}</p>
        <h2>{smartTargetsKeyDecisionTwo.title[locale]}</h2>
        <p>{smartTargetsKeyDecisionTwo.copy[locale]}</p>
      </header>

      <div className="smart-case-validation-panel smart-case-context-panel">
        <div className="smart-case-validation-panel-head">
          <p className="smart-case-eyebrow">{smartTargetsKeyDecisionTwoValidation.cardEyebrow[locale]}</p>
          <h3>{smartTargetsKeyDecisionTwoValidation.cardTitle[locale]}</h3>
        </div>

        <div className="smart-case-dark-grid">
          {smartTargetsKeyDecisionTwoHypotheses.map((item) => (
            <article key={item.title.en}>
              <h4>{item.title[locale]}</h4>
              <p>{item.copy[locale]}</p>
            </article>
          ))}

          <article>
            <h4>{locale === "ru" ? "Целевая группа" : "Target Group"}</h4>
            {smartTargetsKeyDecisionTwoTargetGroup.map((item) => (
              <div key={item.label.en}>
                <span>{item.label[locale]}</span>
                <p>{item.copy[locale]}</p>
              </div>
            ))}
          </article>
        </div>
      </div>

      <section className="smart-case-field-research smart-case-module-block smart-case-module-split">
        <header>
          <p className="smart-case-eyebrow">{locale === "ru" ? "Полевое исследование" : "Field Research"}</p>
          <h3>{locale === "ru" ? "Этапы" : "Stages"}</h3>
        </header>

        <div className="smart-case-row-list smart-case-field-stages smart-case-field-stages-long">
          {smartTargetsKeyDecisionTwoStages.map((stage) => (
            <div className="smart-case-row" key={stage.label.en}>
              <span>{stage.label[locale]}</span>
              <div>
                {stage.items.map((item) => (
                  <article key={resolveText(item.eyebrow, "en")}>
                    <p className="smart-case-pill">{resolveText(item.eyebrow, locale)}</p>
                    {item.flow ? (
                      <p className="smart-case-flow">{item.copy[locale]}</p>
                    ) : (
                      <SmartTargetsRichCopy text={item.copy[locale]} emphasis={item.emphasis ? resolveText(item.emphasis, locale) : undefined} />
                    )}
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="smart-case-key-visuals">
        {smartTargetsKeyDecisionTwoVisuals.map((visual, visualIndex) => (
          <figure key={`${visual.label.en}-${visualIndex}`}>
            <figcaption>{visual.label[locale]}</figcaption>
            <img src={visual.image} width={748} height={960} alt="" loading="lazy" />
          </figure>
        ))}
      </div>

      <section className="smart-case-validation smart-case-concept-validation smart-case-module-block smart-case-module-split">
        <header>
          <p className="smart-case-eyebrow">{smartTargetsKeyDecisionTwoValidation.title[locale]}</p>
          <h3>{smartTargetsKeyDecisionTwoValidation.subtitle[locale]}</h3>
        </header>

        <SmartTargetsTable rows={smartTargetsContextComparisonFullRows} locale={locale} className="smart-case-context-table" />

        <div className="smart-case-concept-copy">
          <p>{smartTargetsKeyDecisionTwoValidation.copy[locale]}</p>
          <strong>{smartTargetsKeyDecisionTwoValidation.conclusion[locale]}</strong>
        </div>
      </section>

      <section className="smart-case-field-research smart-case-validation-result smart-case-module-block smart-case-module-split">
        <div className="smart-case-row smart-case-ux-decision">
          <span>{smartTargetsKeyDecisionTwoValidationTasks.label[locale]}</span>
          <div>
            {smartTargetsKeyDecisionTwoValidationTasks.items.map((item) => (
              <article key={resolveText(item.eyebrow, "en")}>
                <p className="smart-case-pill">{resolveText(item.eyebrow, locale)}</p>
                <p>{item.copy[locale]}</p>
              </article>
            ))}
          </div>
        </div>

        <SmartTargetsTable rows={smartTargetsKeyDecisionTwoSuccessRows} locale={locale} />
      </section>

      <section className="smart-case-effect smart-case-key-effect smart-case-module-block smart-case-module-callout">
        <p className="smart-case-eyebrow">{locale === "ru" ? "Эффект" : "Effect"}</p>
        <strong>4/4</strong>
        <h2>{locale === "ru" ? "Стрелки превратили тренировочные данные в практический вывод" : "Shooters turned training data into an actionable insight"}</h2>
        <p>
          {locale === "ru"
            ? "Все участники смогли разобрать свой результат, найти конкретную слабую зону и определить понятный фокус для следующей тренировки."
            : "All participants were able to review their performance, identify a specific weakness and define a clear focus for their next training session."}
        </p>
      </section>
    </section>
  );
}

function CaseOutcome({ locale }: { locale: Locale }) {
  return (
    <section className="smart-case-outcome smart-case-module smart-case-module-finale">
      <figure className="smart-case-outcome-hero">
        <img src={smartTargetsAssets.outcomeHero} alt="" loading="lazy" />
      </figure>

      <section className="smart-case-outcome-section">
        <p className="smart-case-eyebrow">{smartTargetsOutcome.eyebrow[locale]}</p>
        <h2>{smartTargetsOutcome.title[locale]}</h2>
        <div className="smart-case-copy smart-case-outcome-copy">
          <p>
            {smartTargetsOutcome.copyBefore[locale]}
            <strong>{smartTargetsOutcome.copyStrong[locale]}</strong>
          </p>
          <p>{smartTargetsOutcome.copyAfter[locale]}</p>
        </div>
        <p className="smart-case-loop">{smartTargetsOutcome.loop[locale]}</p>
      </section>

      <section className="smart-case-outcome-section">
        <p className="smart-case-eyebrow">{smartTargetsReflection.eyebrow[locale]}</p>
        <h2>{smartTargetsReflection.title[locale]}</h2>
        <p className="smart-case-copy">{smartTargetsReflection.copy[locale]}</p>
      </section>

      <section className="smart-case-final smart-case-module-block smart-case-module-callout">
        <figure className="smart-case-final-art">
          <img src={smartTargetsAssets.outcomeFinalGraphic} alt="" loading="lazy" />
        </figure>

        <div className="smart-case-final-content">
          <header>
            <p className="smart-case-eyebrow">{locale === "ru" ? "Финал" : "Outro"}</p>
            <h2>{locale === "ru" ? "Итоговый эффект" : "Final Impact"}</h2>
          </header>
          <CaseMetricGrid metrics={smartTargetsFinalImpact} locale={locale} tone="dark" />
        </div>
      </section>
    </section>
  );
}

function SmartTargetsCaseContent({ locale }: { locale: Locale }) {
  return (
    <div className="smart-case">
      <CaseSection
        locale={locale}
        block={{
          eyebrow: text("About", "О кейсе"),
          title: text("Shooting training data without moving to target", "Данные тренировки без подхода к мишени"),
          copy: text(
            "Previously, shooters had to spend significant time reaching targets and manually analyzing results - especially in sport sniping, where targets can be up to 1,000 meters away.\n\nThe smart targets training application connects three types of smart targets: kinetic, acoustic, and contour, and transforms their telemetry into instant shooting insights, including hit zones, scores, bullet velocity, impact angle and coordinates, accuracy, and shot spacing.",
            "Раньше стрелкам приходилось тратить значительное время на подход к мишеням и ручной анализ результатов, особенно в спортивном снайпинге, где дистанция может достигать 1000 метров.\n\nПриложение для умных мишеней соединяет три типа мишеней: кинетические, акустические и контурные, а затем превращает телеметрию в мгновенные выводы: зоны попадания, очки, скорость пули, угол и координаты попадания, точность и расстояние между выстрелами.",
          ),
        }}
      />

      <section className="smart-case-impact smart-case-module smart-case-module-metrics">
        <header>
          <p className="smart-case-eyebrow">{locale === "ru" ? "Результат" : "Outcome"}</p>
          <h2>{locale === "ru" ? "Ключевой эффект" : "Selected Impact"}</h2>
        </header>
        <CaseMetricGrid metrics={smartTargetsImpact} locale={locale} />
      </section>

      <section className="smart-case-role smart-case-module smart-case-module-split">
        <header>
          <p className="smart-case-eyebrow">{locale === "ru" ? "Роль" : "Role"}</p>
          <h2>{locale === "ru" ? "Ведущий продуктовый дизайнер" : "Lead Product Designer"}</h2>
        </header>
        <div className="smart-case-row-list">
          {smartTargetsRoleRows.map((row) => (
            <div className="smart-case-row" key={row.label.en}>
              <span>{row.label[locale]}</span>
              <p>{row.body[locale]}</p>
            </div>
          ))}
        </div>
        <div className="smart-case-meta">
          {smartTargetsMetaRows.map((row) => (
            <div key={row.label.en}>
              <span>{row.label[locale]}</span>
              <strong>{row.value[locale]}</strong>
            </div>
          ))}
        </div>
      </section>

      <CaseProjectCore locale={locale} />

      <CaseDiscovery locale={locale} />

      <CaseKeyDecisionOne locale={locale} />

      <CaseKeyDecisionTwo locale={locale} />

      <CaseOutcome locale={locale} />

    </div>
  );
}

function MitigationRows({
  rows,
  locale,
  className = "",
}: {
  rows: Array<{ number: string; label: LocalizedText; copy: LocalizedText }>;
  locale: Locale;
  className?: string;
}) {
  return (
    <div className={`smart-case-row-list mitigation-rows ${className}`.trim()}>
      {rows.map((row) => (
        <div className="smart-case-row" key={`${row.number}-${row.label.en}`}>
          <span>{row.number}</span>
          <div>
            <p className="smart-case-pill">{row.label[locale]}</p>
            <p>{row.copy[locale]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ResearchCaseVisual({ definition }: { definition: ResearchCaseDefinition }) {
  return (
    <figure className="smart-case-project-core-media research-case-hero">
      <picture>
        {definition.desktopVisual && <source media="(min-width: 1024px)" srcSet={definition.desktopVisual} />}
        <img src={definition.visual} alt="" loading="lazy" />
      </picture>
    </figure>
  );
}

function ResearchFlow({ label, items, locale }: { label: LocalizedText; items: LocalizedText[]; locale: Locale }) {
  return (
    <section className="research-case-flow smart-case-module-block" aria-label={label[locale]}>
      <p className="smart-case-eyebrow">{label[locale]}</p>
      <div>
        {items.map((item, itemIndex) => (
          <span key={item.en}>
            <strong>{item[locale]}</strong>
            {itemIndex < items.length - 1 && <i aria-hidden="true">→</i>}
          </span>
        ))}
      </div>
    </section>
  );
}

function ResearchCaseContent({ definition, locale }: { definition: ResearchCaseDefinition; locale: Locale }) {
  return (
    <div className={`smart-case research-case ${definition.className}`}>
      <CaseSection block={definition.about} locale={locale} />

      <section className="smart-case-impact smart-case-module smart-case-module-metrics">
        <header>
          <p className="smart-case-eyebrow">{locale === "ru" ? "Масштаб" : "Scope"}</p>
          <h2>{locale === "ru" ? "Контекст проекта" : "Project Context"}</h2>
        </header>
        <CaseMetricGrid metrics={definition.impact} locale={locale} />
      </section>

      <section className="smart-case-role smart-case-module smart-case-module-split">
        <header>
          <p className="smart-case-eyebrow">{locale === "ru" ? "Роль" : "Role"}</p>
          <h2>{definition.roleTitle[locale]}</h2>
        </header>
        <div className="smart-case-row-list">
          {definition.roleRows.map((row) => (
            <div className="smart-case-row" key={row.label.en}>
              <span>{row.label[locale]}</span>
              <p>{row.body[locale]}</p>
            </div>
          ))}
        </div>
        <div className="smart-case-meta">
          {definition.metaRows.map((row) => (
            <div key={row.label.en}>
              <span>{row.label[locale]}</span>
              <strong>{row.value[locale]}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="smart-case-project-core research-project-core smart-case-module smart-case-module-media-split">
        <ResearchCaseVisual definition={definition} />
        <header className="smart-case-project-core-intro">
          <p className="smart-case-eyebrow">{definition.projectCore.eyebrow[locale]}</p>
          <h2>{definition.projectCore.title[locale]}</h2>
          <p>{definition.projectCore.copy?.[locale]}</p>
        </header>
        <div className="smart-case-project-core-list">
          {definition.projectCore.points.map((point) => (
            <article key={point.number}>
              <strong>{point.number}</strong>
              <div>
                <p className="smart-case-eyebrow">{point.label[locale]}</p>
                <p>{point.copy[locale]}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="smart-case-key-decision research-case-discovery smart-case-module smart-case-module-narrative">
        <header className="smart-case-key-decision-intro">
          <p className="smart-case-eyebrow">{definition.discovery.eyebrow[locale]}</p>
          <h2>{definition.discovery.title[locale]}</h2>
          <p>{definition.discovery.copy?.[locale]}</p>
        </header>
        <div className="research-case-sample">
          <CaseMetricGrid metrics={definition.discovery.sample} locale={locale} />
        </div>
        <section className="research-case-evidence smart-case-module-block">
          <div>
            <p className="smart-case-eyebrow">{locale === "ru" ? "Методы" : "Methods"}</p>
            <MitigationRows rows={definition.discovery.methods} locale={locale} />
          </div>
          <div>
            <p className="smart-case-eyebrow">{locale === "ru" ? "Ключевые наблюдения" : "Key Insights"}</p>
            <MitigationRows rows={definition.discovery.insights} locale={locale} />
          </div>
        </section>
      </section>

      {definition.decisions.map((decision, decisionIndex) => (
        <section className="smart-case-key-decision research-case-decision smart-case-module smart-case-module-narrative" key={decision.eyebrow.en}>
          <header className="smart-case-key-decision-intro">
            <p className="smart-case-eyebrow">{decision.eyebrow[locale]}</p>
            <h2>{decision.title[locale]}</h2>
            <p>{decision.copy?.[locale]}</p>
          </header>
          <ResearchFlow label={decision.flowLabel} items={decision.flow} locale={locale} />
          <div className="research-case-table-wrap">
            <p className="smart-case-eyebrow">{locale === "ru" ? `Модель решения 0${decisionIndex + 1}` : `Decision Model 0${decisionIndex + 1}`}</p>
            <SmartTargetsTable rows={decision.rows} locale={locale} />
          </div>
          <section className="smart-case-effect research-case-conclusion smart-case-module-block smart-case-module-callout">
            <p className="smart-case-eyebrow">{locale === "ru" ? "Принцип" : "Principle"}</p>
            <h2>{decision.conclusion[locale]}</h2>
          </section>
        </section>
      ))}

      <section className="research-case-outcome smart-case-module smart-case-module-finale">
        <header>
          <p className="smart-case-eyebrow">{definition.outcome.eyebrow[locale]}</p>
          <h2>{definition.outcome.title[locale]}</h2>
          <p>{definition.outcome.copy?.[locale]}</p>
        </header>
        <CaseMetricGrid metrics={definition.outcome.metrics} locale={locale} />
        <blockquote>
          <p className="smart-case-eyebrow">{locale === "ru" ? "Рефлексия" : "Reflection"}</p>
          <p>{definition.outcome.reflection[locale]}</p>
        </blockquote>
      </section>
    </div>
  );
}

function MitigationVisualFigure({ label, image, locale }: { label: LocalizedText; image: string; locale: Locale }) {
  return (
    <figure>
      <figcaption>{label[locale]}</figcaption>
      <img src={image} width={1122} height={1440} alt="" loading="lazy" />
    </figure>
  );
}

function MitigationProjectCore({ locale }: { locale: Locale }) {
  return (
    <section className="smart-case-project-core mitigation-project-core smart-case-module smart-case-module-media-split">
      <figure className="smart-case-project-core-media">
        <img src={mitigationAssets.projectCore} width={1122} height={744} alt="" loading="lazy" />
      </figure>

      <header className="smart-case-project-core-intro">
        <p className="smart-case-eyebrow">{mitigationProjectCore.eyebrow[locale]}</p>
        <h2>{mitigationProjectCore.title[locale]}</h2>
        <p>{mitigationProjectCore.copy[locale]}</p>
      </header>

      <div className="smart-case-project-core-list">
        {mitigationProjectCore.points.map((point) => (
          <article key={point.number}>
            <div>
              <p className="smart-case-eyebrow">{point.eyebrow[locale]}</p>
              <p>{point.copy[locale]}</p>
            </div>
            <strong>{point.number}</strong>
          </article>
        ))}
      </div>

      <section className="smart-case-field-research mitigation-market">
        <header>
          <p className="smart-case-eyebrow">{locale === "ru" ? "Рынок / Бизнес" : "Market / Business"}</p>
          <h3>{locale === "ru" ? "Разрыв был между отчетностью и операционным управлением." : "The gap was between reporting and operating."}</h3>
        </header>
        <MitigationRows rows={mitigationMarketRows} locale={locale} />
        <div className="mitigation-pill-rows">
          <div>
            <span>{locale === "ru" ? "Бизнес-модель / клиенты" : "Business model / target Clients"}</span>
            <div>
              <p className="smart-case-pill">{locale === "ru" ? "Средний бизнес" : "Mid-size Business"}</p>
              <p className="smart-case-pill">{locale === "ru" ? "Корпорации" : "Enterprise"}</p>
              <p className="smart-case-pill">{locale === "ru" ? "Холдинги" : "Holdings"}</p>
            </div>
          </div>
          <div>
            <span>{locale === "ru" ? "Выручка" : "Revenue"}</span>
            <div>
              <p className="smart-case-pill">{locale === "ru" ? "SaaS-подписка" : "SaaS subscription"}</p>
              <p className="smart-case-pill">{locale === "ru" ? "Внедрение" : "Implementation"}</p>
              <p className="smart-case-pill">{locale === "ru" ? "Экспертные услуги" : "Expert Services"}</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

function MitigationDiscovery({ locale }: { locale: Locale }) {
  return (
    <section className="smart-case-key-decision mitigation-discovery smart-case-module smart-case-module-narrative">
      <header className="smart-case-key-decision-intro">
        <p className="smart-case-eyebrow">{locale === "ru" ? "Формулировка проблемы" : "Problem Definition"}</p>
        <h2>{locale === "ru" ? "Как превратить новую национальную методологию в проверяемый продукт, которым бизнес действительно может управлять?" : "How might we turn a new national methodology into an auditable product that businesses can actually operate?"}</h2>
        <div className="mitigation-inline-pills">
          {[
            text("Normative", "Нормативный"),
            text("Testable", "Проверяемый"),
            text("Role-Aware", "Учитывает роли"),
            text("Scalable", "Масштабируемый"),
          ].map((item) => (
            <span className="smart-case-pill" key={item.en}>{item[locale]}</span>
          ))}
        </div>
      </header>

      <section className="smart-case-field-research smart-case-module-block smart-case-module-split">
        <header>
          <p className="smart-case-eyebrow">{locale === "ru" ? "Исследование" : "Discovery"}</p>
          <h3>{locale === "ru" ? "Что должна была связать платформа?" : "What the platform needed to connect?"}</h3>
        </header>
        <MitigationRows rows={mitigationDiscoveryRows} locale={locale} />
      </section>

      <div className="smart-case-key-visuals mitigation-visual-stack">
        <MitigationVisualFigure label={text("Indicator Calculation Model", "Модель расчета показателей")} image={mitigationAssets.indicatorModel} locale={locale} />
        <MitigationVisualFigure label={text("Separating Categories of Indicators", "Разделение категорий показателей")} image={mitigationAssets.categoryModel} locale={locale} />
      </div>

      <section className="smart-case-effect smart-case-key-effect smart-case-module-block smart-case-module-callout">
        <p className="smart-case-eyebrow">{locale === "ru" ? "Продуктовый принцип #1" : "Product Principle #1"}</p>
        <h2>{locale === "ru" ? "Метрика не могла быть просто полем. Ей были нужны источник, доказательство, правило расчета и состояние валидации." : "A metric could not be just a field. It needed a source, proof, calculation rule and validation state."}</h2>
        <div className="smart-case-pills">
          {[
            text("People & Health", "Люди и здоровье"),
            text("Ecology", "Экология"),
            text("Human Potential", "Человеческий потенциал"),
            text("Economy", "Экономика"),
          ].map((item) => (
            <span key={item.en}>{item[locale]}</span>
          ))}
        </div>
      </section>

      <section className="smart-case-field-research smart-case-module-block smart-case-module-split">
        <header>
          <p className="smart-case-eyebrow">{locale === "ru" ? "Анализ предметной области" : "Domain Analysis"}</p>
          <h3>{locale === "ru" ? "Я превратил 86 регуляторных показателей в продуктовый бэклог." : "I turned 86 regulatory indicators into a buildable product backlog."}</h3>
        </header>
        <MitigationRows rows={mitigationDomainRows} locale={locale} />
      </section>

      <div className="smart-case-key-visuals mitigation-visual-stack">
        <MitigationVisualFigure label={text("Detailed Data Model", "Детальная модель данных")} image={mitigationAssets.dataModel} locale={locale} />
        <MitigationVisualFigure label={text("Linear & CAGR Formulas", "Линейные и CAGR-формулы")} image={mitigationAssets.linearCagr} locale={locale} />
      </div>
    </section>
  );
}

function MitigationBusiness({ locale }: { locale: Locale }) {
  return (
    <section className="smart-case-key-decision mitigation-business smart-case-module smart-case-module-narrative">
      <section className="smart-case-effect smart-case-key-effect smart-case-module-block smart-case-module-callout">
        <p className="smart-case-eyebrow">{locale === "ru" ? "Продуктовый принцип #2" : "Product Principle #2"}</p>
        <h2>{locale === "ru" ? "Стандарт становится продуктом только тогда, когда у каждого требования есть данные, логика, владелец и интерфейс." : "A standard becomes a product only when every requirement has data, logic, ownership and an interface."}</h2>
      </section>

      <div className="smart-case-key-visuals mitigation-business-visuals">
        {mitigationBusinessVisuals.map((visual) => (
          <MitigationVisualFigure key={visual.image} label={visual.label} image={visual.image} locale={locale} />
        ))}
      </div>

      <section className="smart-case-effect smart-case-key-effect smart-case-module-block smart-case-module-callout">
        <p className="smart-case-eyebrow">{locale === "ru" ? "Продуктовая гипотеза" : "Product Hypothesis"}</p>
        <h2>{locale === "ru" ? "Если каждый рейтинг можно проследить до данных и доказательств, комплаенс становится повторяемым процессом управления, а не ежегодным документом." : "If every score can be traced back to data and evidence, compliance becomes a repeatable management process, not a yearly document exercise."}</h2>
      </section>
    </section>
  );
}

function MitigationCalculationModel({ locale }: { locale: Locale }) {
  return (
    <section className="smart-case-key-decision mitigation-calculation smart-case-module smart-case-module-narrative">
      <section className="smart-case-field-research smart-case-module-block smart-case-module-split">
        <header>
          <p className="smart-case-eyebrow">{locale === "ru" ? "Модель расчета прогноза" : "Forecast Calculation Model"}</p>
          <h3>{locale === "ru" ? "Разным метрикам было нужно разное поведение прогноза." : "Different metrics needed different forecast behavior."}</h3>
        </header>
        <MitigationRows rows={mitigationForecastRows} locale={locale} />
      </section>

      <section className="mitigation-formula-card smart-case-module-block">
        <header>
          <p className="smart-case-eyebrow">{locale === "ru" ? "Модель расчета" : "Calculation Model"}</p>
          <h3>{locale === "ru" ? "Формулы" : "Formulas"}</h3>
        </header>
        <div className="mitigation-formulas">
          <article>
            <span>{locale === "ru" ? "CAGR-прогноз" : "CAGR Predict"}</span>
            <div className="mitigation-formula-stack">
              <img src={mitigationAssets.formulaCagrGrowth} alt="CAGR growth formula" loading="lazy" />
              <img src={mitigationAssets.formulaCagrPredict} alt="CAGR prediction formula" loading="lazy" />
            </div>
          </article>
          <article>
            <span>{locale === "ru" ? "Линейный резервный сценарий" : "Linear Fallback"}</span>
            <img src={mitigationAssets.formulaLinearFallback} alt="Linear fallback formula" loading="lazy" />
          </article>
          <article>
            <span>{locale === "ru" ? "Пример расчета CO₂" : "CO2 Calculation example"}</span>
            <img src={mitigationAssets.formulaCo2Total} alt="CO2 total formula" loading="lazy" />
          </article>
        </div>
        <dl>
          <div><dt>Xᵧ</dt><dd>{locale === "ru" ? "значение показателя в текущем году;" : "value of the indicator in the current year;"}</dd></div>
          <div><dt>Xᵧ₋₃</dt><dd>{locale === "ru" ? "значение показателя три года назад;" : "value three years ago;"}</dd></div>
          <div><dt>g</dt><dd>{locale === "ru" ? "среднегодовой темп роста (CAGR);" : "compound annual growth rate (CAGR);"}</dd></div>
          <div><dt>h</dt><dd>{locale === "ru" ? "горизонт прогноза в годах;" : "forecast horizon in years;"}</dd></div>
          <div><dt>X̂ᵧ₊ₕ</dt><dd>{locale === "ru" ? "прогнозное значение;" : "forecast value;"}</dd></div>
          <div><dt>G₁ + G₂</dt><dd>{locale === "ru" ? "сумма прямых и косвенных выбросов CO₂." : "the sum of direct and indirect CO₂ emissions."}</dd></div>
        </dl>
      </section>
    </section>
  );
}

function MitigationOutcome({ locale }: { locale: Locale }) {
  return (
    <section className="smart-case-outcome mitigation-outcome smart-case-module smart-case-module-finale">
      <section className="smart-case-outcome-section">
        <p className="smart-case-eyebrow">{locale === "ru" ? "Результат / Вывод" : "Outcome / Reflection"}</p>
        <h2>{locale === "ru" ? "Я спроектировал и продукт, и аргументацию того, почему он должен существовать." : "I designed both the product and the case for why it should exist."}</h2>
      </section>

      <section className="smart-case-impact smart-case-module smart-case-module-metrics">
        <header>
          <p className="smart-case-eyebrow">{locale === "ru" ? "Проектный результат" : "Project Output"}</p>
          <h2>{locale === "ru" ? "Что было собрано" : "Project Output"}</h2>
        </header>
        <CaseMetricGrid metrics={mitigationFinalImpact} locale={locale} />
      </section>

      <section className="smart-case-validation-panel mitigation-personal-impact smart-case-module-block">
        <div className="smart-case-validation-panel-head">
          <p className="smart-case-eyebrow">{locale === "ru" ? "Личный вклад" : "Personal Impact"}</p>
        </div>
        <div className="mitigation-impact-list">
          {mitigationPersonalImpact.map((item) => (
            <p key={item.en}>{item[locale]}</p>
          ))}
        </div>
      </section>

      <section className="smart-case-outcome-section">
        <p className="smart-case-eyebrow">{locale === "ru" ? "Результат / Вывод" : "Outcome / Reflection"}</p>
        <p className="smart-case-copy">
          {locale === "ru"
            ? "На ранней стадии продуктовый дизайн - это не производство экранов.\n\nЭто работа по превращению неопределенной системы в то, что можно проверить, профинансировать и построить."
            : "At an early stage, product design is not screen production.\n\nIt is the work of making an uncertain system testable, fundable and buildable."}
        </p>
      </section>
    </section>
  );
}

function MitigationCaseContent({ locale }: { locale: Locale }) {
  return (
    <div className="smart-case mitigation-case">
      <CaseSection locale={locale} block={mitigationAbout} />

      <section className="smart-case-impact smart-case-module smart-case-module-metrics">
        <header>
          <p className="smart-case-eyebrow">{locale === "ru" ? "Результат" : "Outcome"}</p>
          <h2>{locale === "ru" ? "Ключевой эффект" : "Selected Impact"}</h2>
        </header>
        <CaseMetricGrid metrics={mitigationImpact} locale={locale} />
      </section>

      <section className="smart-case-role smart-case-module smart-case-module-split">
        <header>
          <p className="smart-case-eyebrow">{locale === "ru" ? "Роль" : "Role"}</p>
          <h2>{locale === "ru" ? "Ведущий продуктовый дизайнер" : "Lead Product Designer"}</h2>
        </header>
        <div className="smart-case-row-list">
          {mitigationRoleRows.map((row) => (
            <div className="smart-case-row" key={row.label.en}>
              <span>{row.label[locale]}</span>
              <p>{row.body[locale]}</p>
            </div>
          ))}
        </div>
        <div className="smart-case-meta">
          {mitigationMetaRows.map((row) => (
            <div key={row.label.en}>
              <span>{row.label[locale]}</span>
              <strong>{row.value[locale]}</strong>
            </div>
          ))}
        </div>
      </section>

      <MitigationProjectCore locale={locale} />
      <MitigationDiscovery locale={locale} />
      <MitigationBusiness locale={locale} />
      <MitigationCalculationModel locale={locale} />
      <MitigationOutcome locale={locale} />
    </div>
  );
}

function ProjectCard({
  work,
  index,
  locale,
  onOpen,
}: {
  work: Work;
  index: number;
  locale: Locale;
  onOpen: (index: number, card: HTMLElement) => void;
}) {
  return (
    <article
      className="project-card"
      data-project-index={index}
    >
      <WorkImage work={work} alt="" loading={index < 2 ? "eager" : "lazy"} />
      <div className="project-shade" />
      <div className="project-content">
        <p className="project-number">0{index + 1}</p>
        <h2 className="display-h2">
          <span className="project-title-desktop">{work.title}</span>
          <span className="project-title-mobile">{work.mobileTitle}</span>
        </h2>
        <ChipRail tags={work.tags} label={uiCopy[locale].project.disciplines} />
      </div>
      <button
        type="button"
        aria-label={`${uiCopy[locale].project.open}: ${work.title}`}
        className="project-link"
        onClick={(event) => onOpen(index, event.currentTarget.closest(".project-card") as HTMLElement)}
      />
    </article>
  );
}

function ProjectModal({
  work,
  nextWork,
  index,
  locale,
  expanded,
  origin,
  projectCount,
  onPrepareClose,
  onClose,
  onNext,
}: {
  work: Work;
  nextWork: Work;
  index: number;
  locale: Locale;
  expanded: boolean;
  origin: ProjectOrigin;
  projectCount: number;
  onPrepareClose: () => void;
  onClose: () => void;
  onNext: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const nextTimerRef = useRef<number | null>(null);
  const closingRef = useRef(false);
  const [settled, setSettled] = useState(false);
  const [closingRect, setClosingRect] = useState<ProjectOrigin | null>(null);
  const [nextTransition, setNextTransition] = useState<{
    rect: ProjectOrigin;
    work: Work;
    active: boolean;
  } | null>(null);
  const isSmartTargets = index === 0;
  const isMitigation = index === 1;
  const researchDefinition = researchCaseDefinitions[index];

  useEffect(() => {
    if (!expanded) return;
    closingRef.current = false;
    modalRef.current?.scrollTo({ top: 0 });
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    const settleTimer = window.setTimeout(() => setSettled(true), desktop ? 40 : 680);
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), desktop ? 520 : 700);
    return () => {
      window.clearTimeout(settleTimer);
      window.clearTimeout(focusTimer);
    };
  }, [expanded]);

  useEffect(() => () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
    }
    if (nextTimerRef.current !== null) {
      window.clearTimeout(nextTimerRef.current);
    }
  }, []);

  useEffect(() => {
    if (expanded) modalRef.current?.scrollTo({ top: 0 });
  }, [expanded, index]);

  useEffect(() => {
    const modal = modalRef.current;
    if (!expanded || !isSmartTargets || !modal) return;

    const revealSelector = [
      ".smart-case > .smart-case-section:first-child",
    ].join(",");
    const targets = Array.from(modal.querySelectorAll<HTMLElement>(revealSelector));
    const targetSet = new Set(targets);

    modal.querySelectorAll<HTMLElement>(".smart-case .smart-reveal").forEach((target) => {
      if (targetSet.has(target)) return;
      target.classList.remove("smart-reveal", "smart-reveal-media", "is-visible");
      target.style.removeProperty("--smart-reveal-delay");
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((target) => target.classList.add("smart-reveal", "is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: modal, rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    targets.forEach((target, targetIndex) => {
      target.classList.add("smart-reveal");
      target.style.setProperty("--smart-reveal-delay", `${Math.min(targetIndex % 4, 3) * 45}ms`);
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, [expanded, index, isSmartTargets]);

  const requestClose = () => {
    if (closingRef.current) return;
    closingRef.current = true;
    const modal = modalRef.current;
    if (modal) modal.scrollTop = 0;
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    if (desktop) {
      setSettled(false);
      onClose();
      return;
    }
    onPrepareClose();
    const hero = heroRef.current;
    const rect = hero?.getBoundingClientRect();

    // Lock the visible hero to its exact current pixels before changing it
    // from document flow to fixed positioning. This prevents Safari from
    // exposing an intermediate oversized image during the reverse transition.
    if (rect) {
      setClosingRect({
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height,
      });
    }
    setSettled(false);
    closeTimerRef.current = window.setTimeout(() => {
      heroRef.current?.getBoundingClientRect();
      setClosingRect(null);
      closeTimerRef.current = null;
      onClose();
    }, 20);
  };

  const requestNext = (button: HTMLButtonElement) => {
    if (closingRef.current || nextTransition) return;
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    if (desktop) {
      onNext();
      return;
    }
    const rect = button.getBoundingClientRect();
    const transitionWork = nextWork;
    setNextTransition({
      rect: { x: rect.left, y: rect.top, width: rect.width, height: rect.height },
      work: transitionWork,
      active: false,
    });
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setNextTransition((current) => current ? { ...current, active: true } : current);
      });
    });
    nextTimerRef.current = window.setTimeout(() => {
      onNext();
      modalRef.current?.scrollTo({ top: 0 });
      window.setTimeout(() => setNextTransition(null), 70);
      nextTimerRef.current = null;
    }, 520);
  };

  const keepFocusInside = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      requestClose();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((element) => element.offsetParent !== null);
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      ref={modalRef}
      className={`project-modal ${expanded ? "is-open" : ""} ${settled ? "is-settled" : ""} ${closingRect ? "is-preparing-close" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onKeyDown={keepFocusInside}
      style={{
        "--project-origin-x": `${origin.x}px`,
        "--project-origin-y": `${origin.y}px`,
        "--project-origin-width": `${origin.width}px`,
        "--project-origin-height": `${origin.height}px`,
        "--project-close-x": `${closingRect?.x ?? 0}px`,
        "--project-close-y": `${closingRect?.y ?? 0}px`,
        "--project-close-width": `${closingRect?.width ?? 0}px`,
        "--project-close-height": `${closingRect?.height ?? 0}px`,
        "--project-origin-scale-x": typeof window === "undefined" ? 1 : origin.width / window.innerWidth,
        "--project-origin-scale-y": typeof window === "undefined" ? 1 : origin.height / Math.min(window.innerHeight * 0.78, 720),
      } as React.CSSProperties}
    >
      <div className="project-modal-surface">
        <div className="project-close-sticky">
          <button
            ref={closeRef}
            className="project-close"
            type="button"
            aria-label={uiCopy[locale].project.close}
            onClick={requestClose}
          >
            <span />
            <span />
          </button>
        </div>
        <div className="project-modal-hero-slot">
          <header ref={heroRef} className="project-modal-hero">
            <WorkImage work={work} alt="" loading="eager" />
            <div className="project-shade" />
            <div className="project-modal-heading">
              <p>{uiCopy[locale].project.case} 0{index + 1}</p>
              <h1 id="project-modal-title" className="display-h1">
                <span className="project-title-desktop">{work.title}</span>
                <span className="project-title-mobile">{work.mobileTitle}</span>
              </h1>
              <ChipRail tags={work.tags} label={uiCopy[locale].project.disciplines} />
            </div>
          </header>
        </div>

        {isSmartTargets ? (
          <SmartTargetsCaseContent locale={locale} />
        ) : isMitigation ? (
          <MitigationCaseContent locale={locale} />
        ) : researchDefinition ? (
          <ResearchCaseContent definition={researchDefinition} locale={locale} />
        ) : (
          <>
            <section className="selected-impact">
              <header>
                <p>{uiCopy[locale].project.outcome}</p>
                <h2 className="display-h1">{uiCopy[locale].project.impact[0]}<br />{uiCopy[locale].project.impact[1]}</h2>
              </header>
              <div className="impact-grid">
                {work.impact.map((item) => (
                  <article key={`${item.value}-${item.label}`}>
                    <strong>{item.value}</strong>
                    <p>{item.label}</p>
                  </article>
                ))}
              </div>
              <p className="impact-statement">{work.impactStatement}</p>
            </section>

            <section className="case-story">
              <div className="case-story-copy">
                <p>{work.storyEyebrow}</p>
                <h2 className="display-h1">{work.storyTitle}</h2>
                <div>
                  <span>01</span>
                  <p>{work.storyCopy}</p>
                </div>
              </div>
              <figure>
                <WorkImage work={work} alt={`${work.title} — ${uiCopy[locale].project.storyImage}`} loading="lazy" />
              </figure>
            </section>

            <section className="case-roadmap">
              <header>
                <p>{uiCopy[locale].project.roadmapEyebrow}</p>
                <h2 className="display-h1">{uiCopy[locale].project.roadmapTitle}</h2>
              </header>
              <ol>
                {work.roadmap.map((step, stepIndex) => (
                  <li key={step.title}>
                    <div className="roadmap-marker">
                      <span>0{stepIndex + 1}</span>
                      <i aria-hidden="true" />
                    </div>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.copy}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </>
        )}

        <footer className="next-project">
          <p>{uiCopy[locale].project.next}</p>
          <button
            type="button"
            onClick={(event) => requestNext(event.currentTarget)}
            aria-label={`${uiCopy[locale].project.openNext}: ${nextWork.title}`}
          >
            <WorkImage work={nextWork} alt="" loading="lazy" />
            <span className="project-shade" />
            <span className="next-project-copy">
              <small>{uiCopy[locale].project.case} 0{(index + 1) % projectCount + 1}</small>
              <strong>{nextWork.title}</strong>
              <i>{uiCopy[locale].project.explore} <ArrowIcon /></i>
            </span>
          </button>
        </footer>
      </div>
      {nextTransition && (
        <div
          className={`next-project-transition ${nextTransition.active ? "is-active" : ""}`}
          aria-hidden="true"
          style={{
            "--next-origin-x": `${nextTransition.rect.x}px`,
            "--next-origin-y": `${nextTransition.rect.y}px`,
            "--next-origin-width": `${nextTransition.rect.width}px`,
            "--next-origin-height": `${nextTransition.rect.height}px`,
          } as React.CSSProperties}
        >
          <WorkImage work={nextTransition.work} alt="" loading="eager" />
          <span className="project-shade" />
        </div>
      )}
    </div>
  );
}

function Preloader({ done, locale }: { done: boolean; locale: Locale }) {
  const trackRef = useRef<HTMLElement>(null);
  const desktopPercentRef = useRef<HTMLElement>(null);
  const mobilePercentRef = useRef<HTMLElement>(null);
  const [appIndex, setAppIndex] = useState(0);

  useEffect(() => {
    const started = performance.now();
    const duration = 1220;
    let frame = 0;
    let lastValue = -1;

    const animate = (now: number) => {
      const elapsed = Math.min(1, (now - started) / duration);
      const eased = 1 - Math.pow(1 - elapsed, 2.25);
      const value = Math.min(100, Math.round(eased * 100));

      trackRef.current?.style.setProperty("transform", `scaleX(${eased})`);
      if (value !== lastValue) {
        const label = `${String(value).padStart(3, "0")}%`;
        if (desktopPercentRef.current) desktopPercentRef.current.textContent = label;
        if (mobilePercentRef.current) mobilePercentRef.current.textContent = label;
        lastValue = value;
      }

      if (elapsed < 1) frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (done) return;
    const timer = window.setInterval(
      () => setAppIndex((index) => (index + 1) % preloaderApps.length),
      280,
    );
    return () => window.clearInterval(timer);
  }, [done]);

  const activeApp = preloaderApps[appIndex];

  return (
    <div className={`preloader ${done ? "is-done" : ""}`} aria-hidden={done}>
      <div className="preloader-top">
        <span className="preloader-brand-desktop">{uiCopy[locale].preloaderBrandDesktop}</span>
        <span className="preloader-brand-mobile">{uiCopy[locale].preloaderBrandMobile}</span>
        <strong ref={desktopPercentRef} className="preloader-percent-desktop">000%</strong>
        <span className="preloader-tagline-mobile">{uiCopy[locale].preloaderTagline}</span>
      </div>
      <p>{uiCopy[locale].preloaderTagline}</p>
      <div className="preloader-app" key={activeApp.name}>
        <img src={activeApp.icon} alt="" />
        {/* <small>{activeApp.name}</small> */}
      </div>
      <div className="preloader-bottom">
        <div className="preloader-track"><i ref={trackRef} /></div>
        <strong ref={mobilePercentRef} className="preloader-percent-mobile">000%</strong>
      </div>
    </div>
  );
}

function TaskForm({
  open,
  policyOpen,
  locale,
  onPolicyOpen,
}: {
  open: boolean;
  policyOpen: boolean;
  locale: Locale;
  onPolicyOpen: (value: boolean) => void;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const budgetRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "ready">("idle");
  const [budget, setBudget] = useState("");
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [consent, setConsent] = useState(false);
  const copy = uiCopy[locale];
  const budgetIndex = budgetOptions.en.indexOf(budget);
  const budgetLabel = budgetIndex >= 0 ? budgetOptions[locale][budgetIndex] : budget;

  const saveDraft = useCallback(() => {
    const form = formRef.current;
    if (!form) return;
    const values: Record<string, string> = {};
    new FormData(form).forEach((value, key) => {
      if (typeof value === "string") values[key] = value;
    });
    try {
      window.sessionStorage.setItem(
        "portfolio-task-draft",
        JSON.stringify({ values, budget, consent }),
      );
    } catch {
      // The form remains fully usable when browser storage is unavailable.
    }
  }, [budget, consent]);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    try {
      const saved = window.sessionStorage.getItem("portfolio-task-draft");
      if (!saved) return;
      const draft = JSON.parse(saved) as {
        values?: Record<string, string>;
        budget?: string;
        consent?: boolean;
      };
      Object.entries(draft.values ?? {}).forEach(([name, value]) => {
        const field = form.elements.namedItem(name);
        if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
          field.value = value;
        }
      });
      window.requestAnimationFrame(() => {
        setBudget(draft.budget ?? draft.values?.budget ?? "");
        setConsent(Boolean(draft.consent));
      });
    } catch {
      window.sessionStorage.removeItem("portfolio-task-draft");
    }
  }, []);

  useEffect(() => {
    if (open) return;
    const timer = window.setTimeout(() => setBudgetOpen(false), 0);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!budgetOpen) return;
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!budgetRef.current?.contains(event.target as Node)) setBudgetOpen(false);
    };
    window.addEventListener("pointerdown", closeOnOutsideClick);
    return () => window.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [budgetOpen]);

  useEffect(() => {
    saveDraft();
  }, [saveDraft]);

  const submitTask = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!consent) return;
    const formElement = event.currentTarget;
    setStatus("sending");
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch("/api/task", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      if (response.ok) {
        setStatus("sent");
        formElement.reset();
        setBudget("");
        setConsent(false);
        window.sessionStorage.removeItem("portfolio-task-draft");
      } else {
        setStatus("ready");
      }
    } catch {
      setStatus("ready");
    } finally {
      window.clearTimeout(timeout);
    }
  };

  return (
    <section id="task-form" className={`task-panel ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <div className={`task-views ${policyOpen ? "is-policy-open" : ""}`}>
        <div className="task-form-view">
          <div className="task-panel-inner">
            <div className="task-intro">
              <h2>
                <span>{copy.form.title[0]}</span>
                <span>{copy.form.title[1]}</span>
              </h2>
              <p>{copy.form.subtitle}</p>
            </div>
            <form ref={formRef} onSubmit={submitTask} onInput={saveDraft}>
              <label>
                <span>{copy.form.name}</span>
                <input name="name" autoComplete="name" required />
              </label>
              <label>
                <span>{copy.form.phone}</span>
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>
              <label>
                <span>{copy.form.company}</span>
                <input name="company" autoComplete="organization" />
              </label>
              <label>
                <span>{copy.form.email}</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <div className={`budget-field ${budgetOpen ? "is-open" : ""}`} ref={budgetRef}>
                <span>{copy.form.budget}</span>
                <input name="budget" type="hidden" value={budget} />
                <button
                  className="budget-trigger"
                  type="button"
                  aria-expanded={budgetOpen}
                  aria-haspopup="listbox"
                  onClick={() => setBudgetOpen((value) => !value)}
                >
                  <span>{budgetLabel || copy.form.budgetPlaceholder}</span>
                  <i aria-hidden="true" />
                </button>
                <div
                  className="budget-options"
                  role="listbox"
                  aria-label={copy.form.budget}
                  aria-hidden={!budgetOpen}
                >
                  {budgetOptions[locale].map((option, optionIndex) => (
                    <button
                      key={budgetOptions.en[optionIndex]}
                      type="button"
                      role="option"
                      tabIndex={budgetOpen ? 0 : -1}
                      aria-selected={budget === budgetOptions.en[optionIndex]}
                      onClick={() => {
                        setBudget(budgetOptions.en[optionIndex]);
                        setBudgetOpen(false);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <label className="message-field">
                <span>{copy.form.message}</span>
                <textarea
                  name="message"
                  required
                  placeholder={copy.form.messagePlaceholder}
                />
              </label>
              <div className="consent-row">
                <label className="consent-checkbox">
                  <input
                    name="consent"
                    type="checkbox"
                    checked={consent}
                    required
                    onChange={(event) => setConsent(event.target.checked)}
                  />
                  <span aria-hidden="true" />
                </label>
                <p>
                  {copy.form.consentBefore}
                  <button type="button" onClick={() => onPolicyOpen(true)}>
                    {copy.form.consentLink}
                  </button>.
                </p>
              </div>
              <div className="task-submit-row">
                <button type="submit" disabled={!consent || status === "sending"}>
                  {status === "sending" ? copy.form.sending : copy.form.send} <ArrowIcon />
                </button>
                <p aria-live="polite">
                  {status === "sent" && copy.form.sent}
                  {status === "ready" && copy.form.failed}
                </p>
              </div>
            </form>
          </div>
        </div>
        <article className="policy-view" aria-hidden={!policyOpen}>
          <div className="policy-inner">
            <header>
              <p>{copy.policy.eyebrow}</p>
              <h2>{copy.policy.title}</h2>
              <span>{copy.policy.effective}</span>
            </header>
            {copy.policy.sections.map((section, index) => (
              <section key={section.title}>
                <h3>{section.title}</h3>
                <p>
                  {section.body}
                  {index === 0 && (
                    <>
                      {" "}
                      <a href="mailto:hello@somedesigner.me">hello@somedesigner.me</a>.
                    </>
                  )}
                </p>
              </section>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default function Home() {
  const locale = DEFAULT_LOCALE;
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreProjectsOpen, setMoreProjectsOpen] = useState(false);
  const [taskOpen, setTaskOpen] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [projectExpanded, setProjectExpanded] = useState(false);
  const [desktopCurtainPhase, setDesktopCurtainPhase] = useState<"idle" | "covering" | "covered" | "revealing">("idle");
  const [projectOrigin, setProjectOrigin] = useState<ProjectOrigin>({
    x: 0,
    y: 0,
    width: 1,
    height: 1,
  });
  const projectCloseTimerRef = useRef<number | null>(null);
  const curtainTimersRef = useRef<number[]>([]);
  const curtainPhaseRef = useRef<"idle" | "covering" | "covered" | "revealing">("idle");
  const projectTriggerRef = useRef<HTMLButtonElement | null>(null);
  const heroHeaderRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const works = localizeWorks(locale);
  const copy = uiCopy[locale];

  const runDesktopCurtain = useCallback((commit: () => void) => {
    if (curtainPhaseRef.current !== "idle") return;
    curtainTimersRef.current.forEach((timer) => window.clearTimeout(timer));
    curtainTimersRef.current = [];
    curtainPhaseRef.current = "covering";
    setDesktopCurtainPhase("covering");

    const coverTimer = window.setTimeout(() => {
      curtainPhaseRef.current = "covered";
      setDesktopCurtainPhase("covered");
      commit();

      const revealTimer = window.setTimeout(() => {
        curtainPhaseRef.current = "revealing";
        setDesktopCurtainPhase("revealing");

        const finishTimer = window.setTimeout(() => {
          curtainPhaseRef.current = "idle";
          setDesktopCurtainPhase("idle");
          curtainTimersRef.current = [];
        }, 480);
        curtainTimersRef.current.push(finishTimer);
      }, 70);
      curtainTimersRef.current.push(revealTimer);
    }, 440);
    curtainTimersRef.current.push(coverTimer);
  }, []);

  const measureProjectDestination = useCallback((index: number, alignViewport: boolean) => {
    const card = document.querySelector<HTMLElement>(`.project-card[data-project-index="${index}"]`);
    if (!card) return;

    if (alignViewport) {
      const initialRect = card.getBoundingClientRect();
      const viewportInset = Math.max(16, (window.innerHeight - initialRect.height) / 2);
      const targetScroll = Math.max(0, window.scrollY + initialRect.top - viewportInset);
      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, targetScroll);
      root.style.scrollBehavior = previousScrollBehavior;
    }

    const rect = card.getBoundingClientRect();
    projectTriggerRef.current = card.querySelector(".project-link");
    setProjectOrigin({
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
    });
  }, []);

  const openProject = (index: number, card: HTMLElement) => {
    if (projectCloseTimerRef.current !== null) {
      window.clearTimeout(projectCloseTimerRef.current);
      projectCloseTimerRef.current = null;
    }
    const rect = card.getBoundingClientRect();
    projectTriggerRef.current = card.querySelector(".project-link");
    setMenuOpen(false);
    setMoreProjectsOpen(false);
    setTaskOpen(false);
    setPolicyOpen(false);
    setProjectOrigin({
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
    });
    if (window.matchMedia("(min-width: 1024px)").matches) {
      runDesktopCurtain(() => {
        setActiveProjectIndex(index);
        setProjectExpanded(false);
        window.requestAnimationFrame(() => setProjectExpanded(true));
      });
      return;
    }
    setActiveProjectIndex(index);
    setProjectExpanded(false);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setProjectExpanded(true));
    });
  };

  const openNextProject = (index: number) => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      runDesktopCurtain(() => {
        measureProjectDestination(index, true);
        setActiveProjectIndex(index);
      });
      return;
    }
    measureProjectDestination(index, true);
    setActiveProjectIndex(index);
  };

  const closeProject = useCallback(() => {
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    if (desktop) {
      runDesktopCurtain(() => {
        setProjectExpanded(false);
        setActiveProjectIndex(null);
        projectTriggerRef.current?.focus();
      });
      return;
    }
    setProjectExpanded(false);
    projectCloseTimerRef.current = window.setTimeout(() => {
      setActiveProjectIndex(null);
      projectCloseTimerRef.current = null;
      projectTriggerRef.current?.focus();
    }, 720);
  }, [activeProjectIndex, runDesktopCurtain]);

  const navigateTo = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    document.body.classList.remove("menu-active");
    setMenuOpen(false);
    setMoreProjectsOpen(false);
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }, 420);
  };

  const openTaskForm = () => {
    setMenuOpen(false);
    setMoreProjectsOpen(false);
    setPolicyOpen(false);
    setTaskOpen(true);
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const updateScrolled = () => {
      const headerHeight = heroHeaderRef.current?.offsetHeight ?? 72;
      setIsScrolled(window.scrollY >= headerHeight);
    };
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    window.addEventListener("resize", updateScrolled);
    return () => {
      window.removeEventListener("scroll", updateScrolled);
      window.removeEventListener("resize", updateScrolled);
    };
  }, []);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.08 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setPreloaderDone(true), 1550);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-active", menuOpen);
    document.body.classList.toggle("socials-active", moreProjectsOpen);
    document.body.classList.toggle("task-active", taskOpen);
    document.body.classList.toggle("policy-active", policyOpen);
    document.body.classList.toggle("project-active", activeProjectIndex !== null);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (activeProjectIndex !== null) {
          document.querySelector<HTMLButtonElement>(".project-close")?.click();
        }
        else if (policyOpen) setPolicyOpen(false);
        else {
          setMenuOpen(false);
          setMoreProjectsOpen(false);
          setTaskOpen(false);
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-active", "socials-active", "task-active", "policy-active", "project-active");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, moreProjectsOpen, taskOpen, policyOpen, activeProjectIndex, closeProject]);

  useEffect(() => () => {
    if (projectCloseTimerRef.current !== null) {
      window.clearTimeout(projectCloseTimerRef.current);
    }
    curtainTimersRef.current.forEach((timer) => window.clearTimeout(timer));
    curtainTimersRef.current = [];
  }, []);

  return (
    <main
      className={preloaderDone ? "page-ready" : "page-loading"}
      lang={locale}
    >
      <Preloader done={preloaderDone} locale={locale} />
      <div
        className={`desktop-project-curtain is-${desktopCurtainPhase}`}
        aria-hidden={desktopCurtainPhase === "idle"}
      />
      <header ref={heroHeaderRef} className={`site-header ${taskOpen ? "is-task-open" : ""}`}>
        <div className="header-left">
          <button
            className={`menu-button ${menuOpen || moreProjectsOpen || (taskOpen && !policyOpen) ? "is-open" : ""} ${policyOpen ? "is-back" : ""}`}
            onClick={() => {
              if (policyOpen) setPolicyOpen(false);
              else if (taskOpen) setTaskOpen(false);
              else if (moreProjectsOpen) setMoreProjectsOpen(false);
              else setMenuOpen((value) => !value);
            }}
            aria-expanded={menuOpen || moreProjectsOpen || taskOpen}
            aria-controls={taskOpen ? "task-form" : moreProjectsOpen ? "more-projects" : "site-menu"}
            aria-label={
              policyOpen
                ? copy.menuAria.back
                : taskOpen
                  ? copy.menuAria.closeTask
                  : moreProjectsOpen
                    ? copy.menuAria.close
                  : menuOpen
                    ? copy.menuAria.close
                    : copy.menuAria.open
            }
          >
            <span />
            <span />
          </button>
        </div>
        <div className="header-actions">
          <button
            className={`task-button ${taskOpen ? "is-open" : ""}`}
            type="button"
            onClick={() => {
              setMenuOpen(false);
              setMoreProjectsOpen(false);
              setPolicyOpen(false);
              setTaskOpen((value) => !value);
            }}
            aria-expanded={taskOpen}
            aria-controls="task-form"
            aria-hidden={policyOpen}
            tabIndex={policyOpen ? -1 : 0}
          >
            <span>{copy.task}</span>
            <i className="task-icon-wrap" aria-hidden="true">
              <img src="/portfolio/task-icon.svg" alt="" />
            </i>
          </button>
        </div>
      </header>

      <button
        className={`sticky-task-button ${isScrolled && !footerVisible && !taskOpen && !menuOpen && !moreProjectsOpen && !policyOpen && activeProjectIndex === null ? "is-visible" : ""}`}
        type="button"
        aria-label={copy.task}
        aria-controls="task-form"
        aria-expanded={taskOpen}
        tabIndex={isScrolled && !footerVisible && !taskOpen && !menuOpen && !moreProjectsOpen && !policyOpen && activeProjectIndex === null ? 0 : -1}
        onClick={openTaskForm}
      >
        <img src="/portfolio/task-icon.svg" alt="" aria-hidden="true" />
      </button>

      <TaskForm open={taskOpen} policyOpen={policyOpen} locale={locale} onPolicyOpen={setPolicyOpen} />

      {activeProjectIndex !== null && (
        <ProjectModal
          work={works[activeProjectIndex]}
          nextWork={works[(activeProjectIndex + 1) % works.length]}
          index={activeProjectIndex}
          locale={locale}
          expanded={projectExpanded}
          origin={projectOrigin}
          projectCount={works.length}
          onPrepareClose={() => measureProjectDestination(activeProjectIndex, true)}
          onClose={closeProject}
          onNext={() => openNextProject((activeProjectIndex + 1) % works.length)}
        />
      )}

      <div id="site-menu" className={`menu-overlay ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav aria-label={copy.footerNavigation}>
          {copy.navigation.map(([label, href], index) => (
            <a key={label} href={href} onClick={(event) => navigateTo(event, href)}>
              <small>0{index + 1}</small>
              {label}
            </a>
          ))}
        </nav>
        <div className="menu-meta">
          <section>
            <p>{copy.socials}</p>
            <a href="https://www.linkedin.com/in/bahdanau/" target="_blank" rel="noreferrer">
              <img src="/portfolio/linkedin.svg" alt="" /> LinkedIn
            </a>
            <a href="https://dribbble.com/offbody" target="_blank" rel="noreferrer">
              <img src="/portfolio/dribbble.svg" alt="" /> Dribbble
            </a>
          </section>
          <section>
            <p>{copy.credits}</p>
            <strong>{copy.name}</strong>
            <span>{copy.role}</span>
            <span>{copy.remote}</span>
          </section>
        </div>
        <p className="menu-signature">{copy.signature}</p>
      </div>

      <div
        id="more-projects"
        className={`more-projects-overlay ${moreProjectsOpen ? "is-open" : ""}`}
        aria-hidden={!moreProjectsOpen}
      >
        <button
          className="more-projects-close"
          type="button"
          aria-label={copy.menuAria.close}
          onClick={() => setMoreProjectsOpen(false)}
        >
          <span />
          <span />
        </button>
        <p>{copy.moreProjects}</p>
        <nav aria-label={copy.socials}>
          <a href="https://www.linkedin.com/in/bahdanau/" target="_blank" rel="noreferrer">
            <img src="/portfolio/linkedin.svg" alt="" />
            <span>LinkedIn</span>
            <ArrowIcon />
          </a>
          <a href="https://dribbble.com/offbody" target="_blank" rel="noreferrer">
            <img src="/portfolio/dribbble.svg" alt="" />
            <span>Dribbble</span>
            <ArrowIcon />
          </a>
        </nav>
      </div>

      <section className="hero" id="top">
        <div className="hero-card reveal is-visible">
          <img src="/portfolio/hero-img.png" alt={`${copy.name}, ${copy.role}`} />
          <div className="hero-shade" />
          <div className="hero-content">
            <p>{copy.heroName}</p>
            <h1 className="display-h1">
              {copy.heroTitle[0]}
              <br />
              {copy.heroTitle[1]}
            </h1>
            <ChipRail tags={heroTags[locale]} auto label={copy.heroDisciplines} />
          </div>
        </div>

        <div className="hero-intro reveal">
          <h2 className="display-h2">
            <span className="hero-intro-title-desktop">{copy.heroIntro}</span>
            <span className="hero-intro-title-mobile">
              {copy.heroIntroLines.map((line) => <span key={line}>{line}</span>)}
            </span>
          </h2>
          <div className="stats">
            <div>
              <strong>13+</strong>
              <span>{copy.year}</span>
              <p>{copy.statDesign}</p>
            </div>
            <div>
              <strong>8+</strong>
              <span>{copy.year}</span>
              <p>{copy.statResearch}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="works section-shell" id="works">
        <div className="section-heading reveal">
          <p>{copy.selected}</p>
          <h2 className="display-h1">{copy.recentWorks}</h2>
        </div>
        <div className="projects-grid">
          {works.map((work, index) => (
            <ProjectCard
              key={work.image}
              work={work}
              index={index}
              locale={locale}
              onOpen={openProject}
            />
          ))}
        </div>
        <div className="project-cta reveal">
          <div className="cta-card">
            <picture className="cta-background">
              <source media="(min-width: 1024px)" srcSet="/portfolio/case-form-img-desktop.png" />
              <img src="/portfolio/case-form-img.png" alt="" />
            </picture>
            <p className="cta-availability"><i aria-hidden="true" />{locale === "en" ? "Available" : "Доступен"}</p>
            <div className="cta-copy">
              <h2 className="display-h2">
                <span className="cta-title-desktop">
                  {locale === "en" ? <>Ready for a<br />design adventure.</> : <>Готов к<br />дизайн-приключению.</>}
                </span>
                <span className="cta-title-mobile">
                  {copy.readyLines.map((line) => <span key={line}>{line}</span>)}
                </span>
              </h2>
            </div>
            <span className="cta-action">{copy.newProject} <ArrowIcon /></span>
            <button
              className="cta-card-link"
              type="button"
              aria-label={copy.startNewProject}
              onClick={openTaskForm}
            />
          </div>
        </div>
        <button
          className="text-link reveal"
          type="button"
          onClick={() => {
            setMenuOpen(false);
            setTaskOpen(false);
            setPolicyOpen(false);
            setMoreProjectsOpen(true);
          }}
        >
          {copy.moreProjects} <ArrowIcon />
        </button>
      </section>

      <section className="mindset section-shell" id="mindset">
        <div className="section-heading reveal">
          <h2 className="display-h1">{copy.mindsetTitle}</h2>
        </div>
        <div className="mindset-copy">
          <h2 className="mindset-lead display-h2 reveal">
            {copy.mindsetLeadBefore}<em>{copy.mindsetLeadEmphasis}</em>{copy.mindsetLeadAfter}
          </h2>
          <div className="mindset-columns reveal">
            {copy.mindsetParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className="reveal">
          <MindsetCanvas locale={locale} />
        </div>
        <div className="art-design reveal">
          <div className="art-design-row">
            <p>{copy.art}</p>
            <span className="art-design-meta">{copy.yes}</span>
          </div>
          <div className="art-design-row">
            <p><strong>{copy.designStrong}</strong>{copy.designAfter}</p>
            <span className="art-design-meta">{copy.but}</span>
          </div>
        </div>
      </section>

      <section className="skills section-shell" id="skills">
        <div className="section-heading reveal">
          <h2 className="display-h1">{copy.skillsTitle}</h2>
        </div>
        <div className="skills-list">
          {copy.skills.map((skill, index) => (
            <article className="skill-row reveal" key={`skill-${index}`} style={{ "--delay": `${index * 55}ms` } as React.CSSProperties}>
              <div>
                <h2 className="display-h2">{skill.title}</h2>
                <span className="skill-meta">{skill.meta}</span>
              </div>
              <p>{skill.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <footer ref={footerRef} className="portfolio-footer" id="contact">
        <img className="footer-pointer" src="/portfolio/kv-pointer-v2.svg" alt="" />
        <div className="footer-hero">
          <p className="availability"><span /> {copy.availability}</p>
          <h2 className="display-h1">
            <span className="footer-title-desktop">{copy.footerTitle}</span>
            <span className="footer-title-mobile">
              {copy.footerTitleLines.map((line) => <span key={line}>{line}</span>)}
            </span>
          </h2>
          <button
            className="conversation-button"
            type="button"
            onClick={openTaskForm}
          >
            <span>{copy.startProject}</span>
            <img src="/portfolio/task-icon.svg" alt="" />
          </button>
        </div>

        <div className="footer-links">
          <div className="footer-contact">
            <a href="#top" className="back-top">{copy.backTop} <span>↑</span></a>
            <p>{copy.gotVision[0]}<br />{copy.gotVision[1]}</p>
            <a href="https://t.me/somedesigner" target="_blank" rel="noreferrer" className="footer-email">@somedesigner</a>
          </div>
          <nav aria-label={copy.footerNavigation}>
            <p>{copy.footerNavigation}</p>
            <a href="#works">{copy.footerWorks}</a>
            <a href="#skills">{copy.footerServices}</a>
          </nav>
          <div className="footer-socials">
            <p>{copy.socials}</p>
            <a href="https://www.linkedin.com/in/bahdanau/" target="_blank" rel="noreferrer">
              <img src="/portfolio/linkedin.svg" alt="" /> LinkedIn
            </a>
            <a href="https://www.behance.net/offbody001c" target="_blank" rel="noreferrer">
              <img src="/portfolio/behance.svg" alt="" /> Behance
            </a>
            <a href="https://dribbble.com/offbody" target="_blank" rel="noreferrer">
              <img src="/portfolio/dribbble.svg" alt="" /> Dribbble
            </a>
          </div>
        </div>

        <div className="footer-signature">
          <h3>{copy.name}</h3>
          <p>{copy.role}<br />{copy.remote}</p>
          <span>@ 2026</span>
        </div>
      </footer>
    </main>
  );
}
