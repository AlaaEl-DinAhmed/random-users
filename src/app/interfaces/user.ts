export interface User {
  picture: Picture;
  name: Name;
  gender: string;
  location: Location;
  email: string;
  currentAge: number;
  registered: Registered;
  phone: string;
}

interface Picture {
  large: string;
  small: string;
  thumbnail: string;
}
interface Name {
  first: string;
  last: string;
  title: string;
}

interface Location {
  country: string;
}
interface Registered {
  age: number;
  date: Date;
}
