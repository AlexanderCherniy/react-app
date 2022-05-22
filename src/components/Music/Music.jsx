import MusicClass from './Music.module.css';
let Music = (props)=>{
    return(
      <div className={MusicClass.music}>
          <div className={MusicClass.container}>
            <div className='title'>Music</div>
          </div>
      </div>
    )
}
export default Music