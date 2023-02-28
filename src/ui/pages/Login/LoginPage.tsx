import React from "react";
import {Box, Button, Input, Text} from "@chakra-ui/react";

type LoginPageProps = {
    userName: string
    password: string
    errorMessage: string
    onUserNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onLoginAccount: () => void
}

export default function LoginPage(props: LoginPageProps): JSX.Element {
    const {
        userName,
        password,
        errorMessage,
        onUserNameChange,
        onPasswordChange,
        onLoginAccount
    } = props;

    return (
        <Box>
            <Input
                onChange={onUserNameChange}
                value={userName}
                name='userName'
                placeholder="Introduza o nome de utilizador"
            />
            <Input
                onChange={onPasswordChange}
                value={password}
                type={'password'}
                name='password'
                placeholder="Introduza a password"
            />
            <Text>{errorMessage}</Text>
            <Button colorScheme='blue' mr={3} onClick={onLoginAccount}>Entrar</Button>
        </Box>
    )
}
