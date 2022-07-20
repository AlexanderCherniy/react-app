import { useSelector } from 'react-redux';
import { NavLink, Navigate } from 'react-router-dom';
import { AppState } from '../../redux/store-redux';
import incapsClasses from './Header.module.scss';
import UnLogin from './Unlogin';
import { Col, Input, MenuProps, Row, Layout, Menu, Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
let noPhoto =
  'https://images.theconversation.com/files/449089/original/file-20220301-25-ckck4y.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
const Header: React.FC = (props) => {
  const userData = useSelector((state: AppState) => state.auth)
  const { Search } = Input;
  const { Header } = Layout;
  const onSearch = (value: string) => {
    window.location.href = `https://social-network.samuraijs.com/api/1.0/users?page=1&count=9&term=${value}&friend=null`
  }
  const menu = (
    <Menu style={{background: 'white'}}
      items={[
        {
          key: '1',
          label: (
            <UnLogin isAuth={userData.isAuth} />
          ),
        },
      ]}
    />
  );
  return (
    <div>
      <Header style={{ marginBottom: '20px' }} className="header">
        <Row style={window.innerWidth > 650 ? {display: 'grid', gridTemplateColumns: '5fr 5fr 7fr 2fr 2fr 1fr'} : {display: 'grid', gridTemplateColumns: '5fr 5fr 2fr 2fr 2fr 1fr'}}>
            <div>
              <img style={{minWidth: '150px' , maxWidth: '200px', height: '65px', width: '100%' }} src='https://img.favpng.com/23/5/9/web-development-web-design-software-development-web-developer-png-favpng-mbCGqwpp8f0gqqSfgwXAsyQGq.jpg' />
            </div>
            <div>
             {window.innerWidth > 700 
              ?  <Search style={{marginLeft: '50px',marginTop: '10px', minWidth: '150px'}} size='large' placeholder="Find Users By Api..." enterButton  onSearch={onSearch} />
              : <></>
             } 
            </div>
          {window.innerWidth > 700 
          ? 
              <div></div>
          : 
              <div></div>
          }
            <li className={incapsClasses.header__logo}>
                <NavLink to='/profile'>
                  <img style={{ borderRadius: '50%', height: '60px' }} src={userData.photo === null ? noPhoto : userData.photo} alt='headerAva' />
                </NavLink>
            </li>
            <Dropdown trigger={['click']} overlay={menu} placement="bottom">
              <MenuOutlined style={{color: "white", fontSize: '25px', lineHeight: '65px', marginTop: '3px'}}/>
            </Dropdown>
        </Row>
      </Header>
    </div>
  )
}
export default Header