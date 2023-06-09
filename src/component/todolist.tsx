import {
    Layout, 
    Col , 
    Row , 
    Select, 
    Button,
} from 'antd';

import { useEffect, useState } from 'react';
import styles from './todolist.module.css';
import Swal from 'sweetalert2';
import Header from './templates/header';
import Footer from './templates/footer';
import Sider from './templates/sider';
import { generateProductType } from './libs/globalfunction';

const { Content } = Layout;

type Product = {
  type: string;
  name: string;
};

type Fruit = {
    type : string,
    name : string
}

type Vegetable = {
    type : string,
    name : string
}

const data: Product[] = [
  {
    type: 'Fruit',
    name: 'Apple',
  },
  {
    type: 'Vegetable',
    name: 'Broccoli',
  },
  {
    type: 'Vegetable',
    name: 'Mushroom',
  },
  {
    type: 'Fruit',
    name: 'Banana',
  },
  {
    type: 'Vegetable',
    name: 'Tomato',
  },
  {
    type: 'Fruit',
    name: 'Orange',
  },
  {
    type: 'Fruit',
    name: 'Mango',
  },
  {
    type: 'Fruit',
    name: 'Pineapple',
  },
  {
    type: 'Vegetable',
    name: 'Cucumber',
  },
  {
    type: 'Fruit',
    name: 'Watermelon',
  },
  {
    type: 'Vegetable',
    name: 'Carrot',
  },
];

const Todolist = (): JSX.Element => {
   
    const [default_data, setDefaultData] = useState<Product[]>(data);
    const [fruit_item , setFruitItem] = useState<Fruit[]>([])
    const [veg_item , setVegItem] = useState<Vegetable[]>([])
    const [select_value, setSelectValue] = useState<string | null>(null);

    useEffect(() => {
        const timer = setInterval(() => {
          if (fruit_item.length > 0) {
            const new_data = [...fruit_item];
            new_data.splice(0, 1);
            setFruitItem(new_data);
            checkDefaultData(fruit_item[0]);
          }
        }, 5000);
        return () => clearInterval(timer);
      }, [fruit_item]);

      useEffect(() => {
        const timer = setInterval(() => {
           if(veg_item.length > 0){
               const new_data = [...veg_item]
               new_data.splice(0,1)
               setVegItem(new_data);
               checkDefaultData(veg_item[0])
           }
         }, 5000);
         return () => clearInterval(timer);
   },[veg_item])

      const checkDefaultData = (value: Fruit | Vegetable) => {
        const original_data = default_data;
        const found = original_data.find((item) => item.name === value.name);
        if (found) {
          original_data.forEach((items, index) => {
            if (items.name === found.name) {
              original_data.splice(index, 1);
            }
          });
          setDefaultData(original_data);
        } else {
          original_data.push(value);
          setDefaultData(original_data);
        }
      };

      const onChange = (value: string) => {
        setSelectValue(value);
      };

      const checkDuplicate = (obj: any[], find_type: { name: string, type: string }, type: number) => {
        const find_dup = obj.filter(items => items.name === find_type.name )
        if(find_dup.length > 0){
          obj.map((items , index) => {
            if(items.name === find_type.name){
              obj.splice(index,1)
            }
          })
          checkDefaultData(find_type)
          if(type === 1){
            setFruitItem(obj)
          }else{
            setVegItem(obj)
          }
        }else{
          checkDefaultData(find_type)
          obj.push(find_type)
          if(type === 1){
            setFruitItem(obj)
          }else{
            setVegItem(obj)
          }
        }
      }

      const onSubmitToTodoBox = () => {
        const fruit_item_obj: Fruit[] = [...fruit_item];
        const veg_item_obj: Vegetable[] = [...veg_item];
        const default_data_obj: (Fruit | Vegetable)[] = [...default_data];
    
        if (select_value) {
          const find_type = default_data_obj.find((items) => select_value === items.name);
          if (find_type === undefined) {
            const type_product = generateProductType(select_value);
            const obj = { name: select_value, type: type_product };
            if (type_product === 'Fruit') {
              checkDuplicate(fruit_item_obj, obj, 1);
            } else {
              checkDuplicate(veg_item_obj, obj, 2);
            }
          } else if (find_type.type === 'Fruit') {
            checkDuplicate(fruit_item_obj, find_type, 1);
          } else if (find_type.type === 'Vegetable') {
            checkDuplicate(veg_item_obj, find_type, 2);
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please select product !',
          });
        }
      };

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
    
            <Row>
                <Col span={20} push={4}>
                    <div className={styles.text}>Select Product</div>
                    <br/>
                    <Select
                        showSearch
                        placeholder="Select Product"
                        optionFilterProp="children"
                        onChange={onChange}
                        className={styles.selectBox}
                        filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                        options={[
                    {
                        value: 'Apple',
                        label: 'Apple',
                    },
                    {
                        value: 'Broccoli',
                        label: 'Broccoli',
                    },
                    {
                        value: 'Mushroom',
                        label: 'Mushroom',
                    },
                    {
                        value: 'Banana',
                        label: 'Banana',
                    },
                    {
                        value: 'Tomato',
                        label: 'Tomato',
                    },
                    {
                        value: 'Orange',
                        label: 'Orange',
                    },
                    {
                        value: 'Mango',
                        label: 'Mango',
                    },
                    {
                        value: 'Pineapple',
                        label: 'Pineapple',
                    },
                    {
                        value: 'Cucumber',
                        label: 'Cucumber',
                    },
                    {
                        value: 'Watermelon',
                        label: 'Watermelon',
                    },
                    {
                        value: 'Carrot',
                        label: 'Carrot',
                    },
                        ]} 
                    />
                    {"\n"}
                    <Button type="primary" className={styles.select_button} onClick={() => onSubmitToTodoBox()}>Enter</Button>
                    <br/>
                    <br/>
                    <Row>
                    <Col span={10}>
                    <div className={styles.FruitBox}>
                        <div className={styles.fruit_box_text}>
                            <div className={styles.fruit_text}>
                                Fruits
                            </div>
                        </div>
                        <br/>
    
                        {
                            fruit_item.map((items) => (
                                <>
                                <div className={styles.fruit_child} >
                                    <div className={styles.txt}>{items.name}</div>
                                </div>
                                <br/>
                                </>
                            ))
                        }
                        
                       
                    </div>
                    </Col>
                    <Col span={14} >
                    <div className={styles.VegBox}>
                        <div className={styles.veg_box_text}>
                            <div className={styles.fruit_text}>
                                Vegetables
                            </div>
                        </div>
                        <br/>
                        {
                            veg_item.map((items) => (
                                <>
                                <div className={styles.fruit_child} >
                                    <div className={styles.txt}>{items.name}</div>
                                </div>
                                <br/>
                                </>
                            ))
                        }
                    </div>
                    </Col>
                    </Row>
                    
                   
                </Col>
                <Col span={4} pull={20}>
                {
                    default_data.map((items , key) => (
                        <>
                        <div className={styles.box} key={key}>
                            <div className={styles.txt}>{items.name}</div>
                        </div>
                        <br/>
                        </>
                    ))
                }
                </Col>
            </Row>
    
              
            </Content>
            
            <Footer />
          
          </Layout>
        </Layout>
      );
    };
    
    export default Todolist