import { useState } from 'react'
import {
    Layout, 
    Menu
} from 'antd';

const { Sider } = Layout;

const  getItem = (label, key, icon, children) => {
    return {
      key,
      icon,
      children,
      label,
    };
  }

const items = [
    getItem('Auto Delete Todo List', '1'),
    getItem('Fetch Data', '2'),
    
];

const Sider_Component = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
    )
}

export default Sider_Component ;