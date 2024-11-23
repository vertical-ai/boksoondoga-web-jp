import Image from "next/image";

const LocationSection = ({ title, subtitle, location, children, imageSrc, className = '' }) => (
  <div className={`flex justify-center text-white h-[600px] ${className}`}>
    <div className="relative w-full h-full flex justify-center items-center">
      <span className="absolute text-xl text-white pt-10 z-[2] mx-auto top-0">{title}</span>
      <span className="absolute text-7xl my-auto mx-auto z-[2]"><strong>{subtitle}</strong></span>
      <span className="absolute text-xl text-white bottom-0 pb-10 z-[2] mx-auto"><strong>{location}</strong></span>
      <div className={`bg-[url('${imageSrc}')] absolute h-full w-full z-1 bg-no-repeat bg-center bg-cover`}></div>
    </div>
  </div>
);

const ContentSection = ({ children, imageSrc, imageAlt, contactInfo }) => (
  <div className="py-44 flex justify-center text-black">
    <div className="flex flex-col mr-24 max-w-2xl">
      {children}
    </div>
    <div className="flex flex-col">
      <Image 
        src={imageSrc} 
        width={600} 
        height={450} 
        alt={imageAlt}
        className="object-cover rounded-lg shadow-lg"
      />
      {contactInfo && (
        <div className="mt-10 text-sm opacity-70">
          {contactInfo}
        </div>
      )}
    </div>
  </div>
);

export default function Page() {
  return (
    <div className="flex flex-col bg-[#ffffe4]">
      {/* Hero Section - Brewery */}
      <div className="bg-[url('/images/space1_bg_img1.jpg')] bg-no-repeat bg-center bg-cover w-screen py-64 relative">
        <div className="flex flex-col gap-5 items-center">
          <div className="text-8xl items-center font-light tracking-wider">Brewery</div>
          <div className="absolute top-[50px] text-xl">Brewery</div>
          <div className="absolute bottom-[50px] text-xl">Ulsan</div>
        </div>
      </div>

      {/* Brewery Content */}
      <ContentSection 
        imageSrc="/images/space2_br_img1.jpg"
        imageAlt="Boksoondoga Brewery"
        contactInfo={
          <div>
            <div className="font-medium">1577 ㅡ 6746</div>
            <div>50 Hyangsandong-gil, Sangbuk-myeon, Ulju-gun, Ulsan</div>
            <div className="text-sm mt-2">Conveniently located near Ulsan KTX Station and West Ulsan IC.</div>
          </div>
        }
      >
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
      </ContentSection>

      {/* Restaurant Section */}
      <LocationSection 
        title="Restaurant"
        subtitle="F`1963"
        location="Busan"
        imageSrc="/images/space1_bg_img2.jpg"
      />

      {/* Store Locations */}
      <LocationSection 
        title="Shops"
        subtitle="Stores"
        location="Domestic"
        imageSrc="/images/space1_bg_img4.jpg"
      />

      {/* Store Content */}
      <ContentSection 
        imageSrc="/images/space4_shop_img1.jpg"
        imageAlt="Boksoondoga Store"
        contactInfo={
          <div>
            <div className="grid grid-cols-2 gap-2">
              <span>Business Days</span>
              <span>Open All Year</span>
              <span>Hours</span>
              <span>Varies by Location</span>
            </div>
            <a href="//instagram.com/boksoondoga" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-black hover:opacity-70 transition-opacity mt-4 inline-block">
              instagram @boksoondoga
            </a>
          </div>
        }
      >
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Boksoondoga combines '都' (city) and '家' (home),<br/>
            expressing our wish to connect urban and rural areas.<br/>
            We operate stores at major train stations across regions.<br/>
            Our station stores are welcoming faces of Boksoondoga,<br/>
            greeting people traveling between cities and countryside.
          </p>
          
          <div className="space-y-4">
            {[
              ['Seoul Station', '1F, 378 Cheongpa-ro, Yongsan-gu, Seoul', '070-8015-3976'],
              ['Osong Station', '3F, 123 Osonggarak-ro, Osong-eup, Heungdeok-gu, Cheongju', '070-8015-3179'],
              ['Daejeon Station', '3F, 215 Jungang-ro, Dong-gu, Daejeon', '070-8015-9287'],
              // ... other locations
            ].map(([name, address, phone]) => (
              <div key={name} className="border-b border-black/10 pb-3">
                <h3 className="font-bold">{name}</h3>
                <p className="text-sm opacity-70">{address} | {phone}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>
    </div>
  );
}