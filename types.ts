export interface ServicePackage {
  id: string;
  title_kk: string;
  title_ru: string;
  price: string;
  benefits_kk: string[];
  benefits_ru: string[];
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
