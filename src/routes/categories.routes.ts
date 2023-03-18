import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handler(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoriesController.handler(req, res);
});

export { categoriesRoutes };
