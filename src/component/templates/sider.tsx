import { useState } from 'react'
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const getItem = (label: string, key: string, icon?: React.ReactNode, children?: React.ReactNode[]) => {
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

  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  const handleClickMenu = (i: any) => {
    if(i.key === "1"){
      navigate('/todo_list')
    }else if (i.key === "2"){
      navigate('/todo_list/fetch_data')
    }
  }

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
      <Menu theme="dark" mode="inline" items={items} onClick={(i) => handleClickMenu(i)} />
    </Sider>
  )
}

export default Sider_Component;