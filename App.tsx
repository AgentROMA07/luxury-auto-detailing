import React, { useState, useEffect } from 'react';
import { 
  Shield, Sparkles, Clock, CheckCircle, Car, MapPin, Star, 
  Phone, MessageCircle, ArrowRight, ChevronDown, Info, Menu, X, ExternalLink, Globe 
} from 'lucide-react';
import { SERVICES, REVIEWS, BEFORE_AFTER_GALLERY, FAQ_DATA } from './constants';

const App = () => {
  const [lang, setLang] = useState<'kk' | 'ru'>('kk');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Словарь интерфейса
  const t = {
    kk: {
      services: "Қызметтер",
      about: "Біз туралы",
      price: "Бағалар",
      contact: "Байланыс",
      heroTitle: "Көлігіңізге мінсіз келбет сыйлаймыз",
      heroSub: "Қазақстандағы премиум авто-детейлинг",
      orderWa: "WhatsApp-пен жазылу",
      mainServices: "Негізгі қызметтер",
      from: "бастап",
      reviews: "Пікірлер",
      faq: "Жиі қойылатын сұрақтар",
      beforeAfter: "Дейін / Кейін"
    },
    ru: {
      services: "Услуги",
      about: "О нас",
      price: "Цены",
      contact: "Контакт",
      heroTitle: "Вернем вашему авто заводской блеск",
      heroSub: "Премиальный авто-детейлинг в Казахстане",
      orderWa: "Записаться через WhatsApp",
      mainServices: "Основные услуги",
      from: "от",
      reviews: "Отзывы",
      faq: "Часто задаваемые вопросы",
      beforeAfter: "До / После"
    }
  }[lang];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-blue-600">
      
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Car className="text-blue-600" size={32} />
            <span className="text-2xl font-black tracking-tighter">LUXE DETAIL</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-bold hover:text-blue-500">{t.services}</a>
            <a href="#pricing" className="text-sm font-bold hover:text-blue-500">{t.price}</a>
            
            {/* Language Switcher */}
            <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
              <button 
                onClick={() => setLang('kk')} 
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'kk' ? 'bg-blue-600 text-white' : 'text-gray-400'}`}
              >KZ</button>
              <button 
                onClick={() => setLang('ru')} 
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'ru' ? 'bg-blue-600 text-white' : 'text-gray-400'}`}
              >RU</button>
            </div>

            <a href="tel:+77000000000" className="bg-blue-600 px-5 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-blue-700">
              <Phone size={16} /> +7 700 000 00 00
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-[#0A0A0A]"></div>
          <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-30" alt="Hero" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-blue-500 font-bold tracking-[0.3em] uppercase mb-4 block">{t.heroSub}</span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-none uppercase">{t.heroTitle}</h1>
          <a href="https://wa.me/77000000000" className="inline-flex items-center gap-3 bg-blue-600 px-10 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform">
            {t.orderWa} <ArrowRight />
          </a>
        </div>
      </section>

      {/* SERVICES SECTION (БЕЗ ФОТО) */}
      <section id="services" className="py-24 bg-[#0d0d0d]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black mb-16 text-center uppercase tracking-tighter">{t.mainServices}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="group bg-gray-900/50 p-8 rounded-[2.5rem] border border-white/5 hover:border-blue-500/50 transition-all flex flex-col">
                <div className="mb-6 bg-blue-600/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Sparkles className="text-blue-500 group-hover:text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{s[`title_${lang}`]}</h3>
                <ul className="space-y-3 mb-8 flex-grow">
                  {s[`benefits_${lang}`].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                      <CheckCircle size={16} className="text-blue-600 shrink-0 mt-0.5" /> {benefit}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="text-2xl font-black text-blue-500">{t.from} {s.price} ₸</div>
                  <a href={`https://wa.me/77000000000?text=${s[`title_${lang}`]}`} className="p-3 bg-white/5 rounded-full hover:bg-blue-600 transition-all">
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER SECTION */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black mb-12 text-center uppercase">{t.beforeAfter}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BEFORE_AFTER_GALLERY.map(item => (
              <div key={item.id} className="relative group h-80 rounded-[2rem] overflow-hidden">
                <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 font-bold text-xl">{item[`title_${lang}`]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-black mb-12 text-center uppercase">{t.faq}</h2>
          <div className="space-y-4">
            {FAQ_DATA.map((item, i) => (
              <details key={i} className="group bg-gray-900/30 rounded-2xl border border-white/5 overflow-hidden">
                <summary className="p-6 cursor-pointer font-bold text-lg list-none flex justify-between items-center hover:bg-white/5">
                  {item[`q_${lang}`]}
                  <ChevronDown className="transition-transform group-open:rotate-180 text-blue-500" />
                </summary>
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {item[`a_${lang}`]}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} LUXE DETAIL KZ. All rights reserved.</p>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a href="https://wa.me/77000000000" className="fixed bottom-8 right-8 bg-green-500 p-5 rounded-full shadow-2xl hover:scale-110 transition-transform z-50">
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default App;
