import PhotoClass from './Photos.module.css'

let Photos = props =>{
    return(
        <div className={PhotoClass.photos}>
            <div className={PhotoClass.container}>
                <div className='title'>Photos</div>
            </div>
        </div>
    )
}
export default Photos