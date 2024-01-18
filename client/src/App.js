import { useState } from 'react'
import './App.css';
import { Radio, Form, Input, Select, Space, Button, List, Typography } from 'antd'

//library to help make HTTP Requests
import axios from "axios"

function App() {
  const BASE_URL = "<<CHANGE THIS TO THE URL OF YOUR SERVER>>"

  const [items, setItems] = useState([
  ])

  const [action, setAction] = useState('getAll');
  const handleActionChange = (e) => {
    setAction(e.target.value);
  };

  // TODO: Make HTTP request to /getAll endpoint
  const getAll = async () => {

    // make sure to use the response to update the 'items' state!
    
  }

  // TODO: Make HTTP request to /add endpoint
  const add = async (params) => {

  }

  // TODO: Make HTTP request to /delete endpoint
  const remove = async (params) => {

  }

  // TODO: Make HTTP request to /update endpoint
  const update = async (params) => {

  }

  // TODO: Make HTTP request to /getByCat endpoint
  const getByCat = async (params) => {

  }

  return (
    <div className="App">
      <h1>Shopping List</h1>

      <div className="Body">
        <div className="Form">

          <Radio.Group value={action} onChange={handleActionChange}>
            <Radio.Button value="getAll">Get All</Radio.Button>
            <Radio.Button value="add">Add</Radio.Button>
            <Radio.Button value="delete">Delete</Radio.Button>
            <Radio.Button value="update">Update</Radio.Button>
            <Radio.Button value="getByCat">Get By Category</Radio.Button>
          </Radio.Group>

          {action == "getAll" ? 
          <div className="FormBody"> 
            <Form onFinish={getAll} labelCol={{ span: 8 }} wrapperCol={{ span: 5 }}>
                <Button type="primary" htmlType="submit">
                  Get All Items
                </Button>
            </Form>
          </div> : action == "add" ? 
          <div className="FormBody">
            <Form onFinish={add} labelCol={{ span: 8 }} wrapperCol={{ span: 5 }}>
              <Form.Item label="Name" name="name">
                <Input style={{ width: 300 }} />
              </Form.Item>
              <Form.Item label="Category" name="category">
                <Select
                  // defaultValue="Food"
                  style={{ width: 120 }}
                  // onChange={handleCatChange}
                  options={[
                    { value: 'Food', label: 'Food' },
                    { value: 'Bathroom', label: 'Bathroom' },
                    { value: 'Kitchen', label: 'Kitchen' },
                    { value: 'Other', label: 'Other' },
                  ]}
                />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Add Item
              </Button>
            </Form>
          </div> : action == "delete" ?
          <div className="FormBody">
            <Form onFinish={remove} labelCol={{ span: 8 }} wrapperCol={{ span: 5 }}>
              <Form.Item label="Existing Name" name="existingName">
                <Input style={{ width: 300 }} />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Delete Item
              </Button>
            </Form>
          </div> : action == "update" ?
          <div className="FormBody">
            <Form onFinish={update} labelCol={{ span: 8 }} wrapperCol={{ span: 5 }}>
              <Form.Item label="Existing Name" name="existingName">
                <Input style={{ width: 300 }} />
              </Form.Item>
              <Form.Item label="New Name" name="newName">
                <Input style={{ width: 300 }} />
              </Form.Item>
              <Form.Item label="New Category" name="newCategory">
                <Select
                  // defaultValue="Food"
                  style={{ width: 120 }}
                  // onChange={handleCatChange}
                  options={[
                    { value: 'Food', label: 'Food' },
                    { value: 'Bathroom', label: 'Bathroom' },
                    { value: 'Kitchen', label: 'Kitchen' },
                    { value: 'Other', label: 'Other' },
                  ]}
                />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Update Item
              </Button>
            </Form>
          </div> : action == "getByCat" ? 
          <div className="FormBody">
            <Form onFinish={getByCat} labelCol={{ span: 8 }} wrapperCol={{ span: 5 }}>
              <Form.Item label="Category" name="category">
                <Select
                  // defaultValue="Food"
                  style={{ width: 120 }}
                  // onChange={handleCatChange}
                  options={[
                    { value: 'Food', label: 'Food' },
                    { value: 'Bathroom', label: 'Bathroom' },
                    { value: 'Kitchen', label: 'Kitchen' },
                    { value: 'Other', label: 'Other' },
                  ]}
                />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Get Item by Category
              </Button>
            </Form>
          </div> : <div>none</div>}
        </div>

        <div className="Collection">
          <List
            header={<div>My List</div>}
            bordered
            dataSource={items}
            size="large"
            renderItem={(item) => (
              <List.Item>
                <div style={{"marginRight": "100px"}}>{item.name}</div>
                <div>{item.category}</div>
              </List.Item>
            )}
          />
        </div>

      </div>

      

    </div>
  );
}

export default App;
