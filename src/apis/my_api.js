import axios from 'axios';

const BaseUrl = "https://edge-service-server-pauwelspieter.cloud.okteto.net";

class MyApi {
    static getAllCars() {
        return axios.get(BaseUrl + "/cars");
    }

    static getCarsWhereBrandFromCountry(country) {
        return axios.get(BaseUrl + "/cars/brands/country/" + country);
    }

    static getCarsWhereModelFromYear(year) {
        return axios.get(BaseUrl + "/cars/models/year/" + year);
    }

    static getCarsWhereModelFromType(type) {
        return axios.get(BaseUrl + "/cars/models/type/" + type);
    }

    static getCountries() {
        return axios.get(BaseUrl + "/cars/countries");
    }

    static getYears() {
        return axios.get(BaseUrl + "/cars/years");
    }

    static getTypes() {
        return axios.get(BaseUrl + "/cars/types");
    }

    static createBrand(brand) {
        return axios.post(BaseUrl + "/cars/brands", brand);
    }

    static updateBrand(brand) {
        return axios.put(BaseUrl + "/cars/brands", brand);
    }

    static deleteModel(modelId) {
        return axios.delete(BaseUrl + "/cars/models/" + modelId);
    }
}
export default MyApi;

