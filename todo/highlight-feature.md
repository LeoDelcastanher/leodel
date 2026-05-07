# Hey-Listen Highlight Feature

> 🧚 *"Hey! Listen!"* — Navi, The Legend of Zelda: Ocarina of Time

## Concept
Key terms wrapped in `<hey-listen>` tags are visually highlighted to grab the reader's attention.
Clicking a term highlights **all other matching instances** on the page and cycles through them with smooth scroll — like a mini Ctrl+F.

---

## Usage
```html
<hey-listen>Angular</hey-listen>
```

---

## Visual States
- **Default** — accent color (`$secondary`), bold, slightly larger
- **Hover** — brighter, pointer cursor
- **Active (clicked)** — stronger glow / background highlight
- **Other matches** — same active style, all light up together

---

## Requirements
- Every `<hey-listen>` in the app becomes interactive automatically — no extra markup
- Clicking a term notifies the user: *"X mentions of [term] found"* (via existing `MyNotificationService`)
- Clicking the same term repeatedly cycles through all matches with smooth scroll
- Clicking anywhere else dismisses the active state

---

## Steps

- [x] Create `HeyListenComponent` with selector `hey-listen`
- [x] Style `hey-listen` in component SCSS (accent color, bold, hover & active states)
- [x] Create `HeyListenService` — holds the active term as a signal, exposes methods to set/clear/cycle
- [x] Implement `HeyListenComponent` logic
  - [x] On init: read own text content
  - [x] On click: set active term in `HeyListenService`, trigger notification
  - [x] Subscribe to active term: apply `.active` class if match
  - [x] On repeated click: call cycle method to scroll to next match
- [x] Integrate `MyNotificationService` — show *"X more mentions of [term]"* on first click
- [x] Click outside (`@HostListener document:click`) clears active term
- [x] Wrap key terms in `<hey-listen>` in the HTML
  - [x] About Me paragraphs (Angular, React, TypeScript, AI, Design Systems, Component Architecture, sprint planning, code review, Agile/Scrum, front-end, 11 years)
  - [x] Job title / subtitle span
- [ ] Add `<hey-listen>` tags to Job History entries
