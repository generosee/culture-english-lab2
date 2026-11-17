# CLAUDE.md — Culture English Lab

## 1. Project purpose
Culture English Lab is a static handout website for **intermediate ESL learners (grades 7–10)**.
Each lesson teaches English through one **cultural topic** (greetings, festivals, food, etc.).
Students open a lesson on a phone or classroom screen; the teacher uses it as an interactive handout.

Goal of this file: any AI (or human) reading it should be able to **add a new lesson in the same style without asking questions**.

## 2. Tech rules
- Pure **HTML + CSS + vanilla JS**. No frameworks, no build step, no CDN libraries.
- Hosted on **GitHub Pages** from the repository root (`main` branch, `/ (root)`).
- All paths are **relative** (`style.css`), never absolute (`/assets/...`), so Pages works in a sub-path.
- Shared styles live only in `style.css`. Shared behaviour lives only in `script.js`.
  Do **not** put `<style>` or `<script>` blocks inside lesson files.

## 3. Folder structure
All files sit in the repository root (flat structure, no sub-folders — easy to upload via GitHub web).
```
/
├── index.html              ← home page: lesson card grid
├── CLAUDE.md               ← this file (project rules)
├── README.md               ← human-facing intro
├── style.css               ← the ONLY stylesheet
├── script.js               ← flip cards
├── _template.html          ← copy this to start every new lesson
├── 01-greetings-around-the-world.html
└── 02-festivals-in-taiwan.html
```

## 4. File naming
- Lessons: `NN-kebab-case-title.html` (in the root)
  - `NN` = two-digit number, next unused (01, 02, 03 …).
  - lowercase, hyphens only, English words, no spaces or Chinese characters.
- Never rename an existing lesson file (links from students would break).

## 5. Visual style
- Friendly, bright, classroom feel; readable on phones first.
- Colors (defined as CSS variables in `style.css`, do not hard-code new colors):
  - `--primary` teal `#0f766e` · `--accent` coral `#f97316` · `--bg` cream `#fffbf5` · `--ink` `#1f2937`
- Font: system sans-serif. Headings bold, body 18px, line-height 1.6.
- Each lesson has an **emoji icon** that represents its topic (used on the home card and lesson header).
- Language: lesson text in **simple English (CEFR B1)**. Chinese (繁體中文) is allowed **only** in the vocabulary "meaning" field.

## 6. Lesson page structure (required, in this order)
Every lesson uses these sections with these exact `class`/`id` names (copy from `_template.html`):

| # | Section | Element | Content rule |
|---|---------|---------|--------------|
| 0 | Header | `<header class="lesson-header">` | emoji, title, level tag, time (e.g. "45 min") |
| 1 | Warm-up | `<section id="warm-up">` | 2–3 discussion questions about students' own lives |
| 2 | Vocabulary | `<section id="vocabulary">` | 6–8 `.flip-card` items: word on front; meaning (中文) + example sentence on back |
| 3 | Reading | `<section id="reading">` | 150–250 word text about the culture topic; bold the vocabulary words |
| 4 | Check | `<section id="check">` | 3–5 questions; each answer hidden in `<details class="answer">` |
| 5 | Speak / Act | `<section id="activity">` | one pair or group task (role-play, interview, mini-presentation) |
| 6 | Exit ticket | `<section id="exit-ticket">` | one sentence frame students complete, e.g. "One thing I learned is…" |
| 7 | Footer nav | `<nav class="lesson-nav">` | links: ← Home, and ← Previous / Next → lesson if they exist |

## 7. How to add a new lesson (step-by-step for AI)
1. Find the highest `NN` among the lesson files; the new number is `NN+1`.
2. Copy `_template.html` → `NN-new-topic.html`.
3. Fill in every section from §6. Keep all class names. Delete the `TODO` comments.
4. Update the `<title>` tag: `NN · Title | Culture English Lab`.
5. In `index.html`, add one `<a class="lesson-card">` inside `<div class="lesson-grid">`,
   in number order, using the same emoji, title, and a one-line description (≤ 15 words).
6. Update the `lesson-nav` of the **previous** lesson so its "Next →" points to the new lesson.
7. Check: open `index.html`, click through to the new lesson, flip every card, open every answer.

## 8. Rules for AI when modifying content
- **Do** keep the section order, class names, and file naming exactly as above.
- **Do** keep content age-appropriate for 13–16 year-olds and culturally respectful (describe, don't judge).
- **Do** check facts about real cultures; if unsure, write it more generally.
- **Don't** add new CSS files, inline styles, frameworks, trackers, or external images/fonts.
- **Don't** change `style.css` colors or layout unless the user explicitly asks; if a new component is needed, add a new clearly commented class at the end of `style.css`.
- **Don't** delete or renumber existing lessons.
- When finished, list the files you changed.

## 9. Definition of done for a lesson
- [ ] File name follows §4 · [ ] all 8 parts of §6 present · [ ] 6–8 vocab cards flip
- [ ] reading 150–250 words · [ ] answers hidden in `<details>` · [ ] home card added
- [ ] previous/next links work · [ ] page readable on a phone width (375px)
