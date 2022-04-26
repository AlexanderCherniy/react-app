import mClas from './Massages.module.css'
import React from "react";
let Massages = props =>{
    let createRef = React.createRef()
    let createPost = ()=>{
        props.createPost()
    }
    let massageChange = ()=>{
        let text = createRef.current.value
        props.massageChange(text)
    }
    return(
        <main className={mClas.massages}>
                <div className={mClas.container}>
                    <div className={mClas.users}>
                        {props.shortUsers}
                    </div>
                    <div className={mClas.userMassages}>
                            {props.shortMassages}
                        <div className={mClas.flexContainer}>
                            <textarea className={mClas.textarea} ref={createRef} onChange={massageChange} value={props.newMassageText}/>
                            <button onClick={createPost} type='send'>Send</button>
                        </div>
                    </div>
                </div>
        </main>
    )
}

    // let shortMassages = props.state.massages.map(massageEl=><Route path={massageEl.path} element={
    // <UsersMassages massageAnother={massageEl.massageAnother} massageYour={massageEl.massageYour}/>}/>)

 {/* <Routes>
  {shortMassages}
  </Routes> */}
export default Massages;