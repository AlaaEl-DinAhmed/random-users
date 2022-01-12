interface IUser {
  picture: IPicture;
  name: IName;
  location: ILocation;
  dob: IYears<number, Date>;
  registered: IYears<number, Date>;
  login: ILogin;
  id: IID;
  email: string;
  gender: string;
  phone: string;
  cell: string;
  nat: string;
}

interface IMappedUser {
  name: IName;
  picture: string;
  location: string;
  dob: number;
  registered: string;
  email: string;
  gender: string;
  phone: string;
}

interface IID {
  name: string;
  value: string;
}
interface IPicture {
  large: string;
  small: string;
  thumbnail: string;
}
interface IName {
  first: string;
  last: string;
  title: string;
}

interface ILocation {
  country: string;
  city: string;
  postcode: number;
  state: string;
  street: {
    name: string;
    number: number;
  };
  timezone: {
    description: string;
    offset: string;
  };
  coordinates: {
    latitude: string;
    longitude: string;
  };
}

interface IYears<T, U> {
  age: T;
  date: U;
}

interface ILogin {
  md5: string;
  password: string;
  salt: string;
  mdsha15: string;
  sha256: string;
  username: string;
  uuid: string;
}

export { IUser, IMappedUser };
