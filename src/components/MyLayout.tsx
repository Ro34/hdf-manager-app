import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    DashboardOutlined
} from '@ant-design/icons';
import {Dropdown, Layout, Menu, message, theme, } from 'antd';
import type {MenuProps} from "antd";
import { useNavigate,useLocation } from "react-router-dom"
import {defaultImg as logo} from "../utils/tools";

const { Header, Sider, Content } = Layout;
const sideMenuData =[
        {
            key: '/admin/dashboard',
            icon: <DashboardOutlined />,
            label: '看板',
        },
        {
            key: '/admin/medicine/',
                icon: <VideoCameraOutlined />,
            label: '药品管理',
            children: [{
            label: "药品分类",
            key: '/admin/medicine/categories'
        },{
            label: "药品信息",
            key: "/admin/medicine/list" ,
        }]

        },
        {
            key: '/admin/articles',
                icon: <UploadOutlined />,
            label: '文章管理',
            children: [{
            label: "文章分类",
            key: '/admin/articles/categories'
        },{
            label: "文章信息",
            key: "/admin/articles/list" ,
        }]
        },{
            key: '/admin/users',
                icon: <UserOutlined />,
                label: '会员信息',
        },
]


const findOpenKeys = (key:string) =>{
    const result: string[] = []
    const findInfo = (arr:any)=>{
        arr.forEach((item: any)=>{
            if (key.includes(item.key)){
                result.push(item.key)
                if (item.children) {
                    findInfo(item.children)
                }
            }
        })
    }

    findInfo(sideMenuData)
    return result
}
const MyLayout = ({children}:any) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate()
    const {pathname} = useLocation()
    const tmpOpenKeys = findOpenKeys(pathname)
    const items:MenuProps['items']=[{label : ' 个人中心',key : ' userCenter',onClick:()=>{message.info("暂未开通")}},{label : ' 退出',key : ' logOut',onClick:()=>{navigate("/")}}]
    return (
        <Layout style={{ 'width' : '100vw',height : ' 100vh'}} id="components-layout-demo-custom-trigger">
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <img src={logo} alt="doctor"/>
                </div>
                <Menu
                    theme="light"
                    mode="inline"
                    defaultOpenKeys={tmpOpenKeys}
                    defaultSelectedKeys={tmpOpenKeys}
                    onClick = {({key}) => {
                        // alert(key);
                        navigate(key)
                    }}
                    items={sideMenuData}
                />
            </Sider>


            <Layout className="site-layout">
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    <span className='app-title'>HDF-manager</span>
                    <Dropdown menu={{items}}>
                        <img src={logo} alt={"superuser"} style={{width:'50px',float:"right",marginTop:'16px',marginRight:"80px",}}/>
                    </Dropdown>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default MyLayout;