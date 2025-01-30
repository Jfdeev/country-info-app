import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import PopulationChart from './PopulacionalChart';
import styles from '../pages/country/CountryDetail.module.css'; // Importando o CSS

const CountryDetail: React.FC = () => {
    const router = useRouter();
    const { countryCode } = router.query;
    const [countryData, setCountryData] = useState<any>(null);

    useEffect(() => {
        if (countryCode) {
            const fetchCountryData = async () => {
                try {
                    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${countryCode}`);
                    console.log('API Response:', response.data); 
                    setCountryData(response.data);
                } catch (error) {
                    console.error('Error fetching country data:', error);
                }
            };

            fetchCountryData();
        }
    }, [countryCode]);

    if (!countryData) return <div className={styles.loading}>Loading...</div>;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {countryData.commonName || countryData.officialName}
            </h1>
            <img 
                src={countryData.flagUrl} 
                alt={`Bandeira de ${countryData.commonName || countryData.officialName}`} 
                className={styles.flag}
            />
            <h2 className={styles.subtitle}>Fronteiras</h2>
            <ul className={styles.borderList}>
                {countryData.borders.map((border: any) => (
                    <li key={border.countryCode} className={styles.borderItem}>
                        <Link href={`/country/${border.countryCode}`} className={styles.link}>
                            {border.commonName}
                        </Link>
                    </li>
                ))}
            </ul>
            <h2 className={styles.subtitle}>População ao longo do tempo</h2>
            <PopulationChart populationData={countryData.population} />
        </div>
    );
};

export default CountryDetail;