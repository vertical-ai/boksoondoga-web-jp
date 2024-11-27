export default function Page() {
  return (
    <div className={'flex flex-col bg-[#ffffe4] pt-48 text-black px-36'}>
      <div className={'flex flex-col gap-7 text-center border-b border-black pb-7 mb-7'}>
        <h2 className={'text-6xl font-bold'}>サポート</h2>
        <p className={'text-2xl'}>
          一般的なお問い合わせや<b>法人ギフト（まとめ買い）</b>について<br/>
          お急ぎの方はお電話にてご連絡ください。
        </p>
      </div>
      <div className="mt-36">
        <div className={'mb-20'}>
          <h3 className={'pb-4 border-b border-black mb-4'}>配送スケジュール</h3>
          <div className={'grid grid-cols-3 gap-4 text-[#666]'}>
            <p>
              当日発送をご希望の場合は、14時までにご注文・お支払いを完了してください。金曜日14時以降から週末（土日）のご注文は、翌月曜日より順次発送となります。
            </p>
            <p>
              特定の日時指定配送をご希望の場合は、配送メッセージ欄にてご指定ください。
            </p>
            <p>
              繁忙期は順次発送となり、在庫状況により配送が遅れる場合がございます。スケジュールに余裕を持ってご注文いただきますようお願いいたします。
            </p>
          </div>
        </div>
        <div className={'mb-20'}>
          <h3 className={'pb-4 border-b border-black mb-4'}>返品・交換・返金について</h3>
          <div className={'grid grid-cols-3 gap-4 text-[#666]'}>
            <p>
              商品到着後7日以内で返品・交換が可能です。返品・交換をご希望の場合は、カスタマーサービス（070.4144.4620）またはお問い合わせフォームよりご連絡ください。迅速かつ正確な対応をさせていただきます。
            </p>
            <p>
              お客様都合による返品の場合、送料はお客様負担となります（送料無料商品の場合は往復送料）。商品開封後や商品の破損・劣化が見られる場合は、返品・交換をお受けできません。
            </p>
            <p>
              賞味期限が1ヶ月未満の商品については、内容物の品質が変化する可能性がありますので、ご注文の際はご注意ください。
            </p>
          </div>
        </div>
        <div className={'grid grid-cols-3'}>
          <div className={'mb-20'}>
            <h3 className={'pb-4 border-b border-black mb-4'}>包装・保管方法</h3>
            <div className={'text-[#666] pr-4'}>
              <p>
                福順都家の商品は、鮮度を保つため保冷剤入りの発泡スチロール箱で安全にお届けします。商品到着後は直ちに冷蔵保管してください！
              </p>
            </div>
          </div>
          <div className={'mb-20'}>
            <h3 className={'pb-4 border-b border-black mb-4'}>福順都家マッコリの開け方</h3>
            <div className={'text-[#666] pr-4'}>
              <p>
                1. ボトルを上下逆さにして沈殿物をよく混ぜ、冷凍庫で10分間冷やします。2. ボトルをほぼ水平に傾け、キャップをゆっくりと3～5回開け閉めします。3. 炭酸が抜けたことを確認してからお召し上がりください。
              </p>
            </div>
          </div>
          <div className={'mb-20'}>
            <h3 className={'pb-4 border-b border-black mb-4'}>美味しい飲み方</h3>
            <div className={'text-[#666]'}>
              <p>
                福順都家の伝統酒は、保管方法や期間によって様々な味わいをお楽しみいただけます。特に福順都家のマッコリは、低温で飲むとより爽やかな味わいになります。<br/>
                温度が高くなると爽やかさが減少し酸味が増すため、お好みの温度に調整してお楽しみください！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}