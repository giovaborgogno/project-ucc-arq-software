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
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XIcon } from '@heroicons/react/solid'

const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        price: '$32.00',
        color: 'Sienna',
        inStock: true,
        size: 'Large',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in sienna.",
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        price: '$32.00',
        color: 'Black',
        inStock: false,
        leadTime: '3–4 weeks',
        size: 'Large',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
    },
    {
        id: 3,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35.00',
        color: 'White',
        inStock: true,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
        imageAlt: 'Insulated bottle with white base and black snap lid.',
    },
]

export default function HotelsList() {

    return (
        <>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <form className="mt-4 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                        <section aria-labelledby="cart-heading" className="lg:col-span-12">
                            <h2 id="cart-heading" className="sr-only">
                                Items in your shopping cart
                            </h2>

                            <ul role="list" className=" border-b border-gray-200 divide-y divide-gray-200">
                                {products.map((product, productIdx) => (
                                    <li key={product.id} className="flex py-6 sm:py-10">
                                        <div className="flex-shrink-0">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                                            />
                                        </div>

                                        <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                                            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                <div>
                                                    <div className="flex justify-between">
                                                        <h3 className="text-sm">
                                                            <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                                                                {product.name}
                                                            </a>
                                                        </h3>
                                                    </div>
                                                    <div className="mt-1 flex text-sm">
                                                        <p className="text-gray-500">{product.color}</p>
                                                        {product.size ? (
                                                            <p className="ml-4 pl-4 border-l border-gray-200 text-gray-500">{product.size}</p>
                                                        ) : null}
                                                    </div>
                                                    <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                                                </div>
                                                
                                                

                                            </div>

                                            <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                                                {product.inStock ? (
                                                    <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                                                ) : (
                                                    <ClockIcon className="flex-shrink-0 h-5 w-5 text-gray-300" aria-hidden="true" />
                                                )}

                                                <span>{product.inStock ? 'In stock' : `Ships in ${product.leadTime}`}</span>
                                            </p>
                                        </div>

                                        <div className=''>
                                                    
                                                <button
                                                    
                                                    className="inline-block rounded-md border border-transparent bg-indigo-600 px-3 md:px-8  py-3 text-center md:font-medium text-white hover:bg-indigo-700"
                                                    >
                                                    Update
                                                </button>
                                                    </div>
                                    </li>
                                ))}
                            </ul>
                        </section>

                    </form>
                </div>
            </div>


        </>
    )
}
