import { Buffer } from 'buffer';
import { api } from './api';

async function signIn(login: string, password: string) {
    const token = Buffer.from(`${login}:${password}`, "utf8").toString("base64");

    await api
        .get(`/user`, {
            headers: {
                Authorization: `Basic ${token}`,
            },
        })
        .then((response) => console.log(response, `response`))
        .catch((error) => {
            if (error.response.status === 401) {
                throw Error("Incorrect credentials");
            }

            if (error.isAxiosError) {
                throw Error("Unable to access");
            }
        });
}

async function logout() {
    api.get(`/logout`)
        .then(response => console.log(response.data,`ok`))
        .catch(error => alert(`${error}`))
}

async function valid() {
    api.get(`user`)
        .then(response => alert(response.data))
        .catch(error => alert(`${error}`))
}

export { signIn, logout, valid }