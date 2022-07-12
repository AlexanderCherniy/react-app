
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppState } from '../../redux/store-redux';
import itemSideBar from './SideBar.module.css';
import {SmileOutlined, CustomerServiceOutlined,FileTextOutlined,BellOutlined, PlayCircleOutlined, 
  ThunderboltOutlined,
  UserOutlined, UserAddOutlined, MessageOutlined , SettingOutlined , FileOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import {  Col, MenuProps,  } from 'antd';
import {  Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect } from 'react'
import { OldURL } from '../../noc/oldURL';
type ShowProps = {
  isAuth: boolean
  SideBarInfo: any
  AnonimSideBarInfo: any
}

const { Header, Content, Sider } = Layout;

const ArraySideBar = [{ id: 1, to: '/profile', text: 'PROFILE' },
{ id: 2, to: '/massages', text: 'MESSAGES' },
{ id: 3, to: '/users', text: 'USERS!' },
{ id: 4, to: '/music', text: 'MUSIC' },
{ id: 5, to: '/games', text: 'GAMES' },
{ id: 6, to: '/gays', text: 'GAYS' },
{ id: 7, to: '/help', text: 'HELP' },
{ id: 8, to: '/settings', text: 'SETTINGS' },
{ id: 9, to: '/friends', text: 'FRIENDS' },
{ id: 10, to: '/news', text: 'NEWS' },
]

// const items2TypeArray = [UserOutlined, LaptopOutlined,UserOutlined, NotificationOutlined, UserOutlined,
//   UserOutlined, UserOutlined, UserOutlined, UserOutlined, UserOutlined]
//@ts-ignore
// const items2: MenuProps['items'] = items2TypeArray.map(
//   (icon, index) => {
//     if(ArraySideBar.length >= items2TypeArray.length ){
//     const key = String(index + 1);
//       return {
//         key: `sub${key}`,
//         icon: React.createElement(icon),
//         label: ` ${[ArraySideBar].map((object,j)=> object[index].text)}`,
//         children: new Array(1).fill(ArraySideBar).map((object, j) => {
//         const subKey = index * 1 + j + 1;
//           return {
//             key: subKey,
//             label: <NavLink style={{backgroundColor: '#f0f2f5'}} to={object[index].to}>{object[index].text}</NavLink> ,
//           }
//         })

//       }
//     }
//   }
// );
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<NavLink style={{backgroundColor: '#f0f2f5'}} to={'/profile'}>{'PROFILE'}</NavLink>, '1', <UserOutlined />),
  getItem(<NavLink style={{backgroundColor: '#f0f2f5'}} to={'/massages'}>{'MESSAGES'}</NavLink>, '2', <MessageOutlined />),
  getItem(<NavLink style={{backgroundColor: '#f0f2f5'}} to={'/users'}>{'USERS'}</NavLink>, '3', <UserAddOutlined />),
  getItem(<NavLink style={{backgroundColor: '#f0f2f5'}} to={'/music'}>{'MUSIC'}</NavLink>, '4', <CustomerServiceOutlined />),
  getItem(<NavLink style={{backgroundColor: '#f0f2f5'}} to={'/games'}>{'GAMES'}</NavLink>, '5', <PlayCircleOutlined />),
  getItem(<NavLink style={{backgroundColor: '#f0f2f5'}} to={'/help'}>{'HELP'}</NavLink>, '6', <QuestionCircleOutlined />),
  getItem(<NavLink style={{backgroundColor: '#f0f2f5'}} to={'/settings'}>{'SETTINGS'}</NavLink>, '7', <SettingOutlined />),
  getItem('News', 'sub2', <BellOutlined />, [
    getItem(<NavLink style={{backgroundColor: '#f0f2f5'}} to={'/news/politics'}>{'Politics'}</NavLink>, '9', <FileTextOutlined />),
    getItem(<NavLink style={{backgroundColor: '#f0f2f5'}} to={'/news/fun'}>{'Fun'}</NavLink>, '10', <SmileOutlined />),
    getItem(<NavLink style={{backgroundColor: '#f0f2f5'}} to={'/news/sport'}>{'Sport'}</NavLink>, '11',<ThunderboltOutlined />),
    getItem(<NavLink style={{backgroundColor: '#f0f2f5'}} to={'/news/games'}>{'Games'}</NavLink>, '12',<PlayCircleOutlined />),
  ]),
  getItem('Files', '15', <FileOutlined />),
];


const Show: React.FC<ShowProps> = (props) => {

  if (props.isAuth === true) {
    return props.SideBarInfo
  } else return props.AnonimSideBarInfo
}
type SideBarArhType = {
  to: string
  text: string
  id?: number
}
export const SideBarArh: React.FC<SideBarArhType> = props => {
  return (
    <li className={itemSideBar.item}>
      <NavLink to={props.to} className={(link) => link.isActive ? itemSideBar.activeLink : itemSideBar.item}>{props.text}</NavLink>
    </li>
  )
}
let SideBar: React.FC = props => {
  const selectedSideBarLinks = useSelector((state:AppState)=>state.sideBar.selectedSideBarLinks)
    return (
      <Col span={5}> 
        <div>
        <Sider style={{float: 'right'}} width={200} className="site-layout-background">
          <Menu
            mode="inline"
            // defaultSelectedKeys={[`${selectedSideBarLinks[0].id}`]}
            defaultSelectedKeys={[`1`]}
            // defaultOpenKeys={[`sub${selectedSideBarLinks[0].id}`]}
            defaultOpenKeys={[`sub1`]}
            style={{ height: '100%',backgroundColor: '#f0f2f5',borderRight: 0 }}
            items={items}
          />
        </Sider>
      </div>
      </Col>
    )
  // }
  // else return (
  //   <div>
  //   <Sider width={250} className="site-layout-background">
  //     <Menu
  //       mode="inline"
  //       defaultSelectedKeys={[`${selectedSideBarLinks[0].id}`]}
  //       defaultOpenKeys={[`sub${selectedSideBarLinks[0].id}`]}
  //       style={{ height: '100%', borderRight: 0 }}
  //       items={items2}
  //     />
  //   </Sider>
  // </div>
  // )
}
const SideBarUrlContainer = OldURL(SideBar)
export default SideBarUrlContainer