import axios from "axios"

export default class AddData {
    constructor(){ }

    
    addBooking= (data) => {
        return axios.post("/api/add/booking", data)
    }

    addPassenger= (data) => {
        return axios.post("/api/add/passenger", data)
    }
}