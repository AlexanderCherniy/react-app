import './Post.scss';
type Props = {
  img: string
  comment: string
}
let Post:React.FC<Props> = (props)=>{
    return(
      <div className= 'post'>
          <div className='post__avatar'> <img src={props.img} alt="avatar" /> </div>
          <div className='post__comment'>{props.comment}</div>
      </div>
    )
}
export default Post