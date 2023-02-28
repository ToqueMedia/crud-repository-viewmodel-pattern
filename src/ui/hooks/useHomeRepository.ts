import React from "react"
import { ProductType } from "../../models/ProductType"
import useProductDao from "../../database/dao/ProductDao";

export default function useHomeRepository() {

    const [products, setProducts] = React.useState<ProductType[]>([]);
    const { insert, selectAll } = useProductDao()

    function getProducts() {
        const response = selectAll();
        setProducts(response);
    }

    function saveProduct(product: ProductType) {
        insert(product);
    }

    return {
        products,
        getProducts,
        saveProduct,
    }
}
