import { alert } from "../utils/alert";
const { default: axios } = require("axios");
import Cookies from "js-cookie";

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
            //console.log("res: " + res)
            alert('error', res.data.error.toString())
            return null
        }
    } catch (error) {
        const errorMessage = error.response?.data?.error ?? 'Unknown error occurred';
        //console.log(error)
        alert('error', String(errorMessage));
        return null
    }

}

export async function updateHotel(hotelID, title, description, price_per_day, rooms, active) {
    rooms = parseInt(rooms);
    price_per_day = parseFloat(price_per_day);
  
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
      rooms,
      active
    });
  
    try {
      const res = await axios.put(`/api/hotel/update/${hotelID}`, body, config);
      if (res.status === 200) {
        alert('success', 'Hotel Updated');
        return res.data.hotel;
      } else {
        //console.log("res: " + res);
        alert('error', res.data.error.toString());
        return null;
      } 
    } catch (error) {
        const errorMessage = error.response?.data?.error ?? 'Unknown error occurred';
        //console.log(error);
        alert('error', String(errorMessage));
        return null;
      }
    }

export async function insertPhoto(hotelID, file) {

    const token = Cookies.get("token")

    const config = {
        // headers: {
        //     'Content-Type': "multipart/form-data"
        // },
        
        withCredentials: true,
        headers: {
            "Authorization": `Bearer ${token}`, // Agrega la cookie en el encabezado
          },
    };

    const formData = new FormData();
    formData.append('file', file);

    // const body = JSON.stringify({
    //     url: file.name, 
    //     file
    // });

    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_URL_API_CLIENT}/api/hotel/photo/upload/${hotelID}`, formData, config)
        // const res = await axios.post(`${process.env.NEXT_PUBLIC_URL_API}/api/hotel/photo/upload/${hotelID}`, formData, config)
        // const res = await axios.post(`/api/hotel/photo/${hotelID}`, formData, config)
        if (res.status === 201) {
            alert('success', 'Photo added successfully')

        }
        else {
            //console.log("res: " + res)
            alert('error', res.data.error.toString())
        }
    } catch (error) {
        const errorMessage = error.response?.data?.error ?? 'Unknown error occurred';
        //console.log(error)
        alert('error', String(errorMessage));
    }
}

export async function insertAmenitie(amenitieData) {
    try {
      const res = await axios.post('/api/hotel/amenity/insert', amenitieData, { withCredentials: true });
      if (res.status === 201) {
        return res.data.amenitie;
      } else {
        //console.log("res: " + res);
        return null;
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error ?? 'Unknown error occurred';
      //console.log(errorMessage);
      return null;
    }
  }

export async function getAmenities() {
    try {
        const res = await axios.get('/api/hotel/amenity', { withCredentials: true })
        if (res.status === 200) {
            return res.data.amenities
        }
        else {
            //console.log("res: " + res)
            return null
        }
    } catch (error) {
        const errorMessage = error.response?.data?.error ?? 'Unknown error occurred';
        //console.log(errorMessage)
        return null
    }
}

export async function deleteAmenitie(amenitieID) {
    try {
      const res = await axios.delete(`/api/hotel/amenity/${amenitieID}`, { withCredentials: true });
      if (res.status === 200) {
        //console.log('Amenitie deleted successfully');
        return true;
      } else {
        //console.log('Failed to delete amenitie');
        return false;
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error ?? 'Unknown error occurred';
      //console.log(errorMessage);
      return false;
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
            //console.log("res: " + res)
            alert('error', res.data.error.toString())
        }
    } catch (error) {
        const errorMessage = error.response?.data?.error ?? 'Unknown error occurred';
        //console.log(error)
        alert('error', String(errorMessage));
    }

}

export async function dissociateAmenities(hotel_id, array_amenity_id) {

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
        const res = await axios.post(`/api/hotel/amenity/dissociate/${hotel_id}`, body, config)
        if (res.status === 200) {
            alert('success', 'Amenities associated successfully')

        }
        else {
            //console.log("res: " + res)
            alert('error', res.data.error.toString())
        }
    } catch (error) {
        const errorMessage = error.response?.data?.error ?? 'Unknown error occurred';
        //console.log(error)
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
            //console.log("res: " + res)
            return null
        }
    } catch (error) {
        const errorMessage = error.response?.data?.error ?? 'Unknown error occurred';
        //console.log(errorMessage)
        return null
    }
}

export async function getAvailableHotels(rooms, date_in, date_out){
    try {
        const res = await axios.get(`/api/hotel/available?rooms=${rooms}&date_in=${date_in}&date_out=${date_out}`, { withCredentials: true })
        if (res.status === 200) {
            return res.data.hotels
        }
        else {
            //console.log("res: " + res)
            return null
        }
    } catch (error) {
        const errorMessage = error.response?.data?.error ?? 'Unknown error occurred';
        //console.log(errorMessage)
        return null
    }
}

export async function getHotelById(id){
    try {
        const res = await axios.get(`/api/hotel/${id}`, { withCredentials: true })
        if (res.status === 200) {
            return res.data.hotel
        }
        else {
            //console.log("res: " + res)
            return null
        }
    } catch (error) {
        const errorMessage = error.response?.data?.error ?? 'Unknown error occurred';
        //console.log(errorMessage)
        return null
    }
}

export async function checkAvailability(rooms, date_in, date_out, hotel_id) {

    rooms = parseInt(rooms)

    const config = {
        withCredentials: true
    };

    let availableRooms

    try {
        const res = await axios.get(`/api/hotel/check?hotel_id=${hotel_id}&date_in=${date_in}&date_out=${date_out}`, config)
        if (res.status === 200) {
            availableRooms = res.data.available_rooms
        }
        else {
            //console.log("res: " + res)
        }
    } catch (error) {
        const errorMessage = error.response?.data?.error ?? 'Unknown error occurred';
        //console.log(error)
    }

    if(availableRooms < rooms){
        return false
    }
    return true

}

export async function deletePhoto(photo_id) {
    try {
      const res = await axios.delete(`/api/hotel/photo/delete/${photo_id}`, { withCredentials: true });
      if (res.status === 200) {
        //console.log('Photo deleted successfully');
        alert('success', "Photo deleted successfully")
        return true;
      } else {
        alert('error', "Failed to delete photo")
        //console.log('Failed to delete photo');
        return false;
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error ?? 'Unknown error occurred';
      alert('error', "Failed to delete photo")
      //console.log(errorMessage);
      return false;
    }
  }