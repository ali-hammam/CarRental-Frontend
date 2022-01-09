import React from 'react';
import { Button, Form, Input } from 'antd';
import AgencyRequest from '../../Requests/AgencyRequest';
import { useEffect } from 'react/cjs/react.development';

const AddAgency = () => {
  const agencyRequest = AgencyRequest.getInstance();
  const {mutate: sendData, error: errorResponse, data, isSuccess} = agencyRequest.useAgencyMutate();

  const onFinish = (values) => {
    sendData({'agency': values['agency_name']});
  };

  useEffect(() => {
    if(isSuccess){
      document.location.reload();
    }
  }, [isSuccess]);

  return (
    <>
    {<Form
      name='login'
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={onFinish}
      style={{marginTop:'10%'}}
    > 
      <Form.Item
        label="Agency Name"
        name="agency_name"
        rules={[
          {
            required: true,
            message: 'Agency Name is required.',
          },
          {
            pattern: /^[a-zA-Z0-9 ]+$/,
            message: 'Agency Name can only include letters and numbers.',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset:6, span: 0 }}>
        <Button type="primary" htmlType="submit">
          Add Agency
        </Button>
      </Form.Item>
    </Form>}
    </>
  )
}

export default AddAgency
