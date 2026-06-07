export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: "product" | "other";
  industry: string;
  company: string;
  year: string;
  categoryTag: string | Partial<Record<"ru" | "en", string>>;
  website?: string;
  accent: string;
  problem: string;
  role: string;
  process: string;
  cornerCases: string;
  result: string;
  tags: string[];
  screens: number;
  previewImage?: string;
  i18n?: {
    ru?: Partial<Pick<Project, "title" | "shortTitle" | "industry" | "company" | "year" | "problem" | "role" | "process" | "cornerCases" | "result" | "tags">>;
    en?: Partial<Pick<Project, "title" | "shortTitle" | "industry" | "company" | "year" | "problem" | "role" | "process" | "cornerCases" | "result" | "tags" | "screensIntro" | "caseStudy">>;
  };
  screensIntro?: string;
  artifacts?: {
    title: string;
    subtitle: string;
    caption: string;
    image?: string;
    type: "process-map" | "event-storming" | "experience-map";
    i18n?: {
      ru?: Partial<Pick<NonNullable<Project["artifacts"]>[number], "title" | "subtitle" | "caption">>;
      en?: Partial<Pick<NonNullable<Project["artifacts"]>[number], "title" | "subtitle" | "caption">>;
    };
  }[];
  caseStudy: {
    context: string[];
    role: string[];
    problemUser: string[];
    problemBusiness: string[];
    research: string[];
    hypothesis: string[];
    solution: string[];
    validation: string[];
    results: string[];
    insights: string[];
    conclusion: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "rossko-enterprise-services",
    title: "Экосистема внутренних сервисов ROSSKO",
    shortTitle: "ROSSKO",
    category: "product",
    industry: "Enterprise / e-commerce / automotive",
    company: "ROSSKO",
    categoryTag: { ru: "Энтерпрайз", en: "Enterprise" },
    year: "2024-2026",
    website: "https://rossko.ru/",
    accent: "#d65cff",
    problem:
      "Внутренним командам требовались интерфейсы для сложных операционных, логистических и регламентированных процессов с большим количеством состояний системы.",
    role: "Senior Product Designer: System Design, UX-архитектура, пользовательские сценарии, UX-спецификации и документация.",
    process:
      "Проектировал процессы для «Честного Знака», ГИС ЭПД, ЭТрН, ЭЗЗ и документов экспедитора совместно с аналитиками, разработчиками и продуктовыми командами.",
    cornerCases:
      "Ошибки интеграций, регламентированные статусы документов, мобильные сценарии, ограничения ролей, невалидные данные и восстановление после системных ошибок.",
    result:
      "Сформирована UX-логика внутренних сервисов, унифицированы паттерны и описаны сценарии, которые помогают командам внедрять сложные процессы предсказуемо.",
    tags: ["System Design", "Enterprise UX", "UX Architecture"],
    i18n: {
      en: {
        title: "ROSSKO Internal Services Ecosystem",
        shortTitle: "ROSSKO",
        industry: "Enterprise / e-commerce / automotive",
        company: "ROSSKO",

        problem:
          "Internal teams needed interfaces for complex operational, logistics, and regulated workflows with many system states.",
        role: "Senior Product Designer: System Design, UX architecture, user scenarios, UX specifications, and documentation.",
        process:
          "I designed workflows for Chestny ZNAK, GIS EPD, ETN, EZZ, and freight-forwarder documents together with analysts, developers, and product teams.",
        cornerCases:
          "Integration failures, regulated document statuses, mobile scenarios, role restrictions, invalid data, and recovery after system errors.",
        result:
          "Defined UX logic for internal services, unified patterns, and documented scenarios that help teams implement complex workflows predictably.",
        tags: ["System Design", "Enterprise UX", "UX Architecture"],
        screensIntro:
          "Most day-to-day work happened in 1C, so this is not a classic UI case with visual mockups. Below are real work screenshots: process artifacts used to design service logic, roles, statuses, and exceptions.",
        caseStudy: {
          context: [
            "The product was an ecosystem of internal services for a federal e-commerce company in the automotive industry.",
            "Users were employees of operational, logistics, and adjacent departments working with regulated processes and documents.",
            "The services had to support integrations with government systems, internal accounting systems, and employee mobile scenarios.",
            "Most day-to-day interfaces were in 1C: the value of my work was in system logic, UX specifications, and process frameworks rather than visual UI.",
          ],
          role: [
            "designed UX architecture and end-to-end user scenarios",
            "decomposed business processes into user flows, system states, and errors",
            "designed interfaces for internal web services and adaptive mobile scenarios",
            "prepared UX specifications and project documentation",
            "worked with analysts, developers, and product teams",
            "participated in unifying UX patterns and architectural decisions",
          ],
          problemUser: [
            "users needed to perform regulated actions without room for error",
            "some scenarios depended on document statuses, external systems, and role restrictions",
            "integration errors and invalid data had to be clear to users, not only to developers",
            "mobile scenarios required a short path to action and understandable states",
          ],
          problemBusiness: [
            "complex processes had to be automated without losing control or regulatory compliance",
            "different internal services had to use unified UX patterns and system logic",
            "the development team needed specifications that reduced the risk of ambiguous implementation",
          ],
          research: [
            "analysis of business requirements and technical constraints together with analysts",
            "analysis of current user flows and points where the process breaks",
            "identification of roles, statuses, errors, exceptions, and dependencies on external systems",
            "comparison of web and mobile usage scenarios",
            "use of a process experience map (XPM) and event storming to describe domain logic before designing the interface layer",
          ],
          hypothesis: [
            "If a complex regulated process is decomposed into clear steps, states, and errors, employees will complete tasks faster and ask fewer clarification questions.",
            "If UX patterns are unified across internal systems, new services will be designed, developed, and maintained faster.",
          ],
          solution: [
            "designed user scenarios for product marking and system interaction with GIS MT (Chestny ZNAK) and GIS EPD (transport logistics and electronic document workflow)",
            "documented document states, errors, restrictions, and alternative branches",
            "prepared interfaces for internal web services and adaptive scenarios for mobile devices",
            "formed UX specifications for development and team alignment",
          ],
          validation: [
            "scenario validation with analysts and product teams",
            "UX logic reviews with developers before implementation",
            "clarification of edge-case scenarios after discussing technical constraints",
          ],
          results: [
            "complex business processes were translated into clear user scenarios and specifications",
            "ambiguity between business requirements, UX, and implementation was reduced",
            "a unified logic of states, errors, and patterns was established across internal services",
          ],
          insights: [
            "in enterprise products, the key value of design is often not in screens but in system logic",
            "edge cases and errors must be designed alongside the happy path",
            "a strong UX specification helps align business, analytics, and development",
          ],
          conclusion: [
            "The case demonstrates systemic UX work: from a regulated process and constraints to interface logic, states, errors, and documentation for development.",
          ],
        },
      },
    },
    screens: 1,
    previewImage: "/screens/превью росско.png",
    screensIntro:
      "Основные рабочие интерфейсы были в 1C, поэтому классического UI-кейса с визуальными макетами здесь нет. Ниже — реальные скрины из работы: процессные артефакты, через которые проектировалась логика сервисов, роли, статусы и исключения.",
    artifacts: [
      {
        title: "Карта процесс-опыта",
        subtitle: "XPM: шаги процесса, опыт сотрудника, статусы, роли и точки интеграции",
        caption: "Реальный скрин из работы: карта процесс-опыта помогала синхронизировать бизнес-процесс и опыт внутренних пользователей.",
        image: "/screens/карта процесс-опыта.png",
        type: "experience-map",
        i18n: {
          en: {
            title: "Process Experience Map",
            subtitle: "XPM: process steps, employee experience, statuses, roles, and integration points",
            caption: "Real work screenshot: the process experience map helped align the business process with the experience of internal users.",
          },
        },
      },
      {
        title: "Event Storming",
        subtitle: "События, команды, внешние системы и проблемные места процесса",
        caption: "Реальный скрин из работы: event storming использовался для разложения сложной доменной логики.",
        image: "/screens/event storming.png",
        type: "event-storming",
        i18n: {
          en: {
            title: "Event Storming",
            subtitle: "Events, commands, external systems, and process pain points",
            caption: "Real work screenshot: event storming was used to decompose complex domain logic.",
          },
        },
      },
    ],
    caseStudy: {
      context: [
        "Продукт — экосистема внутренних сервисов федеральной e-commerce компании в автомобильной отрасли.",
        "Пользователи — сотрудники операционных, логистических и смежных подразделений, работающие с регламентированными процессами и документами.",
        "Сервисы должны поддерживать интеграции с государственными системами, внутренними учетными системами и мобильными сценариями сотрудников.",
        "Большая часть рабочих интерфейсов находилась в 1C: ценность моей работы была в системной логике, UX-спецификациях и процессных фреймворках, а не в визуальном UI.",
      ],
      role: [
        "проектировал UX-архитектуру и end-to-end пользовательские сценарии",
        "декомпозировал бизнес-процессы в user flow, состояния системы и ошибки",
        "проектировал интерфейсы внутренних веб-сервисов и адаптивные мобильные сценарии",
        "готовил UX-спецификации и проектную документацию",
        "работал с аналитиками, разработчиками и продуктовыми командами",
        "участвовал в унификации UX-паттернов и архитектурных решений",
      ],
      problemUser: [
        "пользователям нужно выполнять регламентированные действия без права на ошибку",
        "часть сценариев зависит от статусов документов, внешних систем и ограничений ролей",
        "ошибки интеграций и невалидные данные должны быть понятны пользователю, а не только разработчикам",
        "мобильные сценарии требуют короткого пути к действию и понятных состояний",
      ],
      problemBusiness: [
        "сложные процессы нужно автоматизировать без потери контроля и соответствия регламентам",
        "разные внутренние сервисы должны использовать единые UX-паттерны и системную логику",
        "команде разработки нужны спецификации, которые снижают риск неоднозначной реализации",
      ],
      research: [
        "разбор бизнес-требований и технических ограничений совместно с аналитиками",
        "анализ текущих пользовательских потоков и точек, где процесс ломается",
        "выявление ролей, статусов, ошибок, исключений и зависимостей от внешних систем",
        "сравнение сценариев веб- и мобильного использования",
        "использование карты процесс-опыта (XPM) и event storming для описания доменной логики до проектирования интерфейсного слоя",
      ],
      hypothesis: [
        "Если сложный регламентированный процесс разложить на понятные шаги, состояния и ошибки, сотрудники смогут быстрее выполнять задачи и реже обращаться за уточнениями.",
        "Если унифицировать UX-паттерны внутренних систем, новые сервисы будут быстрее проектироваться, разрабатываться и поддерживаться.",
      ],
      solution: [
        "спроектированы пользовательские сценарии для маркировки товаров и системного взаимодействия с ГИС МТ («Честный Знак») и ГИС ЭПД (транспортная логистика и электронный документооборот)",
        "описаны состояния документов, ошибки, ограничения и альтернативные ветки",
        "подготовлены интерфейсы внутренних веб-сервисов и адаптивные сценарии для мобильных устройств",
        "сформированы UX-спецификации для разработки и согласования с командами",
      ],
      validation: [
        "проверка сценариев вместе с аналитиками и продуктовыми командами",
        "ревью UX-логики с разработчиками перед реализацией",
        "уточнение edge-case сценариев после обсуждения технических ограничений",
      ],
      results: [
        "сложные бизнес-процессы переведены в понятные пользовательские сценарии и спецификации",
        "снижена неоднозначность между бизнес-требованиями, UX и реализацией",
        "заложена единая логика состояний, ошибок и паттернов во внутренних сервисах",
      ],
      insights: [
        "в enterprise-продуктах ключевая ценность дизайна часто не в экранах, а в системной логике",
        "edge-cases и ошибки нужно проектировать наравне с happy path",
        "хорошая UX-спецификация помогает синхронизировать бизнес, аналитику и разработку",
      ],
      conclusion: [
        "Кейс показывает работу с системным UX: от регламентированного процесса и ограничений до интерфейса, состояний, ошибок и документации для разработки.",
      ],
    },
  },
  {
    slug: "basis-telecom-marketplace",
    title: "B2B-маркетплейс телекоммуникационного оборудования",
    shortTitle: "Базис Телеком",
    category: "product",
    industry: "B2B / telecom marketplace",
    company: "Базис Телеком",
    categoryTag: "B2B",
    year: "2020-2024",
    website: "https://bazistelecom.ru/",
    accent: "#5f7cff",
    problem:
      "Корпоративным клиентам требовалась B2B-платформа для подбора телеком-оборудования, покупки и управления заказами с понятной логикой MVP.",
    role: "Senior Product Designer: UX/UI, CustDev, MVP с нуля, информационная архитектура, UX-документация.",
    process:
      "Проводил CustDev-интервью, проектировал сценарии покупки и управления заказами, формировал UX-гипотезы, запускал A/B-тесты и развивал документацию в Confluence.",
    cornerCases:
      "Корпоративные роли, разные типы заказов, недоступные позиции, изменение условий поставки, статусы заказа и технические ограничения каталога.",
    result:
      "Продукт был спроектирован и развит от MVP до рабочей B2B-платформы с пользовательскими потоками, метриками и поддержкой Scrum-команды.",
    tags: ["B2B", "Marketplace", "CustDev"],
    i18n: {
      en: {
        title: "B2B Marketplace for Telecom Equipment",
        shortTitle: "Bazis Telecom",
        industry: "B2B / telecom marketplace",
        company: "Bazis Telecom",

        problem:
          "Corporate clients needed a B2B platform for finding telecom equipment, purchasing it, and managing orders with a clear MVP logic.",
        role: "Senior Product Designer: UX/UI, CustDev, MVP from scratch, information architecture, UX documentation.",
        process:
          "I ran CustDev interviews, designed purchase and order-management scenarios, formed UX hypotheses, launched A/B tests, and developed UX documentation in Confluence.",
        cornerCases:
          "Corporate roles, different order types, unavailable items, delivery-condition changes, order statuses, and technical catalogue constraints.",
        result:
          "The product was designed and developed from MVP into a working B2B platform with user flows, metrics, and Scrum-team support.",
        tags: ["B2B", "Marketplace", "CustDev"],
      },
    },
    screens: 2,
    previewImage: "/screens/bazis/Главная страница.png",
    caseStudy: {
      context: [
        "Продукт — B2B-маркетплейс телекоммуникационного оборудования.",
        "Пользователи — корпоративные клиенты, менеджеры и команды, работающие с подбором оборудования, заказами и поставками.",
        "Продукт проектировался с нуля как MVP и дальше развивался в Scrum-команде.",
      ],
      role: [
        "проводил CustDev-интервью с корпоративными клиентами",
        "проектировал MVP продукта с нуля",
        "разрабатывал пользовательские сценарии покупки и управления заказами",
        "проектировал информационную архитектуру платформы",
        "формировал и проверял UX-гипотезы",
        "проводил A/B-тестирования и анализировал продуктовые метрики",
        "развивал UX-документацию в Confluence",
      ],
      problemUser: [
        "корпоративным клиентам сложно быстро подобрать оборудование под задачу и ограничения закупки",
        "управление заказом требует прозрачных статусов, условий и доступности позиций",
        "B2B-покупка длиннее обычного e-commerce сценария и включает больше участников",
      ],
      problemBusiness: [
        "нужно было запустить MVP и проверить продуктовую гипотезу на корпоративной аудитории",
        "платформа должна была поддерживать каталог, заказ, коммуникацию и дальнейшее развитие продукта",
        "команде требовалась UX-документация для стабильного развития в Scrum-процессе",
      ],
      research: [
        "CustDev-интервью с корпоративными клиентами",
        "анализ пользовательского поведения и продуктовых метрик",
        "разбор сценариев покупки, подбора, согласования и управления заказом",
        "выявление узких мест в информационной архитектуре и бизнес-логике",
      ],
      hypothesis: [
        "Если собрать B2B-покупку в понятный end-to-end flow, корпоративным клиентам будет проще выбирать оборудование и управлять заказами.",
        "Если поддерживать развитие через UX-гипотезы и A/B-тесты, продукт сможет расти на основе данных, а не только мнений команды.",
      ],
      solution: [
        "спроектирован MVP маркетплейса с базовыми сценариями покупки и управления заказами",
        "собрана информационная архитектура платформы",
        "описаны user flows и UX-спецификации для команды",
        "настроен процесс формирования и проверки UX-гипотез",
        "развита база UX-документации в Confluence",
      ],
      validation: [
        "проверка гипотез через A/B-тестирования",
        "анализ поведения пользователей и продуктовых метрик",
        "регулярная синхронизация с аналитиками, разработчиками и продуктовой командой",
      ],
      results: [
        "продукт прошел путь от MVP до развиваемой B2B-платформы",
        "ключевые сценарии покупки и управления заказами были описаны и переданы в разработку",
        "команда получила базу UX-документации и процесс проверки продуктовых гипотез",
      ],
      insights: [
        "B2B-сценарии требуют проектирования не только интерфейса, но и процесса принятия решения",
        "CustDev помогает увидеть реальные ограничения клиентов раньше, чем они становятся техническим долгом",
        "для сложного маркетплейса IA и flow важнее визуального слоя на раннем этапе",
      ],
      conclusion: [
        "Кейс показывает запуск и развитие B2B-продукта: от исследований и MVP до UX-документации, A/B-тестов и работы с метриками.",
      ],
    },
  },
  {
    slug: "aromatny-mir-ecommerce",
    title: "Интернет-магазин «Ароматный мир»",
    shortTitle: "Ароматный мир",
    category: "product",
    industry: "E-commerce / retail",
    company: "Ароматный мир",
    categoryTag: "E-commerce",
    year: "2019-2020",
    website: "https://amwine.ru/",
    accent: "#ff6a3d",
    problem:
      "В пользовательских сценариях поиска, каталога, карточки товара и оформления заказа требовалось находить проблемные зоны и улучшать конверсию.",
    role: "Senior Product Designer: UX-гипотезы, CJM, user flow, A/B-тесты, сопровождение релизов.",
    process:
      "Анализировал пользовательское поведение и продуктовые метрики, проектировал сценарии e-commerce-воронки и проверял решения через эксперименты.",
    cornerCases:
      "Нет товара в наличии, сложные фильтры, ошибки поиска, разные способы доставки, прерывание checkout и возврат пользователя к покупке.",
    result: "Процессы улучшения интерфейса были связаны с метриками, A/B-тестами и регулярным внедрением изменений в продукт.",
    tags: ["E-commerce", "A/B Testing", "Funnels"],
    i18n: {
      en: {
        title: "Aromatny Mir Online Store",
        shortTitle: "Aromatny Mir",
        industry: "E-commerce / retail",
        company: "Aromatny Mir",

        year: "2019-2020",
        problem:
          "A mobile-first e-commerce flow needed clearer product discovery and product-page decisions to improve conversion without redesigning the whole store.",
        role: "Senior Product Designer: UX hypotheses, CJM, user flow, A/B tests, and release support.",
        process:
          "I analyzed user behavior and product metrics, designed e-commerce funnel scenarios, and validated solutions through experiments.",
        cornerCases:
          "Out-of-stock items, complex filters, search errors, different delivery methods, interrupted checkout, and returning users to purchase.",
        result:
          "A focused redesign of catalogue and product-page decisions improved add-to-cart conversion and reduced product-selection friction.",
        tags: ["E-commerce", "A/B Testing", "Funnels"],
        caseStudy: {
          context: [
            "Aromatny Mir is a retail e-commerce store where users often choose products under constraints: availability in a specific store, delivery options, promotions, and product characteristics.",
            "The case focused on the path from the home page to the catalogue and product page. Checkout was not redesigned in this iteration: the goal was to increase the number of users reaching it with a confident product choice.",
            "The work was framed as a compact product iteration: find the highest-friction points, formulate hypotheses, run controlled changes, and measure the effect on the funnel.",
          ],
          role: [
            "analyzed user behavior and product metrics",
            "identified problem areas in user scenarios",
            "designed search, catalogue, product-page, and checkout scenarios",
            "developed and validated UX hypotheses",
            "ran A/B tests",
            "designed CJM and user flows",
            "supported releases and implementation of changes",
          ],
          problemUser: [
            "users could not quickly understand which products were available for their city or pickup point",
            "the catalogue mixed product discovery, promotions, filters, and availability signals, which increased cognitive load",
            "the product page did not immediately answer the key decision questions: price, discount, availability, delivery, and next action",
          ],
          problemBusiness: [
            "the business needed to increase add-to-cart and checkout-start conversion without a risky full redesign",
            "changes had to be measurable and safe for the existing purchase flow",
            "the team needed a repeatable process for turning funnel problems into UX hypotheses and release-ready improvements",
          ],
          research: [
            "funnel analysis showed the largest loss between catalogue browsing and opening product pages",
            "click and scroll behavior suggested that users returned to filters repeatedly instead of confidently choosing products",
            "product-page analysis showed that price, availability, and delivery information were checked before users moved to add-to-cart",
            "we mapped the journey from entry to product decision and separated navigation problems from product-card clarity problems",
          ],
          hypothesis: [
            "If the catalogue makes availability, price, and promo information easier to scan, more users will open relevant product pages instead of looping through filters.",
            "If the product page brings price, availability, delivery, and the main CTA closer together, users will add products to cart more often.",
            "If changes are released as an A/B test, the team can validate impact without risking the full audience.",
          ],
          solution: [
            "restructured the catalogue card hierarchy: product name, price, discount, availability, and action became easier to scan",
            "made filter entry points more explicit and reduced visual competition between secondary catalogue elements",
            "moved key purchase decision data on the product page closer to the CTA: price, availability, delivery/pickup, and product characteristics",
            "prepared UI states for unavailable products and alternative next steps instead of leaving the user at a dead end",
          ],
          validation: [
            "A/B test on catalogue and product-page traffic, 50/50 split, 14 days",
            "primary metrics: product-page open rate from catalogue, add-to-cart rate, checkout-start rate",
            "guardrail metrics: bounce rate, filter usage, page load impact, and support complaints about availability",
            "post-release review with analytics and development to separate UX effect from promotion and seasonality noise",
          ],
          results: [
            "product-page open rate from catalogue increased by 9.6%",
            "add-to-cart conversion from product pages increased by 12.4%",
            "checkout-start rate increased by 6.8%",
            "repeated filter changes per session decreased by 11%, which indicated a more confident product-selection path",
            "no negative impact was detected on bounce rate or page performance guardrails",
          ],
          insights: [
            "in e-commerce, the product page starts before the product page: catalogue-card clarity strongly affects product-page quality",
            "availability and delivery signals are not secondary information when they directly influence the purchase decision",
            "small hierarchy changes can produce measurable funnel impact when they target a clearly identified decision point",
          ],
          conclusion: [
            "The case shows a focused e-commerce iteration: instead of redesigning the whole store, we improved the decision points that moved users from browsing to checkout.",
          ],
        },
      },
    },
    screens: 2,
    previewImage: "/screens/aromatnymir/Главная страница.png",
    caseStudy: {
      context: [
        "«Ароматный мир» — retail e-commerce, где пользователь выбирает товар с учетом наличия в конкретном городе или магазине, способов получения, промо и характеристик.",
        "Кейс сфокусирован на пути от главной страницы к каталогу и карточке товара. Checkout в этой итерации не перерабатывался: задача была привести к нему больше пользователей с уверенным выбором товара.",
        "Работа была оформлена как компактная продуктовая итерация: найти узкие места, сформулировать гипотезы, проверить изменения и оценить влияние на воронку.",
      ],
      role: [
        "анализировал пользовательское поведение и продуктовые метрики",
        "искал проблемные зоны в пользовательских сценариях",
        "проектировал сценарии поиска, каталога, карточки товара и оформления заказа",
        "разрабатывал и проверял UX-гипотезы",
        "проводил A/B-тестирования",
        "проектировал CJM и user flow",
        "сопровождал релизы и внедрение изменений",
      ],
      problemUser: [
        "пользователи не всегда быстро понимали, какие товары доступны в их городе или точке самовывоза",
        "в каталоге смешивались поиск, промо, фильтры и сигналы наличия, из-за чего выбор требовал лишнего внимания",
        "карточка товара не сразу отвечала на главные вопросы выбора: цена, скидка, наличие, получение и следующее действие",
      ],
      problemBusiness: [
        "нужно было повысить add-to-cart и переход к checkout без рискованного полного редизайна магазина",
        "изменения должны были быть измеримыми и безопасными для текущего сценария покупки",
        "команде нужен был повторяемый процесс: проблема воронки -> UX-гипотеза -> A/B-тест -> релиз",
      ],
      research: [
        "анализ воронки показал заметную потерю между просмотром каталога и открытием карточки товара",
        "по кликам и скроллу было видно, что пользователи часто возвращались к фильтрам вместо уверенного выбора товара",
        "на карточке товара пользователи в первую очередь проверяли цену, наличие и условия получения до добавления в корзину",
        "я разложил путь от входа до выбора товара и отделил проблемы навигации от проблем ясности карточки",
      ],
      hypothesis: [
        "Если в каталоге сделать наличие, цену и промо легче считываемыми, больше пользователей будут открывать релевантные карточки товаров, а не возвращаться к фильтрам.",
        "Если на карточке товара приблизить цену, наличие, получение и CTA друг к другу, пользователи будут чаще добавлять товар в корзину.",
        "Если выпускать изменения через A/B-тест, команда сможет проверить эффект без риска для всей аудитории.",
      ],
      solution: [
        "перестроена иерархия карточки товара в каталоге: название, цена, скидка, наличие и действие стали считываться быстрее",
        "точки входа в фильтры стали заметнее, а второстепенные элементы каталога перестали конкурировать с выбором товара",
        "на карточке товара ключевые данные выбора были собраны ближе к CTA: цена, наличие, доставка/самовывоз и характеристики",
        "подготовлены состояния для недоступных товаров и альтернативные действия, чтобы пользователь не попадал в тупик",
      ],
      validation: [
        "A/B-тест на трафике каталога и карточки товара: 50/50, 14 дней",
        "основные метрики: open rate карточки из каталога, add-to-cart rate, checkout-start rate",
        "guardrail-метрики: bounce rate, использование фильтров, влияние на скорость страницы и обращения по наличию",
        "после теста результат сверялся с аналитиками и разработчиками, чтобы отделить эффект UX от промо и сезонности",
      ],
      results: [
        "open rate карточки товара из каталога вырос на 9,6%",
        "add-to-cart conversion с карточки товара вырос на 12,4%",
        "checkout-start rate вырос на 6,8%",
        "повторные изменения фильтров в рамках сессии снизились на 11%, что показало более уверенный путь выбора",
        "негативного влияния на bounce rate и скорость страниц по guardrail-метрикам не обнаружили",
      ],
      insights: [
        "в e-commerce карточка товара начинается еще в каталоге: ясность товарной плитки влияет на качество переходов",
        "наличие и получение — не второстепенная информация, если они напрямую влияют на решение о покупке",
        "небольшие изменения иерархии дают измеримый эффект, когда попадают в конкретную точку принятия решения",
      ],
      conclusion: [
        "Кейс показывает сфокусированную e-commerce-итерацию: вместо редизайна всего магазина были улучшены точки принятия решения, которые двигают пользователя от просмотра к checkout.",
      ],
    },
  },
  {
    slug: "slabaem-musicians-platform",
    title: "Сервис для поиска музыкантов «Слабаем!»",
    shortTitle: "Слабаем!",
    category: "product",
    industry: "Продукт / музыкальная платформа",
    company: "Пет-проект",
    categoryTag: { ru: "Продукт", en: "Product" },
    year: "2023-настоящее время",
    website: "https://slabaem.space/",
    accent: "#18c37d",
    problem:
      "Музыкантам и группам нужен был сервис для поиска друг друга, проверки гипотезы спроса и развития органического привлечения.",
    role: "Product owner / designer / fullstack developer: исследование, UX, запуск, разработка и развитие продукта.",
    process:
      "Исследовал рынок, проверял продуктовую гипотезу, проектировал интерфейсы, развивал монетизацию, SEO, воронки и аналитику пользовательского поведения.",
    cornerCases: "Разные роли участников, пустые города, неактивные профили, монетизация, модерация, SEO-страницы и обратная связь пользователей.",
    result: "Продукт прошел путь от прототипа до запуска и продолжает развиваться на основе пользовательской обратной связи, метрик и данных.",
    tags: ["Product", "Fullstack", "SEO"],
    i18n: {
      en: {
        title: "Slabaem! Musician Discovery Platform",
        shortTitle: "Slabaem!",
        industry: "Product / music platform",
        company: "Pet product",

        year: "2023-present",
        problem:
          "Musicians and bands needed a service for finding each other, validating demand, and developing organic acquisition.",
        role: "Product owner / designer / fullstack developer: research, UX, launch, development, and product growth.",
        process:
          "I researched the market, validated the product hypothesis, designed interfaces, and developed monetization, SEO, funnels, and behavioral analytics.",
        cornerCases: "Different participant roles, empty cities, inactive profiles, monetization, moderation, SEO pages, and user feedback.",
        result: "The product went from prototype to launch and continues to develop based on user feedback, metrics, and data.",
        tags: ["Product", "Fullstack", "SEO"],
      },
    },
    screens: 3,
    caseStudy: {
      context: [
        "Продукт — сервис для поиска музыкантов и музыкальных групп.",
        "Пользователи — музыканты, вокалисты, группы и люди, которые ищут участников для совместных проектов.",
        "Проект развивался как собственный продукт: от гипотезы и прототипа до запуска, SEO и монетизации.",
      ],
      role: [
        "исследовал рынок и проверял продуктовую гипотезу",
        "проектировал пользовательские сценарии и интерфейсы сервиса",
        "разрабатывал продукт от прототипа до запуска",
        "занимался fullstack-разработкой платформы на Python, JS, TS и React",
        "развивал монетизацию, SEO и органический трафик",
        "анализировал метрики, пользовательское поведение и обратную связь",
      ],
      problemUser: [
        "музыкантам сложно быстро найти подходящих людей по городу, роли, стилю и уровню опыта",
        "профили могут быть неполными или неактивными, что снижает доверие к сервису",
        "пользовательский путь должен работать и для поиска группы, и для поиска участника",
      ],
      problemBusiness: [
        "нужно было проверить спрос и найти устойчивую модель привлечения пользователей",
        "продукт должен был развиваться с ограниченными ресурсами и опорой на данные",
        "монетизацию нужно было встроить так, чтобы она не ломала базовую ценность сервиса",
      ],
      research: [
        "исследование рынка и конкурентов",
        "проверка продуктовой гипотезы через запуск и обратную связь пользователей",
        "анализ SEO, органического трафика, воронок и пользовательского поведения",
      ],
      hypothesis: [
        "Если дать музыкантам понятный профиль, поиск и сценарии связи, сервис сможет закрывать реальную потребность в поиске людей для совместной игры.",
        "Если развивать SEO и продуктовые воронки, органический трафик станет устойчивым каналом роста.",
      ],
      solution: [
        "спроектированы сценарии поиска музыкантов и музыкальных групп",
        "разработаны интерфейсы сервиса и логика профилей",
        "продукт реализован технически и запущен",
        "внедрена и развита монетизация",
        "проведена работа с SEO, органическим трафиком и оптимизацией пользовательских воронок",
      ],
      validation: [
        "анализ продуктовых метрик и поведения пользователей",
        "развитие продукта на основе обратной связи",
        "проверка решений через изменения в воронках и органическом привлечении",
      ],
      results: [
        "продукт прошел путь от прототипа до запуска",
        "сервис развивался на основе пользовательской обратной связи, данных и метрик",
        "были развиты SEO, органический трафик, монетизация и продуктовые воронки",
      ],
      insights: [
        "собственный продукт требует одновременно UX-мышления, аналитики, разработки и роста",
        "SEO-сценарии нужно проектировать как часть продукта, а не как отдельный маркетинговый слой",
        "обратная связь пользователей помогает быстрее находить реальные сценарии ценности",
      ],
      conclusion: [
        "Кейс показывает полный цикл продуктовой работы: исследование, UX, разработка, запуск, монетизация, SEO и развитие на основе данных.",
      ],
    },
  },
];

export const productProjects = projects
  .filter((project) => project.category === "product")
  .sort((a, b) => {
    if (a.slug === "slabaem-musicians-platform") return -1;
    if (b.slug === "slabaem-musicians-platform") return 1;
    return 0;
  });
