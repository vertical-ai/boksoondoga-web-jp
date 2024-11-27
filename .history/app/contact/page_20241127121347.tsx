export default function Page() {
  return (
    <div className={'flex flex-col bg-[#ffffe4] pt-48 text-black px-36'}>
      <div className={'flex flex-col gap-7 text-center border-b border-black pb-7 mb-7'}>
        <h2 className={'text-6xl font-bold'}>Contact Us</h2>
        <p className={'text-2xl'}>
          We'd love to hear from you.<br/>
          Get in touch with us for any inquiries.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-20">
        <div className="space-y-12">
          <div>
            <h3 className={'text-2xl font-bold mb-4'}>General Inquiries</h3>
            <p className={'text-lg text-[#666]'}>
              For general questions about our products, services, or company:
              <br/><br/>
              Email: boksoondoga@gmail.com<br/>
              Tel: +82-52-264-3539
            </p>
          </div>

          <div>
            <h3 className={'text-2xl font-bold mb-4'}>Business Hours</h3>
            <p className={'text-lg text-[#666]'}>
              Monday - Friday: 9:00 AM - 6:00 PM KST<br/>
              Saturday - Sunday: Closed
            </p>
          </div>

          <div>
            <h3 className={'text-2xl font-bold mb-4'}>Location</h3>
            <p className={'text-lg text-[#666]'}>
              48, Hyangsandong-gil,<br/>
              Sangbuk-myeon, Ulju-gun,<br/>
              Ulsan, Korea
            </p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-lg shadow-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="What is this regarding?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 