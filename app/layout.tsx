import type {Metadata} from "next";
import "./globals.css";
import Image           from "next/image";
import Link            from "next/link";

export const metadata: Metadata = {
  title: "福順都家",
  description: "伝統と現代が調和する韓国伝統酒",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
    <body
      className={`overflow-y-scroll overflow-x-hidden h-full bg-white`}
    >

    <header className="fixed left-0 top-0 w-screen px-[60px] py-[30px] box-border z-[100]">
      <div className="relative flex items-center">
        <div className="absolute right-0 top-[-20px] flex gap-2">
          <a 
            href="https://boksoondoga.com" 
            className={'text-sm text-black hover:opacity-75'}
            target="_blank"
            rel="noopener noreferrer"
          >
            KR
          </a>
          <span className="text-sm text-black">|</span>
          <a 
            href="https://en.boksoondoga.com" 
            className={'text-sm text-black hover:opacity-75'}
            target="_blank"
            rel="noopener noreferrer"
          >
            EN
          </a>
        </div>
        <div className="header-logo">
          <Link href="/">
            <Image
              src={"/images/logo.jpg"}
              height={40}
              width={238}
              alt="福順都家"/></Link>
        </div>
        <nav className="flex gap-4 items-center mx-auto">
          <Link href={'/about'} className={'text-xl text-black'}>会社紹介</Link>
          <Link href={'/space'} className={'text-xl text-black'}>店舗情報</Link>
          <Link href={'/faq'} className={'text-xl text-black'}>よくある質問</Link>
          <Link href={'/contact'} className={'text-xl text-black'}>お問い合わせ</Link>
        </nav>
      </div>
    </header>
    <main>{children}</main>
    <footer className="flex py-10 text-black opacity-50 text-sm">
      <div className="mx-auto items-center flex flex-col">
        <div className="flex gap-4 mb-6">
          <a
            href="https://www.instagram.com/boksoondoga/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            Instagram（インスタグラム）
          </a>
          <span className="text-sm text-black">|</span>
          <a
            href="http://twitter.com/boksoondoga"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            X（旧Twitter）
          </a>
        </div>
        <div className="flex flex-col text-center gap-3">
          <div className="font-bold text-base">
            福順都家株式会社
          </div>
          <div className="space-y-2">
            <div>
              <span>代表取締役</span>
              <span className="ml-2">キム・ジョンシク</span>
            </div>
            <div>
              <span>所在地</span>
              <address className="not-italic inline-block ml-2">
                〒689-0000 大韓民国蔚山広域市蔚州郡上北面香山洞길48
              </address>
            </div>
            <div>
              <span>電話番号</span>
              <span className="ml-2">082-52-264-3539（平日9:00～18:00）</span>
            </div>
            <div>
              <span>メール</span>
              <a href="mailto:boksoondoga@gmail.com" className="ml-2 hover:underline">
                boksoondoga@gmail.com
              </a>
            </div>
          </div>
          <div className="mt-4 text-xs">
            Copyright © 2020 <strong>福順都家</strong> All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
    </body>
    </html>
  );
}
