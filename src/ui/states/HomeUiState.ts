import { ProductType } from "../../models/ProductType";

export default class HomeUiState implements ProductType {
    productName: string;
    image: string;
    description: string;
    price: number;

    constructor(
        productName: string = "",
        image: string = "",
        description: string = "",
        price: number = 0
    ) {
        this.productName = productName;
        this.image = image;
        this.description = description;
        this.price = price;
    }
}