import axios from "axios"
import { YogaPoseAPI } from "../interface/CustomInterface"

const useFetch = async (url:string) => {
    const error:string = "error in fetching api"

    try {
        const response = await axios.get<YogaPoseAPI[]>('/api/pose')
        if (response.status === 200) {
            return response?.data
        } else {
            return error
        }
    } catch (e) {
        return e 
    }
}

export default useFetch