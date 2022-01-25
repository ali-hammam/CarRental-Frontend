import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import { Row, Col, Button, Form, Input } from 'antd';
import './registration.css';
import SelectCountry from '../../Components/GeneralComponents/SelectCountry';


const OwnerRegistration = ({setCredentials, countries}) => {

  const onFinish = (values) => setCredentials({type:'owner', state_id:selectedState ,...values});
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
        <SelectCountry countries={countries} setSelectedState={setSelectedState}/>
        <Col xl={8}>
          <Form.Item wrapperCol={{ offset: 6, span: 0 }}>
            <Button type="primary" htmlType="submit" size='large' onSubmit={() =><Navigate to="/" />}>
              Register
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default OwnerRegistration
