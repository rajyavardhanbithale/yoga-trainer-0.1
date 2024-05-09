import axios from "axios"
import { YogaPoseAPI } from "../interface/CustomInterface"

const useFetch = () => {
    const error: string = "error in fetching api"


    const fetchAPI = async (url: string) => {

        try {
            const response = await axios.get<YogaPoseAPI[]>(url)
            if (response.status === 200) {
                return response?.data
            } else {
                return error
            }
        } catch (e) {
            return e
        }
    }

    return { fetchAPI }

}

export default useFetch