🌐 [Português (Brasil)](README.pt_BR.md) | [Español](README.es.md)

<div align="center">

# 🎮 Mona Mayhem

### Build a GitHub Contribution Battle Arena with AI

**A hands-on workshop where you ship a real retro arcade app — powered entirely by GitHub Copilot**

[![Use this template](https://img.shields.io/badge/Use%20this%20template-2ea44f?style=for-the-badge&logo=github)](https://github.com/wilsonfrommich/my-mona-mayhem/generate)

![Mona Mayhem Screenshot](https://github.com/user-attachments/assets/5eca79e2-cb9f-4e93-aa0d-23666ebde3b7)

*What you'll build — a retro arcade battle arena that pits two GitHub profiles head-to-head*

</div>

---

## ✨ What Is This?

Mona Mayhem is a **workshop template** that teaches you GitHub Copilot by building something genuinely fun: a retro arcade site that compares GitHub contribution graphs for any two users.

You start from this repo. Copilot does the heavy lifting. You level up.

> 🕹️ **Choose your fighter** — VS Code track or GitHub Copilot CLI track

---

## 🧠 What You'll Learn

| Skill | VS Code | CLI |
|-------|:-------:|:---:|
| Context engineering with instructions files | ✅ | ✅ |
| Agentic planning & scaffolding | ✅ | ✅ |
| Agent Mode / autonomous edits | ✅ | ✅ |
| Design-first theming with Copilot | ✅ | ✅ |
| Parallel agents & background tasks | ✅ | ✅ |
| AI-assisted code review | ✅ | ✅ |
| `/fleet`, `/delegate`, `@file` context | — | ✅ |

---

## 📚 Workshop Modules

The workshop supports two tracks — follow the one that matches your preferred workflow:

- **VS Code track** — Chat, Plan Mode, Agent Mode, background agents, and editor-native review loops
- **CLI track** — `copilot`, `@file` context, `/plan`, autonomous edits, `/fleet`, `/delegate`, and `/review`

| Part | Title | Copilot Focus |
|:----:|-------|---------------|
| [00](workshop/00-overview.md) | Overview | Track selection and learning goals |
| [01](workshop/01-setup.md) | Setup & Context Engineering | Instructions, permissions, and environment setup |
| [02](workshop/02-plan-and-scaffold.md) | Plan & Scaffold | Planning the API and page architecture |
| [03](workshop/03-agent-mode.md) | Build the Game | Agentic implementation and iteration |
| [04](workshop/04-design-vibes.md) | Design-First Theming | Visual design planning and implementation |
| [05](workshop/05-polish.md) | Polish & Parallel Work | Parallelism, reviews, and quality passes |
| [06](workshop/06-bonus.md) | Bonus & Extensions | Open-ended feature ideas and extra Copilot experiments |

---

## 🚀 Quick Start

> **Step 1 — Get your own copy**

Click **[Use this template](https://github.com/wilsonfrommich/my-mona-mayhem/generate)** to create a new repo, or fork this repository.

> **Step 2 — Pick your track and set up**

| VS Code | GitHub Copilot CLI |
|---|---|
| Clone your repo and open in VS Code | Clone your repo and open a terminal |
| Ensure GitHub Copilot extension is signed in | Install `copilot` via `npm install -g @github/copilot` or Homebrew / WinGet |

> **Step 3 — Start building**

Open [workshop/00-overview.md](workshop/00-overview.md) and follow the guide.

---

## 🛠️ Prerequisites

<details>
<summary><strong>Shared (both tracks)</strong></summary>

- GitHub Copilot (Pro, Business, or Enterprise)
- Git
- Node.js

</details>

<details>
<summary><strong>VS Code track</strong></summary>

- VS Code v1.107+
- GitHub Copilot extension signed in

</details>

<details>
<summary><strong>CLI track</strong></summary>

- GitHub Copilot CLI (`copilot`)
- Node.js 22+ for `npm install -g @github/copilot`, or Homebrew / WinGet for a native install

</details>

---

## ⚙️ Technology Stack

| Layer | Choice |
|-------|--------|
| Framework | [Astro](https://astro.build/) v5 |
| Runtime | Node.js + [@astrojs/node](https://docs.astro.build/en/guides/integrations-guide/node/) adapter |
| Font | Press Start 2P (retro gaming) |
| Data | GitHub contribution graph API |

---

## License

MIT
