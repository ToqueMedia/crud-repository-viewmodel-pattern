import { AddIcon } from "@chakra-ui/icons";
import {
    Button,
    Stack,
    useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import ProductCard from "../../components/ProductCard";
import { ProductType } from "../../models/ProductType";
import useHomeViewModel from "../viewmodels/HomeViewModel";
import AddProduct from "./AddProduct";

export default function Home(): JSX.Element {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { saveProduct, products, getProducts } = useHomeViewModel();

    // TODO - Look for a better implementation
    function RenderProduct(): any {
        let element: Array<JSX.Element> = []
        for (const product of products) {
            element.push(<ProductCard key={product.productName} product={product} />)
        }
        return element;
    }

    React.useEffect(() => {
        getProducts();
    }, []);

    function addProduct() {
        onOpen();
    }

    function saveProducts(product: ProductType) {
        saveProduct(product);
        products.push(product);
    }

    return (
        <>
            <Stack direction='row' spacing={4}>
                <Button onClick={addProduct} leftIcon={<AddIcon />} colorScheme='teal' variant='solid'>
                    Add Product
                </Button>
            </Stack>
            <AddProduct
                open={isOpen}
                close={onClose}
                onSave={saveProducts}
            />
            <ProductsContent>
                <RenderProduct />
            </ProductsContent>
        </>
    )
}

const ProductsContent = styled.section`
    width: 100%;
    padding: 20px 0;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
`;