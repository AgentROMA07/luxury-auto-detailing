export interface ServicePackage {
  id: string;
  title_kk: string; // Заголовок на казахском
  title_ru: string; // Заголовок на русском
  price: string;
  benefits_kk: string[]; // Преимущества на казахском
  benefits_ru: string[]; // Преимущества на русском
  image: string; // Оставляем в типе, но в верстке скроем
}

export interface Review {
  id: number;
  name: string;
  city_kk: string;
  city_ru: string;
  text_kk: string;
  text_ru: string;
  rating: number;
  image: string;
}

export interface BeforeAfter {
  id: number;
  title_kk: string;
  title_ru: string;
  image: string;
}

export interface FAQItem {
  q_kk: string;
  q_ru: string;
  a_kk: string;
  a_ru: string;
}
