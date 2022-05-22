import { changeStatus } from "../../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";
import React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
class ProfileStatusContainer extends React.Component{
    state = {
        changeText: false,
    }
    componentDidMount=()=> {
        this.props.getStatus(this.props.userData.id)
    }
    addChangeText = ()=>{
        this.setState({
            changeText: true
        })
    }
    removeChangeText = ()=>{
        this.setState({
            changeText: false
        })
        this.props.updateStatus(this.props.statusText)
    }
    changeTextFunc = (ref)=>{
        this.props.changeStatus(ref.current.value)
    }
    render(){
        return(
            <ProfileStatus  {...this.props} addChangeText={this.addChangeText} removeChangeText={this.removeChangeText}
                           changeTextFunc={this.changeTextFunc} state={this.state}/>
        )
    }
}

let mapStateToProps = (state)=>{
    return{
        usersState: state.usersPage.users
    }
}
export default compose(
    connect(mapStateToProps,{changeStatus}),
)(ProfileStatusContainer)





// import { changeStatus } from "../../../../redux/profile-reducer";
// import ProfileStatus from "./ProfileStatus";
// import React from 'react';
// import { connect } from "react-redux";
// import { compose } from "redux";
// class ProfileStatusContainer extends React.Component{
//     state = {
//         changeText: false,
//         status: this.props.statusText
//     }
//     componentDidMount=()=> {
//         this.props.getStatus(this.props.userData.id)
//     }
//     addChangeText = ()=>{
//         this.setState({
//             changeText: true
//         })
//     }
//     componentDidUpdate(prevProps, prevState){
//         if(prevProps.statusText !== this.props.statusText){
//             this.setState({
//                 status: this.props.statusText
//             })
//         }
//     }
//     removeChangeText = ()=>{
//         this.setState({
//             changeText: false
//         })
//         this.props.updateStatus(this.state.status)
//     }
//     changeTextFunc = (ref)=>{
//         this.setState({
//             status: ref.current.value
//         })
//     }
//     render(){
//         return(
//             <ProfileStatus  {...this.props} addChangeText={this.addChangeText} removeChangeText={this.removeChangeText}
//                            changeTextFunc={this.changeTextFunc} state={this.state}/>
//         )
//     }
// }

// let mapStateToProps = (state)=>{
//     return{
//         usersState: state.usersPage.users
//     }
// }
// export default compose(
//     connect(mapStateToProps,{changeStatus}),
// )(ProfileStatusContainer)
