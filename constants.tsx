import { ServicePackage, Review, BeforeAfter, FAQItem } from './types';

export const SERVICES: ServicePackage[] = [
  {
    id: 'express',
    title_kk: 'Жедел детейлинг',
    title_ru: 'Express Detailing',
    price: '15 000 ₸',
    benefits_kk: ['Шанақты жылдам жуу', 'Кілемшелерді тазалау', 'Пластикті қорғау'],
    benefits_ru: ['Быстрая мойка кузова', 'Чистка ковриков', 'Защита пластика'],
    image: '', 
  },
  {
    id: 'polish',
    title_kk: 'Жылтырату + Қорғау',
    title_ru: 'Полировка + Защита',
    price: '35 000 ₸',
    benefits_kk: ['Ұсақ сызаттарды кетіру', 'Терең жылтыр', 'Қорғаныс балауызы'],
    benefits_ru: ['Устранение мелких царапин', 'Глубокий блеск', 'Защитный воск'],
    image: '',
  },
  {
    id: 'cleaning',
    title_kk: 'Толық химиялық тазалау',
    title_ru: 'Полная химчистка',
    price: '25 000 ₸',
    benefits_kk: ['Салонды бөлшектеу', 'Дақтарды кетіру', 'Ауаны озондау'],
    benefits_ru: ['Разбор салона', 'Удаление пятен', 'Озонация воздуха'],
    image: '',
  },
  {
    id: 'ceramic',
    title_kk: '9H Керамика',
    title_ru: 'Керамика 9H',
    price: '80 000 ₸',
    benefits_kk: ['2 жылға қорғаныс', 'Гидрофобты әсер', 'Реагенттерден қорғау'],
    benefits_ru: ['Защита на 2 года', 'Гидрофобный эффект', 'Защита от реагентов'],
    image: '',
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Арман',
    city_kk: 'Алматы',
    city_ru: 'Алматы',
    text_kk: 'Көлік жаңа сияқты жарқырайды! Жылтырату мен керамика жасады. Жігіттер нағыз кәсіби мамандар.',
    text_ru: 'Машина сияет как новая! Сделали полировку и керамику. Ребята профессионалы.',
    rating: 5,
    image: 'https://picsum.photos/seed/p1/200/200',
  },
  {
    id: 2,
    name: 'Дәурен',
    city_kk: 'Астана',
    city_ru: 'Астана',
    text_kk: 'Химиялық тазалау жоғары деңгейде. Ешкім кетіре алмаған ескі дақтарды кетірді.',
    text_ru: 'Химчистка на высшем уровне. Удалили старые пятна, которые никто не мог вывести.',
    rating: 5,
    image: 'https://picsum.photos/seed/p2/200/200',
  }
];

export const BEFORE_AFTER_GALLERY: BeforeAfter[] = [
  { id: 1, title_kk: 'Сызаттарды кетіру', title_ru: 'Убрали царапины', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title_kk: 'Зауыттық жылтырды қайтару', title_ru: 'Вернули заводской блеск', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800' },
];

export const FAQ_DATA: FAQItem[] = [
  { 
    q_kk: 'Детейлинг қанша уақыт алады?', 
    q_ru: 'Сколько длится детейлинг?', 
    a_kk: 'Қызмет түріне қарай орта есеппен 2-ден 8 сағатқа дейін. Толық керамика 24 сағатқа дейін созылуы мүмкін.',
    a_ru: 'В среднем от 2 до 8 часов в зависимости от пакета услуг. Полная керамика может занять до 24 часов.' 
  }
];
