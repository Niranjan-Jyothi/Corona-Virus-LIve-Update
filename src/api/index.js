import axios from 'axios';
const url = 'https://covid19.mathdro.id/api'

export const fetchData = async(country) => {
    let changeurl = url;
    if (country) {
        changeurl = `${url}/countries/${country}`
    }

    try {
        const {
            data: { confirmed, recovered, deaths, lastUpdate }
        } = await axios.get(changeurl);

        return ({ confirmed, recovered, deaths, lastUpdate });

    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async() => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        // console.log(dailyData);

        const modifiedData = data.map((singleData) => ({
            confirmed: singleData.confirmed.total,
            deaths: singleData.deaths.total,
            date: singleData.reportDate,
        }));
        return modifiedData
    } catch (error) {
        console.log(error);

    }
}

export const fetchCountries = async() => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);


    } catch (error) {
        console.log(error);

    }
}