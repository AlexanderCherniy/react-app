import './Post.css';
let Post = (props)=>{
    return(
      <div className= 'post'>
          <div className='post__avatar'> <img src={props.img} alt="" /> </div>
          <div className='post__comment'>{props.comment}</div>
      </div>
    )
}
export default Post