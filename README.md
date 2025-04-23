# Hude's Portfolio

Next.jsで構築したシンプルで洗練されたポートフォリオサイトです。

## 概要

このプロジェクトは、Next.jsとTailwind CSSを使用した個人ポートフォリオサイトです。建築からWeb開発への転身を経たHudeの経歴やスキル、作品を紹介しています。

## 機能

- レスポンシブデザイン
- スナップスクロールによるセクション遷移
- お問い合わせフォーム（nodemailerを使用）
- 作品の紹介ページ
- ダークモード対応

## 技術スタック

- **フレームワーク**: Next.js 15
- **言語**: TypeScript, JavaScript
- **スタイリング**: TailwindCSS 4
- **UI**: React 19, HeroIcons, React Icons
- **フォント**: Google Fonts (Shippori Mincho, Montserrat)
- **メール送信**: Nodemailer
- **その他**: shadcn/ui コンポーネント

## 始め方

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/my-portfolio.git

# ディレクトリに移動
cd my-portfolio

# 依存関係のインストール
npm install
# or
yarn
# or
pnpm install
# or
bun install

# 開発サーバーの起動
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くとサイトが表示されます。

## 環境変数の設定

お問い合わせフォームを機能させるには、`.env.local` ファイルをプロジェクトのルートに作成し、以下の環境変数を設定してください：

```
MAIL_USER=あなたのメールアドレス
MAIL_PASS=あなたのアプリパスワード
```

## デプロイ

このプロジェクトは Vercel にデプロイすることをお勧めします。

[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) から簡単にデプロイできます。

詳細は [Next.js デプロイメントドキュメント](https://nextjs.org/docs/app/building-your-application/deploying) を参照してください。

## プロジェクト構造

```
my-portfolio/
├── app/               # Next.js アプリディレクトリ
│   ├── api/           # API ルート
│   │   └── contact/   # お問い合わせフォーム API
│   ├── contact/       # お問い合わせページ
│   ├── profile/       # プロフィールページ
│   ├── works/         # 作品紹介ページ
│   ├── ui/            # UI コンポーネント
│   ├── globals.css    # グローバルスタイル
│   ├── layout.tsx     # レイアウトコンポーネント
│   └── page.tsx       # ホームページ
├── components/        # 再利用可能なコンポーネント
│   └── ui/            # UI コンポーネント
├── lib/               # ユーティリティ関数
├── public/            # 静的アセット
│   └── images/        # 画像
└── ...                # 設定ファイルなど
```

## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。
