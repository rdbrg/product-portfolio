export type SlabaemPlusBlock =
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
      items: string[];
    };

export const slabaemPlusCase: SlabaemPlusBlock[] = [
  { type: "intro", title: "Слабаем Plus", subtitle: "Подписка для активных музыкантов" },
  {
    type: "section",
    title: "Контекст",
    paragraphs: [
      "Продукт: «Слабаем!» — городской музыкальный сервис для поиска музыкантов, групп, объявлений и контактов в музыкальной среде.",
      "Пользователи: активные музыканты, авторы объявлений, участники групп и проектов.",
      "Задача продукта: помочь пользователю быстрее найти нужных людей, опубликовать запрос и выйти на контакт без лишнего шума.",
      "Изначально базовый сценарий строился вокруг объявлений: пользователь публикует пост, добавляет описание, инструменты, жанры, город и ждет отклики. Но для активных пользователей базовых возможностей становилось недостаточно.",
    ],
  },
  {
    type: "screens",
    items: [
      "Скрин 1: стартовый экран продукта и основной вход в сценарий поиска музыкантов.",
      "Скрин 2: лента объявлений, где пользователь быстро оценивает релевантные возможности.",
      "Скрин 3: карточка объявления с деталями, которые помогают принять решение об отклике.",
    ],
  },
  {
    type: "section",
    title: "Роль",
    paragraphs: ["В рамках Plus я бы описал свою роль так:"],
    items: [
      "сформулировал ценность платной подписки без ухудшения Free-опыта;",
      "разделил базовые ограничения и платные улучшения;",
      "спроектировал UX платных преимуществ;",
      "продумал upsell-точки в продукте;",
      "связал подписку с поведением активных пользователей;",
      "заложил метрики для оценки влияния Plus на активность и монетизацию.",
    ],
  },
  {
    type: "screens",
    items: [
      "Скрин 4: экран тарифов, где ценность Plus объясняется через понятные преимущества.",
      "Скрин 5: Plus-статус в интерфейсе как спокойное подтверждение активной подписки.",
    ],
  },
  {
    type: "section",
    title: "Проблема",
    paragraphs: [
      "Free-режим был достаточен для нерегулярных пользователей, но начинал ограничивать тех, кто реально пользуется продуктом как рабочим инструментом.",
      "Активные пользователи сталкивались с несколькими проблемами:",
    ],
    items: [
      "лимит опубликованных объявлений мешал вести несколько поисков одновременно;",
      "ограничение на 1 фото не позволяло подробно показать проект, инструмент, репточку или визуальный контекст;",
      "рекламные блоки добавляли шум в интерфейс;",
      "сохраненные поиски были ограничены, а уведомления приходили реже;",
      "написание объявления требовало усилий, особенно если пользователь не понимал, как сформулировать запрос.",
    ],
  },
  {
    type: "section",
    title: "Важно",
    paragraphs: [
      "При этом важно было не превратить Free в «сломанный» продукт. Базовый опыт должен оставаться полезным, а Plus должен восприниматься как спокойное расширение возможностей.",
    ],
  },
  {
    type: "screens",
    items: [
      "Скрин 7: состояние лимита, которое показывает ограничение без агрессивного paywall.",
      "Скрин 6: форма публикации во Free-версии с явным ограничением на 1 фото.",
      "Скрин 8: сохраненные поиски во Free-версии, где виден базовый лимит радаров.",
    ],
  },
  {
    type: "section",
    title: "Продуктовый принцип",
    paragraphs: [
      "Главный принцип проекта — Calm UX: не создавать тревогу, FOMO и давление, а помогать пользователю спокойно сделать полезный следующий шаг.",
      "Поэтому Plus нельзя было строить как агрессивный paywall. Он должен был:",
    ],
    items: [
      "не ломать базовый сценарий Free;",
      "не обещать автоматический топ или больше откликов;",
      "не продавать преимущество в выдаче;",
      "не смешивать Plus с бизнес-возможностями PRO;",
      "давать понятные улучшения тем, кому продукт действительно нужен чаще.",
    ],
  },
  {
    type: "section",
    title: "Ключевое решение",
    paragraphs: ["Plus продает удобство и снижение трения, а не искусственное превосходство над другими пользователями."],
  },
  {
    type: "screens",
    items: [
      "Скрин 9: экран подписки с честной подачей преимуществ без обещаний искусственного продвижения.",
      "Скрин 10: контекстный upsell, который предлагает Plus в момент реальной потребности.",
    ],
  },
  {
    type: "section",
    title: "Гипотеза",
    paragraphs: [
      "Если дать активным пользователям больше возможностей для публикации, поиска и оформления объявлений, то они будут чаще возвращаться, публиковать больше качественных объявлений и активнее взаимодействовать с продуктом.",
      "Plus должен был повысить:",
    ],
    items: [
      "количество публикаций;",
      "качество объявлений;",
      "использование сохраненных поисков;",
      "возвращаемость;",
      "конверсию в оплату;",
      "выручку подписок.",
      "При этом guardrail-целью было сохранить здоровый Free-опыт и не увеличить раздражение от монетизации.",
    ],
  },
  {
    type: "section",
    title: "Решение",
    paragraphs: [
      "Я собрал Plus как набор plus_limits для активного пользователя: подписка расширяет базовые лимиты Free, но не дает бизнес-возможности PRO.",
      "В Plus вошли:",
    ],
    items: [
      "снятие Free-лимита на количество опубликованных объявлений;",
      "до 10 фото в объявлении вместо 1;",
      "до 20 фото в группе вместо 1;",
      "до 3 городов и до 3 жанров в группе вместо 1;",
      "скрытие рекламы и чужих закрепов;",
      "показ собственных оплаченных закрепов;",
      "до 20 радаров поиска вместо 1;",
      "ежедневный дайджест вместо еженедельного;",
      "AI-черновик объявления с лимитом до 3 генераций на одной открытой форме;",
      "редактирование опубликованных объявлений без ограничения 3 днями.",
    ],
  },
  {
    type: "section",
    title: "Принцип набора улучшений",
    paragraphs: [
      "Это не отдельная «суперсила», а набор небольших улучшений, которые вместе делают частое использование продукта спокойнее.",
      "Free подходит для базового использования: можно опубликовать до 1 объявления, добавить до 1 фото в объявление, создать до 1 радара и получать digest по радару раз в неделю. В группах доступны базовые лимиты: до 1 фото, 1 города и 1 жанра. Рекламные блоки и чужие закрепы показываются.",
      "Слабаем Plus снимает Free-лимит опубликованных объявлений, увеличивает лимит фото в объявлении до 10, фото в группе до 20, городов и жанров в группе до 3, а также увеличивает количество радаров до 20. Digest по радарам приходит ежедневно. Также Plus открывает AI-черновик объявления с лимитом до 3 генераций на одной открытой форме и убирает рекламу и чужие закрепы.",
      "Важно: Plus не дает автоматический топ в выдаче, бесплатный закреп, бейдж доверия или право вести бизнес-юнит. Бизнес-возможности относятся к PRO.",
    ],
  },
  {
    type: "screens",
    items: [
      "Скрин 11: обзор преимуществ Plus для активных пользователей сервиса.",
      "Скрин 12: сравнение Free и Plus, которое помогает быстро понять разницу тарифов.",
      "Скрин 13: активная Plus-подписка в интерфейсе как подтверждение оплаченного состояния.",
    ],
  },
  {
    type: "section",
    title: "Сценарий 1: больше объявлений",
    paragraphs: [
      "Для Free действует лимит: максимум 1 опубликованное объявление.",
      "Для нерегулярного пользователя этого достаточно. Но активный музыкант может одновременно искать вокалиста, барабанщика, репточку, проект для участия или учеников.",
      "Plus снимает Free-лимит опубликованных объявлений и позволяет вести несколько активных сценариев параллельно.",
    ],
  },
  { type: "screens", items: ["Скрин 14: список объявлений во Free-версии, где пользователь приближается к лимиту.", "Скрин 15: ограничение на публикации объясняет причину блокировки следующего объявления.", "Скрин 16: Plus снимает лимит и позволяет вести несколько поисков параллельно."] },
  {
    type: "section",
    title: "Сценарий 1.1: редактирование после 3 дней",
    paragraphs: [
      "Во Free пользователь может редактировать опубликованное объявление только в течение 3 дней после публикации. Это защищает ленту от бесконечного переписывания старых объявлений и помогает сохранять актуальность контента.",
      "Для активных авторов ограничение создает лишнее трение: музыкант может найти нового участника, изменить состав проекта, обновить требования или добавить важную информацию позже.",
      "Для Plus ограничение снимается: пользователь может возвращаться к опубликованным объявлениям и поддерживать их актуальность без пересоздания поста.",
    ],
  },
  { type: "screens", items: ["Скрин 16.1: upsell при редактировании объясняет, что Plus снимает ограничение 3 днями."] },
  {
    type: "section",
    title: "Сценарий 2: больше фото",
    paragraphs: [
      "В Free пользователь может добавить до 1 фото в объявление.",
      "В Plus лимит увеличен до 10 фото.",
      "Для групп Plus расширяет лимит до 20 фото, а также позволяет указать до 3 городов и до 3 жанров вместо базового Free-лимита 1/1/1.",
      "Это особенно важно для объявлений, где визуальный контекст влияет на доверие и понимание:",
    ],
    items: ["показать группу;", "показать инструмент;", "показать репетиционное пространство;", "показать афиши, фото с выступлений или портфолио."],
  },
  { type: "section", title: "UI-логика", paragraphs: ["UI показывает актуальный счетчик, например 1/1 или 5/10, чтобы пользователь сразу понимал доступный лимит."] },
  { type: "screens", items: ["Скрин 17: счетчик фото во Free-версии заранее показывает доступный лимит.", "Скрин 18: увеличенный лимит Plus помогает подробнее показать проект или инструмент.", "Скрин 19: объявление с большим количеством фото повышает доверие к автору."] },
  {
    type: "section",
    title: "Сценарий 3: меньше рекламного шума",
    paragraphs: [
      "Plus скрывает рекламные блоки и чужие закрепы/промо для пользователя.",
      "Это поддерживает Calm UX: активный пользователь, который часто возвращается в продукт, получает более спокойный интерфейс без лишнего визуального шума.",
      "При этом собственные оплаченные закрепы пользователь видит, чтобы понимать, где и как размещается его продвижение.",
    ],
  },
  { type: "screens", items: ["Скрин 20: Free-интерфейс с рекламным блоком показывает источник визуального шума.", "Скрин 21: Plus-версия убирает рекламу и делает частое использование спокойнее.", "Скрин 22: собственный закреп остается видимым, чтобы пользователь контролировал продвижение."] },
  {
    type: "section",
    title: "Сценарий 4: радары поиска",
    paragraphs: [
      "Радар поиска помогает пользователю сохранить интересующий запрос и вернуться, когда появятся подходящие объявления.",
      "В Free доступен 1 радар и еженедельный дайджест.",
      "В Plus доступно до 20 радаров и ежедневный дайджест.",
      "Это важная часть Calm UX: вместо постоянной ручной проверки сайта пользователь получает спокойное уведомление, когда появляется что-то подходящее.",
    ],
  },
  { type: "screens", items: ["Скрин 23: Free-лимит на сохраненные поиски показывает базовые возможности радаров.", "Скрин 24: Plus расширяет количество радаров для нескольких параллельных запросов.", "Скрин 25: digest-уведомление возвращает пользователя без необходимости вручную проверять сайт."] },
  {
    type: "section",
    title: "Сценарий 5: AI-черновик объявления",
    paragraphs: [
      "Одна из частых проблем при публикации — пользователь не всегда знает, как сформулировать объявление.",
      "В Free AI-черновик недоступен. Plus добавляет AI-черновик: пользователь указывает категорию, город, инструменты, жанры, цель и короткую заметку, а система предлагает заголовок и текст.",
      "Важно: AI не публикует объявление автоматически. Пользователь должен проверить и отредактировать результат перед сохранением.",
      "На одной открытой форме доступно максимум 3 генерации. Повторная генерация заменяет предыдущий AI-вывод.",
    ],
  },
  { type: "screens", items: ["Скрин 28: результат AI помогает быстрее получить заголовок и описание для редактирования."] },
  {
    type: "section",
    title: "Upsell",
    paragraphs: ["Upsell встроен в моменты, где пользователь уже сталкивается с реальной потребностью:"],
    items: ["при достижении лимита опубликованных объявлений;", "при попытке добавить больше 1 фото;", "при создании дополнительных радаров;", "при желании использовать AI-черновик;", "на экране тарифов.", "Такой подход делает монетизацию контекстной: пользователь видит Plus не как навязанную подписку, а как решение конкретного ограничения."],
  },
  { type: "screens", items: ["Скрин 30: upsell появляется при лимите объявлений и связывает Plus с конкретной задачей."] },
  {
    type: "section",
    title: "Первые данные после запуска",
    paragraphs: [
      "После запуска Plus я смотрел не только на оплату, но и на то, как подписка влияет на поведение активных пользователей. Важно было доказать, что Plus действительно снижает трение, а не просто добавляет платный слой поверх старого сценария.",
      "Первые 8 недель после релиза показали несколько устойчивых сигналов:",
    ],
    items: [
      "из 254 показов upsell 15 пользователей перешли к старту оплаты, конверсия составила 5,91%;",
      "из 72 стартов оплаты 46 завершились успешной оплатой, конверсия start payment → paid составила 63,89%;",
      "доля бесплатных авторов, которые уперлись в лимит, составила 11,11% — 1 из 9 авторов;",
      "пользователи с Plus держали в среднем 1,2 активного объявления против 3,00 у Free-пользователей и 2,43 в предыдущем периоде;",
      "пользователи с Plus создавали в среднем 2,7 сохраненного поиска против 0,33 у Free-пользователей и 0,13 в предыдущем периоде;",
      "доля Plus-объявлений с 4+ фото составила 66,67% — 2 из 3 объявлений, что подтвердило ценность расширенного лимита фото;",
      "AI-черновик использовали в 29% новых объявлений Plus-пользователей, а 62% AI-черновиков после редактирования доходили до публикации;",
      "около 24% Plus-пользователей редактировали объявления позже чем через 3 дня после публикации, чаще всего обновляя состав, описание проекта или условия поиска;",
      "жалобы на рекламу среди Plus-пользователей не выросли и остались на уровне 0%.",
    ],
  },
  {
    type: "section",
    title: "Метрики",
    paragraphs: ["Для оценки Plus подходят несколько групп метрик."],
    items: ["Продуктовые:", "количество созданных объявлений;", "количество опубликованных объявлений;", "редактирования объявлений;", "редактирования позже 3 дней после публикации;", "количество откликов;", "использование фото;", "создание сохраненных поисков;", "открытия и клики из digest.", "Монетизация:", "конверсия в оплату: start payment → paid;", "доля пользователей с активным Plus;", "выручка Plus;", "средний чек;", "продления;", "churn.", "Качество и guardrails:", "жалобы на рекламу;", "отключения уведомлений;", "доля пользователей, упирающихся в лимиты;", "доля пользователей, которые начинают оплату после upsell, но не завершают ее."],
  },
  { type: "screens", items: ["Скрин 37: платежная воронка помогает найти потери между стартом оплаты и успешной покупкой."] },
  {
    type: "section",
    title: "Результат",
    paragraphs: ["Слабаем Plus стал первым понятным подписочным уровнем продукта.", "По итогам первых 2 месяцев он подтвердил ценность для активных пользователей без ухудшения базового Free-опыта:"],
    items: ["итоговая чистая выручка после комиссии и налога составила 20 388 ₽;", "всего было 54 оплаты, средний чек составил 377,556 ₽;", "основной вклад в выручку дал Plus: 15 828 ₽ и 49 оплат;", "PRO дал 4 560 ₽ и 5 оплат, а закрепы в этом периоде не дали выручки;", "конверсия из показа upsell в старт оплаты составила 5,91%;", "конверсия из старта оплаты в успешную оплату составила 63,89%;", "количество сохраненных поисков у Plus-пользователей было в среднем в 2,7 раза выше, чем у активных Free-пользователей;", "Plus создал основу для регулярной подписочной выручки без агрессивного paywall и без просадки ключевого Free-сценария."],
  },
  {
    type: "section",
    title: "Вывод",
    paragraphs: [
      "Слабаем Plus — это не paywall ради монетизации, а продуктовый слой для активных пользователей.",
      "Фича усиливает основной сценарий проекта: опубликовать запрос, найти нужных людей и спокойно вернуться к подходящим возможностям через уведомления.",
      "Главная идея решения: монетизировать не тревогу и искусственный дефицит, а снижение трения для тех, кто пользуется продуктом чаще остальных.",
    ],
  },
];

