import {
    theme,
    Layout, 
} from 'antd';
const { Header } = Layout;

const Header_Component = () => {

    const {
        token: { colorBgContainer },
        } = theme.useToken();

    return (
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
    )
}

export default Header_Component;