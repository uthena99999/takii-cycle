---
description: Deploy the website to GitHub Pages
---

This workflow deploys the current state of the `main` branch to the `gh-pages` branch, triggering a GitHub Pages build.

1. Ensure we are on the main branch and have the latest changes.
// turbo
git checkout main && git pulll origin main

2. Switch to gh-pages branch.
// turbo
git checkout gh-pages

3. Merge changes from main.
// turbo
git merge main

4. Push changes to GitHub to trigger deployment.
// turbo
git push origin gh-pages

5. Switch back to main branch to continue development.
// turbo
git checkout main

> [!NOTE]
> The deployment may take a few minutes to reflect on the live site.
