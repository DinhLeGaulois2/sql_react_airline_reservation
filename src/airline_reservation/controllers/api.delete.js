import axios from "axios"

export default class DeleteData {
    constructor(){ }    

    deleteBookingById = (id) => {
        return axios.delete("/api/delete/booking/" + id)
    }
    
    deletePassengerById = (id) => {
        return axios.delete("/api/delete/passenger/" + id)
    }
}