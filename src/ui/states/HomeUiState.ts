import React from "react";
import { ProductType } from "../../models/ProductType";

export default function useHomeUiState() {
    
    const [product, setProduct] = React.useState<ProductType>({
        price: 0,
        productName: "",
        description: "",
        image: ""
    });

    return {
        product,
        setProduct
    }
}