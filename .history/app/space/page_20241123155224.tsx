import Image from "next/image";

export default function Page() {
  return (
    <div className={'flex flex-col bg-[#ffffe4]'}>
      <div
        className={`bg-[url('/images/space1_bg_img1.jpg')] bg-no-repeat bg-center bg-cover w-screen py-64 relative`}>
        <div className={'flex flex-col gap-5 items-center'}>
          <div className={'text-8xl items-center'}>
            양조장
          </div>
          <div className={'absolute top-[50px] text-xl'}>Brewery</div>
          <div className={'absolute bottom-[50px] text-xl'}>Ulsan</div>
        </div>
      </div>
      <div className={'py-44 flex justify-center text-black'}>
        <div className={'flex flex-col mr-24'}>
          <p>
            울산 울주군에 위치한 양조장은,<br/>
            전통의 바탕 위에 자연 속 발효문화와<br/>
            다양한 사람들이 모여 새로운 정서를 만들어갑니다.<br/>
            도가는 단지 땅 위에 세워진 건물이 아닌<br/>
            대지와 대지를 지나는 시간,<br/>
            그리고 대지를 딛고 살아가는 사람들과 교감하고<br/>
            소통하며 도가의 숨결을 땅 위로 확장해 나갑니다.<br/><br/>

            익어가는 술과 그 술을 품은 도가가 함께 숨쉬며<br/>
            대지를 밝히는 등대가 되고 있습니다.<br/><br/></p>
          <span className={'mt-auto'}>
				1577 ㅡ 6746<br/>
				울산광역시 울주군 상북면 향산동길 50<br/>
				울산 KTX역과 서울산IC에 가까이 자리하고 있습니다.
			</span>
        </div>
        <div>
          <Image src={'/images/space2_br_img1.jpg'} width={600} height={450.23} alt={
            ''
          }/>
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
            부산에 위치한 복순도가 F1963은 {`'발효문화'`}를 <br/>
            레스토랑으로 처음 실현한 곳입니다. <br/>
            2017년 6월, 고려제강 F1963 재생 건축의 일환으로<br/>
            폐공장 안에 발효를 주제로 한 요리를 선보이는 레스토랑을<br/>
            오픈하여 운영 하였습니다. <br/><br/>

            도가에서 만든 장을 이용하여 <br/>
            정성과 맛을 담아낸 음식들을<br/>
            복순도가 전통주와 곁들여 즐길 수 있습니다. <br/><br/>

            마치 쇼룸을 연상시키듯, 곳곳에 술을 빚는데<br/>
            사용되는 소품들과 인테리어를 보는 재미도 가득합니다.<br/><br/>


            * 현재 영업 종료 되었습니다.<br/></p>

        </div>
        <div>
          <Image src={'/images/space2_res_img1.jpg'} width={600} height={450.23} alt={
            ''
          }/>
          <p className={'pt-auto mt-10'}>
            부산광역시 수영구 구락로123번길 20 F1963<br/><a href="//instagram.com/boksoonf1963" target="_blank">instagram
            @boksoonf1963</a>
          </p>
        </div>
      </div>
      <div className={'flex justify-center text-white h-[600px] '}>
        <div className={'relative w-full h-full flex justify-center items-center'}>
          <span className={'absolute text-xl text-white pt-10 z-[2] mx-auto top-0'}>Shops</span>
          <span className={'absolute text-7xl my-auto mx-auto z-[2]'}><strong>매장</strong></span>
          <span className={'absolute text-xl text-white bottom-0 pb-10 z-[2] mx-auto'}><strong>Domestic</strong></span>
          <div
            className="bg-[url('/images/space1_bg_img4.jpg')] absolute h-full w-full z-1 bg-no-repeat bg-center bg-cover"></div>
        </div>
      </div>
      <div className={'py-44 flex justify-center text-black'}>
        <div className={'flex flex-col mr-24'}>
          <p className="left_p">
            복순도가의 도는 都(도시 도), 가는 家(집 가) 자를 따서,<br/>
            도시와 농촌 지역이 늘 함께 하였으면 하는 마음을 담았습니다.<br/>
            지역을 연결하는 주요 기차역에 매장을 운영하고 있습니다.<br/>
            기차역 매장은 도시에서 농촌으로, <br/>
            농촌에서 도시로 이동하는 사람들을<br/>
            배웅하고 마중하는 복순도가의 반가운 얼굴입니다.<br/><br/>

            서울역점 <br/><span>서울시 용산구 청파로 378, 1층 | 070-8015-3976 <br/><br/></span>
            오송역점 <br/><span>청주시 흥덕구 오송읍 오송가락로 123, 3층 | 070-8015-3179 <br/><br/></span>
            대전역점 <br/><span>대전광역시 동구 중앙로 215, 3층 | 070-8015-9287 <br/><br/></span>
            동대구역점 <br/><span>대구광역시 동구 동대구로 550 | 070-8015-9247 <br/><br/></span>
            울산역점 <br/><span>울산시 울주군 삼남읍 울산역로 177, 1층 | 070-8015-9048 <br/><br/></span>
            부산역점 1층 <br/><span>부산시 동구 중앙대로 206, 1층 | 070-8015-9064 <br/><br/></span>
            부산역점 2층 <br/><span>부산시 동구 중앙대로 206, 2층 맞이방 | 070-8015-9116 <br/><br/></span>
            해운대점 <br/><span>부산시 해운대구 구남로 5, 101호 | 070-4102-5990 <br/></span>


          </p>

        </div>
        <div>
          <Image src={'/images/space4_shop_img1.jpg'} width={600} height={450.23} alt={
            ''
          }/>
          <p className={'pt-auto mt-10'}>
            영업일&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;연중무휴<br/>
            영업시간&nbsp;&nbsp;&nbsp; 매장별 상이<br/><a href="//instagram.com/boksoondoga" target="_blank">instagram
            @boksoondoga</a>
          </p>
        </div>
      </div>
    </div>
  );
}