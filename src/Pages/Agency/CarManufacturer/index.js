import React, { useEffect } from 'react'
import { Form, Row, Col, Input, Button } from 'antd';
import AgencyRequest from '../../../Requests/AgencyRequest';


const AddCarManufacturer = ({agency}) => {
  const agencyRequest = AgencyRequest.getInstance();
  const {mutate: sendData, error: errorResponse, isSuccess} = agencyRequest.useManufacturerMutate();

  useEffect(() => {
    if(isSuccess){
      document.location.reload();
    }
  }, [isSuccess]);
  
  const onFinish = (values) => {
    const data = {agency_id: agency['id'], ...values};
    console.log(data);
    sendData({'manufacturer': data});
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
            label="Manufacturer Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Manufacturer Name is required.',
              },
              {
                pattern: /^[a-zA-Z ]+$/,
                message: 'Manufacturer Name can only include letters.',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        
        <Form.Item wrapperCol={{ offset: 0, span: 0 }}>
            <Button type="primary" htmlType="submit">
              Add Manufacturer
            </Button>
          </Form.Item>
      </Row>
    </Form>
  )
}

export default AddCarManufacturer
