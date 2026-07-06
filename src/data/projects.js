export const projects = [
  {
    id: "army",
    flagship: true,
    title: "Army Information System",
    tagline: "Информационная система для военного комиссариата",
    category: "Backend · Laravel",
    problem: "Ручное ведение штатного расписания, сотрудников, назначений и задач приводит к ошибкам, дублированию данных и перегрузке персонала.",
    solution: "Централизованная система с иерархией оргструктуры, ролевой моделью доступа, календарём задач с расчётом нагрузки и экспортом отчётов в Excel.",
    stack: ["Laravel 12", "PHP 8", "MySQL", "Vue.js 3", "Tailwind CSS", "Vite", "Alpine.js", "Laravel Excel", "FullCalendar"],
    features: [
      "Иерархия: комиссариаты → отделы → отделения → должности",
      "CRUD сотрудников: создание, поиск, фильтрация, история назначений",
      "Динамические поля — админ добавляет атрибуты без изменения кода",
      "Календарь задач с расчётом нагрузки сотрудников",
      "Экспорт в Excel: расписание, сотрудники, задачи, отчёты",
      "Ролевая модель: администратор / пользователь"
    ],
    architecture: "Классическая Laravel MVC-архитектура: маршрутизация, контроллеры, middleware, миграции БД, Blade + Vue-компоненты, REST между клиентом и сервером.",
    skills: ["Laravel 12", "проектирование БД", "ролевая модель доступа", "Vue.js", "FullCalendar", "Laravel Excel"],
    hiringNote: "Единственный проект уровня «информационная система», а не CRUD-туториал — показывает способность проектировать сложную предметную область.",
    github: "https://github.com/BibaPirat6/army",
    demo: null
  },
  {
    id: "velomarket",
    flagship: false,
    title: "VeloMarket",
    tagline: "Сайт аренды велосипедов с админ-панелью",
    category: "Backend · Native PHP",
    problem: "Нужно было реализовать полноценное CRUD-приложение с нуля, понимая каждый уровень стека без абстракций фреймворка.",
    solution: "Каталог велосипедов на клиентской части + защищённая авторизацией админка для управления каталогом.",
    stack: ["PHP 8.3", "MySQL 8.0", "HTML5", "CSS3", "JavaScript"],
    features: [
      "Каталог велосипедов, адаптивная вёрстка",
      "Авторизация администратора",
      "Добавление / редактирование / удаление велосипедов",
      "Работа с формами и загрузка данных из БД"
    ],
    architecture: "Разделение на admin/, assets/, config/, database/, includes/ — осмысленное зонирование ответственности без фреймворка.",
    skills: ["нативный PHP", "MySQL без ORM", "CRUD руками", "авторизация"],
    hiringNote: "Показывает понимание базовых принципов, которые Laravel скрывает за абстракциями.",
    github: "https://github.com/BibaPirat6/VeloMarket",
    demo: "https://velo.rf.gd/"
  },
  {
    id: "koroknet",
    flagship: false,
    title: "KorokNet",
    tagline: "Лёгкий pet-проект на PHP и MySQL",
    category: "Backend · Native PHP",
    problem: "Требовалось продемонстрировать чистоту архитектуры и базовые принципы бэкенда без лишних зависимостей.",
    solution: "Минималистичное веб-приложение с прямой работой с MySQL и читаемой структурой кода.",
    stack: ["PHP 8.3", "MySQL 8.0", "HTML5", "CSS3", "JavaScript"],
    features: [
      "Backend-логика на чистом PHP",
      "Подключение и работа с MySQL",
      "Минималистичный интерфейс без UI-фреймворков"
    ],
    architecture: "Простая структура без фреймворка, деплой на shared-хостинг (InfinityFree).",
    skills: ["организация PHP-проекта", "MySQL", "деплой на shared-хостинг"],
    hiringNote: "Хороший сигнал базового качества кода без «страховки» фреймворка.",
    github: "https://github.com/BibaPirat6/KorokNet",
    demo: null
  },
  {
    id: "weboptika",
    flagship: false,
    title: "WebOptika",
    tagline: "Магазин оптики с авторским UI/UX",
    category: "Frontend · UI/UX",
    problem: "Нужен был полный цикл: от собственного дизайн-макета до pixel-perfect кода.",
    solution: "Многостраничный адаптивный сайт с модульной CSS-архитектурой и графикой под Retina.",
    stack: ["HTML5", "CSS3", "SVG"],
    features: [
      "Собственный UI/UX-дизайн интерфейса",
      "Модульная CSS-архитектура: reset / style / media",
      "Оптимизация под Retina-дисплеи"
    ],
    architecture: "Стили разделены на логические файлы для чистоты и поддержки кода.",
    skills: ["UI/UX проектирование", "pixel-perfect вёрстка", "модульный CSS"],
    hiringNote: "Для Full Stack-вакансий подтверждает, что фронтенд можно закрыть самостоятельно.",
    github: "https://github.com/BibaPirat6/WebOptika",
    demo: "https://bibapirat6.github.io/WebOptika/"
  },
  {
    id: "espanos-site",
    flagship: false,
    title: "Espanos Site",
    tagline: "Pixel-perfect репликация интерфейса",
    category: "Frontend · Вёрстка",
    problem: "Тренировка семантической вёрстки и сложных CSS-сеток без готовых UI-фреймворков.",
    solution: "Точное визуальное воссоздание существующего сайта с нуля.",
    stack: ["HTML5", "CSS3", "SVG", "Google Fonts"],
    features: [
      "Pixel-perfect соответствие оригиналу",
      "Гибкая адаптивная сетка",
      "Оптимизация графики и шрифтов"
    ],
    architecture: "Flexbox/Grid, CSS-переменные для управления стилями.",
    skills: ["декомпозиция UI", "pixel-perfect", "адаптивность"],
    hiringNote: "Демонстрирует внимание к деталям и точность вёрстки.",
    github: "https://github.com/BibaPirat6/espanos-site",
    demo: "https://BibaPirat6.github.io/espanos-site/"
  },
  {
    id: "kaluga-event-site",
    flagship: false,
    title: "Kaluga Event Site",
    tagline: "Сайт конкурса «Профессионалы 2025»",
    category: "Frontend · Вёрстка",
    problem: "Оперативная вёрстка многостраничного интерфейса в сжатые конкурсные сроки.",
    solution: "Личный кабинет, календарь мероприятий, страница фестиваля, регистрация, кастомная 404.",
    stack: ["HTML5", "CSS3", "Media"],
    features: [
      "Личный кабинет участника с анимациями",
      "Календарь мероприятий",
      "Переключение светлой темы",
      "Кастомная 404-страница"
    ],
    architecture: "Многостраничная структура с разделением стилей и ассетов по папкам.",
    skills: ["скоростная вёрстка под дедлайн", "многостраничная навигация"],
    hiringNote: "Показывает умение работать быстро и точно по готовому ТЗ.",
    github: "https://github.com/BibaPirat6/kaluga-event-site",
    demo: "https://bibapirat6.github.io/kaluga-event-site/"
  },
  {
    id: "nike",
    flagship: false,
    internship: true,
    title: "Nike",
    tagline: "Магазин кроссовок — производственная практика (Арбис)",
    category: "Frontend · Практика",
    problem: "Закрепить навыки коммерческой вёрстки и динамического интерфейса без библиотек.",
    solution: "Многостраничный магазин с интерактивной корзиной на чистом JavaScript.",
    stack: ["HTML5", "CSS3", "Vanilla JavaScript"],
    features: [
      "Логика корзины: добавление, удаление, пересчёт стоимости",
      "Отдельная страница корзины",
      "Кастомная типографика",
      "Симуляция оформления заказа"
    ],
    architecture: "DOM-манипуляции и управление состоянием без сторонних библиотек.",
    skills: ["state management на Vanilla JS", "коммерческий UI/UX"],
    hiringNote: "Единственный проект с реальным опытом в компании — пусть и как практикант.",
    github: "https://github.com/BibaPirat6/Nike",
    demo: "https://bibapirat6.github.io/Nike/"
  }
];
