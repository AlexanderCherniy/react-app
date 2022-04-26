import incClass from '.././Profile.module.css';
let ProfileInfo = props=>{
  let shortDataProfInfo = props.state.profile.map(item=>{
    return(
    <div>
        <div className={incClass.Photo}> <img src={item.favoriteImg} alt=''></img> </div>
        <div className={incClass.Profile}>
          <div className={incClass.Profile__img}> <img src={item.photo}></img> </div>
          <div className= {incClass.Profile__text}>
            <div className={incClass.Profile__name}>{item.name}</div>
              <div className= {incClass.ProfileInfo}>
                <div className={incClass.ProfileTextStyle}>{item.dateBirth}</div>
                <div className={incClass.ProfileTextStyle}>{item.city}</div>
                <div className={incClass.ProfileTextStyle}>{item.favoriteWebSite}</div>
                <div className={`${incClass.ProfileInfo_learn} ${incClass.ProfileMega}`}>LEARN MORE</div>
              </div>
          </div>
        </div>
      </div>
    )
  })
    return(
      <div>
      {shortDataProfInfo}
      </div>
    )
}
export default ProfileInfo