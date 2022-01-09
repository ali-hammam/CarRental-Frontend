import React, { useEffect, useState } from 'react'
import { Form, Row, Col, Input, Button, Select } from 'antd';
import AgencyRequest from '../../../Requests/AgencyRequest';

const {Option} = Select;

const AddCarType = ({agency}) => {
  const [manufacturers, setManufacturer] = useState([]);
  const agencyRequest = AgencyRequest.getInstance();
  const {mutate:sendData, data:manufacturersData, isSuccess} = agencyRequest.usGetManufacturersByAgency();
  const {mutate:sendCarType, isSuccess:isCarTypeMutationSuccess} = agencyRequest.useCarTypeMutate();

  useEffect(()=>{
      sendData({agency: agency['id']});
  },[]);

  useEffect(() => {
    if(isSuccess){
      manufacturersData && setManufacturer([...manufacturersData['data']['manufacturers']]);
    }
  }, [isSuccess]);

  useEffect(() => {
    if(isCarTypeMutationSuccess){
      document.location.reload();
    }
  }, [isCarTypeMutationSuccess])

  
  const onFinish = (values) => {
    console.log(values);
    sendCarType({carType: values});
  }

  return (
    <Form
      name="registration"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={onFinish}
      style={{marginTop:'2%'}}
    >
      <Row>
        <Col xl={8}>
          <Form.Item
            label="Manufacturer"
            name="manufacturer_id"
            rules={[
              {
                required: true,
                message: 'Manufacturer is required.',
              },
            ]}
          >
            <Select
              placeholder="Select The Manufacturer"
              allowClear
            >
              {
                manufacturers && manufacturers.map((manufacturer)=>{
                  return (
                    <Option key={manufacturer['id']} value={manufacturer['id']}>
                      {manufacturer['name']}
                    </Option>
                  )
                })
              }
            </Select>
          </Form.Item>

        </Col>

        <Col xl={8}>
          <Form.Item
            label="Model"
            name="model"
            rules={[
              {
                required: true,
                message: 'Model is required.',
              },
              {
                pattern: /^[a-zA-Z0-9 ]+$/,
                message: 'Model can only include letters and numbers.',
              },
            ]}
          >
            <Input />
          </Form.Item>

        </Col>

        <Col xl={8}>
          <Form.Item
            label="Type"
            name="type"
            rules={[
              {
                required: true,
                message: 'Type is required.',
              },
            ]}
          >
            <Select
              placeholder="Select Car Type"
              //onChange={onCountryChange}
              allowClear
            >
              <Option key={1} value='SEDAN'>
                SEDAN
              </Option>

              <Option key={2} value='COUPE'>
                COUPE
              </Option>

              <Option key={3} value='SPORT'>
                SPORT
              </Option>

              <Option key={4} value='HATCHBACK'>
                HATCHBACK
              </Option>

              <Option key={5} value='MINIVAN'>
                MINIVAN
              </Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col xl={11}>
          <Form.Item
            label="Number Of Seats"
            name="number_of_seats"
            rules={[
              {
                required: true,
                message: 'Number Of Seats is required.',
              },
              {
                pattern: /^[0-9]+$/,
                message: 'Number Of Seats can only include numbers.',
              },
            ]}
          >
            <Input type='number'/>
          </Form.Item>
        </Col>

        <Col xl={8}>
          <Form.Item
            label="Year"
            name="year"
            rules={[
              {
                required: true,
                message: 'year is required.',
              },
            ]}
          >
            <Select
              placeholder="Select Model Year"
              allowClear
            >
              {
                Array.from({length:43},(v,k)=> k+1980+'').map((number)=>{
                  return (
                    <Option key={number} value={number}>
                      {number}
                    </Option>
                  )
                })
              }
            </Select>
          </Form.Item>
        </Col>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Car Type
        </Button>
      </Form.Item>
      </Row>
    </Form>
  )
}

export default AddCarType
