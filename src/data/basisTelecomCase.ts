export type BasisTelecomBlock =
  | {
      type: "intro";
      title: string;
      subtitle: string;
    }
  | {
      type: "section";
      title: string;
      paragraphs?: string[];
      items?: string[];
    }
  | {
      type: "screens";
      items: BasisTelecomScreen[];
    };

export type BasisTelecomScreen = {
  key: string;
  label: {
    ru: string;
    en: string;
  };
};

const screen = (key: string, ru: string, en: string): BasisTelecomScreen => ({ key, label: { ru, en } });

const getScreensBlock = (index: number) => basisTelecomCase.filter((block): block is Extract<BasisTelecomBlock, { type: "screens" }> => block.type === "screens")[index].items;

export const basisTelecomCase: BasisTelecomBlock[] = [
  {
    type: "section",
    title: "Контекст проекта",
    paragraphs: [
      "На рынке телекоммуникационного оборудования не было удобного централизованного хаба, где корпоративный покупатель мог бы подобрать оборудование, сравнить условия, оформить заказ и получить поддержку в вопросах логистики, документов и международных поставок.",
      "Покупка оборудования часто строилась вокруг ручной коммуникации, посредников и экспертизы по ВЭД. Для компании это создавало ограничения в масштабировании продаж, контроле заказов, работе с поставщиками и онбординге новых менеджеров.",
    ],
    items: [
      "покупателям было сложно напрямую взаимодействовать с производителями без собственного штата специалистов;",
      "сотрудникам не хватало единого инструмента для заказов, документов, компаний и контента;",
      "продавцам были нужны понятные инструменты для ассортимента, финансов, логистики, документов и продаж;",
      "бизнесу требовалась платформа, которая связывает все стороны процесса в одну систему.",
    ],
  },
  {
    type: "section",
    title: "Бизнес-задача",
    paragraphs: ["Создать B2B-платформу, которая переводит сложный процесс международной закупки телеком-оборудования в управляемый цифровой продукт."],
    items: [
      "запустить клиентский маркетплейс для поиска, выбора и покупки оборудования;",
      "создать бэкофис для операционного контроля заказов, компаний, документов и каталога;",
      "спроектировать кабинет продавца как CRM-подобную систему для поставщиков;",
      "снизить зависимость процессов от ручной коммуникации и разрозненных инструментов;",
      "подготовить основу для масштабирования MVP и развития post-MVP модулей.",
    ],
  },
  {
    type: "section",
    title: "Роль",
    paragraphs: [
      "Работал старшим продуктовым дизайнером над международным B2B-маркетплейсом телекоммуникационного оборудования. Проект включал три связанных продукта: клиентский маркетплейс, внутренний бэкофис и кабинет продавца.",
      "Моя роль закрывала путь от discovery и исследований до структуры MVP, интерфейсов, дизайн-системы и передачи решений в разработку.",
    ],
    items: [
      "трансформировал сложные офлайн-процессы закупки, поставки и модерации в digital-flow;",
      "проводил CustDev с покупателями, продавцами и сотрудниками Базис Телеком;",
      "проектировал user story, CJM, user story mapping и end-to-end сценарии;",
      "разделял функциональность на MVP и post-MVP;",
      "создавал интерфейсы для покупателей, менеджеров, контент-команды, дирекции и продавцов;",
      "формировал дизайн-систему и UX-логику для дальнейшего масштабирования продукта.",
    ],
  },
  {
    type: "section",
    title: "Целевые аудитории",
    paragraphs: ["В продукте было несколько групп пользователей, и для каждой требовался свой уровень детализации интерфейса."],
    items: [
      "корпоративные покупатели, которым нужно быстро найти оборудование, понять условия поставки и контролировать заказ;",
      "менеджеры по работе с покупателями, которым важно видеть компании, заказы, статусы и коммуникацию;",
      "менеджеры по работе с производителями, которые работают с поставщиками, ценами и условиями;",
      "контент-команда, которая модерирует товары и настраивает каталог;",
      "дирекция, которая управляет коэффициентами, влияющими на наценку;",
      "продавцы и производители, которым нужен интерфейс для товаров, документов, финансов, аналитики и продвижения.",
    ],
  },
  {
    type: "section",
    title: "Основные сценарии",
    paragraphs: ["Платформа проектировалась как набор связанных сценариев, а не как отдельные экраны."],
    items: [
      "поиск и фильтрация телеком-оборудования;",
      "просмотр карточки товара и условий поставки;",
      "оформление заказа корпоративным покупателем;",
      "контроль заказов и статусов в личном кабинете;",
      "работа менеджера с активными заказами и компаниями;",
      "добавление, модерация и настройка карточек товаров;",
      "управление фабричными коэффициентами и параметрами наценки;",
      "импорт ассортимента продавцом через файл;",
      "работа продавца с финансами, документами, отзывами, отправками и аналитикой;",
      "участие продавцов в аукционах и продвижение товаров через рекламный кабинет.",
    ],
  },
  {
    type: "screens",
    items: [
      screen("home", "Главная страница: вход в маркетплейс с понятной навигацией по категориям и основным сценариям покупателя.", "Home page: the marketplace entry point with clear navigation across categories and key buyer scenarios."),
      screen("search", "Страница поиска: каталог с фильтрами для быстрого подбора оборудования под задачу закупки.", "Search page: a catalogue with filters for quickly finding equipment for a procurement task."),
      screen("product", "Страница товара: карточка с характеристиками, условиями поставки и действиями для B2B-покупки.", "Product page: a card with specifications, delivery terms, and actions for a B2B purchase."),
    ],
  },
  {
    type: "section",
    title: "Entry points",
    paragraphs: ["Пользователи попадали в продукт из разных контекстов, поэтому сценарии должны были поддерживать и самостоятельный путь, и работу через менеджера."],
    items: [
      "самостоятельный вход покупателя через сайт и каталог маркетплейса;",
      "переход в личный кабинет после коммуникации с менеджером;",
      "внутренний вход сотрудников в бэкофис для обработки заказов и контента;",
      "вход продавца в кабинет для управления ассортиментом и операционными задачами;",
      "обучающий портал как точка поддержки для продавцов.",
    ],
  },
  {
    type: "section",
    title: "Моя зона ответственности",
    paragraphs: ["Я работал на стыке продуктовой логики, пользовательских сценариев и интерфейсной детализации."],
    items: [
      "собирал требования от бизнеса и внутренних команд;",
      "проводил CustDev с покупателями, продавцами и сотрудниками отделов;",
      "разбирал офлайн-процессы продаж, закупок, логистики, документов и модерации;",
      "оформлял пользовательские сценарии в user story, CJM и user story mapping;",
      "проектировал информационную архитектуру трех пространств продукта;",
      "создавал wireframes, UI-макеты и дизайн-систему;",
      "готовил решения для MVP и отдельно фиксировал post-MVP функциональность.",
    ],
  },
  {
    type: "section",
    title: "Исследование",
    paragraphs: [
      "На discovery-этапе было важно быстро понять, где исходные бизнес-гипотезы расходятся с реальными процессами покупателей, продавцов и сотрудников.",
      "Процесс строился от CustDev и разбора офлайн-операций к CJM, user story mapping и архитектуре MVP. Так мы отделяли обязательные сценарии первого релиза от post-MVP модулей.",
      "Интервью и разбор текущих процессов показали, что главная сложность не ограничивалась каталогом. Боли находились в логистике, коммуникации, документах, статусах заказов, настройке каталога и распределении ответственности между ролями.",
    ],
  },
  {
    type: "section",
    title: "Главный инсайт",
    paragraphs: [
      "Маркетплейс нельзя было проектировать как обычный e-commerce. В B2B-покупке телеком-оборудования ценность создается не только витриной и карточкой товара, а всей цепочкой: подбор, условия, документы, логистика, статусы, менеджеры, продавцы и внутренний контроль.",
    ],
  },
  {
    type: "section",
    title: "Design strategy",
    paragraphs: ["Стратегия проектирования стала мостом между задачей и решением: вместо одного интерфейса маркетплейса продукт был разложен на три связанных пространства."],
    items: [
      "1. Покупатель: сделать сложную закупку похожей на понятный e-commerce flow, но сохранить B2B-детали заказа, компании и поставки;",
      "2. Бэкофис: превратить офлайн-операции сотрудников в рабочую систему с заказами, компаниями, документами, товарами и коэффициентами;",
      "3. Продавец: спроектировать CRM-подобный кабинет, где поставщик управляет товарами, финансами, документами, аналитикой и продвижением.",
    ],
  },
  {
    type: "section",
    title: "Решение: покупатель",
    paragraphs: [
      "Клиентская часть закрывала путь от первого входа до оформления заказа. Основной фокус был на понятной структуре каталога, поиске, фильтрах, карточке товара, личном кабинете и контроле заказов.",
      "В отличие от классического интернет-магазина, здесь нужно было учитывать корпоративный контекст: данные компании, условия поставки, статусы, состав заказа и более длинный цикл принятия решения.",
    ],
    items: [
      "главная страница как вход в категории и ключевые сценарии;",
      "поиск и фильтры для быстрого подбора оборудования;",
      "карточка товара с характеристиками и условиями B2B-покупки;",
      "личный кабинет покупателя для данных компании и заказов;",
      "страница заказов с понятным контролем статусов;",
      "оформление заказа как финальный шаг корпоративной покупки.",
    ],
  },
  {
    type: "screens",
    items: [
      screen("buyerAccount", "Личный кабинет покупателя: персональное пространство компании, заказов и данных для работы с маркетплейсом.", "Buyer account: a company workspace for orders, data, and marketplace operations."),
      screen("orders", "Страница заказов: контроль статусов, состава заказа и дальнейших действий после покупки.", "Orders page: status tracking, order contents, and next steps after purchase."),
      screen("checkout", "Оформление заказа: финальный шаг B2B-покупки с учетом условий поставки и данных компании.", "Checkout: the final B2B purchase step with delivery terms and company data."),
    ],
  },
  {
    type: "section",
    title: "Решение: бэкофис",
    paragraphs: [
      "Бэкофис решал внутреннюю проблему компании: отсутствие единой системы для контроля заказов, документов, компаний, контента, поставщиков и коэффициентов, влияющих на наценку.",
      "Интерфейс проектировался для нескольких направлений: департамент по работе с производителями, департамент по работе с покупателями, контент и дирекция.",
    ],
    items: [
      "рабочая таблица товаров со статусами, ценами, продавцами и параметрами карточек;",
      "сценарий добавления товара и заполнения характеристик;",
      "карточка компании покупателя для менеджера;",
      "активные заказы как операционный центр контроля;",
      "заявки на модерацию и фильтры для работы с контентом;",
      "настройка фабричных коэффициентов для управления наценкой.",
    ],
  },
  {
    type: "screens",
    items: [
      screen("backofficeProducts", "Страница с товарами: рабочая таблица со статусами, ценами, продавцами и параметрами карточек.", "Products page: an operational table with statuses, prices, sellers, and card parameters."),
      screen("addProduct", "Добавление товара: сценарий заведения новой позиции с данными, характеристиками и привязками.", "Add product: a flow for creating a new item with data, specifications, and links."),
      screen("buyerCompany", "Карточка компании покупателя: данные компании, история взаимодействий и контекст для менеджера.", "Buyer company card: company data, interaction history, and manager context."),
    ],
  },
  {
    type: "screens",
    items: [
      screen("activeOrders", "Активные заказы: операционный контроль заказов, статусов и действий менеджера.", "Active orders: operational control of orders, statuses, and manager actions."),
      screen("moderation", "Заявки на модерацию: очередь контента, который нужно проверить перед публикацией.", "Moderation requests: a queue of content that needs review before publication."),
      screen("contentFilters", "Фильтры для работы с контентом: настройка каталога и быстрый поиск проблемных карточек.", "Content filters: catalogue configuration and quick access to problematic cards."),
      screen("factoryCoefficients", "Настройка коэффициентов фабрик: инструмент дирекции для управления наценкой по производителям.", "Factory coefficients: a top-management tool for controlling manufacturer-based margins."),
    ],
  },
  {
    type: "section",
    title: "Решение: кабинет продавца",
    paragraphs: [
      "Кабинет продавца проектировался как рабочая CRM-система для производителя или поставщика. Продавец должен был управлять ассортиментом, документами, финансами, аналитикой, отзывами и отправками без постоянной ручной коммуникации с менеджером.",
      "На этапе проектирования я разделял обязательные сценарии MVP и расширения post-MVP, чтобы сохранить реалистичный объем первого релиза и при этом не потерять целевую архитектуру продукта.",
    ],
    items: [
      "список заведенных товаров и статусы карточек;",
      "импорт товаров через файл для массового заведения ассортимента;",
      "финансы, выписки и взаиморасчеты;",
      "документооборот для поставок и юридических процессов;",
      "статистика продаж с аналитикой и графиками;",
      "система участия в аукционах;",
      "работа с отзывами покупателей;",
      "управление отправками со склада продавца;",
      "рекламный кабинет для продвижения товаров на маркетплейсе.",
    ],
  },
  {
    type: "screens",
    items: [
      screen("sellerProducts", "Список заведенных товаров: контроль ассортимента продавца и статусов карточек.", "Created products list: control over seller assortment and card statuses."),
      screen("productImport", "Импорт товаров из файла: массовое заведение ассортимента без ручного ввода каждой позиции.", "File import: bulk assortment creation without manually entering each item."),
      screen("finances", "Финансы, выписки: раздел для взаиморасчетов, выплат и финансовой прозрачности.", "Finances and statements: settlements, payouts, and financial transparency."),
    ],
  },
  {
    type: "screens",
    items: [
      screen("documents", "Работа с документооборотом: документы, которые сопровождают поставки и юридические процессы.", "Document workflow: documents supporting delivery and legal processes."),
      screen("salesStats", "Статистика по продажам: аналитика и графики для оценки эффективности продавца.", "Sales statistics: analytics and charts for assessing seller performance."),
      screen("auctions", "Система участия в аукционах: модуль для конкурентных закупочных сценариев.", "Auction participation system: a module for competitive procurement scenarios."),
    ],
  },
  {
    type: "screens",
    items: [
      screen("reviews", "Работа с отзывами покупателей: обратная связь и управление репутацией продавца.", "Buyer reviews: feedback and seller reputation management."),
      screen("shipments", "Управление отправками: контроль отправок со склада продавца.", "Shipment management: control over dispatches from the seller’s warehouse."),
      screen("ads", "Рекламный кабинет продавца: post-MVP инструмент для самостоятельного продвижения товаров на маркетплейсе.", "Seller advertising cabinet: a post-MVP tool for self-service product promotion on the marketplace."),
    ],
  },
  {
    type: "section",
    title: "Post-MVP: рекламный кабинет",
    paragraphs: [
      "В рамках пространства продавца я отдельно проработал визуальную часть рекламного кабинета. Это post-MVP модуль, в котором продавец может самостоятельно запускать продвижение товаров на маркетплейсе.",
      "Рекламный кабинет расширял продуктовую модель: продавец получал не только операционный интерфейс, но и инструмент влияния на продажи внутри платформы.",
    ],
  },
  {
    type: "section",
    title: "Обучающий портал",
    paragraphs: [
      "Для продавцов был предусмотрен обучающий портал. Его задача — объяснить основные сценарии работы с маркетплейсом, ускорить онбординг и снизить нагрузку на поддержку.",
      "Портал не был центральной частью кейса, но дополнял продуктовую экосистему: пользователи могли быстрее разобраться с заказами, товарами, документами и личными кабинетами.",
    ],
  },
  {
    type: "screens",
    items: [screen("knowledgePortal", "Обучающий портал: единая точка с инструкциями для продавцов.", "Knowledge portal: a single instruction hub for sellers.")],
  },
  {
    type: "section",
    title: "Результаты",
    paragraphs: [
      "В результате была спроектирована целостная B2B-платформа: клиентский маркетплейс, бэкофис и кабинет продавца связаны общей логикой товаров, заказов, компаний, документов, статусов и ролей.",
      "Исследования и процессное разложение помогли уточнить исходную бизнес-логику, выявить реальные боли логистики и коммуникации и сделать структуру продукта ближе к настоящим процессам пользователей.",
    ],
    items: [
      "сформирована дизайн-система и отрисованы ключевые экраны трех продуктовых пространств;",
      "улучшена верхнеуровневая структура приложения и личного кабинета покупателя;",
      "бэкофис помог сократить время выполнения задач при работе с заказом;",
      "интерфейс бэкофиса упростил онбординг новых менеджеров;",
      "получены 10+ лояльных китайских производителей, готовых сбывать продукцию через платформу;",
      "выявлены особенности использования интерфейсов жителями Китая;",
      "заложена структура MVP и post-MVP для дальнейшего развития маркетплейса.",
    ],
  },
  {
    type: "section",
    title: "Качественная обратная связь",
    paragraphs: ["Ключевые ожидания пользователей и бизнеса от продукта можно описать тремя словами:"],
    items: ["централизованно;", "прозрачно;", "управляемо."],
  },
  {
    type: "section",
    title: "Вывод",
    paragraphs: [
      "Главная сложность проекта была не в отрисовке отдельных экранов, а в соединении трех разных продуктов в одну систему: покупки, внутренней операционной работы и продавцов.",
      "Кейс показывает, как UX помогает перевести сложный B2B-процесс в понятную продуктовую архитектуру и сделать ее пригодной для разработки, онбординга и масштабирования.",
    ],
  },
];

