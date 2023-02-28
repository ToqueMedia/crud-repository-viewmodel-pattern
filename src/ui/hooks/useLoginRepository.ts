import useLoginDao from "../../database/dao/LoginDao";

export default function useLoginRepository() {

    const { login } = useLoginDao()

    function loginAccountUser(userName: string, password: string) {
        return new Promise((resolve, reject) => {

            if (userName === "" || password === "") {
                reject("Utilizador e/ou palavra-passe incorrecto");
            } else {
                login(userName, password)
                    .then(resolve)
                    .catch(reject)
            }
        })
    }

    return {
        loginAccountUser
    }
}
