enum Status {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export interface PropsProductData {
  name: string;
  descriptionShort: string;
  descriptionLarge: string;
  price: string;
  photos: string[];
  status: Status;
  _id: string;
}

export interface PropsOffersData {
  photos: string[];
  status: Status;
  _id: string;
}

export interface PropsFaqData {
  ask: string;
  answer: string;
  status: Status;
  _id: string;
}

export interface PropsAdminData {
  email: string;
  password: string;
  code: string;
  _id: string;
}
