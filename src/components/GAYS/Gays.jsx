import classes from './Gays.module.css'
import React from 'react'
const Gays = props =>{
    let noPhoto = "https://www.eyedocs.co.uk/components/com_community/assets/user-anon.png"
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pageMass = []
    for(let i = 1;i<=pagesCount;i++){
        pageMass.push(i)
    }
    let curP = props.nowPage;
    let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
    let curPL = curP + 5;
    let slicedPages = pageMass.slice( curPF, curPL);
    return(
        <div className={classes.gays}>
        <div className="title">GAYS</div>
        {slicedPages.map(n=>{
            return(
            <span onClick={()=>{props.pageNumsFunc(n)}} className={props.nowPage === n && classes.activeNum || classes.noactiveNum}>{n}</span>
            )
        })}
        {props.users.map(u=>{
            return(
            <div key={u.Id} className={classes.users}>
                <div className={classes.user}>
                    <img className={classes.photo} src={u.photos.small===null ? noPhoto: u.photos.small} alt='img'/>
                    <span className={classes.Id}>{u.id}_ID</span>
                    <span className={classes.name}>{u.name}</span>
                    {u.followed
                    ? <button className={classes.unfollow} onClick={()=>{props.toggleFollowAC(u.id)}}>UNFOLLOW</button>
                    : <button className={classes.follow} onClick={()=>{props.toggleFollowAC(u.id)}}>FOLLOW</button>
                        }
                    </div>
                </div>
            )
        })}
        </div>
        )
    }
export default Gays