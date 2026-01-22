
export interface ServicePackage {
  id: string;
  title: string;
  price: string;
  benefits: string[];
  image: string;
}

export interface Review {
  id: number;
  name: string;
  city: string;
  text: string;
  rating: number;
  image: string;
}

export interface BeforeAfter {
  id: number;
  title: string;
  image: string;
}
