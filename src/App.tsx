import React, { useState } from 'react';
import { Route, Link, Routes } from 'react-router-dom'; // 导入 BrowserRouter 和 Link
import HomePage from './Home.tsx'
import './index.css';
import './App.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider } = Layout;
const Page1 = () => <div>Page 1</div>;

function Page2() {
  return (
    <div style={{backgroundColor:'green', height: '100vh'}}>
      <h2>Page2</h2>
    </div>
  );
}

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // const testClick = () => {
  //   console.log('test')
  // }

  // const items = [
  //   {
  //     key: '1',
  //     icon: <UserOutlined />,
  //     label: 'nav 1',
  //     onClick: testClick
  //   },
  //   {
  //     key: '2',
  //     icon: <VideoCameraOutlined />,
  //     label: 'nav 2',
  //   },
  //   {
  //     key: '3',
  //     icon: <UploadOutlined />,
  //     label: 'nav 3',
  //   },
  // ]

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        {/* <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        /> */}
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {/* 使用 Link 包裹 Menu.Item，实现点击菜单项跳转 */}
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/">nav 1</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/page1">nav 2</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to="/page2">nav 3</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Routes
        >
          <Route path="/" element={<HomePage/>} />
          <Route path="/page1" element={<Page1/>} />
          <Route path="/page2" element={<Page2/>} />
        </Routes>
      </Layout>
    </Layout>
  );
};

export default App;
