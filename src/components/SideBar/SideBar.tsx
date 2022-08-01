
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppState } from '../../redux/store-redux';
import itemSideBar from './SideBar.module.css';
import {
  WechatOutlined, CustomerServiceOutlined, FileTextOutlined, PlayCircleOutlined,
  UserOutlined, UserAddOutlined, MessageOutlined, SettingOutlined, QuestionCircleOutlined,
  MenuUnfoldOutlined, MenuFoldOutlined
} from '@ant-design/icons';
import { Button, MenuProps, } from 'antd';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react'
import { OldURL } from '../../noc/oldURL';
import { SideBarActions } from '../../redux/sideBar-reducer';
type ShowProps = {
  isAuth: boolean
  SideBarInfo: any
  AnonimSideBarInfo: any
}

const { Header, Content, Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<NavLink style={{ backgroundColor: '#f0f2f5' }} to={'/profile'}>{'PROFILE'}</NavLink>, '1', <UserOutlined />),
  getItem(<NavLink style={{ backgroundColor: '#f0f2f5' }} to={'/massages'}>{'MESSAGES'}</NavLink>, '2', <MessageOutlined />),
  getItem(<NavLink style={{ backgroundColor: '#f0f2f5' }} to={'/chat'}>{'Chat'}</NavLink>, '3', <WechatOutlined />),
  getItem(<NavLink style={{ backgroundColor: '#f0f2f5' }} to={'/users'}>{'USERS'}</NavLink>, '4', <UserAddOutlined />),
  getItem(<NavLink style={{ backgroundColor: '#f0f2f5' }} to={'/news'}>{'News'}</NavLink>, '5', <FileTextOutlined />),
  // getItem(<NavLink style={{ backgroundColor: '#f0f2f5' }} to={'/music'}>{'MUSIC'}</NavLink>, '6', <CustomerServiceOutlined />),
  // getItem(<NavLink style={{ backgroundColor: '#f0f2f5' }} to={'/games'}>{'GAMES'}</NavLink>, '7', <PlayCircleOutlined />),
  getItem(<NavLink style={{ backgroundColor: '#f0f2f5' }} to={'/help'}>{'HELP'}</NavLink>, '6', <QuestionCircleOutlined />),
  getItem(<NavLink style={{ backgroundColor: '#f0f2f5' }} to={'/settings'}>{'SETTINGS'}</NavLink>, '7', <SettingOutlined />),
];

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
let SideBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const selectedSideBarLinks = useSelector((state: AppState) => state.sideBar.selectedSideBarLinks)
  const dispatch = useDispatch()
  const setSelectedSideBarLinks = () => dispatch(SideBarActions.setSelectedSideBarLinks())
  return (
    <div style={window.innerWidth <= 600 ? { display: 'grid', gridTemplateColumns: '1fr' } : { display: 'grid', gridTemplateColumns: '0.85fr 3fr' } }>
      {window.innerWidth <= 600 ? <></> : <div></div>} 

      <Sider collapsed={window.innerWidth <= 1000 ? collapsed : undefined} style={collapsed === true ? window.innerWidth <= 600 ? {float: 'right', background: 'transparent'}  : {float: 'right', marginLeft: '25px', background: 'transparent'} : { float: 'right', background: 'transparent' }} width={200} className="site-layout-background">
        {window.innerWidth <= 1000
          ? <Button type="primary" onClick={toggleCollapsed} style={{marginBottom: 16, marginLeft: 10}}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          : <></>}
        <Menu
          mode="inline"
          defaultSelectedKeys={[`${selectedSideBarLinks[0]?.id}`]}
          defaultOpenKeys={[`sub${selectedSideBarLinks[0]?.id}`]}
          style={{ height: '100%', backgroundColor: '#f0f2f5', borderRight: 0 }}
          items={items}
        />
      </Sider>
    </div>
  )
}

const SideBarUrlContainer = OldURL(SideBar)
export default SideBarUrlContainer