import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Button,
} from '@chakra-ui/react';
import React from 'react';
import { ProductType } from '../../models/ProductType';
import useHomeUiState from '../states/HomeUiState';

type AddProductProps = {
    open: boolean;
    onSave: (product: ProductType) => void;
    close: () => void;
}

export default function AddProduct(props: AddProductProps): JSX.Element {
    const {
        open,
        close, 
        onSave
    } = props;

    const {product, setProduct} = useHomeUiState();

    function onChangeText(event: React.ChangeEvent<HTMLInputElement> | undefined) {
        setProduct({
            ...product,
            [`${event?.target.name}`]: event?.target.value
        })
    }

    function save() {
        onSave(product);
        close();
    }

    return (
        <Modal
            isOpen={open}
            onClose={close}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Product Image</FormLabel>
                        <Input placeholder='Insert product link' name='image' onChange={onChangeText} value={product.image} />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Product</FormLabel>
                        <Input placeholder='Product name' name='productName' onChange={onChangeText} value={product.productName} />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Description</FormLabel>
                        <Input placeholder='Product description' name='description' onChange={onChangeText} value={product.description} />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Price</FormLabel>
                        <Input placeholder='Product price' name='price' onChange={onChangeText} value={product.price} />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={save}>
                        Save
                    </Button>
                    <Button onClick={close}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}