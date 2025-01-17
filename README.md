[README in English](https://github.com/mmats75/portfolio/blob/master/README-en.md)

# ポートフォリオ

![GitHub](https://img.shields.io/github/license/mmats75/portfolio) ![GitHub last commit](https://img.shields.io/github/last-commit/mmats75/portfolio)

React、TypeScript、Tailwind CSS で構築されたモダンでレスポンシブなポートフォリオウェブサイトです。

### 特徴

- 🌐 多言語対応（日本語/英語）
- 📱 レスポンシブデザイン
<!-- - 🎨 スムーズなアニメーションを備えたモダンな UI
- 🚀 Vite による高速ローディング-->
- 🎯 TypeScript による型安全性
- 🎨 Tailwind CSS によるスタイリング

### ウェブサイト

こちらでご覧いただけます：https://mmats75.github.io/portfolio/

### 技術スタック

- React
- TypeScript
- Tailwind CSS
- React Router
- Vite

### 始め方

#### 必要条件

- Node.js (v14 以上)
- npm または yarn

#### インストール

1. リポジトリをクローン

```bash
git clone https://github.com/mmats75/portfolio.git
cd portfolio
```

2. 依存関係のインストール

```bash
npm install
```

3. 開発サーバーの起動

```bash
npm run dev
```

サイトは `http://localhost:5173/portfolio/` に立ち上がります。

### Github Pages へのデプロイ

1. `vite.config.ts` の更新

```typescript
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
```

2. デプロイ

```bash
npm run deploy
```

### ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

### Acknowledgments

- Design inspired by [https://rohitk06.vercel.app/](https://rohitk06.vercel.app/)
