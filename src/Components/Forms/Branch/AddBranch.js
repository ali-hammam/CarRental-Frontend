import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Input, Button } from 'antd';
import CountryRequest from '../../../Requests/CountryRequest';
import SelectCountry from '../../GeneralComponents/SelectCountry';
import BranchRequest from '../../../Requests/BranchRequest';

const AddBranch = ({agency}) => {
  const [countries] = useState([]);
  const [selectedState, setSelectedState] = useState();
  const countryRequest = CountryRequest.getInstance();
  const {data , isSuccess} = countryRequest.useCountries();
  const branchRequest = BranchRequest.getInstance();
  const {mutate: sendData, isSuccess:isBranchSucess} = branchRequest.useBranchMutate();


  useEffect(() => {
    if(isSuccess){
      countries.push(...data);
    }
  },[isSuccess]);

  useEffect(() => {
    if(isBranchSucess){
      document.location.reload();
    }
  }, [isBranchSucess]);
  
  const onFinish = (values) => {
    const data = {agency_id: agency['id'], ...values};
    sendData({'branch': data});
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
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'branch name is required.',
              },
              {
                pattern: /^[a-zA-Z0-9 ]+$/,
                message: 'Name can only include letters and numbers.',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        
        <Col xl={8}>
          <Form.Item
            label="Branch Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: 'Phone is required.',
              },
              {
                pattern: /^[0-9]+$/,
                message: 'Phone can only include numbers.',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        
        <Col xl={8}>
          <Form.Item
            label="Tax Record: "
            name="tax_record"
            rules={[
              {
                required: true,
                message: 'Tax Record is required.',
              },
              {
                pattern: /^[a-zA-Z0-9 ]+$/,
                message: 'Tax Record can only include letters and numbers.',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <SelectCountry countries={countries} setSelectedState={setSelectedState}/>
        <Form.Item wrapperCol={{ offset: 0, span: 0 }}>
            <Button type="primary" htmlType="submit">
              Add Branch
            </Button>
          </Form.Item>
      </Row>
    </Form>
  )
}

export default AddBranch
