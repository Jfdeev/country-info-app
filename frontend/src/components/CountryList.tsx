'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const CountryList: React.FC = () => {
    const [countries, setCountries] = useState<any[]>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await axios.get<{ countryCode: string; name: string }[]>(`${process.env.NEXT_PUBLIC_API_URL}/available`);
            setCountries(response.data);
        };

        fetchCountries();
    }, []);

    return (
        <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Country List</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {countries.map((country) => (
                    <li key={country.countryCode} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <Link href={`/country/${country.countryCode}`}>
                            {country.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CountryList;