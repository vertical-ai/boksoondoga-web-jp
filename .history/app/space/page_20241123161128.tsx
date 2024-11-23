import Image from "next/image";

export default function Page() {
  return (
    <div className={'flex flex-col bg-[#ffffe4]'}>
      <div
        className={`bg-[url('/images/space1_bg_img1.jpg')] bg-no-repeat bg-center bg-cover w-screen py-64 relative`}>
        <div className={'flex flex-col gap-5 items-center'}>
          <div className={'text-8xl items-center'}>
            Brewery
          </div>
          {/* <div className={'absolute top-[50px] text-xl'}>Brewery</div> */}
          <div className={'absolute bottom-[50px] text-xl'}>Ulsan</div>
        </div>
      </div>
      <div className={'py-44 flex justify-center text-black'}>
        <div className={'flex flex-col mr-24'}>
          <p>
            Located in Ulju-gun, Ulsan,<br/>
            our brewery creates new sensibilities by bringing together<br/>
            traditional foundations, natural fermentation culture,<br/>
            and diverse people.<br/>
            The brewery is not just a building on the land,<br/>
            but resonates with the land, the passing of time,<br/>
            and the people who walk upon it,<br/>
            expanding its breath across the earth.<br/><br/>

            The maturing alcohol and the brewery that houses it<br/>
            breathe together, becoming a beacon illuminating the land.<br/><br/></p>
          <span className={'mt-auto'}>
            1577 ㅡ 6746<br/>
            50 Hyangsandong-gil, Sangbuk-myeon, Ulju-gun, Ulsan<br/>
            Conveniently located near Ulsan KTX Station and West Ulsan IC.
          </span>
        </div>
        <div>
          <Image src={'/images/space2_br_img1.jpg'} width={600} height={450.23} alt={'Boksoondoga Brewery'}/>
        </div>
      </div>
      <div className={'flex justify-center text-white h-[600px] '}>
        <div className={'relative w-full h-full flex justify-center items-center'}>
          <span className={'absolute text-xl text-white pt-10 z-[2] mx-auto top-0'}>Restaurant</span>
          <span className={'absolute text-7xl my-auto mx-auto z-[2]'}><strong>F`1963</strong></span>
          <span className={'absolute text-xl text-white bottom-0 pb-10 z-[2] mx-auto'}><strong>Busan</strong></span>
          <div
            className="bg-[url('/images/space1_bg_img2.jpg')] absolute h-full w-full z-1 bg-no-repeat bg-center bg-cover"></div>
        </div>
      </div>
      <div className={'py-44 flex justify-center text-black'}>
        <div className={'flex flex-col mr-24'}>
          <p className="left_p">
            Boksoondoga F1963 in Busan was the first restaurant to<br/>
            realize the concept of 'fermentation culture'.<br/>
            In June 2017, as part of the Kiswire F1963 regeneration project,<br/>
            we opened a restaurant in a former factory,<br/>
            showcasing fermentation-based cuisine.<br/><br/>

            You can enjoy dishes made with our house-fermented sauces,<br/>
            paired with Boksoondoga traditional alcohol.<br/><br/>

            Like a showroom, the space is filled with interesting<br/>
            brewing equipment and interior design elements.<br/><br/>

            * Currently closed for business.<br/></p>
        </div>
        <div>
          <Image src={'/images/space2_res_img1.jpg'} width={600} height={450.23} alt={'F1963 Restaurant Interior'}/>
          <p className={'pt-auto mt-10'}>
            F1963, 20 Gurak-ro 123beon-gil, Suyeong-gu, Busan<br/>
            <a href="//instagram.com/boksoonf1963" target="_blank">instagram @boksoonf1963</a>
          </p>
        </div>
      </div>
      <div className={'flex justify-center text-white h-[600px] '}>
        <div className={'relative w-full h-full flex justify-center items-center'}>
          <span className={'absolute text-xl text-white pt-10 z-[2] mx-auto top-0'}>Shops</span>
          <span className={'absolute text-7xl my-auto mx-auto z-[2]'}><strong>Stores</strong></span>
          <span className={'absolute text-xl text-white bottom-0 pb-10 z-[2] mx-auto'}><strong>Domestic</strong></span>
          <div
            className="bg-[url('/images/space1_bg_img4.jpg')] absolute h-full w-full z-1 bg-no-repeat bg-center bg-cover"></div>
        </div>
      </div>
      <div className={'py-44 flex justify-center text-black'}>
        <div className={'flex flex-col mr-24'}>
          <p className="left_p">
            Boksoondoga combines '都' (city) and '家' (home),<br/>
            expressing our wish to connect urban and rural areas.<br/>
            We operate stores at major train stations across regions.<br/>
            Our station stores are welcoming faces of Boksoondoga,<br/>
            greeting people traveling between cities and countryside.<br/><br/>

            Seoul Station<br/><span>1F, 378 Cheongpa-ro, Yongsan-gu, Seoul | 070-8015-3976<br/><br/></span>
            Osong Station<br/><span>3F, 123 Osonggarak-ro, Osong-eup, Heungdeok-gu, Cheongju | 070-8015-3179<br/><br/></span>
            Daejeon Station<br/><span>3F, 215 Jungang-ro, Dong-gu, Daejeon | 070-8015-9287<br/><br/></span>
            Dongdaegu Station<br/><span>550 Dongdaegu-ro, Dong-gu, Daegu | 070-8015-9247<br/><br/></span>
            Ulsan Station<br/><span>1F, 177 Ulsanyeok-ro, Samnam-eup, Ulju-gun, Ulsan | 070-8015-9048<br/><br/></span>
            Busan Station 1F<br/><span>1F, 206 Jungang-daero, Dong-gu, Busan | 070-8015-9064<br/><br/></span>
            Busan Station 2F<br/><span>2F Welcome Area, 206 Jungang-daero, Dong-gu, Busan | 070-8015-9116<br/><br/></span>
            Haeundae<br/><span>101, 5 Gunam-ro, Haeundae-gu, Busan | 070-4102-5990<br/></span>
          </p>
        </div>
        <div>
          <Image src={'/images/space4_shop_img1.jpg'} width={600} height={450.23} alt={'Boksoondoga Store'}/>
          <p className={'pt-auto mt-10'}>
            Business Days&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open All Year<br/>
            Hours&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Varies by Location<br/>
            <a href="//instagram.com/boksoondoga" target="_blank">instagram @boksoondoga</a>
          </p>
        </div>
      </div>
    </div>
  );
}