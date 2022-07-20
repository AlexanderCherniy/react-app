import classes from './Users.module.scss'
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import React from 'react';
import { fillUsers as fillUsersI, downloadUsers as downloadUsersI, followUsers as followUsersI, unfollowUsers as unfollowUsersI, actions } from "../../redux/users-reducer";
import { useDispatch } from 'react-redux';
const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};


type Props = {
    totalCount: number
    pageSize: number
    currentPage: number
    term: string | null
    searchParams: "null" | "true" | "false"
    checkUsers: (p:number, term: string | null, searchParams: "null" | "true" | "false")=> void
}



const SlicedPages:React.FC<Props> = props => {
  
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);
    const dispatch = useDispatch()
    const setCurrentPage = (p: number)=> dispatch(actions.pagesNums(p))
    return (
        <>{slicedPages.map(p => {
            return <span key={p} onClick={() => { props.checkUsers(p, props.term, props.searchParams) }} className={props.currentPage === p ? classes.activeNum : classes.noactiveNum}>
                {p}
            </span>
        })}</>
    )
}
export default SlicedPages