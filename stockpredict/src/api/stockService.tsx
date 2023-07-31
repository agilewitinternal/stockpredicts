import axios from 'axios'

import { apiConfig } from './config';


export const getStocks = async (param?:any) => {
    try {
        const res = await axios.get(`${apiConfig?.baseUrl}stable/stock/market/list/gainers?token=${apiConfig?.apiKey}`);
        return res
    }
    catch (error) {
        console.log("Error===",error)
        throw error;
    }

}