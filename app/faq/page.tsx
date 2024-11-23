export default function Page() {
  return (
    <div className={'flex flex-col bg-[#ffffe4] pt-48 text-black px-36'}>
      <div className={'flex flex-col gap-7 text-center border-b border-black pb-7 mb-7'}>
        <h2 className={'text-6xl font-bold'}>Support</h2>
        <p className={'text-2xl'}>
          복순도가 福順都家 일반 문의 및 <b>명절 기업 선물세트(대량)구매 문의</b><br/>
          전화 문의 주시면 빠른 상담이 가능합니다.
        </p>
      </div>
      <div className="mt-36">
        <div className={'mb-20'}>
          <h3 className={'pb-4 border-b border-black mb-4'}>배송일정 안내</h3>
          <div className={'grid grid-cols-3 gap-4 text-[#666]'}>
            <p>
              당일 발송을 원하실 경우, 오후 2시 이전까지 주문 및 입금해 주시기 바랍니다. 금요일 오후 2시 이후 ~ 주말(토/일) 주문 건에 대해서는 차주 월요일에 순차적으로 발송됩니다.
            </p>
            <p>
              특정 배송일자를 희망하시는 경우, 배송 메세지를 통해 요청 바랍니다.
            </p>
            <p>
              주문량이 많을 시, 주문 순서에 따라 순차적으로 출고를 진행하고 있습니다. 재고 현황에 따라 부득이 배송지연 될 수 있으니, 배송 일정에 관한 변동사항을 충분히 숙지하신 후 주문
              바랍니다.
            </p>
          </div>
        </div>
        <div className={'mb-20'}>
          <h3 className={'pb-4 border-b border-black mb-4'}>반품 / 교환 / 환불 안내</h3>
          <div className={'grid grid-cols-3 gap-4 text-[#666]'}>
            <p>
              교환 및 반품이 가능한 기간은 상품 수령 후 7일 이내이며, 교환 또는 반품 요청은 고객센터 (070.4144.4620) 또는 문의 메뉴로 메세지 보내주시면 신속 · 정확하게 처리하도록
              하겠습니다.
            </p>
            <p>
              고객님의 단순 변심에 의한 교환 및 환불은 고객님께서 배송비 (무료배송 제품의 경우, 왕복 배송비)를 부담해 주셔야 하며, 상품 개봉 또는 훼손/변질된 경우 교환 및 환불이 불가하오니,
              이 점 유의하여 주시기 바랍니다.
            </p>
            <p>
              유통기한이 1개월 이내인 상품은, 내용물이 변질될 우려가 있으니 구매 전 신중히 주문하여 주시기 바랍니다.
            </p>
          </div>
        </div>
        <div className={'grid grid-cols-3'}>
          <div className={'mb-20'}>
            <h3 className={'pb-4 border-b border-black mb-4'}>포장 및 보관 안내</h3>
            <div className={'text-[#666] pr-4'}>
              <p>
                복순도가의 제품은 신선도 유지를 위해 아이스팩과 함께 스티로폼 박스에 담겨 안전하게 배송됩니다. 제품 수령 직후 반드시 냉장보관 해주세요!</p>

            </div>
          </div>
          <div className={'mb-20'}>
            <h3 className={'pb-4 border-b border-black mb-4'}>복순도가 손막걸리 개봉 방법</h3>
            <div className={'text-[#666] pr-4'}>
              <p>
                ① 거꾸로 뒤집어 가라앉은 침전물이 섞이도록 충분히 흔든 후, 다시 냉동고에 10분간 넣어둡니다. ②수평에 가깝게 기울여 뚜껑 여닫기를 3 ㅡ 5회 가량 천천히 반복합니다. ③탄산이
                빠져나간 것을 확인한 다음, 맛있게 드시면 됩니다.</p>

            </div>
          </div>
          <div className={'mb-20'}>
            <h3 className={'pb-4 border-b border-black mb-4'}>맛있게 즐기는 방법</h3>
            <div className={'text-[#666]'}>
              <p>
                복순도가 전통주는 보관 방법과 기간에 따라 다양한 풍미를 즐기실 수 있습니다. 특히 복순도가 손막걸리는 온도가 낮을수록 청량감이 더해지며, 더욱 더 맛있게 즐기실 수 있습니다.
                <br/>
                온도가 높을수록 청량감이 줄어들면서 산미가 더해지기 때문에, 기호에 따라 온도를 조절하여 즐겨보세요!</p>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}