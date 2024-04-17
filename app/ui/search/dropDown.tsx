"use client"
import { useState } from 'react';

type OptionType = {
    label: string;
    value: string;
};

const options: OptionType[] = [
    { label: 'Other Human Factions', value: 'otherHuman' },
    // ... 其他选项
    { label: 'Mystical Beasts', value: 'mysticalBeasts' },
];

const Dropdown = () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (value: string) => {
        setSelectedOptions((prev) => {
            if (prev.includes(value)) {
                return prev.filter((option) => option !== value);
            } else {
                return [...prev, value];
            }
        });
    };

    const resetOptions = () => setSelectedOptions([]);

    return (
        <div className="relative text-xl  mx-2">
            <button
                onClick={toggleDropdown}
                className="block w-full bg-transparent border border-amber-50 text-left px-4 py-2 rounded-md"
            >
                Type
            </button>
            {isOpen && (
                <div className="absolute z-10 w-full bg-black bg-opacity-30 rounded-md shadow-lg mt-1">
                    {options.map((option) => (
                        <div key={option.value} className="px-4 py-2 flex items-center">
                            <input
                                type="checkbox"
                                id={option.value}
                                name={option.value}
                                checked={selectedOptions.includes(option.value)}
                                onChange={() => handleSelect(option.value)}
                                className="mr-2"
                            />
                            <label htmlFor={option.value} className="text-amber-50">{option.label}</label>
                        </div>
                    ))}
                    <div className="flex justify-between px-4 py-2">
                        <button
                            onClick={resetOptions}
                            className="bg-amber-200 text-black px-4 py-1 rounded-md hover:bg-amber-100 focus:outline-none"
                        >
                            Reset
                        </button>
                        <button
                            onClick={toggleDropdown} // Assuming you want to close the dropdown when confirming
                            className="bg-yellow-600 text-white px-4 py-1 rounded-md hover:bg-yellow-400 focus:outline-none"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
