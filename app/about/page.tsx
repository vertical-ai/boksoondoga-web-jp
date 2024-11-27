import VimeoPlayer from "@/app/components/VimeoPlayer";
import Image       from "next/image";
import Link        from "next/link";

export default function Page() {
  return (
    <div className={'flex flex-col bg-[#ffffe4]'}>
      <div
        className={`bg-[url('/images/about1_bg_img1_edit1.jpg')] bg-no-repeat bg-center bg-cover w-screen py-44`}>
        <div className={'flex flex-col items-center justify-center'}>
          <div className={'text-8xl font-bold text-white tracking-wide'}>
            時間と真心を込めた醸造
          </div>
          <div className={'text-2xl items-center flex text-white mt-8'}>
            <b>母の愛情のように真心を込めたマッコリ作り -<br/>
              これが福順都家の信念です。<br/><br/>

              最高のものだけを届けたいという母の心で、<br/>
              韓国産の米だけを使用し、<br/>
              伝統的な製法を守り、<br/>
              古来の陶器で醸造しています。<br/><br/>

              生きた酵母が生み出す自然な炭酸は、<br/>
              じっくりと待つ発酵過程からの贈り物です。</b>
          </div>
        </div>
      </div>
      <div className={'py-44 flex justify-center text-black'}>
        <div className={'flex flex-col mr-24'}>
          <div className={'text-6xl'}>価値の継承と<br/>発展、<br/>発酵文化</div>
          <p className={'mt-auto'}>
            福順都家は、プレミアム伝統酒の開発だけでなく、<br/>
            発酵文化をテーマにした化粧品、レストラン、<br/>
            パブなど、様々なコンテンツを展開しています。<br/>
            発酵文化は空間を超えて、<br/>
            多様な分野との調和により新しい価値を創造します。
          </p>
        </div>
        <div>
          <Image src={'/images/about1_fc_img2.jpg'} width={600} height={450.23} alt={'発酵文化のイメージ'}/>
        </div>
      </div>
      <div className={'flex justify-center text-black h-[600px] '}>
        <div className={'relative w-full h-full'}>
          <Link href="/space" className={'flex justify-center'}>
            <span className={'absolute text-2xl text-white pt-10 z-[2] mx-auto'}>蔚山</span>
            <span className={'absolute text-7xl text-white bottom-0 pb-10 z-[2] mx-auto'}><strong>醸造所</strong></span>
            <div className="bg-[url('/images/about2_bg_img1.jpg')] absolute h-full w-full z-1"></div>
          </Link>
        </div>
        <div className={'relative w-full h-full'}>
          <Link href="/space" className={'flex justify-center'}>
            <span className={'absolute text-2xl text-white pt-10 z-[2] mx-auto'}>釜山</span>
            <span className={'absolute text-7xl text-white bottom-0 pb-10 z-[2] mx-auto'}><strong>F1963</strong></span>
            <div className="bg-[url('/images/about2_bg_img2.jpg')] absolute h-full w-full z-1"></div>
          </Link>
        </div>
        <div className={'relative w-full h-full'}>
          <Link href="/space" className={'flex justify-center'}>
            <span className={'absolute text-2xl text-white pt-10 z-[2] mx-auto'}>国内</span>
            <span className={'absolute text-7xl text-white bottom-0 pb-10 z-[2] mx-auto'}><strong>店舗</strong></span>
            <div className="bg-[url('/images/about2_bg_img4.jpg')] absolute h-full w-full z-1"></div>
          </Link>
        </div>
      </div>
      <div className={'py-44 flex justify-center text-black'}>
        <div className={'flex flex-col mr-24'}>
          <div className={'text-6xl'}>変化と<br/>循環、<br/>発酵建築</div>
          <div className={'mt-auto'}>
            <Link href="https://barhyoarch.com/"
                  className={'text-black font-bold border border-black py-4 px-5 font-roboto-condensed'}>リンク</Link>
          </div>
        </div>
        <div>
          <p className={'pt-auto'}>
            醸造所の長男ミンギュは、発酵の概念を<br/>
            発酵飲料から建築空間へと再解釈し、発酵建築を<br/>
            人々に有益な空間を生み出すプロセスと定義しました。<br/><br/>

            米と酵母が発酵を通じて伝統酒へと変化するように、<br/>
            私たちの醸造所は土、田んぼ、わら、酵母といった韓国の素材を取り入れています。<br/>
            これらの要素は建築としての本来の目的を超えて、<br/>
            音響、映像、インスタレーションアートと調和し、新しいパフォーマンスの対象となります。<br/><br/>

            発酵建築が時間、物質、循環を内包する大きな窯となることを願い、<br/>
            醸造所の内外空間を作り上げました。<br/>
            これからも、建築材料や構造が時間とともに<br/>
            人々にとってより意味のあるものとなっていく過程を追求していきます。
          </p>
        </div>
      </div>
      <div className={'flex justify-center'}>
        <Image src={'/images/about1_fa_img1.jpg'} alt={'発酵建築'} width={1060} height={600}/>
      </div>
      <div className={'flex justify-center py-20'}>
        <div className={'w-[1060px]'}>
          <VimeoPlayer videoId={'152109556'}/>
        </div>
      </div>
    </div>
  );
}