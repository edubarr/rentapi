import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
  }

  findByName(name: string): Category | undefined {
    console.log(name);
    return undefined;
  }

  list(): Category[] | undefined {
    console.log(Category);
    return undefined;
  }
}

export { PostgresCategoriesRepository };
