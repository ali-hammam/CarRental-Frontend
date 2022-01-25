import React, { useEffect, useState } from 'react'
import { Form, Row, Col, Input, Button, Select, Collapse } from 'antd';
import AgencyRequest from '../../../Requests/AgencyRequest';
import CarRequest from '../../../Requests/CarRequest';

const {Option} = Select;
const { Panel } = Collapse;

const AddCar = ({agency, branch_id}) => {
  const [carTypes, setCarTypes] = useState([]);
  const agencyRequest = AgencyRequest.getInstance();
  const carRequest = CarRequest.getInstance();
  const {mutate:sendData, data:carTypesData, isSuccess} = agencyRequest.usGetCarTypeByAgency();
  const {mutate:sendCar, isSuccess:isCarMutationSuccess} = carRequest.useCarMutate();

  useEffect(()=>{
      sendData({agency: agency['id']});
  },[]);

  useEffect(() => {
    if(isSuccess){
      setCarTypes([...carTypesData['data']['data']])
    }
  }, [isSuccess]);

  useEffect(() => {
    if(isCarMutationSuccess){
      document.location.reload();
    }
  }, [isCarMutationSuccess]);

  
  const onFinish = (values) => {
    const data = {branch_id, ...values};
    sendCar({car: data});
  }

  return (
    <Collapse accordion>
      <Panel header="Add New Car" key="5">
        <Form
          name="addCar"
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
                label="Car Type"
                name="car_type_id"
                rules={[
                  {
                    required: true,
                    message: 'Car Type is required.',
                  }
                ]}
              >
                <Select
                  placeholder="Select Car Type"
                  allowClear
                >
                  {
                  carTypes && carTypes.map((carType)=>{
                    return <Option key={carType['id']} value={carType['id']}>{carType['model']}</Option>
                  })
                  }
                </Select>
              </Form.Item>
            </Col>

            <Col xl={8}>
              <Form.Item
                label="Color"
                name="color"
                rules={[
                  {
                    required: true,
                    message: 'Color is required.',
                  },
                  {
                    pattern: /^[a-zA-Z]+$/,
                    message: 'Color can only include letters.',
                  },
                ]}
              >
                <Input />
              </Form.Item>

            </Col>

            <Col xl={8}>
              <Form.Item
                label="Is Active"
                name="is_active"
                rules={[
                  {
                    required: true,
                    message: 'Car Status is required.',
                  }
                ]}
              >
                <Select
                  placeholder="Select Car Status"
                  allowClear
                >
                  <Option key={1} value='1'>
                    YES
                  </Option>

                  <Option key={2} value='0'>
                    NO
                  </Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col xl={9}>
              <Form.Item
                label="In Maintainence:"
                name="maintenance"
                wrapperCol={{ offset: 1, span: 12 }}
                rules={[
                  {
                    required: true,
                    message: 'Type is required.',
                  },
                ]}
              >
                <Select
                  placeholder="Select Car Maintenance"
                  allowClear
                >
                  <Option key={1} value='1'>
                    YES
                  </Option>

                  <Option key={2} value='0'>
                    NO
                  </Option>
                </Select>
              </Form.Item>
            </Col>

            <Col xl={7}>
              <Form.Item
                label="Hourly Price"
                name="hourly_price"
                rules={[
                  {
                    required: true,
                    message: 'Price is required.',
                  },
                  {
                    pattern: /^[0-9]+$/,
                    message: 'Price can only include numbers.',
                  },
                ]}
                wrapperCol={{ offset: 1, span: 14 }}
              >
                <Input type='number'/>
              </Form.Item>
            </Col>

            <Col xl={8}>
              <Form.Item
                label="Tax Rate"
                name="tax_rate"
                rules={[
                  {
                    required: true,
                    message: 'Tax Rate is required.',
                  },
                  {
                    pattern: /^[0-9]+$/,
                    message: 'Price can only include numbers.',
                  },
                ]}
              >
                <Input placeholder='Select TAX RATE Percentage'/>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Car
            </Button>
          </Form.Item>
        </Form>
      </Panel>
    </Collapse>
  )
}

export default AddCar
