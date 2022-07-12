import c from "./PoliticsNews.module.scss";
import 'antd/dist/antd.css';
import { createField, Input } from "../../../Forms/Forms";
import { Formik } from "formik";
import { Form, SubmitButton } from "formik-antd";
import { useDispatch, useSelector } from "react-redux";
import { getNews as getNewsI} from "../../../redux/news-reducer";
import { AppState } from "../../../redux/store-redux";
const PoliticsNews: React.FC = props => {
    const news = useSelector((state: AppState)=> state.news.news)
    console.log(news);
    
    const dispatch = useDispatch()
    //@ts-ignore
    const getNews = (request: string)=> dispatch(getNewsI(request))
    return <Formik
        initialValues={{request: ''}}
        // validate={validateLogin}
        onSubmit={async values => {
            getNews(values.request)
        }}>
        <div>
            <div>
                <h2>Politics News</h2>
            </div>
            <Form className={c.ShieldRequestForm}>
                {createField(c.userRequestForm, 'request', Input, "Enter your request...")}
                <SubmitButton>FIND</SubmitButton>
                {news !== [] ? <News/> : <Familiarization/>}
            </Form>
        </div>
    </Formik>

}
const News: React.FC = props => {
    const news = useSelector((state: AppState)=> state.news.news)
    return(
        <div>
            {news.map((item, index) =>{
                return (
                    <div key={index + 1}>
                        <h2>Title: {item.title}</h2>
                        <h3>Author: {item.author}</h3>
                        <div>Content: {item.content}</div>
                        <div>Description: {item.description}</div>
                        <div>Date: {item.publishedAt}</div>
                        <div>Official State: {item.url}</div>
                        <img style={{width: '600px'}} src={item.urlToImage} alt="photo"/>
                    </div>
                )
            })}
        </div>
    )
}
const Familiarization: React.FC = props => {
    return(
        <div>
            Familiarization
        </div>
    )
}
export default PoliticsNews