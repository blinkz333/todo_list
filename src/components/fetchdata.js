
import { useState , useEffect} from 'react'
import {
    Layout, 
} from 'antd';

import Header from './templates/header'
import Footer from './templates/footer'
import Sider from './templates/sider'
import Axios from 'axios'

import styles from './fetchdata.module.css'

const { Content } = Layout;





const Fetch_Data = () => {

    const [ data , setData] = useState([])

    useEffect(() => {
      fetchData()
    },[])

    
    const fetchData = async () => {
      const {data : user} = await Axios.get('https://dummyjson.com/users')
      findDepartment(user.users)
    }

    const findDepartment = data => {

      const department = data.reduce((x , y) => {
        (x[y.company.department] = x[y.company.department] || []).push(y);
        return x;
      },{})

      SummaryData(department)
     
    }

    const SummaryData = dep_data => {
      
      const department = []

      Object.keys(dep_data).filter((items , index) => {
          
          const countMale = dep_data[items].filter(obj => obj.gender === 'male').length;
          const countFemale = dep_data[items].filter(obj => obj.gender === 'female').length;
          const minAge = dep_data[items].reduce((prev, current) => (prev.age < current.age) ? prev : current);
          const maxAge = dep_data[items].reduce((prev, current) => (prev.age > current.age) ? prev : current);
          const modeAge =  findModeAge (dep_data[items])
          const summaryHair =  generateHair(dep_data[items])
          const summaryAddress = generateAddress(dep_data[items])


            const newObj = {[Object.keys(dep_data)[index]] : { 
                male : countMale , 
                female : countFemale , 
                ageRange:`${minAge.age}-${maxAge.age}`,
                ageMode : modeAge,
                hair : summaryHair,
                addressUser : summaryAddress
            }};
            department.push(newObj)
          
            
      })
      console.log("department :" ,department)
      setData(department)
    }

    const findModeAge = (obj) => {
      let sumAge = 0;
      obj.forEach(items => {
        sumAge += items.age;
      });
      return Math.floor(sumAge / obj.length)
    }

    const generateHair = (obj) => {
      
      const hair = obj.reduce((x , y) => {
        (x[y.hair.color] = x[y.hair.color] || []).push(y);
        return x;
      },{})


      Object.keys(hair).filter((items) => {
        hair[items] = hair[items].length
      })
      

      return hair
    }

    const generateAddress = (obj) => {
      const address = obj.reduce((x , y) => {
        (x[y.firstName + y.lastName] = x[y.firstName] || []).push(y);
        return x;
      },{})

      Object.keys(address).filter((items) => {
        address[items] = address[items][0].address.postalCode
      })

      return address

     
    }

   
    
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
           <div className={styles.text}> Open console Inspect to check data</div>
        </Content>
        
        <Footer/>
      
      </Layout>
    </Layout>
    )

}

export default Fetch_Data
