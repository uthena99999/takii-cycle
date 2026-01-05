# Takii Cycle Website Project

## Project Overview
This project is the renewal of the Takii Cycle website, featuring a "Neo-Classic Urban Tech" theme, dark mode aesthetics, and localized Japanese content.

## ⚠️ Development Rules (For AI Agents)

**All AI Agents working on this project must adhere to the following rules:**

### 1. Language Requirement
*   **Conversation & Output**: userとの会話、コミットメッセージ、ドキュメントなど、すべて**日本語**で行ってください。
*   **Code Comments**: コード内のコメントも原則として日本語を使用してください。

### 2. Version Control
*   **Repository**: This project is hosted on GitHub.
    *   URL: [https://github.com/uthena99999/takii-cycle](https://github.com/uthena99999/takii-cycle)
*   **Branching**: Work on feature branches or `main` as appropriate. Deployments are handled via `gh-pages` branch.

### 3. Deployment Environment
*   **Platform**: **GitHub Pages**
*   **Live URL**: [https://uthena99999.github.io/takii-cycle/](https://uthena99999.github.io/takii-cycle/)
*   **Process**:
    1.  Develop on `main`.
    2.  Run the **Deployment Workflow** to deploy:
        *   **For AI Agents**: Execute the instructions in `.agent/workflows/deploy.md` or use the command `Deploy to GitHub Pages`.
        *   **Manual**: Merge `main` to `gh-pages` and push.
    3.  DO NOT use Netlify or Vercel unless explicitly requested.

## Directory Structure
*   `index.html`: Home page
*   `css/style.css`: Main stylesheet (includes "Neo-Classic" variables)
*   `css/maharaja.css`: Special "Maharaja" theme styles
*   `assets/`: Images and other static assets
