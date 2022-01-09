import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Input, Button, Select, Collapse } from 'antd';
import AgencyRequest from '../../../Requests/AgencyRequest';

const {Option} = Select;

const EditCar = ({agency}) => {
  const agencyRequest = AgencyRequest.getInstance();
  const { data: branchesData, isSuccess: isBranchSucess, isLoading: isBranchLoading } = agencyRequest.useBranch();
  const { mutate: sendBranch, data:carsData ,isSuccess: isCarsSucess } = agencyRequest.useCarByBranch();
  const { mutate: updateCar ,isSuccess: isCarsUpdateSucess } = agencyRequest.useEditCar();

  const [branches, setBranches] = useState([]);
  const [cars, setCars] = useState([]);
  
  useEffect(() =>{
    if(isBranchSucess){
      branchesData && setBranches(branchesData);
    }
  }, [isBranchSucess]);

  useEffect(() =>{
    if(isCarsSucess){
      carsData && setCars(carsData['data']['cars']);
    }
  }, [isCarsSucess]);

  useEffect(() =>{
    if(isCarsUpdateSucess){
      document.location.reload();
    }
  }, [isCarsUpdateSucess]);

  const [field, setField] = useState('');
  const onFinish = (values) => {
    console.log(values);
    updateCar({data: values})
  }

  const choosedField = (value) => {
    setField(value);
  }

  const onBranchChange = (value) => {
    sendBranch({branch: value})
  }

  return (
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
        <Col xl={9}>
          <Form.Item
            label="Choose Branch"
            name="branch_id"
            wrapperCol={{ offset: 1, span: 12 }}
            rules={[
              {
                required: true,
                message: 'Please choose Branch.',
              },
            ]}
          >
            <Select
              placeholder="Choose Branch Name"
              allowClear
              onChange={onBranchChange}
            >
              {
                branches && branches.map((branch)=>{
                  return(
                    <Option key={branch['id']} value={branch['id']}>
                      {branch['name']}
                    </Option>
                  )
                }) 
              }
            </Select>
          </Form.Item>
        </Col>
        
        <Col xl={7}>
          <Form.Item
            label="Choose Car"
            name="car_id"
            wrapperCol={{ offset: 1, span: 12 }}
            rules={[
              {
                required: true,
                message: 'Please choose Car.',
              },
            ]}
          >
            <Select
              placeholder="Choose Car"
              allowClear
              //onChange={onBranchChange}
            >
              {
                cars && cars.map((car)=>{
                  console.log(car)
                  return(
                    <Option key={car['id']} value={car['id']}>
                      {car['car_type']['model']}
                    </Option>
                  )
                }) 
              }
            </Select>
          </Form.Item>
        </Col>
              {console.log(cars)}
        <Col xl={8}>
          <Form.Item
            label="Choose Field"
            name="field"
            wrapperCol={{ offset: 1, span: 12 }}
            rules={[
              {
                required: true,
                message: 'Please choose field.',
              },
            ]}
          >
            <Select
              placeholder="Choose the editable field"
              allowClear
              onChange={choosedField}
            >
              <Option key={1} value='is_active'>
                isActive
              </Option>

              <Option key={2} value='maintenance'>
                Maintenance
              </Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        {field && <Col xl={8}>
          <Form.Item
            label={field}
            name={field}
            wrapperCol={{ offset: 1, span: 12 }}
            rules={[
              {
                required: true,
                message: 'Please choose field.',
              },
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
        </Col>}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Edit Car
            </Button>
          </Form.Item>
      </Row>
    </Form>
  )
}

export default EditCar
