import {Box} from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";

export default function MainLayout(
    props: React.PropsWithChildren
): JSX.Element {
    return (
        <Box display="flex" flexDirection="column" height="100vh" flex="1">
            <Header/>
            <Box height="100%" padding="20px" background="#f5f5f5">
                {props.children}
            </Box>
        </Box>
    );
}
