export default function Page() {
  return (
    <div className={'flex flex-col bg-[#ffffe4] pt-48 text-black px-36'}>
      <div className={'flex flex-col gap-7 text-center border-b border-black pb-7 mb-7'}>
        <h2 className={'text-6xl font-bold'}>Support</h2>
        <p className={'text-2xl'}>
          For general inquiries and <b>bulk orders (corporate gifts)</b><br/>
          Please call us for immediate assistance.
        </p>
      </div>
      <div className="mt-36">
        <div className={'mb-20'}>
          <h3 className={'pb-4 border-b border-black mb-4'}>Shipping Schedule</h3>
          <div className={'grid grid-cols-3 gap-4 text-[#666]'}>
            <p>
              For same-day shipping, please place your order and complete payment by 2 PM. Orders placed after 2 PM on Friday through weekend (Sat/Sun) will be shipped sequentially on the following Monday.
            </p>
            <p>
              If you need delivery on a specific date, please request it through the delivery message option.
            </p>
            <p>
              During high-volume periods, orders are processed sequentially. Shipping may be delayed depending on stock availability. Please consider potential schedule changes before placing your order.
            </p>
          </div>
        </div>
        <div className={'mb-20'}>
          <h3 className={'pb-4 border-b border-black mb-4'}>Returns / Exchanges / Refunds</h3>
          <div className={'grid grid-cols-3 gap-4 text-[#666]'}>
            <p>
              Exchanges and returns are possible within 7 days of receiving the product. For exchange or return requests, please contact our customer service (070.4144.4620) or send a message through our inquiry menu for prompt and accurate processing.
            </p>
            <p>
              For returns due to change of mind, customers must cover shipping costs (round-trip shipping for free delivery items). Exchanges and refunds are not possible if the product has been opened or damaged/deteriorated.
            </p>
            <p>
              For products with a shelf life of less than one month, please order carefully as contents may deteriorate.
            </p>
          </div>
        </div>
        <div className={'grid grid-cols-3'}>
          <div className={'mb-20'}>
            <h3 className={'pb-4 border-b border-black mb-4'}>Packaging and Storage</h3>
            <div className={'text-[#666] pr-4'}>
              <p>
                Boksoondoga products are safely delivered in styrofoam boxes with ice packs to maintain freshness. Please refrigerate immediately upon receipt!
              </p>
            </div>
          </div>
          <div className={'mb-20'}>
            <h3 className={'pb-4 border-b border-black mb-4'}>How to Open Boksoondoga Makgeolli</h3>
            <div className={'text-[#666] pr-4'}>
              <p>
                1. Turn the bottle upside down and shake well to mix the sediment, then place in freezer for 10 minutes. 2. Tilt almost horizontally and slowly open/close the cap 3-5 times. 3. After confirming the carbonation has been released, enjoy your drink.
              </p>
            </div>
          </div>
          <div className={'mb-20'}>
            <h3 className={'pb-4 border-b border-black mb-4'}>How to Best Enjoy</h3>
            <div className={'text-[#666]'}>
              <p>
                Boksoondoga traditional alcohol offers various flavors depending on storage method and duration. Particularly, Boksoondoga Makgeolli becomes more refreshing at lower temperatures.<br/>
                At higher temperatures, the refreshing quality decreases and acidity increases, so adjust the temperature according to your preference!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}