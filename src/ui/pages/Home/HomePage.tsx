import {AddIcon} from "@chakra-ui/icons";
import {Box, Button, Stack, useDisclosure} from "@chakra-ui/react";
import React from "react";

import ProductCard from "../../../components/ProductCard";
import AddProduct from "../AddProduct/AddProduct";
import {ProductType} from "../../../models/ProductType";

type HomePageProps = {
	onSavingProduct: (product: ProductType) => void
	products: ProductType[]
}

export default function HomePage(props: HomePageProps): JSX.Element {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { onSavingProduct, products } = props
	// TODO - Look for a better implementation
	function RenderProduct(): any {
		let element: Array<JSX.Element> = [];
		for (const product of products) {
			element.push(<ProductCard key={product.productName} product={product} />);
		}
		return element;
	}

	function openAddProductModal() {
		onOpen()
	}

	return (
		<>
			<Stack direction="row" spacing={4}>
				<Button
					onClick={openAddProductModal}
					leftIcon={<AddIcon />}
					colorScheme="teal"
					variant="solid"
				>
					Add Product
				</Button>
			</Stack>
			<AddProduct open={isOpen} close={onClose} onSave={onSavingProduct} />
			<Box
				width="100%"
				display={"grid"}
				padding="20px 0"
				gridTemplateColumns="auto"
			>
				<RenderProduct />
			</Box>
		</>
	);
}
