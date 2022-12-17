import styled from "styled-components"

export default function Header(): JSX.Element {

    return (
        <MainHeader>
            <h3>Products Manager</h3>
        </MainHeader>
    )
}

const MainHeader = styled.header `
    height: 70px;
    padding: 20px;
    align-items: center;
    display: flex;
    justify-content: center;

`