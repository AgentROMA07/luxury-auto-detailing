
import React from 'react';
import { Shield, Sparkles, Clock, CheckCircle, Car, MapPin } from 'lucide-react';
import { ServicePackage, Review, BeforeAfter } from './types';

export const COLORS = {
  black: '#0A0A0A',
  darkGray: '#111827',
  blue: '#1E40AF',
  lightGray: '#E5E7EB',
};

export const SERVICES: ServicePackage[] = [
  {
    id: 'express',
    title: 'Express Detailing',
    price: '15 000 ₸',
    benefits: ['Быстрая мойка кузова', 'Чистка ковриков', 'Защита пластика'],
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'polish',
    title: 'Полировка + Защита',
    price: '35 000 ₸',
    benefits: ['Устранение мелких царапин', 'Глубокий блеск', 'Защитный воск'],
    image: 'https://images.unsplash.com/photo-1552933529-e359b2477262?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'cleaning',
    title: 'Полная химчистка',
    price: '25 000 ₸',
    benefits: ['Разбор салона', 'Удаление пятен', 'Озонация воздуха'],
    image: 'https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'ceramic',
    title: 'Керамика 9H',
    price: '80 000 ₸',
    benefits: ['Защита на 2 года', 'Гидрофобный эффект', 'Защита от реагентов'],
    image: 'https://images.unsplash.com/photo-1507136566006-bb3a7979d709?auto=format&fit=crop&q=80&w=800',
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Арман',
    city: 'Алматы',
    text: 'Машина сияет как новая! Сделали полировку и керамику. Ребята профессионалы.',
    rating: 5,
    image: 'https://picsum.photos/seed/p1/200/200',
  },
  {
    id: 2,
    name: 'Даурен',
    city: 'Астана',
    text: 'Химчистка на высшем уровне. Удалли старые пятна, которые никто не мог вывести.',
    rating: 5,
    image: 'https://picsum.photos/seed/p2/200/200',
  },
  {
    id: 3,
    name: 'Серик',
    city: 'Шымкент',
    text: 'Быстро, качественно, удобно. Забрали машину и привезли обратно. Сервис 10/10.',
    rating: 5,
    image: 'https://picsum.photos/seed/p3/200/200',
  },
  {
    id: 4,
    name: 'Марат',
    city: 'Алматы',
    text: 'Защитное покрытие Антидождь работает идеально. В ливень видимость отличная.',
    rating: 5,
    image: 'https://picsum.photos/seed/p4/200/200',
  }
];

export const BEFORE_AFTER_GALLERY: BeforeAfter[] = [
  { id: 1, title: 'Убрали царапины', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Вернули заводской блеск', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Очистили салон полностью', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Восстановление фар', image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Защита дисков', image: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Глубокая химчистка', image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=800' },
];

export const FAQ_DATA = [
  { q: 'Сколько длится детейлинг?', a: 'В среднем от 2 до 8 часов в зависимости от пакета услуг. Полная керамика может занять до 24 часов.' },
  { q: 'Даете ли гарантию?', a: 'Да, мы работаем по договору. На защитные покрытия (керамика, жидкое стекло) даем официальную гарантию до 3 лет.' },
  { q: 'Какие материалы используете?', a: 'Используем только проверенную химию премиум-класса: Koch Chemie (Германия), 3M (США), Gyeon (Южная Корея).' },
  { q: 'Можно ли приехать без записи?', a: 'Мы работаем по предварительной записи, чтобы уделить вашему авто максимум внимания, но всегда стараемся найти окно для срочных заказов.' },
  { q: 'Делаете ли вы керамику и жидкое стекло?', a: 'Да, это наше профильное направление. Используем составы 9H с высокой степенью защиты.' },
];
