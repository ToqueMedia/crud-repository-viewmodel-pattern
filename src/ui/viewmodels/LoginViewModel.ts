import LoginRepositoryImpl from "../../repository/LoginRepositoryImpl";

export default function useLoginViewModel() {

    const { loginRepository } = LoginRepositoryImpl()

    function loginAccountUser(userName: string, password: string) {
        return new Promise((resolve, reject) => {

            if (userName === "" || password === "") {
                reject("Utilizador e/ou palavra-passe incorrecto");
            } else {
                loginRepository(userName, password)
                    .then(resolve)
                    .catch(reject)
            }
        })
    }

    return {
        loginAccountUser
    }
}