import React, { useState } from 'react';
import { Shield, Sparkles, Car, Phone, MessageCircle, ArrowRight, CheckCircle, ChevronDown, MapPin, ExternalLink, Info, Star } from 'lucide-react';
import { SERVICES, REVIEWS, BEFORE_AFTER_GALLERY, FAQ_DATA } from './constants';

export default function App() {
  const [lang, setLang] = useState<'kk' | 'ru'>('kk'); // Язык по умолчанию — казахский

  // Переводы интерфейса
  const ui = {
    kk: {
      services: "Негізгі қызметтер",
      from: "бастап",
      wa: "Жазылу",
      faq: "Жиі қойылатын сұрақтар",
      beforeAfter: "Дейін / Кейін",
      reviews: "Клиенттердің пікірлері"
    },
    ru: {
      services: "Основные услуги",
      from: "от",
      wa: "Записаться",
      faq: "Часто задаваемые вопросы",
      beforeAfter: "До / После",
      reviews: "Отзывы клиентов"
    }
  };

  const t = ui[lang];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Навигация с переключателем */}
      <nav className="fixed w-full z-50 bg-black/90 py-4 border-b border-white/5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Car className="text-blue-600" size={28} />
            <span className="text-xl font-bold tracking-tighter">LUXE DETAIL</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
              <button onClick={() => setLang('kk')} className={`px-3 py-1 rounded-full text-xs transition-all ${lang === 'kk' ? 'bg-blue-600' : ''}`}>KZ</button>
              <button onClick={() => setLang('ru')} className={`px-3 py-1 rounded-full text-xs transition-all ${lang === 'ru' ? 'bg-blue-600' : ''}`}>RU</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Блок услуг (БЕЗ ФОТО) */}
      <section className="py-24 pt-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">{t.services}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-gray-900/50 p-8 rounded-3xl border border-white/5 hover:border-blue-500/50 transition-all">
                <div className="mb-6 bg-blue-600/10 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Sparkles className="text-blue-500" size={24} />
                </div>
                {/* Динамическое поле заголовка */}
                <h3 className="text-xl font-bold mb-4">{s[`title_${lang}`]}</h3>
                <ul className="space-y-3 mb-8">
                  {/* Динамическое поле преимуществ */}
                  {s[`benefits_${lang}`].map((b, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                      <CheckCircle className="text-blue-600 shrink-0" size={16} /> {b}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-bold text-blue-500">{t.from} {s.price}</span>
                  <a href={`https://wa.me/77000000000?text=${s[`title_${lang}`]}`} className="p-3 bg-blue-600/20 hover:bg-blue-600 rounded-full transition-all">
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Пример блока До/После с переводами */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">{t.beforeAfter}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BEFORE_AFTER_GALLERY.map(item => (
              <div key={item.id} className="relative rounded-2xl overflow-hidden h-64">
                <img src={item.image} className="w-full h-full object-cover opacity-60" />
                <div className="absolute bottom-4 left-4 font-bold">{item[`title_${lang}`]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ с переводами */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.faq}</h2>
          <div className="space-y-4">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-2xl">
                <div className="font-bold text-lg mb-2">{item[`q_${lang}`]}</div>
                <div className="text-gray-400">{item[`a_${lang}`]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
