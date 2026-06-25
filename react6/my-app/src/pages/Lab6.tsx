import { CountryInfo } from "../components/CountryInfo";
import { IPAddress } from "../components/IPAddress";
import { RandomDate } from "../components/RandomDate";
import { YandexGeocoder } from "../components/YandexGeocoder";

export const Lab6 = () => {
    const API_key = 'f4f48c1c051da31aa6c891ade56590a4';

    // [{ "name": "Russian Federation", "topLevelDomain": [".ru"], "alpha2Code": "RU", "alpha3Code": "RUS", "callingCodes": ["7"], "capital": "Moscow", "altSpellings": ["RU", "Rossiya", "Russian Federation", "\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0430\u044f \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u044f", "Rossiyskaya Federatsiya"], "region": "Europe" }, { "name": "Belarus", "topLevelDomain": [".by"], "alpha2Code": "BY", "alpha3Code": "BLR", "callingCodes": ["375"], "capital": "Minsk", "altSpellings": ["BY", "Bielaru\u015b", "Republic of Belarus", "\u0411\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u0438\u044f", "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c", "Belorussiya", "Respublika Belarus\u2019"], "region": "Europe" }]

    return (
        <article>
            <h2>Лабораторная 6</h2>
            <IPAddress />
            <CountryInfo />
            <RandomDate />
            <YandexGeocoder />
        </article>
    );
};