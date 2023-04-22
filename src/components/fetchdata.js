import {
    Layout, 
} from 'antd';

import Header from './templates/header'
import Footer from './templates/footer'
import Sider from './templates/sider'

const { Content } = Layout;

const Fetch_Data = () => {
    return (
<Layout
      style={{
        minHeight: '100vh',
      }}
    >
      
      <Sider />
      
      <Layout className="site-layout">
        <Header />
        
        <Content
          style={{
            margin: '0 16px',
          }}
        >
            <div>HI</div>
        </Content>
        
        <Footer/>
      
      </Layout>
    </Layout>
    )

}


export default Fetch_Data;