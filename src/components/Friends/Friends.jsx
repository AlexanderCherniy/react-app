import React from 'react'
import FriendsC from './Friends.module.css'
const Friends = props=>{
    const totalPage = Math.ceil(props.totalCount / props.pageSize)
    let pageNums = []
    for(let i = 1;i<=totalPage;i++){
        pageNums.push(i)
    }
    let curP = props.pageStart;
    let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
    let curPL = curP + 5;
    let slicedPages = pageNums.slice( curPF, curPL);
    return(
        <div className={FriendsC.Friends}>
            <div className={FriendsC.container}>
            <div className='title'>Friends</div>
            <div>
            <input className={FriendsC.form} type='text' ref={props.getRef} onChange={props.changeFunc} value={props.newText}/>
            </div>
            {slicedPages.map(n=>{
                return <span onClick={()=>{props.updateCheckUsers(n)}} className={props.pageStart === n ? FriendsC.activeNum : ""}>{n}</span>
            })}
        {props.users.map(u=>{
        return(
        <div key={u.Id} className={FriendsC.user}>
            <img className={FriendsC.photo} src={u.photos.small===null ? "https://www.eyedocs.co.uk/components/com_community/assets/user-anon.png": u.photos.small} alt='img'/>
            <div>
            <div className={FriendsC.NameSurname}>{u.name}</div>
                {u.followed ?
                    <button className={FriendsC.unfollow} onClick={()=>{props.toggleFollowAC(u.id)}}>UNFOLLOW</button> :
                    <button className={FriendsC.follow}  onClick={()=>{props.toggleFollowAC(u.id)}}>FOLLOW</button>} 
                </div>
            </div>
                )
                })}
            </div>
        </div>
    )
}
export default Friends





           {/* <div className={FriendsC.location}>{u.address.city},{u.address.street}</div> */}