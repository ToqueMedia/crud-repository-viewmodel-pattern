import React from "react"
import styled from "styled-components"
import Header from "../components/Header"

export default function MainLayout(props: React.PropsWithChildren): JSX.Element {

    return (
        <Root>
            <Header />
            <BodyRoot>
                {props.children}
            </BodyRoot>
        </Root>
    )
}

const Root = styled.section `
    display: flex;
    flex-direction: column;
    height: 100vh;
    flex: 1
`;

const BodyRoot = styled.div `
    background-color: #F5F5F5;
    height: 100%;
    padding: 20px;
`;