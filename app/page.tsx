import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={'h-full flex flex-col touch-none transition duration-700 transform'}>
      <div className="h-[1270px] relative">
        <div className="flex h-[1270px]">
          <video id="mainMP4" autoPlay muted loop
                 className={'absolute top-50 left-50 w-auto h-full object-cover min-w-[100vw] min-h-[100vh] z-[-1000] overflow-hidden'}>
            <source
              src="https://player.vimeo.com/progressive_redirect/playback/512784548/rendition/1080p/file.mp4?loc=external&amp;log_user=0&amp;signature=2afb339fb8023d7672e3b86ee5be908f9303eec4cc1176a817b6e1eecacb89aa"
              type="video/mp4"/>
          </video>
          <div
            className="absolute text-center z-4 left-1/2 top-1/2 text-white -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4">
            <strong className={'text-4xl'}>人々の心を歌わせる<br/>美しい白いもの、<br/>福順都家マッコリ</strong>
            <p className={'block text-3xl text-black font-bold opacity-50'}>純粋。<br/>非加熱。<br/>手作り。</p>
            <Link href="/"
                  className={'inline-block mx-auto text-base text-white font-bold border border-white py-4 px-5 font-roboto-condensed'}>詳しく見る</Link>
          </div>
        </div>
      </div>
      <div className="h-[1270px] relative">
        <div className="flex h-[1270px]">
          <Image
            src={'/images/main2.jpg'}
            width={1920}
            height={1080}
            className={'absolute top-50 left-50 w-auto h-full object-cover min-w-[100vw] min-h-[100vh] z-[-1000] overflow-hidden'}
            alt={'福順都家定期購入サービス'}/>
          <div
            className="absolute text-center z-4 left-1/2 top-1/2 text-white -translate-x-1/2 flex flex-col gap-4">
            <strong className={'text-4xl'}>醸造所から玄関先まで<br/>福順都家の伝統酒を<br/>ワンクリックで簡単注文！</strong>
            <p className={'block text-3xl text-black font-bold opacity-50'}>手作りの新鮮さ。<br/>定期購入サービス。<br/><br/>（定期購入サービス準備中）</p>
            <Link href="/"
                  className={'inline-block mx-auto text-base text-white font-bold border border-white py-4 px-5 font-roboto-condensed'}>定期購入</Link>
          </div>
        </div>
      </div>
      <div className="h-[1270px] relative">
        <div className="flex h-[1270px]">
          <Image
            src={'/images/main3.jpg'}
            width={1920}
            height={1080}
            className={'absolute top-50 left-50 w-auto h-full object-cover min-w-[100vw] min-h-[100vh] z-[-1000] overflow-hidden'}
            alt={'福順都家の伝統的な醸造方法'}/>
          <div
            className="absolute text-center z-4 left-1/2 top-1/2 text-white -translate-x-1/2 flex flex-col gap-4">
            <strong className={'text-4xl'}>生きた酵母のための饗宴。<br/>福順都家の伝統酒は<br/>伝統的な醸造方法を守ります。</strong>
            <p className={'block text-3xl text-black font-bold opacity-50'}>
              時間と真心を込めた匠の技。<br/>多様な商品をオンラインで<br/>簡単にご注文いただけます！
            </p>
            <Link href="/"
                  className={'inline-block mx-auto text-base text-white font-bold border border-white py-4 px-5 font-roboto-condensed'}>ショップ</Link>
          </div>
        </div>
      </div>
      <div className="h-[1270px] relative">
        <div className="flex h-[1270px]">
          <Image
            src={'/images/main4.jpg'}
            width={1920}
            height={1080}
            className={'absolute top-50 left-50 w-auto h-full object-cover min-w-[100vw] min-h-[100vh] z-[-1000] overflow-hidden'}
            alt={'福順都家の醸造体験'}/>
          <div
            className="absolute text-center z-4 left-1/2 top-1/2 text-white -translate-x-1/2 flex flex-col gap-4">
            <strong className={'text-4xl'}>手作りマッコリの<br/>味わいを体験する。</strong>
            <p className={'block text-3xl text-black font-bold opacity-50'}>醸造と試飲の特別な体験！<br/>福順都家の<br/>発酵マッコリ教室に参加する</p>
            <Link href="/"
                  className={'inline-block mx-auto text-base text-white font-bold border border-white py-4 px-5 font-roboto-condensed'}>体験する</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