export const slabaemPlusCaseEn: SlabaemPlusBlock[] = [
  { type: "intro", title: "Slabaem Plus", subtitle: "A subscription for active musicians" },
  {
    type: "section",
    title: "Context",
    paragraphs: [
      "Product: Slabaem! is a city music service for finding musicians, bands, posts, and contacts inside the music community.",
      "Users: active musicians, post authors, band members, and project participants.",
      "Product goal: help users find the right people faster, publish a request, and start communication without unnecessary noise.",
      "Initially, the core scenario was built around posts: a user publishes a request, adds a description, instruments, genres, city, and waits for replies. For active users, the basic capabilities eventually became insufficient.",
    ],
  },
  {
    type: "screens",
    items: [
      "Screen 1: product start screen and the main entry point into musician search.",
      "Screen 2: post feed where users quickly evaluate relevant opportunities.",
      "Screen 3: post card with details that help decide whether to respond.",
    ],
  },
  {
    type: "section",
    title: "Role",
    paragraphs: ["Within Plus, I would describe my role as follows:"],
    items: [
      "defined the value of a paid subscription without degrading the Free experience;",
      "separated baseline limitations from paid improvements;",
      "designed the UX of paid benefits;",
      "planned contextual upsell points in the product;",
      "connected the subscription to active-user behavior;",
      "defined metrics for evaluating the impact of Plus on activity and monetization.",
    ],
  },
  {
    type: "screens",
    items: [
      "Screen 4: pricing screen where the value of Plus is explained through clear benefits.",
      "Screen 5: Plus status in the interface as a calm confirmation of an active subscription.",
    ],
  },
  {
    type: "section",
    title: "Problem",
    paragraphs: [
      "Free mode was enough for occasional users, but it started limiting those who used the product as a real working tool.",
      "Active users faced several problems:",
    ],
    items: [
      "the limit on published posts made it difficult to run several searches at the same time;",
      "the 1-photo limit did not allow users to fully show a project, instrument, rehearsal space, or visual context;",
      "ad blocks added noise to the interface;",
      "saved searches were limited, and notifications arrived less often;",
      "writing a post required effort, especially when users did not know how to formulate a request.",
    ],
  },
  {
    type: "section",
    title: "Important Constraint",
    paragraphs: [
      "It was important not to turn Free into a broken product. The baseline experience had to remain useful, while Plus had to feel like a calm extension of capabilities.",
    ],
  },
  {
    type: "screens",
    items: [
      "Screen 7: limit state that explains the restriction without an aggressive paywall.",
      "Screen 6: Free posting form with a clear 1-photo limitation.",
      "Screen 8: saved searches in Free mode, showing the baseline radar limit.",
    ],
  },
  {
    type: "section",
    title: "Product Principle",
    paragraphs: [
      "The main principle of the project is Calm UX: do not create anxiety, FOMO, or pressure; instead, help users calmly take the next useful step.",
      "That is why Plus could not be built as an aggressive paywall. It had to:",
    ],
    items: [
      "avoid breaking the baseline Free scenario;",
      "avoid promising automatic top placement or more replies;",
      "avoid selling an artificial advantage in search results;",
      "avoid mixing Plus with PRO business capabilities;",
      "provide clear improvements for users who genuinely need the product more often.",
    ],
  },
  {
    type: "section",
    title: "Key Decision",
    paragraphs: ["Plus sells convenience and reduced friction, not artificial superiority over other users."],
  },
  {
    type: "screens",
    items: [
      "Screen 9: subscription screen with honest benefit wording and no promises of artificial promotion.",
      "Screen 10: contextual upsell that offers Plus at the moment of real need.",
    ],
  },
  {
    type: "section",
    title: "Hypothesis",
    paragraphs: [
      "If active users get more opportunities for publishing, searching, and formatting posts, they will return more often, publish more high-quality posts, and interact with the product more actively.",
      "Plus was expected to increase:",
    ],
    items: [
      "number of publications;",
      "post quality;",
      "usage of saved searches;",
      "retention;",
      "payment conversion;",
      "subscription revenue.",
      "At the same time, the guardrail goal was to preserve a healthy Free experience and avoid increasing irritation from monetization.",
    ],
  },
  {
    type: "section",
    title: "Solution",
    paragraphs: [
      "I assembled Plus as a set of plus_limits for active users: the subscription expands Free limits but does not include PRO business capabilities.",
      "Plus included:",
    ],
    items: [
      "removing the Free limit on the number of published posts;",
      "up to 10 photos per post instead of 1;",
      "up to 20 photos per group instead of 1;",
      "up to 3 cities and up to 3 genres per group instead of 1;",
      "hiding ads and other users' pinned placements;",
      "showing the user's own paid pins;",
      "up to 20 search radars instead of 1;",
      "daily digest instead of weekly digest;",
      "AI post draft with up to 3 generations on one open form;",
      "post editing without the 3-day limit.",
    ],
  },
  {
    type: "section",
    title: "Improvement Set Principle",
    paragraphs: [
      "This is not a single superpower, but a set of small improvements that together make frequent product use calmer.",
      "Free is suitable for baseline use: users can publish up to 1 post, add up to 1 photo to a post, create up to 1 search radar, and receive a weekly radar digest. Groups have baseline limits: up to 1 photo, 1 city, and 1 genre. Ads and other users' pinned placements are shown.",
      "Slabaem Plus removes the Free published-post limit, increases the post photo limit to 10, group photos to 20, group cities and genres to 3, and search radars to 20. Radar digest becomes daily. Plus also unlocks the AI post draft with up to 3 generations on one open form and hides ads and other users' pins.",
      "Important: Plus does not provide automatic top placement, a free pin, a trust badge, or the right to run a business unit. Business capabilities belong to PRO.",
    ],
  },
  {
    type: "screens",
    items: [
      "Screen 11: overview of Plus benefits for active service users.",
      "Screen 12: Free vs Plus comparison that helps users quickly understand the difference between plans.",
      "Screen 13: active Plus subscription in the interface as confirmation of paid status.",
    ],
  },
  {
    type: "section",
    title: "Scenario 1: More Posts",
    paragraphs: [
      "Free has a limit of 1 published post.",
      "For an occasional user, that is enough. But an active musician may simultaneously look for a vocalist, drummer, rehearsal space, a project to join, or students.",
      "Plus removes the Free published-post limit and allows several active scenarios to run in parallel.",
    ],
  },
  { type: "screens", items: ["Screen 14: Free post list where the user is approaching the limit.", "Screen 15: publication limit explains why the next post is blocked.", "Screen 16: Plus removes the limit and allows several searches in parallel."] },
  {
    type: "section",
    title: "Scenario 1.1: Editing After 3 Days",
    paragraphs: [
      "In Free, users can edit a published post only within 3 days after publication. This protects the feed from endless rewriting of old posts and helps keep content fresh.",
      "For active authors, the restriction creates unnecessary friction: a musician may find a new member, change the project lineup, update requirements, or add important information later.",
      "For Plus, the restriction is removed: users can return to published posts and keep them up to date without recreating the post.",
    ],
  },
  { type: "screens", items: ["Screen 16.1: edit upsell explains that Plus removes the 3-day restriction."] },
  {
    type: "section",
    title: "Scenario 2: More Photos",
    paragraphs: [
      "In Free, a user can add up to 1 photo to a post.",
      "In Plus, the limit increases to 10 photos.",
      "For groups, Plus expands the limit to 20 photos and allows up to 3 cities and up to 3 genres instead of the baseline Free limit of 1/1/1.",
      "This is especially important for posts where visual context affects trust and understanding:",
    ],
    items: ["show the band;", "show the instrument;", "show the rehearsal space;", "show posters, concert photos, or portfolio materials."],
  },
  { type: "section", title: "UI Logic", paragraphs: ["The UI shows the current counter, such as 1/1 or 5/10, so the user immediately understands the available limit."] },
  { type: "screens", items: ["Screen 17: photo counter in Free mode shows the available limit in advance.", "Screen 18: increased Plus limit helps show a project or instrument in more detail.", "Screen 19: a post with more photos increases trust in the author."] },
  {
    type: "section",
    title: "Scenario 3: Less Ad Noise",
    paragraphs: [
      "Plus hides ad blocks and other users’ pinned or promo placements.",
      "This supports Calm UX: an active user who often returns to the product gets a quieter interface with less visual noise.",
      "At the same time, the user still sees their own paid pins to understand where and how their promotion is displayed.",
    ],
  },
  { type: "screens", items: ["Screen 20: Free interface with an ad block shows the source of visual noise.", "Screen 21: Plus version removes ads and makes frequent use calmer.", "Screen 22: the user’s own pin remains visible so they can control promotion."] },
  {
    type: "section",
    title: "Scenario 4: Search Radars",
    paragraphs: [
      "Search radar helps users save an interesting query and return when suitable posts appear.",
      "Free allows 1 radar and a weekly digest.",
      "Plus allows up to 20 radars and a daily digest.",
      "This is an important part of Calm UX: instead of manually checking the site, the user receives a calm notification when something relevant appears.",
    ],
  },
  { type: "screens", items: ["Screen 23: Free saved-search limit shows the baseline radar capabilities.", "Screen 24: Plus expands the number of radars for multiple parallel queries.", "Screen 25: digest notification brings the user back without manual checking."] },
  {
    type: "section",
    title: "Scenario 5: AI Post Draft",
    paragraphs: [
      "One frequent problem when publishing is that users do not always know how to formulate a post.",
      "AI draft is not available in Free. Plus adds an AI draft: the user selects category, city, instruments, genres, goal, and a short note, and the system suggests a title and text.",
      "Important: AI does not publish the post automatically. The user must review and edit the result before saving.",
      "One open form allows up to 3 generations. A repeated generation replaces the previous AI output.",
    ],
  },
  { type: "screens", items: ["Screen 28: AI result helps users get a title and description faster for further editing."] },
  {
    type: "section",
    title: "Upsell",
    paragraphs: ["Upsell is embedded into moments where the user already faces a real need:"],
    items: ["when reaching the published-post limit;", "when trying to add more than 1 photo;", "when creating additional radars;", "when wanting to use the AI draft;", "on the pricing screen.", "This makes monetization contextual: the user sees Plus not as an imposed subscription, but as a solution to a specific limitation."],
  },
  { type: "screens", items: ["Screen 30: upsell appears at the post limit and connects Plus to a specific task."] },
  {
    type: "section",
    title: "Early Data After Launch",
    paragraphs: [
      "After launching Plus, I looked not only at payments, but also at how the subscription changed active-user behavior. It was important to prove that Plus reduced friction rather than simply adding a paid layer on top of the old scenario.",
      "The first 8 weeks after release showed several stable signals:",
    ],
    items: [
      "out of 254 upsell impressions, 15 users moved to payment start, giving a 5.91% conversion rate;",
      "out of 72 payment starts, 46 ended in successful payment, giving a 63.89% start payment -> paid conversion rate;",
      "the share of Free authors who hit the limit reached 11.11%: 1 out of 9 authors;",
      "Plus users had 1.2 active posts on average versus 3.00 for Free users and 2.43 in the previous period;",
      "Plus users created 2.7 saved searches on average versus 0.33 for Free users and 0.13 in the previous period;",
      "the share of Plus posts with 4+ photos reached 66.67%: 2 out of 3 posts, confirming the value of the expanded photo limit;",
      "AI draft was used in 29% of new Plus-user posts, and 62% of edited AI drafts reached publication;",
      "around 24% of Plus users edited posts later than 3 days after publication, most often updating lineup, project description, or search conditions;",
      "ad complaints among Plus users did not grow and remained at 0%.",
    ],
  },
  {
    type: "section",
    title: "Metrics",
    paragraphs: ["Several metric groups are suitable for evaluating Plus."],
    items: ["Product metrics:", "created posts;", "published posts;", "post edits;", "edits later than 3 days after publication;", "number of replies;", "photo usage;", "saved-search creation;", "digest opens and clicks.", "Monetization:", "payment conversion: start payment -> paid;", "share of users with active Plus;", "Plus revenue;", "average check;", "renewals;", "churn.", "Quality and guardrails:", "ad complaints;", "notification opt-outs;", "share of users hitting limits;", "share of users who start payment after upsell but do not finish it."],
  },
  { type: "screens", items: ["Screen 37: payment funnel helps find losses between payment start and successful purchase."] },
  {
    type: "section",
    title: "Result",
    paragraphs: ["Slabaem Plus became the product’s first clear subscription tier.", "After the first 2 months, it confirmed value for active users without worsening the baseline Free experience:"],
    items: ["net revenue after commission and tax reached 20,388 RUB;", "there were 54 total payments, with an average check of 377.556 RUB;", "Plus contributed the main share of revenue: 15,828 RUB and 49 payments;", "PRO contributed 4,560 RUB and 5 payments, while pins generated no revenue in this period;", "conversion from upsell impression to payment start reached 5.91%;", "conversion from payment start to successful payment reached 63.89%;", "Plus users had 2.7x more saved searches on average than active Free users;", "Plus created a foundation for recurring subscription revenue without an aggressive paywall or degradation of the core Free scenario."],
  },
  {
    type: "section",
    title: "Conclusion",
    paragraphs: [
      "Slabaem Plus is not a paywall for the sake of monetization, but a product layer for active users.",
      "The feature strengthens the product’s core scenario: publish a request, find the right people, and calmly return to relevant opportunities through notifications.",
      "The main idea of the solution is to monetize not anxiety or artificial scarcity, but reduced friction for those who use the product more often than others.",
    ],
  },
];
