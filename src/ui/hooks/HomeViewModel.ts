import React from "react"
import { ProductType } from "../../models/ProductType"
import ProductRepositoryImpl from "../../repository/ProductRepositoryImpl";

export default function useHomeViewModel() {

    const [products, setProducts] = React.useState<ProductType[]>([]);

    function getProducts() {
        const p = new ProductRepositoryImpl();
        const response = p.getAllProducts();
        setProducts(response);
    }

    function saveProduct(product: ProductType) {
        const p = new ProductRepositoryImpl();
        p.save(product);
    }

    return {
        products,
        getProducts,
        saveProduct,
    }
}