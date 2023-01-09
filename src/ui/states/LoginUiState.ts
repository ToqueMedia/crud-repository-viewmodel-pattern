import React from "react"

export type LoginUiStateType = {
    userName: string
    password: string
    errorMessage: string
}

export default function useLoginUiState() {

    const [login, setLogin] = React.useState<LoginUiStateType>({
        userName: "",
        password: "",
        errorMessage: ""
    });

    return {
        login,
        setLogin
    }
}