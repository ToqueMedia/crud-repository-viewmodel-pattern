export default function useLoginDao() {

    const database = window.localStorage;
    
    function login(userName: string, password: string) {
        // Implementar as funcoes de login firebase ou outro
        return new Promise((resolve, reject) => {

            const resp = database.getItem(`${userName}`);

            console.log(resp, userName)

            if (resp === null) {
                reject("Utilizador nao encontrado")
            } else if (password === resp) {
                resolve(null);
            } else if (password !== resp) {
                reject("Erro de login")
            }
        })
    }

    return {
        login
    }
}