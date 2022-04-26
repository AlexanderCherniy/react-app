import incapsClasses from './Header.module.css';


const HeaderArh = props =>{
  return(
    <li className={incapsClasses.header__li}>{props.text}</li>
  )
}
let Header = props=>{
    const headerShort = props.state.headerLinks.map(l => <HeaderArh text={l.text}/>)
    return(
        <header className={incapsClasses.header}>
          <div className= {incapsClasses.header__container}>
            <ul className={incapsClasses.header__list}>
              <li className={incapsClasses.header__logo}><img  src="https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_User-Avatar-Profile-Photo-01-256.png" alt='headerBall'></img></li>
              {headerShort}
            </ul>
          </div>
        </header>
    )
}
export default Header
// const HeaderArh = props =>{
//   return(
//     <li className={incapsClasses.header__li}>{props.text}</li>
//   )
// }
// let Header = props=>{
//   const headerShort = props.state.headerLinks.map(l => <HeaderArh text={l.text}/>)