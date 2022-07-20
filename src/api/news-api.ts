import axios from 'axios'
const defaultAxios = axios.create({
    // baseURL: "https://newsapi.org/v2/everything",
    headers: {
        "x-api-key": "suCTxnCRGARbpep8sBpdyqmYhwkj2GXoPwcQtPzpjvM"
    },
})

export const NewsApi = {                                                                //Apple       //07-12-2022
    // getPoliticsNews: (request: string) =>  defaultAxios.get(`?q=${request}&from=2022-07-12&sortBy=popularity`).then(response => response)
    getPoliticsNews: (request: string) =>  defaultAxios.get(`https://api.newscatcherapi.com/v2/search?q=${request}&page_size=20`).then(response => response)
}

type ActionsType = ReturnType<typeof AC1> | ReturnType<typeof AC2>
const AC1 = ()=>{
    
}
const AC2 = ()=>{

}