
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
  ExternalLink
} from 'lucide-react';
import { SERVICES, REVIEWS, BEFORE_AFTER_GALLERY, FAQ_DATA } from './constants';

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/77000000000" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="whatsapp-float bg-green-500 p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all flex items-center justify-center text-white"
    aria-label="Записаться в WhatsApp"
  >
    <MessageCircle size={32} />
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Car className="text-blue-600" size={32} />
          <span className="text-2xl font-bold tracking-tighter metallic-text">LUXE DETAIL</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest">
          <a href="#services" className="hover:text-blue-500 transition-colors">Услуги</a>
          <a href="#about" className="hover:text-blue-500 transition-colors">О нас</a>
          <a href="#location" className="hover:text-blue-500 transition-colors">Локации</a>
          <a href="#pricing" className="hover:text-blue-500 transition-colors">Цены</a>
          <a href="tel:+77000000000" className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-full transition-all">
            <Phone size={16} /> +7 700 000 00 00
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 absolute w-full p-6 flex flex-col gap-6 text-center border-b border-white/10">
          <a href="#services" onClick={() => setIsOpen(false)}>Услуги</a>
          <a href="#about" onClick={() => setIsOpen(false)}>О нас</a>
          <a href="#location" onClick={() => setIsOpen(false)}>Локации</a>
          <a href="#pricing" onClick={() => setIsOpen(false)}>Цены</a>
          <a href="https://wa.me/77000000000" className="bg-green-600 py-3 rounded-lg flex items-center justify-center gap-2">
            <MessageCircle size={20} /> WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
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
          Премиальный авто-детейлинг в Казахстане
        </span>
        <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight">
          Блеск как из салона <br />
          <span className="text-blue-600">за 1 день</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
          Химчистка, полировка, керамика, защитные покрытия. Гарантия результата по договору. Верните вашему авто заводской вид.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <a href="https://wa.me/77000000000" className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-900/20">
            Записаться в WhatsApp <ArrowRight size={20} />
          </a>
          <a href="#pricing" className="bg-white/5 hover:bg-white/10 border border-white/20 px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center">
            Посмотреть цены
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center md:justify-start gap-8 opacity-80">
          <div className="flex items-center gap-2">
            <Star className="text-yellow-500" fill="currentColor" size={20} />
            <span className="font-semibold text-sm">350+ довольных клиентов</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="text-blue-500" size={20} />
            <span className="font-semibold text-sm">5 лет опыта работы</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={20} />
            <span className="font-semibold text-sm">Работаем по всему городу</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhyUs = () => {
  const points = [
    { title: "Профессионалы", desc: "Команда с опытом более 5 лет в премиальном сегменте.", icon: <Shield className="text-blue-500" /> },
    { title: "Материалы", desc: "Используем только Koch Chemie, 3M и Gyeon.", icon: <Sparkles className="text-blue-500" /> },
    { title: "Сдача в срок", desc: "Ваш автомобиль будет готов точно в оговоренное время.", icon: <Clock className="text-blue-500" /> },
    { title: "Диагностика", desc: "Детальный осмотр перед началом любых работ.", icon: <Info className="text-blue-500" /> },
  ];

  return (
    <section id="about" className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">Почему выбирают нас?</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {points.map((p, i) => (
            <div key={i} className="card-glass p-10 rounded-3xl hover:border-blue-500/50 transition-all duration-300">
              <div className="mb-6 bg-blue-600/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => (
  <section id="services" className="py-24 bg-[#0d0d0d]">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Основные услуги</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((s) => (
          <div key={s.id} className="group bg-gray-900 rounded-3xl overflow-hidden flex flex-col shadow-2xl">
            <div className="h-56 overflow-hidden">
              <img 
                src={s.image} 
                alt={s.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
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
                <span className="text-xl font-extrabold text-blue-500">от {s.price}</span>
                <a href={`https://wa.me/77000000000?text=Записаться на ${s.title}`} className="p-3 bg-blue-600/10 hover:bg-blue-600 rounded-full transition-all">
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const LocationBlock = () => (
  <section id="location" className="py-24 bg-[#0A0A0A]">
    <div className="container mx-auto px-4">
      <div className="card-glass p-8 md:p-16 rounded-[3rem] overflow-hidden relative flex flex-col md:flex-row items-center gap-12">
        <div className="flex-grow space-y-8 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">Наши студии</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-blue-500 font-bold flex items-center gap-2 justify-center md:justify-start">
                <MapPin size={20}/> Алматы
              </h4>
              <p className="text-gray-400">пр. Аль-Фараби, 77/7. Работаем ежедневно с 09:00 до 21:00.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-blue-500 font-bold flex items-center gap-2 justify-center md:justify-start">
                <MapPin size={20}/> Астана
              </h4>
              <p className="text-gray-400">ул. Достык, 12/1. Современный бокс в центре столицы.</p>
            </div>
          </div>
          <div className="bg-blue-600/10 p-6 rounded-2xl border border-blue-500/20 max-w-lg">
            <p className="text-sm font-semibold flex items-center gap-2">
              <Info className="text-blue-500" size={18} /> Заберем ваше авто сами (опционально)
            </p>
          </div>
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-all"
          >
            Открыть в Картах <ExternalLink size={18}/>
          </a>
        </div>
        <div className="w-full md:w-1/3 aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900 flex items-center justify-center p-10 text-center">
          <div className="space-y-4">
             <MapPin className="text-blue-600 mx-auto" size={64}/>
             <p className="text-gray-400 text-sm italic">Интерактивная карта заменена на безопасную ссылку для обеспечения максимальной производительности</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => {
  const tiers = [
    { name: "Стандарт", price: "15 000", features: ["Химчистка салона", "Мойка кузова", "Защита пластика", "Чернение шин"], popular: false },
    { name: "Премиум", price: "35 000", features: ["Легкая полировка", "Глубокая очистка", "Антидождь", "Защитный воск"], popular: true },
    { name: "Elite", price: "75 000", features: ["Абразивная полировка", "Керамика 9H (2 слоя)", "Жидкое стекло", "Защита дисков"], popular: false },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#0d0d0d]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center uppercase tracking-tighter">Прайс-лист</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <div key={i} className={`relative p-10 rounded-[2.5rem] flex flex-col transition-all duration-500 hover:translate-y-[-10px] ${tier.popular ? 'bg-blue-600 scale-105 shadow-2xl shadow-blue-600/20' : 'bg-gray-900 border border-white/5'}`}>
              {tier.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-blue-600 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">Популярный выбор</span>}
              <h3 className="text-2xl font-bold mb-4 uppercase">{tier.name}</h3>
              <div className="text-5xl font-black mb-10 flex items-baseline gap-2">
                <span className="text-lg font-normal opacity-60">от</span> {tier.price} <span className="text-lg font-normal">₸</span>
              </div>
              <ul className="space-y-5 mb-12 flex-grow">
                {tier.features.map((f, idx) => (
                  <li key={idx} className={`flex items-center gap-3 text-sm font-medium ${tier.popular ? 'text-white/90' : 'text-gray-400'}`}>
                    <CheckCircle size={18} className={tier.popular ? 'text-white' : 'text-blue-500'} /> {f}
                  </li>
                ))}
              </ul>
              <a 
                href={`https://wa.me/77000000000?text=Пакет ${tier.name}`}
                className={`py-5 rounded-2xl font-bold text-center transition-all ${tier.popular ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              >
                Выбрать пакет
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => (
  <section id="reviews" className="py-24 bg-[#0A0A0A]">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center uppercase tracking-tighter">Отзывы клиентов</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {REVIEWS.map((review) => (
          <div key={review.id} className="card-glass p-8 rounded-3xl flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/30" />
              <div>
                <h4 className="font-bold">{review.name}</h4>
                <p className="text-xs text-gray-500">{review.city}</p>
              </div>
            </div>
            <div className="flex gap-1">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={14} className="text-yellow-500" fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-400 text-sm italic leading-relaxed">"{review.text}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center uppercase tracking-tighter">Часто задаваемые вопросы</h2>
        <div className="space-y-4">
          {FAQ_DATA.map((item, i) => (
            <div key={i} className="card-glass rounded-2xl overflow-hidden border-white/5">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{item.q}</span>
                <ChevronDown className={`text-blue-500 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 bg-[#050505] border-t border-white/5 relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
        <div className="md:col-span-2 space-y-8">
          <div className="flex items-center gap-3">
            <Car className="text-blue-600" size={40} />
            <span className="text-3xl font-black tracking-tighter uppercase metallic-text">Luxe Detail</span>
          </div>
          <p className="text-gray-500 max-w-sm text-lg leading-relaxed">
            Мы создаем безупречный вид вашего автомобиля, используя передовые технологии и материалы мирового уровня.
          </p>
          <div className="flex gap-4">
             {['IG', 'FB', 'TK'].map(social => (
               <div key={social} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer font-bold text-xs">
                 {social}
               </div>
             ))}
          </div>
        </div>
        <div>
          <h4 className="text-blue-500 font-bold mb-8 uppercase tracking-widest text-sm">Связь</h4>
          <ul className="space-y-6 text-gray-500">
            <li className="flex items-center gap-3 text-white font-bold text-xl hover:text-blue-500 transition-colors">
              <Phone size={24}/> +7 700 000 00 00
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle size={20}/> 24/7 Поддержка в WhatsApp
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-blue-500 font-bold mb-8 uppercase tracking-widest text-sm">Ресурсы</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li className="hover:text-white transition-colors cursor-pointer">Галерея работ</li>
            <li className="hover:text-white transition-colors cursor-pointer">Корпоративным клиентам</li>
            <li className="hover:text-white transition-colors cursor-pointer">Условия использования</li>
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[10px] uppercase tracking-[0.2em]">
        <span>&copy; {new Date().getFullYear()} Luxe Detail KZ. Все права защищены.</span>
        <div className="flex gap-8">
          <span className="cursor-pointer hover:text-white">Конфиденциальность</span>
          <span className="cursor-pointer hover:text-white">Оферта</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center uppercase tracking-tighter">До / После</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BEFORE_AFTER_GALLERY.map((item) => (
              <div key={item.id} className="group relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-8 left-8">
                  <span className="bg-blue-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase mb-2 block w-fit tracking-widest">Premium</span>
                  <h4 className="text-xl font-bold text-white uppercase tracking-tighter">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />
      <LocationBlock />
      <Pricing />

      <section className="py-24 bg-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none">Верните блеск вашему авто <br className="hidden md:block"/> прямо сейчас</h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">Оставьте заявку и получите защитное покрытие стекол "Антидождь" в подарок при первом посещении.</p>
          <a href="https://wa.me/77000000000" className="inline-flex bg-white text-blue-700 px-16 py-6 rounded-full font-black text-2xl transition-all shadow-2xl hover:scale-105 active:scale-95 items-center gap-4">
            ЗАПИСАТЬСЯ <MessageCircle size={28}/>
          </a>
        </div>
      </section>

      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
