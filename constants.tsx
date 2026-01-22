import { ServicePackage, Review, BeforeAfter, FAQItem } from './types';

export const SERVICES: ServicePackage[] = [
  {
    id: 'express',
    title_kk: 'Express Detailing',
    title_ru: 'Express Detailing',
    price: '15 000',
    benefits_kk: ['Шанақты жылдам жуу', 'Кілемшелерді тазалау', 'Пластикті қорғау'],
    benefits_ru: ['Быстрая мойка кузова', 'Чистка ковриков', 'Защита пластика'],
  },
  {
    id: 'polish',
    title_kk: 'Жылтырату + Қорғау',
    title_ru: 'Полировка + Защита',
    price: '35 000',
    benefits_kk: ['Ұсақ сызаттарды кетіру', 'Терең жылтыр', 'Қорғаныс балауызы'],
    benefits_ru: ['Устранение мелких царапин', 'Глубокий блеск', 'Защитный воск'],
  },
  {
    id: 'cleaning',
    title_kk: 'Толық химиялық тазалау',
    title_ru: 'Полная химчистка',
    price: '25 000',
    benefits_kk: ['Салонды бөлшектеу', 'Дақтарды кетіру', 'Ауаны озондау'],
    benefits_ru: ['Разбор салона', 'Удаление пятен', 'Озонация воздуха'],
  },
  {
    id: 'ceramic',
    title_kk: 'Керамика 9H',
    title_ru: 'Керамика 9H',
    price: '80 000',
    benefits_kk: ['2 жылға кепілдік', 'Гидрофобты әсер', 'Реагенттерден қорғау'],
    benefits_ru: ['Защита на 2 года', 'Гидрофобный эффект', 'Защита от реагентов'],
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Арман',
    city_kk: 'Алматы',
    city_ru: 'Алматы',
    text_kk: 'Көлік жаңа сияқты жарқырайды! Жігіттер нағыз кәсіби мамандар.',
    text_ru: 'Машина сияет как новая! Ребята профессионалы своего дела.',
    rating: 5,
    image: 'https://picsum.photos/seed/p1/200/200',
  },
  {
    id: 2,
    name: 'Дәурен',
    city_kk: 'Астана',
    city_ru: 'Астана',
    text_kk: 'Химиялық тазалау өте сапалы жасалды. Рахмет!',
    text_ru: 'Химчистка выполнена очень качественно. Спасибо!',
    rating: 5,
    image: 'https://picsum.photos/seed/p2/200/200',
  }
];

export const BEFORE_AFTER_GALLERY: BeforeAfter[] = [
  { id: 1, title_kk: 'Сызаттарды кетіру', title_ru: 'Удаление царапин', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title_kk: 'Салонды тазалау', title_ru: 'Чистка салона', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800' },
];

export const FAQ_DATA: FAQItem[] = [
  { 
    q_kk: 'Жұмыс қанша уақыт алады?', 
    q_ru: 'Сколько времени занимает работа?', 
    a_kk: 'Орташа есеппен 4 сағаттан 24 сағатқа дейін.', 
    a_ru: 'В среднем от 4 до 24 часов.' 
  }
];