export const basisTelecomCaseEn: BasisTelecomBlock[] = [
  {
    type: "section",
    title: "Project Context",
    paragraphs: [
      "The telecom equipment market lacked a convenient centralized hub where a corporate buyer could find equipment, compare terms, place an order, and get support with logistics, documents, and international delivery.",
      "Purchasing equipment often depended on manual communication, intermediaries, and foreign trade expertise. For the company, this limited sales scaling, order control, supplier work, and onboarding of new managers.",
    ],
    items: [
      "buyers struggled to communicate directly with manufacturers without an internal foreign-trade team;",
      "employees lacked a single tool for orders, documents, companies, and content;",
      "sellers needed clear tools for assortment, finances, logistics, documents, and sales;",
      "the business needed a platform that connected all sides of the process into one system.",
    ],
  },
  {
    type: "section",
    title: "Business Goal",
    paragraphs: ["Create a B2B platform that turns a complex international telecom-equipment procurement process into a manageable digital product."],
    items: [
      "launch a customer marketplace for finding, selecting, and buying equipment;",
      "create a back office for operational control of orders, companies, documents, and the catalogue;",
      "design a seller cabinet as a CRM-like system for suppliers;",
      "reduce dependence on manual communication and fragmented tools;",
      "prepare a foundation for scaling the MVP and developing post-MVP modules.",
    ],
  },
  {
    type: "section",
    title: "Role",
    paragraphs: [
      "I worked as a senior product designer on an international B2B marketplace for telecom equipment. The project included three connected products: the customer marketplace, the internal back office, and the seller cabinet.",
      "My role covered the path from discovery and research to MVP structure, interfaces, design system, and handoff to development.",
    ],
    items: [
      "transformed complex offline procurement, delivery, and moderation processes into digital flows;",
      "ran CustDev interviews with buyers, sellers, and Bazis Telecom employees;",
      "designed user stories, CJM, user story mapping, and end-to-end scenarios;",
      "split functionality into MVP and post-MVP scopes;",
      "created interfaces for buyers, managers, the content team, executives, and sellers;",
      "formed the design system and UX logic for future scaling.",
    ],
  },
  {
    type: "section",
    title: "Target Audiences",
    paragraphs: ["The product had several user groups, and each needed a different level of interface detail."],
    items: [
      "corporate buyers who need to find equipment, understand delivery terms, and track orders;",
      "buyer-side managers who need to see companies, orders, statuses, and communication;",
      "manufacturer-side managers who work with suppliers, prices, and terms;",
      "the content team that moderates products and configures the catalogue;",
      "executives who manage coefficients affecting margins;",
      "sellers and manufacturers who need tools for products, documents, finances, analytics, and promotion.",
    ],
  },
  {
    type: "section",
    title: "Core Scenarios",
    paragraphs: ["The platform was designed as a set of connected scenarios, not as separate screens."],
    items: [
      "searching and filtering telecom equipment;",
      "viewing the product card and delivery terms;",
      "placing an order as a corporate buyer;",
      "tracking orders and statuses in the personal account;",
      "manager work with active orders and companies;",
      "adding, moderating, and configuring product cards;",
      "managing factory coefficients and margin parameters;",
      "seller assortment import through a file;",
      "seller work with finances, documents, reviews, shipments, and analytics;",
      "seller participation in auctions and product promotion through the ad cabinet.",
    ],
  },
  { type: "screens", items: getScreensBlock(0) },
  {
    type: "section",
    title: "Entry Points",
    paragraphs: ["Users entered the product from different contexts, so the flows had to support both self-service and manager-assisted scenarios."],
    items: [
      "buyer self-service entry through the website and marketplace catalogue;",
      "transition to the personal account after communication with a manager;",
      "employee entry into the back office for order and content processing;",
      "seller entry into the cabinet for assortment and operational tasks;",
      "knowledge portal as a support point for sellers.",
    ],
  },
  {
    type: "section",
    title: "My Scope",
    paragraphs: ["I worked at the intersection of product logic, user scenarios, and interface detail."],
    items: [
      "collected requirements from business and internal teams;",
      "ran CustDev with buyers, sellers, and employees;",
      "analyzed offline sales, procurement, logistics, documents, and moderation processes;",
      "formalized user scenarios into user stories, CJM, and user story mapping;",
      "designed the information architecture of three product spaces;",
      "created wireframes, UI mockups, and the design system;",
      "prepared MVP solutions and separately documented post-MVP functionality.",
    ],
  },
  {
    type: "section",
    title: "Research",
    paragraphs: [
      "At the discovery stage, it was important to quickly understand where the initial business hypotheses diverged from real buyer, seller, and employee processes.",
      "The process moved from CustDev and offline-operation analysis to CJM, user story mapping, and MVP architecture. This helped separate required first-release scenarios from post-MVP modules.",
      "Interviews and process analysis showed that the main complexity was not limited to the catalogue. The pain points were logistics, communication, documents, order statuses, catalogue configuration, and role responsibility.",
    ],
  },
  {
    type: "section",
    title: "Main Insight",
    paragraphs: [
      "The marketplace could not be designed like standard e-commerce. In B2B telecom-equipment purchasing, value is created not only by the storefront and product card, but by the full chain: selection, terms, documents, logistics, statuses, managers, sellers, and internal control.",
    ],
  },
  {
    type: "section",
    title: "Design Strategy",
    paragraphs: ["The design strategy became the bridge between the task and the solution: instead of one marketplace interface, the product was decomposed into three connected spaces."],
    items: [
      "1. Buyer: make complex procurement feel like a clear e-commerce flow while preserving B2B details around orders, company data, and delivery;",
      "2. Back office: turn offline employee operations into a working system for orders, companies, documents, products, and coefficients;",
      "3. Seller: design a CRM-like cabinet where a supplier manages products, finances, documents, analytics, and promotion.",
    ],
  },
  {
    type: "section",
    title: "Solution: Buyer",
    paragraphs: [
      "The customer side covered the journey from first entry to checkout. The main focus was a clear catalogue structure, search, filters, product page, account, and order tracking.",
      "Unlike classic online retail, the flow had to account for the corporate context: company data, delivery terms, statuses, order contents, and a longer decision-making cycle.",
    ],
    items: [
      "home page as the entry point into categories and key scenarios;",
      "search and filters for quickly finding equipment;",
      "product card with specifications and B2B purchase terms;",
      "buyer account for company data and orders;",
      "orders page with clear status tracking;",
      "checkout as the final step of a corporate purchase.",
    ],
  },
  { type: "screens", items: getScreensBlock(1) },
  {
    type: "section",
    title: "Solution: Back Office",
    paragraphs: [
      "The back office addressed an internal company problem: the lack of a single system for controlling orders, documents, companies, content, suppliers, and coefficients affecting margins.",
      "The interface was designed for several directions: manufacturer relations, buyer relations, content, and executive management.",
    ],
    items: [
      "product table with statuses, prices, sellers, and card parameters;",
      "product creation flow and specification filling;",
      "buyer company card for the manager;",
      "active orders as the operational control center;",
      "moderation requests and content filters;",
      "factory coefficient settings for margin management.",
    ],
  },
  { type: "screens", items: getScreensBlock(2) },
  { type: "screens", items: getScreensBlock(3) },
  {
    type: "section",
    title: "Solution: Seller Cabinet",
    paragraphs: [
      "The seller cabinet was designed as a working CRM system for a manufacturer or supplier. The seller had to manage assortment, documents, finances, analytics, reviews, and shipments without constant manual communication with a manager.",
      "During design, I separated required MVP scenarios from post-MVP extensions to keep the first release realistic while preserving the target product architecture.",
    ],
    items: [
      "created product list and card statuses;",
      "file import for bulk assortment creation;",
      "finances, statements, and settlements;",
      "document workflow for delivery and legal processes;",
      "sales statistics with analytics and charts;",
      "auction participation system;",
      "buyer review management;",
      "shipment management from the seller’s warehouse;",
      "advertising cabinet for product promotion on the marketplace.",
    ],
  },
  { type: "screens", items: getScreensBlock(4) },
  { type: "screens", items: getScreensBlock(5) },
  { type: "screens", items: getScreensBlock(6) },
  {
    type: "section",
    title: "Post-MVP: Advertising Cabinet",
    paragraphs: [
      "Inside the seller space, I separately designed the visual part of the advertising cabinet. This post-MVP module lets sellers launch product promotion on the marketplace themselves.",
      "The advertising cabinet expanded the product model: the seller received not only an operational interface, but also a tool for influencing sales inside the platform.",
    ],
  },
  {
    type: "section",
    title: "Knowledge Portal",
    paragraphs: [
      "A knowledge portal was planned for sellers. Its goal was to explain the key marketplace scenarios, speed up onboarding, and reduce support load.",
      "The portal was not the central part of the case, but it complemented the product ecosystem: users could understand orders, products, documents, and personal accounts faster.",
    ],
  },
  { type: "screens", items: getScreensBlock(7) },
  {
    type: "section",
    title: "Results",
    paragraphs: [
      "As a result, we designed a coherent B2B platform: the customer marketplace, back office, and seller cabinet were connected by shared logic for products, orders, companies, documents, statuses, and roles.",
      "Research and process decomposition helped refine the initial business logic, reveal real pain points in logistics and communication, and make the product structure closer to actual user processes.",
    ],
    items: [
      "formed the design system and designed key screens across three product spaces;",
      "improved the high-level application structure and buyer account experience;",
      "the back office helped reduce task time when working with orders;",
      "the back-office interface simplified onboarding for new managers;",
      "10+ loyal Chinese manufacturers were ready to sell their products through the platform;",
      "identified interface-usage specifics among users in China;",
      "defined the MVP and post-MVP structure for further marketplace development.",
    ],
  },
  {
    type: "section",
    title: "Qualitative feedback",
    paragraphs: ["The key expectations of users and the business can be summarized in three words:"],
    items: ["centralized;", "transparent;", "manageable."],
  },
  {
    type: "section",
    title: "Conclusion",
    paragraphs: [
      "The main complexity of the project was not drawing separate screens, but connecting three different products into one system: purchasing, internal operations, and sellers.",
      "The case shows how UX can turn a complex B2B process into a clear product architecture suitable for development, onboarding, and scaling.",
    ],
  },
];
