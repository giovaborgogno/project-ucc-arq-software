/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState } from "react";
import { Disclosure, RadioGroup, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon, MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";
import { useContext, useEffect } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HotelDetail({ hotel }) {
  const [selectedSize, setSelectedSize] = useState(null);
  useEffect(() => {
    console.log(hotel);
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* photo gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            <div className=" mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {hotel != null && hotel.photos != null ? (
                  <>
                    {hotel.photos.map((photo) => (
                      <Tab
                        key={photo.photo_id}
                        className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50">
                        {({ selected }) => (
                          <>
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img
                                src={`/${photo.url}`}
                                alt=""
                                className="w-full h-full object-center object-cover"
                              />
                            </span>
                            <span
                              className={classNames(
                                selected
                                  ? "ring-indigo-500"
                                  : "ring-transparent",
                                "absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>
                    ))}
                  </>
                ) : (
                  <>
                    <Tab className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50">
                      {({ selected }) => (
                        <>
                          <span className="absolute inset-0 rounded-md overflow-hidden">
                            <img
                              src="/missing-hotel.jpg"
                              alt=""
                              className="w-full h-full object-center object-cover"
                            />
                          </span>
                          <span
                            className={classNames(
                              selected ? "ring-indigo-500" : "ring-transparent",
                              "absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>
                  </>
                )}
              </Tab.List>
            </div>

            <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
              {hotel != null && hotel.photos != null ? (
                <>
                  {hotel.photos.map((photo) => (
                    <Tab.Panel key={photo.photo_id}>
                      <img
                        src={`/${photo.url}`}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                    </Tab.Panel>
                  ))}
                </>
              ) : (
                <>
                  <Tab.Panel>
                    <img
                      src="/missing-hotel.jpg"
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                    />
                  </Tab.Panel>
                </>
              )}
            </Tab.Panels>
          </Tab.Group>

          {/* hotel info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {hotel.title}
            </h1>

            <div className="mt-3">
              <h2 className="text-3xl text-gray-900">
                Price per day: {hotel.price_per_day}{" "}
              </h2>
            </div>

            <div className="mt-3">
              <h2 className="text-3xl text-gray-900">Rooms: {hotel.rooms} </h2>
            </div>

            <div className="mt-6">
              <h3 className="text-base text-gray-700 space-y-6">
                Description:
              </h3>

              <div
                className="text-base text-gray-700 space-y-6"
                dangerouslySetInnerHTML={{ __html: hotel.description }}
              />
            </div>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="text-3xl text-gray-900">
                Amenities:
              </h2>
              <RadioGroup
                value={selectedSize}
                onChange={setSelectedSize}
                className="mt-4">
                <RadioGroup.Label className="sr-only">
                  Choose a size
                </RadioGroup.Label>
                <div className="grid grid-cols-4 gap-4">
                  {hotel.amenities &&
                    hotel.amenities.map((amenity) => (
                      <RadioGroup.Option
                        key={amenity.amenitie_id}
                        value={amenity.title}
                        disabled={!amenity}
                        className={({ active }) =>
                          classNames(
                            amenity
                              ? " bg-white text-gray-900 shadow-sm"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50  sm:flex-1"
                          )
                        }>
                        <RadioGroup.Label as="span">
                          {amenity.title.toUpperCase()}
                        </RadioGroup.Label>
                        {amenity ? (
                          <span className={classNames()} aria-hidden="true" />
                        ) : (
                          <></>
                        )}
                      </RadioGroup.Option>
                    ))}
                </div>
              </RadioGroup>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
  // return (<div>hola</div>)
}
