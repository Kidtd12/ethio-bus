export interface BusCompany {
  id: string;
  name: string;
  shortDescription: string;
  shortDescriptionAm?: string;
  shortDescriptionOm?: string;
  fullDescription: string;
  fullDescriptionAm?: string;
  fullDescriptionOm?: string;
  phone: string;
  locations: string[];
  features: string[];
  image: string;
  routes: string[];
  fares: BusFare[];
}

export interface BusFare {
  from: string;
  to: string;
  price: number;
  seatsAvailable: number;
}
