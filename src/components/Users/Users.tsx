import classes from './Users.module.scss'
import User from './User/User'
import SlicedPages from './SlicedPages'
import ErrorMassage from '../Errors/ErrorUsersPage'
import { useDispatch, useSelector } from "react-redux";
import { fillUsers as fillUsersI, downloadUsers as downloadUsersI, followUsers as followUsersI, unfollowUsers as unfollowUsersI, actions } from "../../redux/users-reducer";
import React, { useEffect, useState } from "react";
import { getError, getUsers } from "../../redux/users-reselects";
import { AppState } from "../../redux/store-redux";
import { OldURL } from "../../noc/oldURL";
import { createField, Input } from '../../Forms/Forms'
import { Formik } from 'formik'
import { Form, Select, SubmitButton } from 'formik-antd'
import 'antd/dist/antd.css';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import BreadCrumbContainer from '../BreadCrumb/BreadCrumb';
const Users: React.FC = props => {
    const { Option } = Select;
    const [usersNotFound, setUsersNotFound] = useState(false)
    const usersState = useSelector(getUsers)
    const pageSize = useSelector((state: AppState) => state.usersPage.pageSize)
    const totalCount = useSelector((state: AppState) => state.usersPage.totalCount)
    const currentPage = useSelector((state: AppState) => state.usersPage.currentPage)
    const loaderState = useSelector((state: AppState) => state.usersPage.loader)
    const isBlocked = useSelector((state: AppState) => state.usersPage.isBlocked)
    const term = useSelector((state: AppState) => state.usersPage.term)
    const searchParams = useSelector((state: AppState) => state.usersPage.searchParams)
    const error = useSelector(getError)
    const dispatch = useDispatch()

    //@ts-ignore
    const fillUsers = (p?: number, pageSize: number, term: string | null, searchParams: "null" | "true" | "false") => dispatch(fillUsersI(p, pageSize, term, searchParams))
    const checkUsers = (p: number, term: string | null, searchParams: "null" | "true" | "false") => fillUsers(p, pageSize, term, searchParams)
    const toggleErrorStatus = (status: boolean) => dispatch(actions.toggleErrorStatus(status))
    //@ts-ignore
    const followUsers = (id: number) => dispatch(followUsersI(id))
    //@ts-ignore
    const unfollowUsers = (id: number) => dispatch(unfollowUsersI(id))
    //@ts-ignore
    const downloadUsers = (usersStateLength: number, currentPage: number, pageSize: number, term: string | null, searchParams: "null" | "true" | "false") => dispatch(downloadUsersI(usersStateLength, currentPage, pageSize, term, searchParams))
    const navigate = useNavigate()
    const search = useLocation()

    let [searchParam, setSearchParams] = useSearchParams();
    const newTerm = searchParam.get("term") || ""
    const newFriend = searchParam.get("friend")
    const newCount = searchParam.get("count") || 9
    const newPage = searchParam.get("page") || currentPage
    const setCurrentPage = (p: number = +newPage) => dispatch(actions.pagesNums(p))
    useEffect(() => {
        navigate(`/users${search.search}`)
        setCurrentPage(+newPage)
    }, [])
    useEffect(() => {
        downloadUsers(usersState.length, +newPage, newCount as number, newTerm, newFriend as "true" | "false" | "null")
        if (usersState.length === 0) setUsersNotFound(true)
        else setUsersNotFound(false)
        navigate(`/users?page=${currentPage}&count=${newCount}&term=${newTerm}&friend=${newFriend === "null" ? "null" : newFriend === "true" ? "true" : "false"}`)
    }, [usersState, search.search, currentPage])
    return <Formik
        initialValues={{ term: newTerm, searchParams: newFriend }}
        onSubmit={async values => {
            //@ts-ignore
            fillUsers(1, pageSize, values.term, values.searchParams)
            navigate(`/users?page=${newPage}&count=${pageSize}&term=${values.term}&friend=${values.searchParams === "null" ? "null" : values.searchParams === "true" ? "true" : "false"}`)
        }}>

        <main style={{marginLeft: 10}}>
            <BreadCrumbContainer page='Users' containerPage='UsersPage' />
            <Form style={{marginBottom: 10}}>
                <div style={window.innerWidth <= 450 ? {} : { display: 'flex', gap: 5 }}>
                    {createField(classes.findUsers, 'term', Input, "Find Users...")}
                    <Select name="searchParams" style={{ width: '130px', marginRight: 5 }} defaultValue="null">
                        <Option value="null">All</Option>
                        <Option value="true">Only Followed</Option>
                        <Option value="false">Only UnFollowed</Option>
                    </Select>
                    <SubmitButton>FIND</SubmitButton>
                </div>
            </Form>
            {usersNotFound === true ? <div>NOT FOUND</div>

                : <div style={window.innerWidth <= 1200 ? { display: 'flex', flexDirection: 'column', gap: '50px' } : { display: 'flex', gap: '25px' }}>
                    <div style={{ maxWidth: '650px' }} className={classes.users}>
                        <ErrorMassage toggleErrorStatus={toggleErrorStatus} error={error} />
                        <div className={classes.numsContainer}>
                            <div>
                                <SlicedPages searchParams={searchParams} term={term} totalCount={totalCount} pageSize={pageSize}
                                    currentPage={currentPage} checkUsers={checkUsers} />
                            </div>
                        </div>
                        <div className={classes.loaderContainer}>
                            {loaderState === true ? <div className={classes.loaderSpin}></div> : ""}
                        </div>
                        <div style={window.innerWidth <= 597 ? { display: 'flex', flexDirection: 'column', alignItems: 'center' } : {maxWidth: 555}}>
                            <User isBlocked={isBlocked} usersState={usersState}
                                followUsers={followUsers} unfollowUsers={unfollowUsers} />
                        </div>
                    </div>
                    <div className={classes.instructationContainer}>
                        <div className={classes.instructation}>
                            <h2 className={classes.instructationTitle}>Who are they?</h2>
                            <div>These are people from the <b>"IT-KAMASUTRA"</b> channel who started learning <b>React</b></div>
                            <div>You can write to them in the <b>"Messages"</b> section, find out their <b>ID</b> here, or write to their social networks, which are in their <b>Profile</b></div>
                            <div style={{ textAlign: 'center' }}>
                        // Please note that some developers have not yet gotten around to customizing their profile using the <b>API</b>, they may not have data //
                            </div>
                            <div>
                                If the user does not respond to messages or social networks indicated by him in the profile, you can try to write in the <b>Chat</b>, he may see your message
                            </div>
                            <div>Сделай потом, чтобы на маленьких экранах, это пояснение было сверху, можно было его скрыть нажав на крестик, и это сохранялось в localStorage, чтобы потом не появлялось</div>
                        </div>
                    </div>
                </div>
            }
        </main>

    </Formik>
}
const UsersUrlContainer = OldURL(Users)
export default UsersUrlContainer