import { Box, Button, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import useLoginUiState from "../states/LoginUiState";
import useLoginViewModel from "../viewmodels/LoginViewModel";

export default function Login(): JSX.Element {

    const {login, setLogin } = useLoginUiState();
    const { loginAccountUser } = useLoginViewModel();

    const navigate = useNavigate();

    function loginAccount(): void {
        loginAccountUser(login.userName, login.password)
        .then(onSuccessLogin)
        .catch(onErrorLogin)
    }

    function onSuccessLogin() {
        // mandar para a home
        navigate('/home');
    }

    function onErrorLogin(err: string) {
        // Erro ao logar
        setLogin({ ...login, errorMessage: err });
    }

    function onChangeText(e: React.ChangeEvent<HTMLInputElement>) {
        setLogin({
            ...login,
            [`${e?.target.name}`]: e?.target.value
        })
    }

    return (
        <Box>
            <Input onChange={onChangeText} value={login?.userName} name='userName' placeholder="Introduza o nome de utilizador" />
            <Input onChange={onChangeText} value={login?.password} type={'password'} name='password' placeholder="Introduza a password" />
            <Text>{login.errorMessage}</Text>
            <Button colorScheme='blue' mr={3} onClick={loginAccount}>Entrar</Button>
        </Box>
    )
}