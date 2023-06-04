/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useContext, useEffect, useState } from 'react'
import { Dialog, RadioGroup, Transition, Tab, Disclosure } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import BookForm from './BookForm'
import Image from 'next/image'

const product = {
    name: 'Basic Tee 6-Pack ',
    price: '$192',
    rating: 3.9,
    reviewCount: 117,
    href: '#',
    images: [
        {
            id: 1,
            name: 'Angled view',
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
            alt: 'Angled front view with bag zipped and handles upright.',
        },
        {
            id: 2,
            name: 'Angled view',
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg',
            alt: 'Angled front view with bag zipped and handles upright.',
        },
        // More images...
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: true },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: 'XXL', inStock: true },
        { name: 'XXXL', inStock: false },
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function HotelDetail({ open, setOpen, hotel }) {


    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])


    return (
        <>
            {hotel !== null && hotel !== undefined ?
                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={setOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                                    enterTo="opacity-100 translate-y-0 md:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 md:scale-100"
                                    leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                                >
                                    <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-5xl ">
                                        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                            <button
                                                type="button"
                                                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="sr-only">Close</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>

                                            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-1 lg:gap-x-8 lg:grid-cols-2">
                                                {/* <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                                            <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
                                        </div> */}

                                                <div className="sm:col-span-8 lg:col-span-1">
                                                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{hotel.title.toUpperCase()}</h2>

                                                    <section aria-labelledby="information-heading" className="mt-2">
                                                        <h3 id="information-heading" className="sr-only">
                                                            Hotel information
                                                        </h3>

                                                        <p className="text-2xl text-gray-900">$ {hotel.price_per_day}</p>

                                                        {/* Reviews */}
                                                        {/* <div className="mt-6">
                                                    <h4 className="sr-only">Reviews</h4>
                                                    <div className="flex items-center">
                                                        <div className="flex items-center">
                                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                                <StarIcon
                                                                    key={rating}
                                                                    className={classNames(
                                                                        product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                                                        'h-5 w-5 flex-shrink-0'
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                            ))}
                                                        </div>
                                                        <p className="sr-only">{product.rating} out of 5 stars</p>
                                                        <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                            {product.reviewCount} reviews
                                                        </a>
                                                    </div>
                                                </div> */}
                                                    </section>

                                                    <section aria-labelledby="options-heading" className="mt-10">
                                                        <h3 id="options-heading" className="sr-only">
                                                            Product options
                                                        </h3>

                                                        <BookForm hotel={hotel}/>

                                                        <div className="mt-10">
                                                            <div className="flex items-center justify-between">
                                                                <h4 className="text-sm font-medium text-gray-900">Amenities</h4>
                                                                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                                    Size guide
                                                                </a>
                                                            </div>

                                                            <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                                                <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                                                                <div className="grid grid-cols-4 gap-4">
                                                                    {hotel.amenities && hotel.amenities.map((amenity) => (
                                                                        <RadioGroup.Option
                                                                            key={amenity.amenitie_id}
                                                                            value={amenity.title}
                                                                            disabled={!amenity}
                                                                            className={({ active }) =>
                                                                                classNames(
                                                                                    amenity
                                                                                        ? ' bg-white text-gray-900 shadow-sm'
                                                                                        : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                                                    'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50  sm:flex-1'
                                                                                )
                                                                            }
                                                                        >

                                                                            <RadioGroup.Label as="span">{amenity.title.toUpperCase()}</RadioGroup.Label>
                                                                            {amenity ? (
                                                                                <span
                                                                                    className={classNames(
                                                                                    )}
                                                                                    aria-hidden="true"
                                                                                />
                                                                            ) : (
                                                                                <>
                                                                                </>
                                                                            )}

                                                                        </RadioGroup.Option>
                                                                    ))}
                                                                </div>
                                                            </RadioGroup>
                                                        </div>
                                                    </section>
                                                </div>
                                                <Tab.Group as="div" className="flex flex-col-reverse order-last md:order-first">
                                                    {/* Image selector */}
                                                    <div className=" mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                                                        <Tab.List className="grid grid-cols-4 gap-6">
                                                            {hotel.photos != null && hotel.photos.map((photo) => (
                                                                <Tab
                                                                    key={photo.photo_id}
                                                                    className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                                                                >
                                                                    {({ selected }) => (
                                                                        <>
                                                                            <span className="sr-only">{photo.url}</span>
                                                                            <span className="absolute inset-0 rounded-md overflow-hidden">
                                                                                <img src={`/${photo.url}`} alt="" className=" object-center object-cover" />
                                                                            </span>
                                                                            <span
                                                                                className={classNames(
                                                                                    selected ? 'ring-indigo-500' : 'ring-transparent',
                                                                                    'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                                                                                )}
                                                                                aria-hidden="true"
                                                                            />
                                                                        </>
                                                                    )}
                                                                </Tab>
                                                            ))}
                                                        </Tab.List>
                                                    </div>

                                                    <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                                                        {hotel.photos != null && hotel.photos.map((photo) => (
                                                            <Tab.Panel key={photo.photo_id}>
                                                                <Image
                                                                    src={`/${photo.url}`}
                                                                    alt={photo.url}
                                                                    className="w-full h-full object-center object-cover sm:rounded-lg"
                                                                    width={1000}
                                                                    height={1000}
                                                                    style={{ height: "30rem" }}
                                                                />
                                                            </Tab.Panel>
                                                        ))}
                                                    </Tab.Panels>
                                                </Tab.Group>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
                :
                <></>
            }
        </>

    )
}
