import Image from "next/image";
import Link  from "next/link";

export default function Home() {
  return (
    <div className={'h-full flex flex-col touch-none transition duration-700 transform  '}>
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
            <strong className={'text-4xl'}>사람을 노래하게 하는<br/>아름답고 하얀 빛의 오브제,<br/>복순도가 손막걸리</strong>
            <p className={'block text-3xl text-black font-bold opacity-50'}>Pure.<br/>Non-pasteurized.<br/>Hand-brewed.
            </p>
            <Link href="/"
                  className={'inline-block mx-auto text-base text-white font-bold border border-white py-4 px-5 font-roboto-condensed'}>about</Link>
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
            alt={''}/>
          <div
            className="absolute text-center z-4 left-1/2 top-1/2 text-white -translate-x-1/2 flex flex-col gap-4">
            <strong className={'text-4xl'}>양조장에서 집 앞까지 찾아오는<br/>복순도가 전통주,<br/>단 한 번의 신청으로 간편하게!</strong>
            <p className={'block text-3xl text-black font-bold opacity-50'}>Fresh Hand-brewed.<br/>Ongoing Subscription.<br/><br/>(정기구독
              서비스 준비중 입니다.)</p>
            <Link href="/"
                  className={'inline-block mx-auto text-base text-white font-bold border border-white py-4 px-5 font-roboto-condensed'}>Subscription</Link>
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
            alt={''}/>
          <div
            className="absolute text-center z-4 left-1/2 top-1/2 text-white -translate-x-1/2 flex flex-col gap-4">
            <strong className={'text-4xl'}>A feast for the living, breathing yeast.<br/>Boksoondoga Rice Wine sticks
              to<br/>the traditional
              brewing methods.</strong>
            <p className={'block text-3xl text-black font-bold opacity-50'}>
              기다림과 정성으로 백미白眉를 빚어내는 복순도가.<br/>복순도가의 다양한 제품을<br/>온라인 주문으로 손쉽게 만나보세요!
            </p>
            <Link href="/"
                  className={'inline-block mx-auto text-base text-white font-bold border border-white py-4 px-5 font-roboto-condensed'}>Store</Link>
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
            alt={''}/>
          <div
            className="absolute text-center z-4 left-1/2 top-1/2 text-white -translate-x-1/2 flex flex-col gap-4">
            <strong className={'text-4xl'}>손수 빚어 느끼는<br/>막걸리의 맛.</strong>
            <p className={'block text-3xl text-black font-bold opacity-50'}>직접 빚고 마시는 특별한 경험!<br/>복순도가와 함께하는<br/>발효 막걸리
              체험 클래스</p>
            <Link href="/"
                  className={'inline-block mx-auto text-base text-white font-bold border border-white py-4 px-5 font-roboto-condensed'}>Experience</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
