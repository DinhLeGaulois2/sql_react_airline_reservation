import axios from "axios"

export default class DeleteData {
    constructor(){ }
    

    deleteBookingById = (bId) => {
        return axios.delete("/api/delete/booking/" + bId)
    }
    
    deletePassengerById = (pId) => {
        return axios.delete("/api/delete/passenger/" + pId)
    }
}