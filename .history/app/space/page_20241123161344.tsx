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
          <div className="text-8xl items-center font-light tracking-wider">Brewery</div>
          <div className="absolute top-[50px] text-xl">Brewery</div>
          <div className="absolute bottom-[50px] text-xl">Ulsan</div>
        </div>
      </div>

      {/* Brewery Content */}
      <div className="py-44 flex justify-center text-black">
        <div className="flex flex-col mr-24 max-w-2xl">
          <p className="text-lg leading-relaxed">
            Located in Ulju-gun, Ulsan,<br/>
            our brewery creates new sensibilities by bringing together<br/>
            traditional foundations, natural fermentation culture,<br/>
            and diverse people.<br/><br/>
            
            The brewery is not just a building on the land,<br/>
            but resonates with the land, the passing of time,<br/>
            and the people who walk upon it,<br/>
            expanding its breath across the earth.<br/><br/>

            The maturing alcohol and the brewery that houses it<br/>
            breathe together, becoming a beacon illuminating the land.
          </p>
          <div className="mt-10 text-sm opacity-70">
            <div className="font-medium">1577 ㅡ 6746</div>
            <div>50 Hyangsandong-gil, Sangbuk-myeon, Ulju-gun, Ulsan</div>
            <div className="text-sm mt-2">Conveniently located near Ulsan KTX Station and West Ulsan IC.</div>
          </div>
        </div>
        <div className="flex flex-col">
          <Image 
            src="/images/space2_br_img1.jpg" 
            width={600} 
            height={450} 
            alt="Boksoondoga Brewery"
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Restaurant Section */}
      <div className="flex justify-center text-white h-[600px]">
        <div className="relative w-full h-full flex justify-center items-center">
          <span className="absolute text-xl text-white pt-10 z-[2] mx-auto top-0">Restaurant</span>
          <span className="absolute text-7xl my-auto mx-auto z-[2]"><strong>F`1963</strong></span>
          <span className="absolute text-xl text-white bottom-0 pb-10 z-[2] mx-auto"><strong>Busan</strong></span>
          <div
            className="absolute h-full w-full z-1 bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: "url('/images/space1_bg_img2.jpg')" }}
          ></div>
        </div>
      </div>

      {/* Store Section */}
      <div className="flex justify-center text-white h-[600px]">
        <div className="relative w-full h-full flex justify-center items-center">
          <span className="absolute text-xl text-white pt-10 z-[2] mx-auto top-0">Shops</span>
          <span className="absolute text-7xl my-auto mx-auto z-[2]"><strong>Stores</strong></span>
          <span className="absolute text-xl text-white bottom-0 pb-10 z-[2] mx-auto"><strong>Domestic</strong></span>
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
              Boksoondoga combines '都' (city) and '家' (home),<br/>
              expressing our wish to connect urban and rural areas.<br/>
              We operate stores at major train stations across regions.<br/>
              Our station stores are welcoming faces of Boksoondoga,<br/>
              greeting people traveling between cities and countryside.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <Image 
            src="/images/space4_shop_img1.jpg" 
            width={600} 
            height={450} 
            alt="Boksoondoga Store"
            className="object-cover rounded-lg shadow-lg"
          />
          <div className="mt-10 text-sm opacity-70">
            <div className="grid grid-cols-2 gap-2">
              <span>Business Days</span>
              <span>Open All Year</span>
              <span>Hours</span>
              <span>Varies by Location</span>
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