import { alert } from "../utils/alert";
const { default: axios } = require("axios");

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
        else {
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

export async function insertPhoto(hotelID, file) {

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

export async function getAmenities() {
    try {
        const res = await axios.get('/api/hotel/amenity', { withCredentials: true })
        if (res.status === 200) {
            return res.data.amenities
        }
        else {
            console.log("res: " + res)
            return null
        }
    } catch (error) {
        const errorMessage = error.response?.data?.error ?? 'Unknown error occurred';
        console.log(errorMessage)
        return null
    }
}

export async function associateAmenities(hotel_id, array_amenity_id) {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    };

    let amenities = []
    array_amenity_id.forEach(amenity_id => {
        let amenitie_id = {
            amenitie_id: amenity_id
        }

        amenities.push(amenitie_id)
    });

    const body = JSON.stringify(amenities);

    try {
        const res = await axios.post(`/api/hotel/amenity/associate/${hotel_id}`, body, config)
        if (res.status === 200) {
            alert('success', 'Amenities associated successfully')

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

export async function getHotels(){
    try {
        const res = await axios.get('/api/hotel', { withCredentials: true })
        if (res.status === 200) {
            return res.data.hotels
        }
        else {
            console.log("res: " + res)
            return null
        }
    } catch (error) {
        const errorMessage = error.response?.data?.error ?? 'Unknown error occurred';
        console.log(errorMessage)
        return null
    }
}