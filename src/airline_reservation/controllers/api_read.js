import axios from "axios"

export default class ReadData {
    constructor(){ }

    displayPassengers = () => {
        return axios.get("/api/get/passengers")
    }

    displayBookings = () => {
        return axios.get("/api/get/bookings")
    }
}