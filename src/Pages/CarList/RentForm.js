import { DatePicker, Select, TimePicker, Form, Button } from 'antd';
import React, { useEffect, useState } from 'react'
import RentRequest from '../../Requests/RentRequests';

const{Option} = Select;

const RentForm = ({car_id}) => {
  const [type, setType] = useState('time');
  const [pickup, setPickUp] = useState('time');
  const [from, setFrom] = useState('time');
  const [to, setTo] = useState('time');
  const rentRequest = RentRequest.getInstance();
  const { mutate: sendRentRequest ,isSuccess:isRentSuccess } = rentRequest.useRent();

  useEffect(()=>{
    if(isRentSuccess){
      document.location.reload()
    }
  }, [isRentSuccess]);
  
  function PickerWithType({ type, onChange }) {
    if (type === 'time') return <TimePicker onChange={onChange} />;
    if (type === 'date') return <DatePicker onChange={onChange} />;
    return <DatePicker picker={type} onChange={onChange} />;
  }

  const onFinish = () => {
    const rent = {
      pickup,from,to,car_id
    }

    sendRentRequest({rent});
  }

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Rent</h1>
      <Form
        name='login'
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={onFinish}
        style={{marginTop:'5%'}}
      > 
        <Form.Item
          label="Pick Data"
          name="pick_date"
          rules={[
            {
              required: false,
              message: 'Pick Up Data is required.',
            },
          ]}
        >
          <DatePicker onChange={(date)=>{setPickUp(date.format("DD/MM/YY"))}} />
        </Form.Item>

        <Form.Item
          label="From"
          name="from"
          rules={[
            {
              required: false,
              message: 'From Time is required.',
            }
          ]}
        >
          <Select value={type} onChange={setType}>
            <Option value="time">Time</Option>
            <Option value="date">Date</Option>
            <Option value="week">Week</Option>
            <Option value="month">Month</Option>
            <Option value="quarter">Quarter</Option>
            <Option value="year">Year</Option>
          </Select>
          <PickerWithType type={type} onChange={(date) => {setFrom(date.format("hh:mm:ss"))}} />
        </Form.Item>

        <Form.Item
          label="To"
          name="to"
          rules={[
            {
              required: false,
              message: 'To time is required.',
            },
          ]}
        >
          <Select value={type} onChange={setType}>
            <Option value="time">Time</Option>
            <Option value="date">Date</Option>
            <Option value="week">Week</Option>
            <Option value="month">Month</Option>
            <Option value="quarter">Quarter</Option>
            <Option value="year">Year</Option>
          </Select>
          <PickerWithType type={type} onChange={(date) => {setTo(date.format("hh:mm:ss"))}} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset:6, span: 0 }}>
          <Button type="primary" htmlType="submit">
            Reserve
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default RentForm
