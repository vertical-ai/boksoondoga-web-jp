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

    <header className="fixed left-0 top-0 w-screen px-[60px] py-[30px] box-border z-[100] flex">
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
            Instagram
          </a>
          <a
            href="http://twitter.com/boksoondoga"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            Twitter
          </a>
        </div>
        <div className="flex flex-col text-center gap-2">
          <div>
            <span className="font-bold">福順都家株式会社</span>
            <span> | 代表取締役：キム・ジョンシク</span>
          </div>
          <address className="not-italic">
            〒689-0000 韓国蔚山広域市蔚州郡上北面香山洞길48
          </address>
          <div>
            <span>Tel: +82-52-264-3539</span>
            <span> | </span>
            <a href="mailto:boksoondoga@gmail.com" className="hover:underline">
              boksoondoga@gmail.com
            </a>
          </div>
          <div className="mt-2">
            © 2020 <strong>福順都家</strong>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
    </body>
    </html>
  );
}
