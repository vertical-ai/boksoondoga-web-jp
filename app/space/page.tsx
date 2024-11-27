import Image from "next/image";

export default function Page() {
  return (
    <div className={'flex flex-col bg-[#ffffe4]'}>
      {/* Hero Section */}
      <div 
        className="relative w-screen py-64"
        style={{ backgroundImage: "url('/images/space1_bg_img1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="flex flex-col gap-5 items-center">
          <div className="text-8xl items-center font-light tracking-wider">醸造所</div>
          <div className="absolute top-[50px] text-xl">醸造所</div>
          <div className="absolute bottom-[50px] text-xl">蔚山</div>
        </div>
      </div>

      {/* Brewery Content */}
      <div className="py-44 flex justify-center text-black">
        <div className="flex flex-col mr-24 max-w-2xl">
          <p className="text-lg leading-relaxed">
            蔚山広域市蔚州郡に位置する<br/>
            私たちの醸造所は、伝統の基盤と<br/>
            自然発酵文化、そして多様な人々が集まり、<br/>
            新しい感性を生み出しています。<br/><br/>
            
            醸造所は単なる土地上の建物ではなく、<br/>
            大地や時の流れ、そこを歩む人々と共鳴し、<br/>
            その息吹を大地全体に広げていきます。<br/><br/>

            熟成される酒と、それを育む醸造所は<br/>
            共に呼吸し、大地を照らす灯となります。
          </p>
          <div className="mt-10 text-sm opacity-70">
            <div className="font-medium">1577 ㅡ 6746</div>
            <div>〒689-0000 韓国蔚山広域市蔚州郡上北面香山洞길50</div>
            <div className="text-sm mt-2">蔚山KTX駅・西蔚山ICから便利なアクセス</div>
          </div>
        </div>
        <div className="flex flex-col">
          <Image 
            src="/images/space2_br_img1.jpg" 
            width={600} 
            height={450} 
            alt="福順都家醸造所"
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Restaurant Section */}
      <div className="flex justify-center text-white h-[600px]">
        <div className="relative w-full h-full flex justify-center items-center">
          <span className="absolute text-xl text-white pt-10 z-[2] mx-auto top-0">レストラン</span>
          <span className="absolute text-7xl my-auto mx-auto z-[2]"><strong>F1963</strong></span>
          <span className="absolute text-xl text-white bottom-0 pb-10 z-[2] mx-auto"><strong>釜山</strong></span>
          <div
            className="absolute h-full w-full z-1 bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: "url('/images/space1_bg_img2.jpg')" }}
          ></div>
        </div>
      </div>

      {/* Store Section */}
      <div className="flex justify-center text-white h-[600px]">
        <div className="relative w-full h-full flex justify-center items-center">
          <span className="absolute text-xl text-white pt-10 z-[2] mx-auto top-0">ショップ</span>
          <span className="absolute text-7xl my-auto mx-auto z-[2]"><strong>店舗</strong></span>
          <span className="absolute text-xl text-white bottom-0 pb-10 z-[2] mx-auto"><strong>国内</strong></span>
          <div
            className="absolute h-full w-full z-1 bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: "url('/images/space1_bg_img4.jpg')" }}
          ></div>
        </div>
      </div>

      {/* Store Content */}
      <div className="py-44 flex justify-center text-black">
        <div className="flex flex-col mr-24 max-w-2xl">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              福順都家の「都」（まち）と「家」（いえ）には、<br/>
              都市と地方をつなぎたいという願いが込められています。<br/>
              各地の主要駅に店舗を展開し、<br/>
              都市と地方を行き交う人々を<br/>
              福順都家の温かな表情でお迎えしています。
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <Image 
            src="/images/space4_shop_img1.jpg" 
            width={600} 
            height={450} 
            alt="福順都家店舗"
            className="object-cover rounded-lg shadow-lg"
          />
          <div className="mt-10 text-sm opacity-70">
            <div className="grid grid-cols-2 gap-2">
              <span>営業日</span>
              <span>年中無休</span>
              <span>営業時間</span>
              <span>店舗により異なります</span>
              <a 
                href="//instagram.com/boksoondoga" 
                target="_blank" 
                rel="noopener noreferrer"
                className="col-span-2 text-black hover:opacity-70 transition-opacity mt-4"
              >
                instagram @boksoondoga
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}