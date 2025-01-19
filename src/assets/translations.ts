export const translations = {
  en: {
    greeting: "Hi, I'm Masahiko",
    role: 'Designer, Frontend Developer',
    tagline: 'I design and code beautifully simple things, and I love what I do.',
    aboutTitle: 'Get to know me!',
    aboutText:
      "I'm a Frontend Web Developer building the front-end of Websites and Web Applications. Check out some of my work in the Projects section. I'm open to opportunities where I can contribute, learn and grow. Feel free to connect with me on LinkedIn or email me.",
    skillsTitle: 'Professional Skillset',
    projectsTitle: 'Recent Projects',
    projectRepository: 'Repository',
    projectDemoSite: 'Live Demo',
    contactTitle: 'Contact Me',
    contactForm: {
      name: 'Your Name',
      email: 'Email Address',
      message: 'Message',
      submit: 'Submit',
      sending: 'Sending...',
      successMessage: 'Message sent successfully!',
      errorMessage: 'Failed to send message. Please try again.',
      errors: {
        nameMin: 'Name must be at least 2 characters',
        nameMax: 'Name must be less than 50 characters',
        nameInvalid: 'Name contains invalid characters',
        emailInvalid: 'Please enter a valid email address',
        messageMin: 'Message must be at least 10 characters',
        messageMax: 'Message must be less than 1000 characters',
      },
    },
    footer: {
      developedBy: 'Developed by Masahiko Matsumoto',
      copyright: 'Masahiko Matsumoto. All rights reserved.',
    },
  },
  ja: {
    greeting: 'こんにちは、マサヒコです',
    role: 'デザイナー、フロントエンド開発者',
    tagline: 'シンプルで美しいものをデザイン・コーディングすることが大好きです。',
    aboutTitle: '自己紹介',
    aboutText:
      '私はウェブサイトやウェブアプリケーションのフロントエンド開発を専門としています。プロジェクトセクションで私の作品をご覧ください。新しい機会を求めており、貢献、学習、成長できる環境を探しています。LinkedInまたはメールでお気軽にご連絡ください。',
    skillsTitle: '専門スキル',
    projectsTitle: '最近のプロジェクト',
    projectRepository: 'Github',
    projectDemoSite: 'デモサイト',
    contactTitle: 'お問い合わせ',
    contactForm: {
      name: 'お名前',
      email: 'メールアドレス',
      message: 'メッセージ',
      submit: '送信',
      sending: '送信中...',
      successMessage: 'メールを送信しました！',
      errorMessage: 'メッセージの送信に失敗しました。もう一度お試しください。',
      errors: {
        nameMin: '名前は2文字以上で入力してください',
        nameMax: '名前は50文字以下で入力してください',
        nameInvalid: '名前に使用できない文字が含まれています',
        emailInvalid: '有効なメールアドレスを入力してください',
        messageMin: 'メッセージは10文字以上で入力してください',
        messageMax: 'メッセージは1000文字以下で入力してください',
      },
    },
    footer: {
      developedBy: '開発者：松本昌彦',
      copyright: '松本昌彦 All rights reserved.',
    },
  },
} as const
