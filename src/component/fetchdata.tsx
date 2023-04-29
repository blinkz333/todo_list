import { useState, useEffect } from 'react';
import { Layout } from 'antd';

import Header from './templates/header';
import Footer from './templates/footer';
import Sider from './templates/sider';
import Axios from 'axios';

import styles from './fetchdata.module.css';
import {
  find_Department,
  findModeAge,
  generateHair,
  generateAddress,
} from './libs/globalfunction';

const { Content } = Layout;

const Fetch_Data = (): JSX.Element => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    findDepartment();
  }, [data]);

  const fetchData = async () => {
    const { data: user } = await Axios.get('https://dummyjson.com/users');
    setData(user.users);
  };

  const findDepartment = async () => {
    const department = await find_Department(data);
    SummaryData(department);
  };

  const SummaryData = (dep_data: any) => {
    const department: any[] = [];

    Object.keys(dep_data).filter(async (items, index) => {
      const countMale = dep_data[items].filter(
        (obj: any) => obj.gender === 'male'
      ).length;
      const countFemale = dep_data[items].filter(
        (obj: any) => obj.gender === 'female'
      ).length;
      const minAge = dep_data[items].reduce(
        (prev: any, current: any) => (prev.age < current.age ? prev : current)
      );
      const maxAge = dep_data[items].reduce(
        (prev: any, current: any) => (prev.age > current.age ? prev : current)
      );
      const modeAge = findModeAge(dep_data[items]);
      const summaryHair = generateHair(dep_data[items]);
      const summaryAddress = generateAddress(dep_data[items]);

      const newObj = {
        [Object.keys(dep_data)[index]]: {
          male: countMale,
          female: countFemale,
          ageRange: `${minAge.age}-${maxAge.age}`,
          ageMode: modeAge,
          hair: summaryHair,
          addressUser: summaryAddress,
        },
      };
      department.push(newObj);
    });

    if (department.length > 0) {
      console.log('department :', department);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider />
      <Layout className="site-layout">
        <Header />
        <Content style={{ margin: '0 16px' }}>
          <div className={styles.text}>
            Open console Inspect to check data
          </div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Fetch_Data;