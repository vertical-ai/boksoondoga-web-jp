'use client';

import { useState } from 'react';

export default function Page() {
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus({
          type: 'success',
          message: 'お問い合わせありがとうございます。追ってご連絡させていただきます。'
        });
        form.reset();
      } else {
        setStatus({
          type: 'error',
          message: 'エラーが発生しました。もう一度お試しください。'
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message: '通信エラーが発生しました。時間をおいて再度お試しください。'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={'flex flex-col bg-[#ffffe4] pt-48 text-black px-36 min-h-screen'}>
      <div className={'flex flex-col gap-7 text-center border-b border-black pb-7 mb-7'}>
        <h2 className={'text-6xl font-bold'}>お問い合わせ</h2>
        <p className={'text-2xl'}>
          お客様からのご連絡をお待ちしております。<br/>
          ご質問やご要望などございましたら、お気軽にお問い合わせください。
        </p>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-20 mb-32">
        <div className="space-y-12">
          <div className="bg-white/50 p-8 rounded-lg backdrop-blur-sm">
            <h3 className={'text-2xl font-bold mb-4'}>一般的なお問い合わせ</h3>
            <p className={'text-lg text-[#666]'}>
              商品、サービス、会社に関するお問い合わせ：
              <br/><br/>
              メール：boksoondoga@gmail.com<br/>
              電話：+82-52-264-3539
            </p>
          </div>

          <div className="bg-white/50 p-8 rounded-lg backdrop-blur-sm">
            <h3 className={'text-2xl font-bold mb-4'}>営業時間</h3>
            <p className={'text-lg text-[#666]'}>
              月曜日～金曜日：9:00～18:00（韓国時間）<br/>
              土曜日・日曜日：休業
            </p>
          </div>

          <div className="bg-white/50 p-8 rounded-lg backdrop-blur-sm">
            <h3 className={'text-2xl font-bold mb-4'}>所在地</h3>
            <p className={'text-lg text-[#666]'}>
              〒689-0000<br/>
              韓国蔚山広域市蔚州郡<br/>
              上北面香山洞길48
            </p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input 
              type="hidden" 
              name="access_key" 
              value="43c5bd3b-4421-4da4-bac8-9b41bf5cc216"
            />

            {status.message && (
              <div 
                className={`p-4 rounded-md ${
                  status.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {status.message}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">お名前</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black/5 focus:border-black transition-colors"
                placeholder="お名前をご入力ください"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">メールアドレス</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black/5 focus:border-black transition-colors"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">件名</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black/5 focus:border-black transition-colors"
                placeholder="お問い合わせの件名をご入力ください"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">お問い合わせ内容</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black/5 focus:border-black transition-colors"
                placeholder="お問い合わせ内容をご入力ください"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-black text-white py-3 px-6 rounded-md transition-all
                ${isSubmitting 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-gray-800 hover:shadow-md active:transform active:scale-[0.99]'
                }`}
            >
              {isSubmitting ? '送信中...' : '送信する'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 