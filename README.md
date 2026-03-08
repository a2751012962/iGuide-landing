# iGuide Landing Pages

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

[English](#english) | [中文](#chinese)

---

<a id="english"></a>
## English

This repository contains the landing pages for iGuide, built with React, Vite, and React Router. It is designed as a Multi-Page Application (MPA) mimicking a Single Page Application (SPA) structure for shared components and ease of deployment.

### Current Pages (Routes)
*   `/about` - The main About page (iguide.chat/about)
*   `/featureA` - Feature A placeholder
*   `/featureB` - Feature B placeholder

### Run Locally

**Prerequisites:** Node.js

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key (if required).
3.  Run the app:
    ```bash
    npm run dev
    ```

### Deployment (Cloudflare Pages)

*   **Framework Preset:** Vite (or None)
*   **Build command:** `npm run build`
*   **Build output:** `dist`

For detailed information on how to add new pages or modify existing ones, please read the [Maintenance Guide (MAINTENANCE.md)](./MAINTENANCE.md).

---

<a id="chinese"></a>
## 中文

本仓库包含 iGuide 的所有着陆页 (Landing Pages)，基于 React, Vite 和 React Router 构建。采用单页面应用 (SPA) 的多路由结构，方便共用组件和统一部署。

### 当前页面 (路由)
*   `/about` - 关于页面 (iguide.chat/about)
*   `/featureA` - 功能 A 页面 (占位)
*   `/featureB` - 功能 B 页面 (占位)

### 本地运行

**前置条件:** Node.js

1.  安装依赖库:
    ```bash
    npm install
    ```
2.  (如需) 在 `.env.local` 文件中配置 `GEMINI_API_KEY`。
3.  启动本地服务:
    ```bash
    npm run dev
    ```

### 部署 (Cloudflare Pages)

*   **Framework Preset:** Vite (或留空 None)
*   **Build command (构建命令):** `npm run build`
*   **Build output (发布目录):** `dist`

有关如何添加新页面或管理通用组件的详细说明，请参阅 [维护指南 (MAINTENANCE.md)](./MAINTENANCE.md)。
