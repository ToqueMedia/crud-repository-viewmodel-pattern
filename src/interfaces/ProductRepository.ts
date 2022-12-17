import { ProductType } from "../models/ProductType";

export interface ProductRepository {
    save(product: ProductType): void;
    getAllProducts(): ProductType[];
}