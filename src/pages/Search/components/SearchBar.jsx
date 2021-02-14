import React,{useState} from "react";
import {Dropdown, Menu,Input, Row, Col, Form, DatePicker, Select, message as messageInfo, Table, ConfigProvider} from "antd";
const {Option} = Select;
import { DownOutlined, SearchOutlined, SmileOutlined } from '@ant-design/icons';
import styles from './SearchBar.less';
import {Search} from '../../../api/search'


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 },
  };

  const customizeRenderEmpty = () => (
    <div style={{ textAlign: 'center' }}>
      <SmileOutlined style={{ fontSize: 20 }} />
      <p>There's no movie found</p>
    </div>
  );
const genreOptions = [
    "Adventure","Fantasy","Animation","Drama","Horror","Action","Comedy","History","Western","Thriller","Crime","Documentary","Science Fiction",
    "Mystery","Music","Romance","Family","War","TV Movie"
]
const SearchBar = (props) => {
    const [filterShown, setShown] = useState(false);
    const [form] = Form.useForm();
    const [title, setTitle] = useState("");

    const handleShownClicked = () => {
        setShown((pre) => {
            return !pre;
        });
    }

    const onTitleChanged = (e) => {
        setTitle(e.target.value);
    }


    const handleSearch = () => {
        const params = {
            title: title,
            ...form.getFieldsValue(),
            year: form.getFieldValue("year")?form.getFieldValue("year").format("YYYY"):null
        };
        Search(params).then((res) => {
            if(res.resultCode === 210) {
                messageInfo.success(res.message);
                props.handleMovies(res.movies);
            }else if(res.resultCode === 211) {
                props.handleMovies([]);
                messageInfo.warning(res.message);
            }else {
                messageInfo.error(res.message);
            }
        })
    }

    const onFinish = (values) => {
        console.log(values);
    }

    function onChange(date, dateString) {
        console.log(date, dateString);
      }
    return(
        <div>
          <div className={styles['search-container']}>
            <span className={styles['title']}>Title</span>
            <Input className={styles['search-input']} onChange={onTitleChanged}/>
            <span className={styles['search-button']} onClick={handleSearch}>
                <SearchOutlined style={{ fontSize: '20px' }}/>  
            </span>
            <a className="ant-dropdown-link" onClick={handleShownClicked}>
                <DownOutlined />
            </a>
          </div>
          {filterShown ? 
          <div className={styles['filter-container']}>
              <Form className={styles['filter-form']}
               {...layout}
               form={form}
               onFinish={onFinish}>
                <Row>
                    <Col span={12}>
                        <Form.Item label="Year" name="year">
                            <DatePicker onChange={onChange} picker="year" placeholder="Select Year" />
                        </Form.Item>
                        <Form.Item label="Director" name="director" placeholder="Input Director">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Genre" name="genre">
                            <Select placeholder="Select Genre" allowClear>
                                {genreOptions.map(item => (
                                    <Option value={item} key={item}>{item}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Result Per Page" name="limit" initialValue={10}>
                            <Select >
                                <Option value={10}>10</Option>
                                <Option value={25}>25</Option>
                                <Option value={50}>50</Option>
                                <Option value={100}>100</Option>
                            </Select>
                        </Form.Item>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="Sort by" name="orderby" initialValue="title">
                                    <Select>
                                        <Option value="title">title</Option>
                                        <Option value="rating">rating</Option>
                                        <Option value="year">year</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name="direction" initialValue="asc">
                                    <Select>
                                        <Option value="asc">asc</Option>
                                        <Option value="desc">desc</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            
                            
                        </Row>
                        
                    </Col>
                </Row>
              </Form>
          </div>
          :null}
        </div>
        
    )
}

export default SearchBar;