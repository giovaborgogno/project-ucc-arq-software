import { alert } from "../utils/alert";

const { default: axios } = require("axios");

export async function getMe() {

    const config = {
        headers:{
            'Cache-Control': 'no-cache'
        }
    }

    try {
        const res = await axios.get('/api/user/me',{withCredentials: true})
        if (res.status === 200) {
            return res.data.user
        }
        else {
            return null
        }
    } catch (error) {
        return null
    }


}