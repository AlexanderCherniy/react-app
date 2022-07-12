import { useSelector } from 'react-redux';
import { NavLink, Navigate } from 'react-router-dom';
import { AppState } from '../../redux/store-redux';
import incapsClasses from './Header.module.scss';
import Login from './Login';
import UnLogin from './Unlogin';
import { Col, Input, MenuProps, Row, Layout, Menu, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { OldURL } from '../../noc/oldURL';
import { SubmitButton } from 'formik-antd';
let noPhoto =
  'https://images.theconversation.com/files/449089/original/file-20220301-25-ckck4y.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
const Header: React.FC = (props) => {
  const headerLinks = useSelector((state: AppState) => state.header.headerLinks)
  const userData = useSelector((state: AppState) => state.auth)
  const items1: MenuProps['items'] = ['1', '2', '3'].map(key => ({
    key,
    label: `nav ${key}`,
  }));
  type HeaderLinkType = {
    text: string
  }
  const HeaderArh: React.FC<HeaderLinkType> = (props) => {
    if (props.text === 'SETTINGS') return <NavLink className={incapsClasses.header__li} to='/settings'>SETTINGS</NavLink>
    return (
      <li className={incapsClasses.header__li}>{props.text}</li>
    )
  }
  const { Search } = Input;
  const { Header, Content, Sider } = Layout;
  const headerShort = headerLinks.map(link => <HeaderArh key={link.id} text={link.text} />)
  const onSearch = (value: string) => {
    window.location.href = `https://social-network.samuraijs.com/api/1.0/users?page=1&count=9&term=${value}&friend=null`
  }
  return (
    <div>
      <Header style={{ marginBottom: '20px' }} className="header">
        <Row >
          <Col span={5}>
            <div>
              <img style={{ width: '200px', height: '65px' }} src='https://img.favpng.com/23/5/9/web-development-web-design-software-development-web-developer-png-favpng-mbCGqwpp8f0gqqSfgwXAsyQGq.jpg' />
            </div>
          </Col>
          <Col span={5}>
            <div>
              <Search style={{marginTop: '10px'}} size='large' placeholder="Find Users By Api..." enterButton  onSearch={onSearch} />
            </div>
          </Col>
          <Col span={7}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
          </Col>
          <Col span={2}>
            <li className={incapsClasses.header__logo}>
              {userData.isAuth === true
                ? <NavLink to='/profile'>
                  <img style={{ borderRadius: '50%', height: '60px' }} src={userData.photo === null ? noPhoto : userData.photo} alt='headerAva' />
                </NavLink>
                : <></>
              }

              {/* <Login isAuth={userData.isAuth} login={userData.login} />
            <UnLogin isAuth={userData.isAuth} /> */}
            </li>
          </Col>
          <Col span={2}>
            {/* <Login isAuth={userData.isAuth} login={userData.login} /> */}
            <UnLogin isAuth={userData.isAuth} />
          </Col>
        </Row>
      </Header>
      {/* <header className={incapsClasses.header}>
      <div className={incapsClasses.header__container}>
        <ul className={incapsClasses.header__list}>
          <li className={incapsClasses.header__logo}>
            <NavLink to='/profile'>
              <img src={userData.photo === null ? noPhoto : userData.photo} alt='headerAva' />
            </NavLink>
            <Login isAuth={userData.isAuth} login={userData.login} />
            <UnLogin isAuth={userData.isAuth} />
          </li>
          {headerShort}
        </ul>
      </div>
    </header> */}
    </div>
  )
}
export default Header