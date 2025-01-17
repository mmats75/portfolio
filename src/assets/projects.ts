import { Project } from '../types'

export const projects: Project[] = [
  {
    key: 'cartManagement',
    title: {
      en: 'Cart Management System',
      ja: 'カート管理システム',
    },
    description: {
      en: 'This is a Cart Management System made using SvelteKit and Tailwind CSS with the help of FakeStoreAPI. It has two versions: one with sveltekit and another with NextJS.',
      ja: 'ECサイトのカートシステム。SvelteKitとTailwind CSSを使用し、FakeStoreAPIと連携しています。SvelteKitバージョンとNextJSバージョンの2つを提供しています。',
    },
    image: 'cart-management-system.webp',
    url: 'https://your-project-url.com',
    repository: 'https://github.com/yourusername/cart-management',
    preview: 'https://cart-management-demo.com',
    technologies: ['HTML', 'JavaScript', 'CSS', 'Tailwind CSS', 'SvelteKit', 'NextJS'],
  },
  {
    key: 'lifeInsurance',
    title: {
      en: 'LifeInsureEase',
      ja: '生命保険アプリ',
    },
    description: {
      en: 'This is an insurance website made using Astro, ReactJS and Tailwind CSS.',
      ja: '保険管理プラットフォーム。Astro、ReactJS、Tailwind CSSを使用して構築された保険管理Webアプリケーション。',
    },
    image: 'lifeinsureease.webp',
    url: 'https://your-project-url.com',
    repository: 'https://github.com/yourusername/lifeinsureease',
    preview: 'https://lifeinsureease-demo.com',
    technologies: ['HTML', 'JavaScript', 'CSS', 'Tailwind CSS', 'Astro', 'ReactJS'],
  },
  {
    key: 'portfolio',
    title: {
      en: 'Portfolio Website',
      ja: 'ポートフォリオウェブサイト',
    },
    description: {
      en: 'This is my Portfolio website made using Astro, ReactJS and Tailwind CSS.',
      ja: '個人ポートフォリオのショーケース。Astro、ReactJS、Tailwind CSSを使用して制作したポートフォリオサイト。',
    },
    image: 'portfolio.webp',
    url: 'https://your-project-url.com',
    repository: 'https://github.com/yourusername/portfolio',
    preview: 'https://portfolio-demo.com',
    technologies: ['HTML', 'JavaScript', 'CSS', 'Tailwind CSS', 'Astro', 'ReactJS'],
  },
  {
    key: 'docAid',
    title: {
      en: 'DocAid',
      ja: 'ドクターエイド',
    },
    description: {
      en: 'Website template for health related businesses',
      ja: '医療関連ビジネス向けのウェブサイトテンプレート',
    },
    image: 'docAid.webp',
    url: 'https://your-project-url.com',
    repository: 'https://github.com/yourusername/docaid',
    preview: 'https://docaid-demo.com',
    technologies: ['HTML', 'JavaScript', 'CSS', 'Tailwind CSS', 'ReactJS'],
  },
  {
    key: 'devBlogs',
    title: {
      en: 'DevBlogs',
      ja: '開発者ブログ',
    },
    description: {
      en: 'This is a Blogging website made for technology lovers.',
      ja: '技術愛好家のためのブログプラットフォーム',
    },
    image: 'blog.webp',
    url: 'https://your-project-url.com',
    repository: 'https://github.com/yourusername/devblogs',
    preview: 'https://devblogs-demo.com',
    technologies: ['HTML', 'JavaScript', 'CSS', 'Tailwind CSS', 'Astro', 'Markdown'],
  },
  {
    key: 'rasProduction',
    title: {
      en: 'Ras Production',
      ja: 'ラス・プロダクション',
    },
    description: {
      en: 'This is a Portfolio website for videography businesses made using HTML, JavaScript, CSS and Tailwind CSS. It practices modern UI with dark theme',
      ja: '映像制作会社向けのポートフォリオサイト。HTML、JavaScript、CSS、Tailwind CSSを使用し、ダークテーマのモダンUIを採用。',
    },
    image: 'ras.webp',
    url: 'https://your-project-url.com',
    repository: 'https://github.com/yourusername/ras-production',
    preview: 'https://ras-production-demo.com',
    technologies: ['HTML', 'JavaScript', 'CSS', 'Tailwind CSS'],
  },
  {
    key: 'jokeGenerator',
    title: {
      en: 'Joke Generator',
      ja: 'ジョークジェネレーター',
    },
    description: {
      en: 'The website which generates joke with multi topics such as anime, programming, etc.',
      ja: 'アニメやプログラミングなど、様々なトピックのジョークを生成するウェブサイト',
    },
    image: 'joke.webp',
    url: 'https://your-project-url.com',
    repository: 'https://github.com/yourusername/joke-generator',
    preview: 'https://joke-generator-demo.com',
    technologies: ['React', 'JavaScript', 'CSS', 'Tailwind CSS', 'Express', 'NodeJS'],
  },
  {
    key: 'lofiBeats',
    title: {
      en: 'Lofi Beats',
      ja: 'ローファイ・ビーツ',
    },
    description: {
      en: 'Website that was built for discord music bot named lofi beats. Built using plain html javascript and tailwind css.',
      ja: 'Discordミュージックボット「Lofi Beats」のウェブサイト。HTML、JavaScript、Tailwind CSSで構築。',
    },
    image: 'lofi.webp',
    url: 'https://your-project-url.com',
    repository: 'https://github.com/yourusername/lofi-beats',
    preview: 'https://lofi-beats-demo.com',
    technologies: ['HTML', 'JavaScript', 'CSS', 'Tailwind CSS'],
  },
] as const
