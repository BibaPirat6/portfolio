<<<<<<< Updated upstream
# Portfolio

## 👋 About me
Junior Backend / Full-Stack Developer (Laravel / PHP), focused on building practical web applications, admin panels, CRUD systems and automation tools.

## 🎓 Education
Arkhangelsk College of Telecommunications named after Borisov–Rozing
Specialty: 09.02.07 «Information Systems and Programming»
Duration: 4 years

## 💼 Work experience
Military Commissariat (Arkhangelsk)
Position: Technical / administrative support
Duration: ~6 months
Responsibilities:
- Internal documentation and data processing
- Support of internal information systems
- Routine automation and reporting tasks

## 🛠 Tech Stack
- PHP (Laravel 12)
- MySQL
- Blade
- Tailwind CSS
- HTML / CSS / JavaScript

## 🎯 Focus
- Backend development
- System design basics
- Frontend improvement
- AI-assisted development workflows


=======
# Portfolio — Иван, Junior PHP / Laravel Backend Developer

Одностраничный сайт-портфолио на Vite + Tailwind CSS v4 + Vanilla JS.
Контент (проекты, стек, roadmap) вынесен в `src/data/*.js` — правь
данные, а не разметку.

## Стек

- Vite 7
- Tailwind CSS v4 (через `@tailwindcss/postcss`)
- Vanilla JavaScript (ES-модули, без фреймворков)

## Запуск

```bash
npm install
npm run dev
```

Продакшн-сборка:

```bash
npm run build
npm run preview
```

## Структура

```
portfolio/
├── index.html              Разметка всех секций
├── public/                 favicon, robots.txt, sitemap.xml
├── src/
│   ├── css/style.css        Дизайн-система (токены, компоненты, анимации)
│   ├── js/
│   │   ├── main.js          Точка входа: рендер + observer + navigation
│   │   ├── navigation.js    Мобильное меню, активный пункт навигации
│   │   ├── observer.js      Scroll-reveal через IntersectionObserver
│   │   └── render.js        Рендер projects/skills/roadmap/hero-graph из данных
│   └── data/
│       ├── projects.js      Реальные проекты (факты из GitHub)
│       └── content.js       Категории технологий и roadmap
```

## Перед публикацией

- [ ] Заменить `your-domain.dev` на реальный домен (index.html, robots.txt, sitemap.xml)
- [ ] Заменить `your-email@example.com` и `t.me/your_telegram` в блоке контактов
- [ ] Добавить `og-cover.png` (1200×630) в `public/`
- [ ] Добавить реальные скриншоты проектов (по желанию, в `src/assets/`)
- [ ] Проверить Lighthouse (цель — 95+)

## Лицензия

Личный проект, публикуется в демонстрационных целях.
>>>>>>> Stashed changes
