import VimeoPlayer from "@/app/components/VimeoPlayer";
import Image       from "next/image";
import Link        from "next/link";

export default function Page() {
  return (
    <div className={'flex flex-col bg-[#ffffe4]'}>
      <div
        className={`bg-[url('/images/about1_bg_img1_edit1.jpg')] bg-no-repeat bg-center bg-cover w-screen py-44`}>
        <div className={'flex gap-5 justify-center'}>
          <Image src={'/images/about1_title.png'} alt={'시간과 정성을 빚습니다'} width={400} height={400}/>
          <div className={'text-2xl items-center flex '}>
            <b>어머니의 마음으로 정성스러운 막걸리를 만드는 것,<br/>
              바로 복순도가의 신념입니다.<br/><br/>

              항상 좋은 것만 주시려는 어머니의 마음을 따라<br/>
              국산 쌀만을 사용하여 <br/>
              전통 방식 그대로<br/>
              옛 항아리에 담아 빚었습니다.<br/><br/>

              살아 숨 쉬는 누룩이 만들어낸 천연 탄산은<br/>
              긴 발효의 기다림이 주는 선물입니다.</b>
          </div>
        </div>
      </div>
      <div className={'py-44 flex justify-center text-black'}>
        <div className={'flex flex-col mr-24'}>
          <div className={'text-6xl'}>가치의<br/>지속,<br/>발효문화</div>
          <p className={'mt-auto'}>
            복순도가는 프리미엄 전통주뿐만 아니라<br/>
            화장품, 레스토랑, 펍등<br/>
            발효문화醱酵文化 라는 콘텐츠를<br/>
            지속적으로 개발해오고 있습니다.<br/>
            발효문화醱酵文化 는 공간을 넘어 다양한 분야에 어우러져<br/>
            새로운 가치를 만들어가는 것을 의미합니다.
          </p>
        </div>
        <div>
          <Image src={'/images/about1_fc_img2.jpg'} width={600} height={450.23} alt={
            ''
          }/>
        </div>
      </div>
      <div className={'flex justify-center text-black h-[600px] '}>
        <div className={'relative w-full h-full'}>
          <Link href="/space" className={'flex justify-center'}>
            <span className={'absolute text-2xl text-white pt-10 z-[2] mx-auto'}>Ulsan</span>
            <span className={'absolute text-7xl text-white bottom-0 pb-10 z-[2] mx-auto'}><strong>도가</strong></span>
            <div className="bg-[url('/images/about2_bg_img1.jpg')] absolute h-full w-full z-1"></div>
          </Link>
        </div>
        <div className={'relative w-full h-full'}>
          <Link href="/space" className={'flex justify-center'}>
            <span className={'absolute text-2xl text-white pt-10 z-[2] mx-auto'}>Busan</span>
            <span className={'absolute text-7xl text-white bottom-0 pb-10 z-[2] mx-auto'}><strong>F1963</strong></span>
            <div className="bg-[url('/images/about2_bg_img2.jpg')] absolute h-full w-full z-1"></div>
          </Link>
        </div>
        <div className={'relative w-full h-full'}>
          <Link href="/space" className={'flex justify-center'}>
            <span className={'absolute text-2xl text-white pt-10 z-[2] mx-auto'}>Domestic</span>
            <span className={'absolute text-7xl text-white bottom-0 pb-10 z-[2] mx-auto'}><strong>매장</strong></span>
            <div className="bg-[url('/images/about2_bg_img4.jpg')] absolute h-full w-full z-1"></div>
          </Link>
        </div>

      </div>
      <div className={'py-44 flex justify-center text-black'}>
        <div className={'flex flex-col mr-24'}>
          <div className={'text-6xl'}>변화와<br/>순환,<br/>발효건축</div>
          <div className={'mt-auto'}>
            <Link href="https://barhyoarch.com/"
                  className={'text-black font-bold border border-black py-4 px-5 font-roboto-condensed'}>Link</Link>

          </div>

        </div>
        <div>
          <p className={'pt-auto'}>
            도가의 장남 민규씨는 발효醱酵 라는 아이디어를 발효주에서 건축의 공간으로 재해석하여,<br/>
            공간이 인간에게 유용하게 바뀌는 과정을 발효건축醱酵建築 이라 정의하였습니다.<br/><br/>

            쌀과 누룩이 발효과정을 거쳐 새로운 전통주가 되듯, 도가 또한 발효라는 컨셉 아래<br/>
            흙 · 논 · 볏짚 · 누룩 등의 한국적 소재들이 건축 재료로서의 일차적 의미를 넘어<br/>
            다양한 방식으로 사운드 · 영상 · 설치예술 등에 어우러져 새로운 퍼포먼스 오브제로 활용,<br/>
            계절 · 물성의 변화를 담아내는 공간을 만듭니다. <br/><br/>

            발효 건축이 시간과 물질 그리고 순환을 담아내는 하나의 거대한 가마가 되길 원하면서, <br/>
            도가의 내부 공간과 외부 공간을 만들었습니다.<br/>
            앞으로 계속해서 도가 안의 건축적 재료들과 구조물들이<br/>
            시간이 지날수록 사람들에게 쓸모 있게 변해가는 과정을 담아낼 것입니다.
          </p>
        </div>
      </div>
      <div className={'flex justify-center'}>
        <Image src={'/images/about1_fa_img1.jpg'} alt={''} width={1060} height={600}/>
      </div>
      <div className={'flex justify-center py-20'}>
        <div className={'w-[1060px]'}>

          <VimeoPlayer videoId={'152109556'}/>
        </div>

      </div>
    </div>
  );
}