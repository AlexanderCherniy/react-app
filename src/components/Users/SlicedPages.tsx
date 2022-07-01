import classes from './Users.module.scss'
type Props = {
    totalCount: number
    pageSize: number
    currentPage: number
    checkUsers: (p:number)=> void
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
    return (
        <>{slicedPages.map(p => {
            return <span key={p} onClick={() => { props.checkUsers(p) }} className={props.currentPage === p ? classes.activeNum : classes.noactiveNum}>
                {p}
            </span>
        })}</>
    )
}
export default SlicedPages