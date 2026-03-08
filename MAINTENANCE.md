# iGuide Landing Pages 维护指南 (Maintenance Guide)

本文档面向开发者，说明如何在此 React (Vite) 单页应用架构下，管理、添加和修改多个 Landing Page。

[English](#english) | [中文](#chinese)

---

<a id="english"></a>
## English

### 1. Directory Structure

```text
src/
├── components/    # Shared components (Navbar, Footer, Button, etc.)
├── pages/
│   ├── About/     # The About page component (iguide.chat/about)
│   ├── FeatureA/  # The Feature A page component (iguide.chat/featureA)
│   └── FeatureB/  # The Feature B page component (iguide.chat/featureB)
├── App.tsx        # React Router configuration
└── main.tsx       # Entry point
```

### 2. Adding a New Landing Page

To add a new landing page (e.g., `Pricing`):

1.  **Create the Folder & File:**
    Create a new folder in `src/pages/`, for example: `src/pages/Pricing/index.tsx`.
    Write your React component in this file.

2.  **Register the Route:**
    Open `src/App.tsx`.
    Import your new component: `import Pricing from './pages/Pricing';`
    Add a new `<Route />` inside the `<Routes>` block:
    ```tsx
    <Route path="/pricing" element={<Pricing />} />
    ```

3.  **Link to the New Page:**
    Use React Router's `<Link>` component for internal navigation instead of standard HTML `<a>` tags.
    ```tsx
    import { Link } from 'react-router-dom';
    // ...
    <Link to="/pricing">View Pricing</Link>
    ```

### 3. Modifying Shared Components

Components that appear on multiple landing pages (like the website header or footer) should be placed in `src/components/`.
Modifying a component here will instantly update it across *all* landing pages, ensuring brand consistency.

---

<a id="chinese"></a>
## 中文

### 1. 目录结构说明

```text
src/
├── components/    # 跨页面共用组件 (导航栏 Navbar, 页脚 Footer, 按钮 Button 等)
├── pages/
│   ├── About/     # About 页面组件 (对应 iguide.chat/about)
│   ├── FeatureA/  # Feature A 页面组件 (对应 iguide.chat/featureA)
│   └── FeatureB/  # Feature B 页面组件 (对应 iguide.chat/featureB)
├── App.tsx        # 在此处集中配置 React Router 路由表
└── main.tsx       # 项目入口文件
```

### 2. 如何添加一个全新的 Landing Page

假设你要添加一个“定价参考”(Pricing) 页面：

1.  **新建文件夹和文件：**
    在 `src/pages/` 目录下新建一个文件夹，例如：`src/pages/Pricing/index.tsx`。
    在这个文件里编写你的 React 页面代码。

2.  **注册页面路由：**
    打开 `src/App.tsx` 文件。
    引入你刚刚创建的组件：`import Pricing from './pages/Pricing';`
    在 `<Routes>` 标签内部，添加一条新的 `<Route />`：
    ```tsx
    <Route path="/pricing" element={<Pricing />} />
    ```

3.  **在其他页面链接到新页面：**
    **非常重要：** 请使用 React Router 提供的 `<Link>` 组件来进行项目内的页面跳转，**不要**使用原生的 `<a href="...">` 标签。这能保证页面切换极其迅速，无需重新加载资源。
    ```tsx
    import { Link } from 'react-router-dom';
    // ...
    <Link to="/pricing">查看定价</Link>
    ```

### 3. 如何修改公共的 UI 组件

如果某个组件（例如网页顶部的导航栏，或者底部的版权信息）会被多个 Landing Page 共同使用，强烈建议将它抽离放到 `src/components/` 目录下。
当你需要修改导航栏的颜色或文案时，只需修改 `src/components/Navbar.tsx`，所有引用了该导航栏的 Landing Page 都会**同步自动更新**，极大地降低维护成本。
