export class News {
    constructor(
      public title: string,
      public date: Date,
      public content: string,
      public image: string,
      public id?: number,
    ) {}
  }