import ICategory from "./ICategory";

export default interface IBook {
  _id: string;
  name: string;
  author: string;
  categories: ICategory[];
  description: string;
  thumbnail: string;
  isPublished: boolean;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  __v: 0;
}
