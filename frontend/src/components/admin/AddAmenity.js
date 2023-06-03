import { ArrowRightIcon } from "@heroicons/react/solid";

export default function AddAmenity() {
    return (
        <div className="">
            <div className="divide-y divide-gray-100">
                <form className="flex justify-start items-end gap-x-6 py-5">
                    <div className="flex gap-x-4">
                        <div>
                            <label htmlFor="amenity" className="block text-sm font-medium leading-6 text-gray-900">
                                Add Amenity
                            </label>
                            <div className="mt-2">
                                <input
                                    id="amenity"
                                    name="amenity"
                                    placeholder="Amenity Title"
                                    type="text"
                                    autoComplete="amenity"
                                    required
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <button>
                        
                    <ArrowRightIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </form>
            </div>
        </div>
    )
}