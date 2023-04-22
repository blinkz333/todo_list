import {
    Layout, 
} from 'antd';
import styles from '../templates/footer.module.css'

const { Footer } = Layout;

const Footer_Component = () => {
    return(
        <Footer className={styles.footer}>
        <div className={styles.textFooter}>Ant Design ©2023 Created by Ant UED</div>
        </Footer>
    )
}

export default Footer_Component;