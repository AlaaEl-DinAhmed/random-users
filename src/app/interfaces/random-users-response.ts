import { IUser } from '@interfaces/user';

interface IRandomUsersResponse {
  info: IInfo;
  results: IUser[];
}

interface IInfo {
  page: number;
  results: number;
  seed: string;
  version: string;
}

export { IRandomUsersResponse };
