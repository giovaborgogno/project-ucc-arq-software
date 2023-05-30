import { alert } from "../utils/alert";
const { default: axios } = require("axios");
import { generateFileName } from "../utils/generateFileName";

export async function createHotel(title, description, price_per_day, rooms) {

    rooms = parseInt(rooms)
    price_per_day = parseFloat(price_per_day)

    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    };

    const body = JSON.stringify({
        title,
        description,
        price_per_day,
        rooms
    });

    try {
        const res = await axios.post('/api/hotel/create', body, config)
        if (res.status === 201) {
            alert('success', 'Hotel Created')
            return res.data.hotel

        }
        else{
            console.log("res: " + res)
            alert('error', res.data.error.toString())
            return null
        }
    } catch (error) {
        const errorMessage = error.response?.data?.error ?? 'Unknown error occurred';
        console.log(error)
        alert('error', String(errorMessage));
        return null
    }

}

export async function insertPhoto(hotelID, file){

    const config = {
        headers: {
            'Content-Type': "multipart/form-data"
        },
        withCredentials: true
    };

    const formData = new FormData();
    formData.append('file', file);

    // const body = JSON.stringify({
    //     url: file.name, 
    //     file
    // });

    try {
        const res = await axios.post(`/api/hotel/photo/${hotelID}`, formData, config)
        if (res.status === 201) {
            alert('success', 'Photo added successfully')

        }
        else{
            console.log("res: " + res)
            alert('error', res.data.error.toString())
        }
    } catch (error) {
        const errorMessage = error.response?.data?.error ?? 'Unknown error occurred';
        console.log(error)
        alert('error', String(errorMessage));
    }
}