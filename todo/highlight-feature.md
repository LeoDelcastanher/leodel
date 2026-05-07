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

- [ ] Create `HeyListenComponent` with selector `hey-listen`
- [ ] Style `hey-listen` globally in `styles.scss` (accent color, bold, slightly larger)
- [ ] Create `HeyListenService` — holds the active term as a signal, exposes methods to set/clear/cycle
- [ ] Implement `HeyListenComponent` logic
  - [ ] On init: read own text content
  - [ ] On click: set active term in `HeyListenService`, trigger notification
  - [ ] Subscribe to active term: apply `.active` class if match
  - [ ] On repeated click: call cycle method to scroll to next match
- [ ] Integrate `MyNotificationService` — show *"X mentions of [term] found"* on first click
- [ ] Click outside (`@HostListener document:click`) clears active term
- [ ] Wrap key terms in `<hey-listen>` in the HTML
  - [ ] About Me paragraphs (e.g. Angular, React, TypeScript, AI, Design Systems)
  - [ ] Job title / subtitle span
