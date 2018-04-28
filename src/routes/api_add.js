import axios from "axios"

export default class AddData {
    constructor(){ }
    
    addBooking= (data) => {
        let anArray = []
        return axios.post("/api/add/booking", anArray)
    }

    addPassenger= (data) => {
        return axios.post("/api/add/passenger", data)
    }
}