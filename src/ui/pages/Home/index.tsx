import useHomeViewModel from "../../hooks/useHomeRepository";
import HomePage from "./HomePage";
import React from "react";
import {ProductType} from "../../../models/ProductType";

export default function Home(): JSX.Element {
    const {saveProduct, products, getProducts} = useHomeViewModel();

    React.useEffect(() => {
        getProducts();
    }, []);

    function saveProducts(product: ProductType) {
        saveProduct(product);
        products.push(product);
    }

    return (
        <HomePage
            onSavingProduct={saveProducts}
            products={products}
        />
    )
}
