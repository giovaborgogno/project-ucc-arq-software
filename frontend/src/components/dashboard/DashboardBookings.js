import { useEffect, useState } from "react";
import BookingCard from "./BookingCard";
import SearchBar from "./SearchBar";
import { searchBookings } from "@/lib/api/booking";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardBookings() {
  const [bookings, setBookings] = useState(null);

  useEffect(() => {
    console.log(bookings);
  }, [bookings]);

  return (
    <>
      <SearchBar setBookings={setBookings} />
      {bookings != null &&
        bookings.map((booking) => <BookingCard booking={booking} />)}
    </>
  );
}
