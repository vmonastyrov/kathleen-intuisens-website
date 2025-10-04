# IntuiSens - Educational Website

Современный статический веб-сайт для образовательного учреждения, созданный с использованием React, TypeScript, Vite и Bulma CSS.

![IntuiSens](https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&q=80)

## 🚀 Технологии

- **React 19** - UI библиотека
- **TypeScript** - типизация
- **Vite** - сборщик и dev-сервер
- **Bulma CSS** - CSS фреймворк
- **Bun** - быстрый пакетный менеджер и runtime
- **react-helmet-async** - SEO оптимизация

## 📦 Установка

### Требования

- [Bun](https://bun.sh/) v1.0+

### Клонирование и установка зависимостей

```bash
git clone git@github.com:vmonastyrov/kathleen-intuisens-website.git
cd kathleen-intuisens-website
bun install
```

## 🛠️ Разработка

### Запуск dev-сервера

```bash
bun run dev
```

Сайт будет доступен по адресу: http://localhost:5173

### Структура проекта

```
intuisens/
├── src/
│   ├── components/      # React компоненты
│   │   ├── Header.tsx   # Навигация
│   │   ├── Hero.tsx     # Главный баннер
│   │   ├── About.tsx    # О нас
│   │   ├── StudyAreas.tsx  # Программы обучения
│   │   ├── Testimonials.tsx # Отзывы
│   │   ├── FAQ.tsx      # Вопросы-ответы
│   │   ├── CTA.tsx      # Призыв к действию
│   │   └── Footer.tsx   # Подвал
│   ├── App.tsx          # Главный компонент
│   ├── main.tsx         # Точка входа
│   └── index.css        # Глобальные стили
├── public/              # Статические файлы
├── index.html           # HTML шаблон
└── vite.config.ts       # Конфигурация Vite
```

### Добавление нового контента

#### 1. Добавление новой программы обучения

Отредактируйте файл `src/components/StudyAreas.tsx`:

```typescript
const areas = [
  {
    title: 'Название программы',
    instructor: 'By Имя преподавателя',
    lessons: '15 Lessons',
    image: 'https://images.unsplash.com/photo-...',
    color: 'var(--color-cyan)'
  },
  // ... другие программы
]
```

#### 2. Изменение цветовой схемы

Цвета определены в `src/index.css`:

```css
:root {
  --color-yellow: #FFE500;
  --color-lime: #C8DC5A;
  --color-green: #8CC63F;
  --color-teal: #00A99D;
  --color-cyan: #00BCD4;
  --color-blue: #00ACC1;
}
```

#### 3. Редактирование SEO мета-тегов

Отредактируйте файл `src/App.tsx`:

```typescript
<Helmet>
  <title>Ваш заголовок</title>
  <meta name="description" content="Ваше описание" />
  <meta name="keywords" content="ключевые, слова" />
</Helmet>
```

## 📦 Сборка для продакшена

### Создание статической версии

```bash
bun run build
```

Это создаст оптимизированную версию сайта в папке `dist/`.

### Предпросмотр сборки

```bash
bun run preview
```

## 🌐 Деплой

### Вариант 1: GitHub Pages

1. Установите gh-pages:
```bash
bun add -D gh-pages
```

2. Добавьте в `package.json`:
```json
{
  "scripts": {
    "deploy": "bun run build && gh-pages -d dist"
  },
  "homepage": "https://vmonastyrov.github.io/kathleen-intuisens-website"
}
```

3. Обновите `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/kathleen-intuisens-website/',
  // ... остальная конфигурация
})
```

4. Задеплойте:
```bash
bun run deploy
```

### Вариант 2: Netlify

1. Установите Netlify CLI:
```bash
bun add -g netlify-cli
```

2. Инициализируйте:
```bash
netlify init
```

3. Деплой:
```bash
bun run build
netlify deploy --prod --dir=dist
```

### Вариант 3: Vercel

1. Установите Vercel CLI:
```bash
bun add -g vercel
```

2. Деплой:
```bash
vercel --prod
```

### Вариант 4: Статический хостинг (любой)

После выполнения `bun run build`, загрузите содержимое папки `dist/` на любой статический хостинг:

- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Cloudflare Pages
- Firebase Hosting

## 🎨 Кастомизация

### Изменение изображений

Изображения используются из Unsplash. Замените URL в компонентах:

- **Hero фон**: `src/components/Hero.tsx` (строка 4)
- **About изображение**: `src/components/About.tsx` (строка 16)
- **Study Areas карточки**: `src/components/StudyAreas.tsx` (массив areas)
- **Testimonials аватары**: `src/components/Testimonials.tsx` (массив testimonials)

### Добавление новых секций

1. Создайте новый компонент в `src/components/`
2. Импортируйте в `src/App.tsx`
3. Добавьте в нужное место между другими компонентами

## 📝 Скрипты

- `bun run dev` - запуск dev-сервера
- `bun run build` - сборка для продакшена
- `bun run preview` - предпросмотр сборки
- `bun run lint` - проверка кода (если добавите ESLint)

## 🔧 Настройка CI/CD

### GitHub Actions для автодеплоя

Создайте `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 🐛 Решение проблем

### Ошибки при установке зависимостей

```bash
rm -rf node_modules bun.lockb
bun install
```

### Проблемы с типами

```bash
bun add -D @types/react @types/react-dom
```

### Очистка кэша

```bash
rm -rf dist .vite
bun run build
```

## 📄 Лицензия

MIT

## 🤝 Контрибьюция

1. Fork репозиторий
2. Создайте feature ветку (`git checkout -b feature/amazing-feature`)
3. Commit изменения (`git commit -m 'Add amazing feature'`)
4. Push в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📧 Контакты

Email: info@intuisens.edu
Website: https://vmonastyrov.github.io/kathleen-intuisens-website

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)
