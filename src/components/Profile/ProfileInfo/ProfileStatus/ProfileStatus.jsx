import React from 'react';
import incClass from '../../Profile.module.css';
let ref = React.createRef()
const ProfileStatus = (props) => {
    return (
        <div>
            <span className={incClass.status}>Status: </span>
            {props.item.userId === props.userData.id
                ? props.changeText === false
                    ? <span className={incClass.statusText} onDoubleClick={props.addChangeText}>{props.statusText}</span>
                    : <input ref={ref} autoFocus={true} onBlur={props.removeChangeText}
                        onChange={() => props.changeTextFunc(ref)} value={props.statusText} />
                : <span>{props.item.aboutMe !== null
                    ? props.item.aboutMe
                    : `Я ${props.item.fullName} и я крут :)`}</span>
            }
        </div>
    )
}
export default ProfileStatus
