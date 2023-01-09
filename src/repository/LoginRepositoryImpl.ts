import useLoginDao from "../database/dao/LoginDao";

export default function LoginRepositoryImpl() {

    const { login } = useLoginDao()

    function loginRepository(userName: string, password: string) {
        return login(userName, password)
    }

    return {
        loginRepository
    }
}