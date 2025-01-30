import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/available", async (req, res) => {
    try {
        const response = await axios.get("https://date.nager.at/api/v3/AvailableCountries");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error to Feaching available countries' });
    }
})

router.get('/:countryCode', async (req, res) => {
    const { countryCode } = req.params;

    try {
        
        const countryInfoResponse = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);
        const countryInfo = countryInfoResponse.data;

        const populationResponse = await axios.get(`https://countriesnow.space/api/v0.1/countries/population`)
        const populationData = populationResponse.data.data.find((country: { country: string }) => country.country === countryInfo.commonName);

        const flagResponse = await axios.get(`https://countriesnow.space/api/v0.1/countries/flag/images`);
        const flagData = flagResponse.data.data.find((country: { name: string }) => country.name === countryInfo.commonName);


        res.json({
            borders: countryInfo.borders,
            population: populationData ? populationData.populationCounts : 'Not Found',
            flagUrl: flagData ? flagData.flag : 'Not Found'
        })
    } catch (error) {
        res.status(500).json({ error: 'Error feaching contry information' });
        console.log(error);
    }
})


export default router;