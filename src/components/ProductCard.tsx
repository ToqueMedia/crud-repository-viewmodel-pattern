import {
    Text,
    Image,
    Heading,
    Divider,
    ButtonGroup,
    Card,
    CardBody,
    Stack,
    CardFooter,
    Button
} from "@chakra-ui/react";
import { ProductType } from "../models/ProductType";

type ProductCardProps = {
    product: ProductType
}

export default function ProductCard(props: ProductCardProps): JSX.Element {

    const {
        product
    } = props;

    return (
        <Card maxW='240px' maxH='auto' marginBottom='5'>
            <CardBody>
                <Image
                    src={product.image}
                    alt={product.productName}
                    borderRadius='lg'
                    height='48'
                    width='54'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='sm'>{product.productName}</Heading>
                    <Text>{product.description}</Text>
                    <Text color='blue.600' fontSize='xl'>{product.price}</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Ver
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}