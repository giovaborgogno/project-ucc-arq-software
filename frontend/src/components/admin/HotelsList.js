import { getHotels } from "@/lib/api/hotel"
import Link from "next/link"
import { useEffect, useState } from "react";

export default function HotelsList() {

    const [hotels, setHotels] = useState(null)

    useEffect(() => {
        const get_hotels = async () => {
            const data = await getHotels()
            setHotels(data)
        }
        get_hotels()
    }, [])

    return (
        <>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Hotels List</h1>
                    <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                        <section aria-labelledby="cart-heading" className="lg:col-span-12">
                            <h2 id="cart-heading" className="sr-only">
                                Items in your shopping cart
                            </h2>

                            <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
                                {hotels !== null && hotels !== undefined && hotels.map((hotel, hotelIdx) => (
                                    <>

                                        <li key={hotel.hotel_id} className="flex py-6 sm:py-10">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={`/${hotel.photos[0].url}`}
                                                    alt={hotel.title}
                                                    className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                                                />
                                            </div>

                                            <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                                                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                    <div>
                                                        <div className="flex justify-between">
                                                            <h3 className="text-lg font-bold text-gray-700 hover:text-gray-800">

                                                                Name: {hotel.title}
                                                                <p className="font-medium text-gray-700 hover:text-gray-800">
                                                                    Description: {hotel.description}
                                                                </p>
                                                            </h3>
                                                        </div>

                                                        <p className="mt-1 text-sm font-medium text-gray-900">{hotel.price_per_day} USD per day</p>
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

                                            <Link
                                                href={`/admin/hotels/${hotel.hotel_id}`}
                                            >
                                                <button
                                                    className="inline-block rounded-md border border-transparent bg-indigo-600 px-3 md:px-8 py-1 md:py-3 text-center font-medium text-white hover:bg-indigo-700"
                                                >
                                                    View Details
                                                </button>
                                            </Link>
                                        </li>

                                    </>
                                ))}
                            </ul>
                        </section>

                    </form>
                </div>
            </div>

        </>
    )
    //return (<div>chau</div>)
}