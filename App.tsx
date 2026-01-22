import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Sparkles, 
  Clock, 
  CheckCircle, 
  Car, 
  MapPin, 
  Star, 
  Phone, 
  MessageCircle, 
  ArrowRight,
  ChevronDown,
  Info,
  Menu,
  X,
  ExternalLink,
  Globe
} from 'lucide-react';
import { SERVICES, REVIEWS, BEFORE_AFTER_GALLERY, FAQ_DATA } from './constants';

// Словарь переводов
const translations = {
  kk: {
    navServices: "Қызметтер",
    navAbout: "Біз туралы",
    navLocations: "Локациялар",
    navPricing: "Бағалар",
    heroBadge: "Қазақстандағы премиум авто-детейлинг",
    heroTitle: "Салондағыдай жылтыр",
    heroSubTitle: "1 күн ішінде",
    heroDesc: "Химиялық тазалау, жылтырату, керамика, қорғаныс жабындары. Келісімшарт бойынша нәтижеге кепілдік береміз.",
    heroBtnWa: "WhatsApp-қа жазылу",
    heroBtnPrice: "Бағаларды көру",
    servicesTitle: "Негізгі қызметтер",
    priceTitle: "Прайс-лист",
    from: "бастап",
    select: "Пакетті таңдау",
    whyUs: "Неге бізді таңдайды?",
    faqTitle: "Жиі қойылатын сұрақтар",
    call: "Байланыс",
    footerDesc: "Біз озық технологиялар мен әлемдік деңгейдегі материалдарды пайдалана отырып, көлігіңіздің мінсіз көрінісін жасаймыз."
  },
  ru: {
    navServices: "Услуги",
    navAbout: "О нас",
    navLocations: "Локации",
    navPricing: "Цены",
    heroBadge: "Премиальный авто-детейлинг в Казахстане",
    heroTitle: "Блеск как из салона",
    heroSubTitle: "за 1 день",
    heroDesc: "Химчистка, полировка, керамика, защитные покрытия. Гарантия результата по договору. Верните вашему авто заводской вид.",
    heroBtnWa: "Записаться в WhatsApp",
    heroBtnPrice: "Посмотреть цены",
    servicesTitle: "Основные услуги",
    priceTitle: "Прайс-лист",
    from: "от",
    select: "Выбрать пакет",
    whyUs: "Почему выбирают нас?",
    faqTitle: "Часто задаваемые вопросы",
    call: "Связь",
    footerDesc: "Мы создаем безупречный вид вашего автомобиля, используя передовые технологии и материалы мирового уровня."
  }
};

export default function App() {
  const [lang, setLang] = useState<'kk' | 'ru'>('kk');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-blue-600 selection:text-white">
      {/* Navbar с переключателем языка */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-black/90 py-3 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Car className="text-blue-600" size={32} />
            <span className="text-2xl font-bold tracking-tighter metallic-text">LUXE DETAIL</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest">
            <a href="#services" className="hover:text-blue-500 transition-colors">{t.navServices}</a>
            <a href="#about" className="hover:text-blue-500 transition-colors">{t.navAbout}</a>
            <a href="#pricing" className="hover:text-blue-500 transition-colors">{t.navPricing}</a>
            
            {/* Переключатель языка */}
            <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
              <button 
                onClick={() => setLang('kk')}
                className={`px-3 py-1 rounded-full text-xs transition-all ${lang === 'kk' ? 'bg-blue-600 text-white' : 'text-gray-400'}`}
              >KZ</button>
              <button 
                onClick={() => setLang('ru')}
                className={`px-3 py-1 rounded-full text-xs transition-all ${lang === 'ru' ? 'bg-blue-600 text-white' : 'text-gray-400'}`}
              >RU</button>
            </div>

            <a href="tel:+77000000000" className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-full transition-all">
              <Phone size={16} /> +7 700 000 00 00
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=2000" 
            alt="Premium Car" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            <span className="text-blue-500 font-bold tracking-[0.2em] mb-4 block uppercase text-sm md:text-base">
              {t.heroBadge}
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight">
              {t.heroTitle} <br />
              <span className="text-blue-600">{t.heroSubTitle}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              {t.heroDesc}
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <a href="https://wa.me/77000000000" className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-900/20">
                {t.heroBtnWa} <ArrowRight size={20} />
              </a>
              <a href="#pricing" className="bg-white/5 hover:bg-white/10 border border-white/20 px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center">
                {t.heroBtnPrice}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - ФОТО УДАЛЕНЫ */}
      <section id="services" className="py-24 bg-[#0d0d0d]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">{t.servicesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="group bg-gray-900 rounded-3xl p-8 flex flex-col shadow-2xl border border-white/5 hover:border-blue-500/50 transition-all">
                <div className="mb-6 bg-blue-600/10 w-14 h-14 rounded-2xl flex items-center justify-center">
                   <Sparkles className="text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <ul className="space-y-3 mb-8 flex-grow">
                  {s.benefits.map((b, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                      <CheckCircle className="text-blue-600 shrink-0" size={16} />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-extrabold text-blue-500">{t.from} {s.price}</span>
                  <a href={`https://wa.me/77000000000?text=Записаться на ${s.title}`} className="p-3 bg-blue-600/10 hover:bg-blue-600 rounded-full transition-all">
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#0d0d0d]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center uppercase tracking-tighter">{t.priceTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: lang === 'kk' ? "Стандарт" : "Стандарт", price: "15 000", features: lang === 'kk' ? ["Салонды тазалау", "Шанақты жуу", "Пластикті қорғау"] : ["Химчистка салона", "Мойка кузова", "Защита пластика"], popular: false },
              { name: lang === 'kk' ? "Премиум" : "Премиум", price: "35 000", features: lang === 'kk' ? ["Жеңіл жылтырату", "Терең тазалау", "Антижаңбыр"] : ["Легкая полировка", "Глубокая очистка", "Антидождь"], popular: true },
              { name: "Elite", price: "75 000", features: lang === 'kk' ? ["Абразивті жылтырату", "Керамика 9H", "Сұйық шыны"] : ["Абразивная полировка", "Керамика 9H", "Жидкое стекло"], popular: false },
            ].map((tier, i) => (
              <div key={i} className={`relative p-10 rounded-[2.5rem] flex flex-col transition-all ${tier.popular ? 'bg-blue-600 scale-105 shadow-2xl' : 'bg-gray-900 border border-white/5'}`}>
                <h3 className="text-2xl font-bold mb-4 uppercase">{tier.name}</h3>
                <div className="text-5xl font-black mb-10 flex items-baseline gap-2">
                  <span className="text-lg font-normal opacity-60">{t.from}</span> {tier.price} <span className="text-lg font-normal">₸</span>
                </div>
                <ul className="space-y-5 mb-12 flex-grow">
                  {tier.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle size={18} /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#" className={`py-5 rounded-2xl font-bold text-center transition-all ${tier.popular ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}`}>
                  {t.select}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div className="md:col-span-2 space-y-8">
              <div className="flex items-center gap-3">
                <Car className="text-blue-600" size={40} />
                <span className="text-3xl font-black tracking-tighter uppercase metallic-text">Luxe Detail</span>
              </div>
              <p className="text-gray-500 max-w-sm text-lg leading-relaxed">{t.footerDesc}</p>
            </div>
            <div>
              <h4 className="text-blue-500 font-bold mb-8 uppercase tracking-widest text-sm">{t.call}</h4>
              <p className="text-white font-bold text-xl">+7 700 000 00 00</p>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 text-gray-600 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Luxe Detail KZ.
          </div>
        </div>
      </footer>
    </div>
  );
}
