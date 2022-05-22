import { connect } from "react-redux"
import { toggleFollowAC, usersAC, totalCountAC, pageNumsAC } from "../../redux/gays-reducer"
import Gays from "./Gays"
import * as axios from 'axios'
import React from 'react'
class GaysContainer extends React.Component{
    componentDidMount(){
        if(this.props.users.length === 0){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.nowPage}&count=${this.props.pageSize}`).then(response=>{
                this.props.usersAC(response.data.items)
                this.props.totalCountAC(response.data.totalCount)
            })
        }
    }
    pageNumsFunc = (n)=>{
        this.props.pageNumsAC(n)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${n}&count=${this.props.pageSize}`).then(response=>{
            this.props.usersAC(response.data.items)
        })
    }
    render(){
        return<Gays {...this.props} pageNumsFunc = {this.pageNumsFunc}/>
    }
}
const mapStateToProps = state =>{
    return{
        users: state.gaysPage.users,
        totalCount: state.gaysPage.totalCount,
        pageSize: state.gaysPage.pageSize,
        nowPage: state.gaysPage.nowPage,
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        usersAC: users=>{
            dispatch(usersAC(users))
        },
        toggleFollowAC: userId =>{
            dispatch(toggleFollowAC(userId))
        },
        totalCountAC: count=>{
            dispatch(totalCountAC(count))
        },
        pageNumsAC: nums=>{
            dispatch(pageNumsAC(nums))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GaysContainer)