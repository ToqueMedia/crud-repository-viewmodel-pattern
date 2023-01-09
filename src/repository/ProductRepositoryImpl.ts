import ProductDao from "../database/dao/ProductDao";
import { ProductType } from "../models/ProductType";
import { ProductRepository } from "../interfaces/ProductRepository";

export default class ProductRepositoryImpl extends ProductDao implements ProductRepository {
    
    getAllProducts(): ProductType[] {
        return super.selectAll();
    }

    save(product: ProductType): void {
        super.insert(product)
    }
}