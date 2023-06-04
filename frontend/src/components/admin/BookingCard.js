

import { getHotelById } from "@/lib/api/hotel"
import { getUserById } from "@/lib/api/user"
import { useEffect, useState } from "react"

  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function BookingCard({booking}) {

    const [hotel, setHotel] = useState(null)
    const [user, setUser] = useState(null)

    const get_hotel_by_id = async () => {
      const data = await getHotelById(booking.hotel_id)
      setHotel(data)
    }

    const get_user_by_id = async () => {
      const data = await getUserById(booking.user_id)
      setUser(data)
    }

    useEffect(() => {
      
      get_hotel_by_id()
      get_user_by_id()
    }, [])

    useEffect(() => {

    
      get_hotel_by_id()
      get_user_by_id()
    }, [booking])

    return (
      <div className="bg-white rounded-md shadow-md p-4 mb-4">
        <div className="flex justify-between mb-4">
          <div className="text-sm font-bold">Booking ID:</div>
          <div className="text-sm">{booking.booking_id}</div>
        </div>  
        <div className="flex justify-between mb-4 border-t border-gray-200 pt-2">
          <div className="text-sm font-bold">User:</div>
          <div className="text-sm flex items-center">
          <div className="mr-2 text-sm">
              {user !== null ? `${user.first_name + " " + user.last_name}`: "This user is no longer available"}
            </div>
          <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                
              </span>
            
              </div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="text-sm font-bold">User ID:</div>
          <div className="text-sm">{user !== null ? user.user_id : ""}</div>
        </div>
        <div className="flex justify-between mb-4 border-t border-gray-200 pt-2">
          <div className="text-sm font-bold">Hotel:</div>
          <div className="text-sm">{hotel != null ? hotel.title : "This hotel is no longer available"}</div>
        </div>
        
        <div className="flex justify-between mb-4">
          <div className="text-sm font-bold">Hotel ID:</div>
          <div className="text-sm">{booking.hotel_id}</div>
        </div>
        <div className="text-sm mb-4">Rooms: {booking.rooms}</div>
        <div className="text-sm mb-4">Total: ${booking.total}</div>
        <div className="flex justify-between border-t border-gray-200 pt-4">
          <div className="text-gray-500">Date in: <span className="font-medium text-gray-900">{booking.date_in.substring(0, 10)}</span></div>
          <div className="text-gray-500">Date out: <span className="font-medium text-gray-900">{booking.date_out.substring(0, 10)}</span></div>
        </div>
      </div>


    )
  }
  