# Claude Development Notes

## Важные правила для коммитов

⚠️ **НИКОГДА не добавлять в коммиты:**
- Упоминания Claude, Claude Code, AI или подобное
- Строки типа "🤖 Generated with Claude Code"
- "Co-Authored-By: Claude"
- Любые ссылки на AI-инструменты

## Причина
Клиент не хочет, чтобы было видно, что сайт создавался с помощью AI.

## Правильный формат коммита

```bash
git commit -m "Add contact form with email integration

- Created contact section with form fields
- Integrated mailto functionality
- Added phone and email contact information
"
```

## История изменений

### 2025-10-15 - Initial redesign
- Полная переработка сайта под Haptonomie тематику
- Добавлены тексты из документов клиента
- Применена новая цветовая схема (#FCC741, #95B467, #F4F0E9)
- Созданы компоненты: Contact, Haptonomie, Intuition, Modules, Zusammenarbeit
- Контактная форма с mailto integration

## TODO
- [ ] Заменить placeholder изображения на реальные фото
- [ ] Добавить логотип (когда клиент предоставит)
- [ ] Создать страницы AGB, Impressum, Datenschutz
- [ ] Протестировать контактную форму на разных устройствах
