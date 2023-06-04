import { useEffect, useState } from "react"
import SearchBar from "../dashboard/SearchBar"
import BookingCard from "./BookingCard"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DashboardBookings() {
  const [bookings, setBookings] = useState(null)

  useEffect(()=>{
    console.log(bookings)
  },[bookings])

  return (
    <>
    <SearchBar setBookings={setBookings} admin={true} />
      {bookings != null && bookings.map((booking) => (
        <BookingCard booking={booking}/>

      ))}
    </>
  )
}
