import React, {useCallback} from "react";
import useLoginUiState from "../../states/LoginUiState";
import useLoginRepository from "../../hooks/useLoginRepository";
import {useNavigate} from "react-router-dom";
import LoginPage from "./LoginPage";

export default function Login(): JSX.Element {
    const {login, setLogin} = useLoginUiState();
    const {loginAccountUser} = useLoginRepository();

    const navigate = useNavigate();

    const handleTextChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }, [login, setLogin])

    function loginAccount(): void {
        loginAccountUser(login.userName, login.password)
            .then(onSuccessLogin)
            .catch(onErrorLogin)
    }

    function onSuccessLogin() {
        navigate('/home');
    }

    function onErrorLogin(err: string) {
        setLogin({...login, errorMessage: err});
    }

    return (
        <LoginPage
            userName={login.userName}
            password={login.password}
            errorMessage={login.errorMessage}
            onUserNameChange={handleTextChangeName}
            onPasswordChange={handleTextChangeName}
            onLoginAccount={loginAccount}
        />
    )
}
