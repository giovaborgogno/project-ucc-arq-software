import { alert } from "../utils/alert";
import Cookies from "js-cookie";
const { default: axios } = require("axios");

export async function login(email, password) {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({
        email,
        password
    });

    try {
        const res = await axios.post('/api/auth/login', body, config)
        if (res.status === 200) {
            Cookies.set("token", res.data.token.toString());
            alert('success', 'Login successfully')

        }
        else{
            console.log("res: " + res)
            alert('error', res.data.error.toString())
            Cookies.remove("token");
        }
    } catch (error) {
        const errorMessage = error.response?.data?.error ?? 'Unknown error occurred';
        alert('error', String(errorMessage));
        Cookies.remove("token");
    }

}

export async function logout() {

    try {
        const res = await axios.get('/api/auth/logout',{withCredentials: true})
        if (res.status === 200) {
            Cookies.remove("token");
            alert('success', String(res.data.success))

        }
        else{
            console.log("res: " + res)
            alert('error', res.data.error.toString())
            Cookies.remove("token");
        }
    } catch (error) {
        const errorMessage = error.response?.data?.error ?? 'Unknown error occurred';
        alert('error', String(errorMessage));
        Cookies.remove("token");
    }

}