import mClas from './Massages.module.css'
import React from "react";
let Massages = props => {
    let createRef = React.createRef()
    let createPost = () => {
        props.createPost()
    }
    let massageChange = () => {
        let text = createRef.current.value
        props.massageChange(text)
    }
    return (
        <main className={mClas.massages}>
            <div className={mClas.container}>
                <div className={mClas.users}>
                    {props.shortUsers}
                </div>
                <div className={mClas.userMassages}>
                    <div className={mClas.massage}>
                        {props.shortMassages}
                    </div>
                    <div className={mClas.formsContainer}>
                        <textarea placeholder='Напишите сообщение...' className={mClas.textarea}
                            ref={createRef} onChange={massageChange} value={props.newMassageText} />
                        <button className={mClas.button} onClick={createPost} type='send'>Send</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Massages;