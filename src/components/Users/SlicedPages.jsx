import classes from './Users.module.css'

const SlicedPages = ({ totalCount, pageSize, currentPage, checkUsers }) => {
    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let curP = currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);
    return (
        slicedPages.map(p => {
            return <span onClick={() => { checkUsers(p) }} className={currentPage === p ? classes.activeNum : classes.noactiveNum}>
                {p}
            </span>
        })
    )
}
export default SlicedPages