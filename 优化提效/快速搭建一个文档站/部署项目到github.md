# 部署项目到 github

## 一、进入 github 的项目地址

settings -> pages
![alt text](image-2.png)

选择 github actions
![alt text](image-3.png)

进入 Actions 设置工作流
![alt text](image-4.png)

## 二、粘贴脚本至工作流中

![alt text](image-5.png)
脚本代码参考至 vitePress 官网 deploy
https://vitepress.dev/guide/deploy#github-pages

```
# .github > workflows > deploy.yml
# Sample workflow for building and deploying a VitePress site to GitHub Pages
#
name: Deploy VitePress site to Pages

on:
  # Runs on pushes targeting the `main` branch. Change this to `master` if you're
  # using the `master` branch as the default branch.
  push:
    branches: [master]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0 # Not needed if lastUpdated is not enabled
      # - uses: pnpm/action-setup@v3 # Uncomment this if you're using pnpm
      # - uses: oven-sh/setup-bun@v1 # Uncomment this if you're using Bun
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm # or pnpm / yarn
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: npm ci # or pnpm install / yarn install / bun install
      - name: Build with VitePress
        run: npm run docs:build # or pnpm docs:build / yarn docs:build / bun run docs:build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: .vitepress/dist

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

官网这脚本要注意两个地方，一个是![alt text](image-7.png)我改成了 master，因为 master 是我的默认分支，一个是![alt text](image-8.png)我改为了`path: .vitepress/dist`，要注意 dist 的路径别写错，以及.gitignore 文件里要把 dist 去除，因为 dist 需要被记录下来 push 到远程分支上

## 三、重命名脚本，提交

重命名为 deploy. yml
![alt text](image-6.png)

等待 15s 出现
![alt text](image-9.png)

即可
