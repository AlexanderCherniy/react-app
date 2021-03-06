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
                <div >
                    {createField(c.userRequestForm, 'request', Input, "Enter your request...")}
                    <SubmitButton >FIND</SubmitButton>
                </div>
                {news !== [] ? <News/> : <Familiarization/>}
            </Form>
        </div>
    </Formik>

}
const News: React.FC = () => {
    const news = useSelector((state: AppState)=> state.news.news)
    return(
        <div> 
            {news.filter(item=> item.language === "en").map((item, index) =>{
                return (
                    <div className={c.newsItem}>
                        <div className={c.gridContainer} key={index + 1}>
                            <div className={c.mainText}>
                                <div className={c.Date}>{item.published_date}</div>
                                <h2 className={c.Title}>{item.title} <span className={c.Authors}>(c) {item.authors !== "" ? item.authors : "..."}</span> </h2>
                                <div className={c.Excerpt}>{item.excerpt}</div>
                                <div>Contacts: <span>Twitter: {item.twitter_account}</span></div>
                            </div>
                            <div className={c.img}>
                                <a href={item.link} target='_blank'>
                                    <img  src={item.media} alt="photo"/>
                                </a>
                                <div className={c.topic}>{item.topic}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
const Familiarization: React.FC = props => {
    return(
        <div> 
            Sorry, News is temporarily down on GitHub and Other Stites besides Localhost, I'll try to find another api soon
        </div>
    )
}
export default PoliticsNews