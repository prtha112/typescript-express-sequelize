import { Request, Response } from "express";
import { UpdateOptions, DestroyOptions } from "sequelize";
import { Category, CategoryInterface } from "../models/category.model";

export class CategorysController {
  public index(req: Request, res: Response) {
    Category.findAll<Category>({})
      .then((nodes: Array<Category>) => res.json(nodes))
      .catch((err: Error) => res.status(500).json(err));
  }

  public create(req: Request, res: Response) {
    const params: CategoryInterface = req.body;
    Category.create<Category>(params)
      .then((category: Category) => res.status(201).json(category))
      .catch((err: Error) => res.status(500).json(err));
  }
}
