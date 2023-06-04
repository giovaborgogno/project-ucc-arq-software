import { getHotels } from "@/lib/api/hotel";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HotelsList() {
  const [hotels, setHotels] = useState(null);

  useEffect(() => {
    const get_hotels = async () => {
      const data = await getHotels();
      setHotels(data);
    };
    get_hotels();
  }, []);

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
                            src={`/${
                              hotel.photos != null
                                ? hotel.photos[0].url
                                : "missing-hotel.jpg"
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
                        </div>

                        <div className="flex flex-col space-y-4 items-center">
                          <Link href={`/admin/hotels/${hotel.hotel_id}`}>
                            <button className="inline-block rounded-md border border-transparent bg-indigo-600 px-3 md:px-8 py-1 md:py-3 text-center font-medium text-white hover:bg-indigo-700">
                              Details
                            </button>
                          </Link>
                          <Link href={`/admin/hotels`}>
                            <button className="inline-block rounded-md border border-transparent bg-red-600 px-3 md:px-8 py-1 md:py-3 text-center font-medium text-white hover:bg-red-700" onClick>
                              Delete
                            </button>
                          </Link>
                        </div>
                      </li>
                    </>
                  ))}
              </ul>
            </section>
          </form>
        </div>
      </div>
    </>
  );
  //return (<div>chau</div>)
}
