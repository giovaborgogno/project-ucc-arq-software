/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/react/solid";
import HotelDetail from "./HotelDetail";
import { useEffect, useState } from "react";
import { getHotels } from "@/lib/api/hotel";

export default function HotelsList({ hotels }) {
  const [open, setOpen] = useState(false);
  const [hotelDetail, setHotelDetail] = useState(null);

  const handleHotelDetail = (e, hotel) => {
    e.preventDefault();
    console.log(e);
    setHotelDetail(hotel);
    setOpen(true);
  };

  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Hotels List
          </h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-12">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              <ul
                role="list"
                className="border-t border-b border-gray-200 divide-y divide-gray-200">
                {hotels !== null &&
                  hotels !== undefined &&
                  hotels.map((hotel, hotelIdx) => (
                    <>
                      <li key={hotel.hotel_id} className="flex py-6 sm:py-10">
                        <div className="flex-shrink-0">
                          <img
                            src={`${
                              hotel.photos != null
                                ? hotel.photos[0].url
                                : "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"
                            }`}
                            alt={hotel.title}
                            className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                          />
                        </div>

                        <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                            <div>
                              <div className="flex justify-between">
                                <h3 className="text-xl font-bold text-gray-700 hover:text-gray-800">
                                  {hotel.title}
                                  <p className="text-base font-normal text-gray-700 hover:text-gray-800">
                                    {hotel.description}
                                  </p>
                                </h3>
                              </div>

                              <p className="mt-1 text-sm font-medium text-gray-900">
                                {hotel.price_per_day} USD per day
                              </p>
                            </div>
                          </div>

                          {/* <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                                                {hotel.inStock ? (
                                                    <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                                                ) : (
                                                    <ClockIcon className="flex-shrink-0 h-5 w-5 text-gray-300" aria-hidden="true" />
                                                )}

                                                <span>{hotel.inStock ? 'In stock' : `Ships in ${hotel.leadTime}`}</span>
                                            </p> */}
                        </div>

                        <div>
                          <button
                            onClick={(e) => handleHotelDetail(e, hotel)}
                            className="inline-block rounded-md border border-transparent bg-indigo-600 px-3 md:px-8 py-1 md:py-3 text-center font-medium text-white hover:bg-indigo-700">
                            Book
                          </button>
                        </div>
                      </li>
                    </>
                  ))}
              </ul>
            </section>
          </form>
        </div>
      </div>

      <HotelDetail open={open} setOpen={setOpen} hotel={hotelDetail} />
    </>
  );
}
