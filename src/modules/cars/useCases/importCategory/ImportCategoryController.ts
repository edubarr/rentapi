import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  handler(req: Request, res: Response): Response {
    const { file } = req;
    if (file) {
      this.importCategoryUseCase.execute(file);
      return res.send();
    }
    return res.send();
  }
}

export { ImportCategoryController };
