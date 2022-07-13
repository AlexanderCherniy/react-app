import { Dispatch } from 'react';
import { NewsApi } from '../api/news-api';
import { AllActionType, TypeFunction } from './store-redux';
type New = {
    author: string | null
    authors: string | null
    title: string
    media: string
    clean_url: string
    country: string
    excerpt: string
    is_opinion: false
    language: string
    link: string
    published_date: string
    published_date_precision: string
    rank: number
    rights: string
    summary: string
    topic: string
    twitter_account: string
    url: string
    _id: string
    _score: number
}
const initialState = {
    news: [] as Array<New>
}
type initialStateType = typeof initialState
const reducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'news-reducer/ADD_NEWS': {
            return {
                ...state,
                news: action.newNews
            }
        }
        default: {
            return state
        }
    }
}
type ActionType = ReturnType<AllActionType<typeof actions>>

export const actions = {
    addNews: (newNews: Array<New>) => ({ type: TypeFunction("news-reducer/ADD_NEWS"), newNews }),
}

export const getNews = (request: string) => async (dispatch: Dispatch<ActionType>) => {
    const response = await NewsApi.getPoliticsNews(request)
    dispatch(actions.addNews(response.data.articles))
}

export default reducer