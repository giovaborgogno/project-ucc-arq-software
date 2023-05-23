import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";


const BookForm = () => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }

    return (
        <div className="flex items-end justify-between mb-10">

            <div>
                <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                    Rooms
                </label>
                <div className="mt-2">
                    <select
                        id="amount"
                        name="amount"
                        type="text"
                        autoComplete="amount"
                        required
                        className="h-full rounded-md border-0 bg-transparent py-2.5 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    // className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                    Dates
                </label>
                <div className="mt-2">
                <Datepicker
                    value={value}
                    onChange={handleValueChange}
                    className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"

                />
                </div>
                
            </div>

        </div>
    );
};

export default BookForm;