import type {Metadata} from "next";
import "./globals.css";
import Image           from "next/image";
import Link            from "next/link";

export const metadata: Metadata = {
  title: "Boksoondoga",
  description: "Traditional Korean Alcohol with Modern Sensibility",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
            alt="Boksoondoga"/></Link>
      </div>
      <nav className="flex gap-4 items-center mx-auto">
        <Link href={'/about'} className={'text-xl text-black'}>About</Link>
        <Link href={'/space'} className={'text-xl text-black'}>Space</Link>
        <Link href={'/faq'} className={'text-xl text-black'}>FAQ</Link>
        <Link href={'http://barhyo-village.com/'} className={'text-xl text-black'}>365발효醱酵마을</Link>
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
            <span className="font-bold">Boksoondoga Co., Ltd.</span>
            <span> | Representative: Kim Jeong-sik</span>
          </div>
          <address className="not-italic">
            48, Hyangsandong-gil, Sangbuk-myeon, Ulju-gun, Ulsan, Korea
          </address>
          <div>
            <span>Tel: +82-52-264-3539</span>
            <span> | </span>
            <a href="mailto:boksoondoga@gmail.com" className="hover:underline">
              boksoondoga@gmail.com
            </a>
          </div>
          <div className="mt-2">
            © 2020 <strong>Boksoondoga</strong>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
    </body>
    </html>
  );
}
