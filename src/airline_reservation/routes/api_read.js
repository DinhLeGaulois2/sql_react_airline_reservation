import axios from "axios"

export default class ReadData {
    constructor(){ }

    setPassengers = () => {
        return axios.get("/api/get/passengers")
    }

    setBookings = () => {
        return axios.get("/api/get/bookings")
    }
}