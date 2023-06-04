

import { getHotelById } from "@/lib/api/hotel"
import { useEffect, useState } from "react"

  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function BookingCard({booking}) {

    const [hotel, setHotel] = useState(null)

    useEffect(() => {
      const get_hotel_by_id = async () => {
        const data = await getHotelById(booking.hotel_id)
        setHotel(data)
      }
      get_hotel_by_id()
    }, [])

    useEffect(() => {
      const get_hotel_by_id = async () => {
        const data = await getHotelById(booking.hotel_id)
        setHotel(data)
      }
      get_hotel_by_id()
    }, [booking])

    return (
      <div className="bg-white rounded-md shadow-md p-4 mb-4">
        <div className="flex justify-between mb-4">
          <div className="text-sm font-bold">Hotel:</div>
          <div className="text-sm">{hotel != null && hotel.title}</div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="text-sm font-bold">Booking ID:</div>
          <div className="text-sm">{booking.booking_id}</div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="text-sm font-bold">Hotel ID:</div>
          <div className="text-sm">{booking.hotel_id}</div>
        </div>
        <div className="text-sm mb-4">Rooms: {booking.rooms}</div>
        <div className="text-sm mb-4">Price: {booking.total}</div>
        <div className="flex justify-between border-t border-gray-200 pt-4">
          <div className="text-gray-500">Date in: <span className="font-medium text-gray-900">{booking.date_in.substring(0, 10)}</span></div>
          <div className="text-gray-500">Date out: <span className="font-medium text-gray-900">{booking.date_out.substring(0, 10)}</span></div>
        </div>
      </div>


    )
  }
  