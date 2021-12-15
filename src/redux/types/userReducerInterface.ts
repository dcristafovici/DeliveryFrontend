export interface IUser {
  id: string;
  phone: string;
  email: string;
  address: string;
  address_lat: string;
  address_lon: string;
}

export interface IAddress {
  address: string;
  address_lat: string;
  address_lon: string;
}
