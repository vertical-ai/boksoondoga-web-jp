import VimeoPlayer from "@/app/components/VimeoPlayer";
import Image       from "next/image";
import Link        from "next/link";

export default function Page() {
  return (
    <div className={'flex flex-col bg-[#ffffe4]'}>
      <div
        className={`bg-[url('/images/about1_bg_img1_edit1.jpg')] bg-no-repeat bg-center bg-cover w-screen py-44`}>
        <div className={'flex gap-5 justify-center'}>
          <div className={'text-6xl font-bold text-white'}>
            Crafting with Time and Dedication
          </div>
          <div className={'text-2xl items-center flex text-white'}>
            <b>Creating makgeolli with motherly devotion -<br/>
              this is Boksoondoga's core belief.<br/><br/>

              Following a mother's heart to give only the best,<br/>
              we use only Korean-grown rice<br/>
              following traditional methods,<br/>
              brewing in ancient earthenware jars.<br/><br/>

              The natural carbonation created by living yeast<br/>
              is a gift from the patient fermentation process.</b>
          </div>
        </div>
      </div>
      <div className={'py-44 flex justify-center text-black'}>
        <div className={'flex flex-col mr-24'}>
          <div className={'text-6xl'}>Sustaining<br/>Value,<br/>Fermentation Culture</div>
          <p className={'mt-auto'}>
            Boksoondoga continuously develops<br/>
            not only premium traditional alcohol but also<br/>
            various content under the theme of fermentation culture,<br/>
            including cosmetics, restaurants, and pubs.<br/>
            Fermentation culture transcends spaces to create<br/>
            new value by harmonizing with diverse fields.
          </p>
        </div>
        <div>
          <Image src={'/images/about1_fc_img2.jpg'} width={600} height={450.23} alt={'Fermentation Culture Image'}/>
        </div>
      </div>
      <div className={'flex justify-center text-black h-[600px] '}>
        <div className={'relative w-full h-full'}>
          <Link href="/space" className={'flex justify-center'}>
            <span className={'absolute text-2xl text-white pt-10 z-[2] mx-auto'}>Ulsan</span>
            <span className={'absolute text-7xl text-white bottom-0 pb-10 z-[2] mx-auto'}><strong>Brewery</strong></span>
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
            <span className={'absolute text-7xl text-white bottom-0 pb-10 z-[2] mx-auto'}><strong>Stores</strong></span>
            <div className="bg-[url('/images/about2_bg_img4.jpg')] absolute h-full w-full z-1"></div>
          </Link>
        </div>
      </div>
      <div className={'py-44 flex justify-center text-black'}>
        <div className={'flex flex-col mr-24'}>
          <div className={'text-6xl'}>Change and<br/>Circulation,<br/>Fermentation Architecture</div>
          <div className={'mt-auto'}>
            <Link href="https://barhyoarch.com/"
                  className={'text-black font-bold border border-black py-4 px-5 font-roboto-condensed'}>Link</Link>
          </div>
        </div>
        <div>
          <p className={'pt-auto'}>
            The brewery's eldest son, Min-gyu, reinterpreted the concept of fermentation<br/>
            from fermented drinks to architectural spaces, defining fermentation architecture as<br/>
            the process by which spaces become beneficial to humans.<br/><br/>

            Just as rice and yeast transform into traditional alcohol through fermentation,<br/>
            our brewery incorporates Korean materials like soil, rice paddies, straw, and yeast.<br/>
            These elements transcend their primary architectural purpose to harmonize with<br/>
            sound, video, and installation art, creating new performance objects.<br/><br/>

            We created the brewery's interior and exterior spaces hoping that fermentation architecture<br/>
            would become a grand kiln containing time, matter, and circulation.<br/>
            Going forward, we will continue to capture how the architectural materials<br/>
            and structures within the brewery become increasingly meaningful to people over time.
          </p>
        </div>
      </div>
      <div className={'flex justify-center'}>
        <Image src={'/images/about1_fa_img1.jpg'} alt={'Fermentation Architecture'} width={1060} height={600}/>
      </div>
      <div className={'flex justify-center py-20'}>
        <div className={'w-[1060px]'}>
          <VimeoPlayer videoId={'152109556'}/>
        </div>
      </div>
    </div>
  );
}