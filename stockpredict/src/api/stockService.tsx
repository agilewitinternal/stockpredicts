import axios from 'axios'

import { apiConfig } from './config';


export const getTopGainers = async (params?:any) => {
    try {
        const { trend_type,country,language } = params
        const headers: any = {headers: {'X-RapidAPI-Key': apiConfig?.apiKey, 
        'X-RapidAPI-Host': apiConfig?.apiHost}}
        const res = await axios.get(`${apiConfig?.baseUrl}?trend_type=${trend_type}&country=${country}&language=${language}`,headers);
        console.log("TEST====0",res)
        return res.data
    }
    catch (error) {
        console.log("Error===",error)
        throw error;
    }

}