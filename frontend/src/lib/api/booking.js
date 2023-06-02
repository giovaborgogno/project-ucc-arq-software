import { alert } from "../utils/alert";
const { default: axios } = require("axios");

export async function createBooking(rooms, total, date_in, date_out, hotel_id, user_id) {

    rooms = parseInt(rooms)
    total = parseFloat(total)

    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    };

    const body = JSON.stringify({
        rooms,
        total,
        date_in,
        date_out,
        hotel_id,
        user_id
    });

    try {
        const res = await axios.post('/api/booking', body, config)
        if (res.status === 201) {
            alert('success', 'Booking Created')
        
        }
        else {
            console.log("res: " + res)
            alert('error', res.data.error.toString())
        }
    } catch (error) {
        const errorMessage = error.response?.data?.error ?? 'Unknown error occurred';
        console.log(error)
        alert('error', String(errorMessage));
    }

}

