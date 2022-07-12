import axios from 'axios'
const defaultAxios = axios.create({
    baseURL: "https://newsapi.org/v2/everything",
    headers: {
        "Authorization": 'c90dc4e88d484b65b5740a0568e1fd25'
    },
})

export const NewsApi = {                                                                //Apple       //07-12-2022
    // getPoliticsNews: (request?: string, date?: string) =>  defaultNewsAxios.get(`?q=${request}&from=${date}&sortBy=popularity`).then(response => console.log(response))
    getPoliticsNews: (request: string) =>  defaultAxios.get(`?q=${request}&from=2022-07-12&sortBy=popularity`).then(response => response)
}