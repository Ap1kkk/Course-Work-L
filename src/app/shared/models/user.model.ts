import { Animal } from "./animal.model";

export class User {
    constructor(
      public email: string,
      public password: string,
      public name: string,
      public totalDonated: number,
      public isAdmin: boolean,
      public adoptedAnimals: Animal[],
      public id?: number,
    ) {}
  }