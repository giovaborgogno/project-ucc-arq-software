import { createBooking } from "@/lib/api/booking";
import { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { useContext } from 'react';
import { UserContext } from '../../layouts/LayoutContext';
import { checkAvailability } from "@/lib/api/hotel";
import { useRouter } from "next/router";

const BookForm = ({ hotel, setDataCheck }) => {

    const [available, setAvailable] = useState(false)

    const [user, setUser] = useContext(UserContext);
    const router = useRouter()

    const [rooms, setRooms] = useState(1)
    const [total, setTotal] = useState(null)

    const [dates, setDates] = useState({
        startDate: null,
        endDate: null
    });

    const check_availability = async () => {

        const start_date = dates.startDate !== null ? new Date(dates.startDate).toISOString() : ""
        const end_date = dates.startDate !== null ? new Date(dates.endDate).toISOString() : ""

        const isAvailable = await checkAvailability(rooms, start_date, end_date, hotel.hotel_id)
        //console.log("isAvailable: ", isAvailable)
        setAvailable(isAvailable)
    }

    useEffect(() => {
        check_availability()
    }, [])

    useEffect(() => {

        check_availability()

        const fechaInicio = new Date(dates.startDate);
        const fechaFin = new Date(dates.endDate);

        // Calcula la diferencia en milisegundos entre las dos fechas
        const diferenciaMilisegundos = fechaFin - fechaInicio;

        // Convierte la diferencia de milisegundos a días
        const days = Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
        const totalPerRoom = hotel.price_per_day * days
        const newTotal = rooms * totalPerRoom
        setTotal(newTotal)
    }, [rooms, dates, hotel])

    const handleChange = e => setRooms(e.target.value);

    const handleDatesChange = (newDates) => {
        setDates(newDates);
    }

    const handleSubmit = e => {
        const start_date = dates.startDate !== null ? new Date(dates.startDate).toISOString() : ""
            const end_date = dates.startDate !== null ? new Date(dates.endDate).toISOString() : ""

        e.preventDefault()
        if (user === null) {
            const booking = {
                rooms,
                total,
                start_date,
                end_date,
                hotel_id:hotel.hotel_id,
                user,
                hotel_title: hotel.title
            }
            sessionStorage.setItem('booking', JSON.stringify(booking));
            router.push("/auth/login")

            return
        }
        const create_booking = async () => {
            await createBooking(rooms, total, start_date, end_date, hotel.hotel_id, user.user_id)
            // //console.log("\nrooms: ",rooms,"\ntotal: ", total,"\ndate_in: ", dates.startDate,"\ndate_out: ", dates.endDate,"\nhotel_id: ", hotel.hotel_id,"\nuser_id: ", user.user_id)
        }

        create_booking()
    }

    // set data to check availability to parent component
    useEffect(()=>{
        setDataCheck({
            rooms: rooms,
            date_in: dates.startDate !== null ? new Date(dates.startDate).toISOString() : "",
            date_out: dates.startDate !== null ? new Date(dates.endDate).toISOString() : "",
            currentHotelId: hotel.hotel_id
        })
    },[dates, rooms])

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div className="flex items-end justify-between mb-10">

                <div>
                    <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                        Rooms
                    </label>
                    <div className="mt-2">
                        <select
                            id="rooms"
                            name="rooms"
                            type="text"
                            value={rooms}
                            onChange={e => handleChange(e)}
                            autoComplete="rooms"
                            required
                            className="h-full rounded-md border-0 bg-transparent py-2.5 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        // className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                        Dates
                    </label>
                    <div className="mt-2">
                        <Datepicker
                            value={dates}
                            onChange={handleDatesChange}
                            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"

                        />
                    </div>

                </div>



            </div>
            {total !== null &&
                <p className="text-2xl text-gray-900">Total: $ {total}</p>
            }

            {
                available ?
                    <>
                        {user != null ?
                            <button
                                type="submit"
                                className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Book Now!
                            </button>
                            :
                            <button
                                type="submit"
                                className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Sign In & Book Now!
                            </button>
                        }
                    </>

                    :
                    <button
                        type=""
                        disabled
                        className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Not Available
                    </button>
            }


        </form>

    );
};

export default BookForm;