export interface IProduct {
  name: string,
  amount: string,
}

export interface Product extends IProduct {
  id: number;
}

export interface IUser {
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export interface User extends IUser {
  id: number;
}

export interface ILogin {
  id?: number
  username: string, 
  password: string,
  vocation: string,
  level: number,

}
