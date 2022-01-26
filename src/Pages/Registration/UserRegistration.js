import React, { useState } from 'react'
import { Row, Col, Button, Form, Input } from 'antd';
import './registration.css';
import SelectCountry from '../../Components/GeneralComponents/SelectCountry';
import ImageUploader from '../../Components/GeneralComponents/ImageUploader';

const UserRegistration = ({setCredentials, countries}) => {
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const onFinish = (values) => previewTitle && previewImage && setCredentials({ previewImage,previewTitle, type:'user', state_id:selectedState ,...values});
  const [selectedState, setSelectedState] = useState();
  
  return (
    <Form
      name="registration"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={onFinish}
      style={{marginTop:'10%'}}
    >
      <Row>
        <Col xl={8}>
          <Form.Item
            label="First Name"
            name="fname"
            rules={[
              {
                required: true,
                message: 'Your first name is required.',
              },
              {
                pattern: /^[a-zA-Z0-9]+$/,
                message: 'Name can only include letters and numbers.',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        
        <Col xl={8}>
          <Form.Item
            label="Middle Name"
            name="mname"
            rules={[
              {
                required: true,
                message: 'Your middle name is required.',
              },
              {
                pattern: /^[a-zA-Z0-9]+$/,
                message: 'Name can only include letters and numbers.',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        
        <Col xl={8}>
          <Form.Item
            label="Last Name"
            name="lname"
            rules={[
              {
                required: true,
                message: 'Your last name is required.',
              },
              {
                pattern: /^[a-zA-Z0-9]+$/,
                message: 'Name can only include letters and numbers.',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      
      <Row>
        <Col xl={8}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Your email is required.',
              },
              {
                pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                message: 'Email is wrong.',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col xl={8}>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'password is required.',
              }
            ]}
          >
            <Input.Password placeholder="password..."/>
          </Form.Item>
        </Col>

        <Col xl={8}>
          <Form.Item
            label="SSN"
            name="ssn"
            rules={[
              {
                required: true,
                message: 'Your ssn is required.',
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      
      <Row>
        <Col xl={8}>
          <Form.Item
            label="Driver License"
            name="driver_licence"
            rules={[
              {
                required: true,
                message: 'driver license is required.',
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <SelectCountry countries={countries} setSelectedState={setSelectedState}/>
      </Row>
      
      <Row>
        <Col xl={8}>
        <Form.Item
          label="Image"
          name="image"
        >
          <ImageUploader setPreviewImage={setPreviewImage} setPreviewTitle={setPreviewTitle}/>
        </Form.Item>
        </Col>
      
      <Form.Item wrapperCol={{ offset: 24, span: 0 }}>
        <Button type="primary" htmlType="submit" size='large'>
          Register
        </Button>
      </Form.Item>
      </Row>
    </Form>
  );
}

export default UserRegistration
