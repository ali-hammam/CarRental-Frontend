import React, { useEffect, useState } from 'react'
import { Col, Form, Select  } from 'antd';
//import './registration.css';
import CountryRequest from '../../Requests/CountryRequest';

const {Option} = Select;
const SelectCountry = ({countries , setSelectedState}) => {
  const countryRequest = CountryRequest.getInstance();
  const {data , mutate: sendData} = countryRequest.useStates();

  const [selectedCountry, setSelectedCountry] = useState({});
  const [states, setStates] = useState([]);

  useEffect(()=>{
    sendData({'country':  selectedCountry});
    
  }, [selectedCountry]);

  useEffect(() => {
    data && setStates(data['data']);
  }, [data])

  const onCountryChange = (value) => {
    setSelectedCountry(value);
  }

  return (
    <>
      <Col xl={8}>
          <Form.Item
            label="Country"
            name="country"
            rules={[
              {
                required: true,
                message: 'Please choose your country.',
              },
            ]}
          >
            <Select
              placeholder="Select Your Country"
              onChange={onCountryChange}
              allowClear
            >
              {
                countries && countries.map((country)=>{
                  return (
                    <Option key={country['id']} value={country['id']}>
                      {country['name']}
                    </Option>
                  )
                })
              }
            </Select>
          </Form.Item>
        </Col>
        
        <Col xl={8}>
          <Form.Item
            label="State"
            name="state"
            rules={[
              {
                required: true,
                message: 'State is required.',
              }
            ]}
          >
            <Select
              placeholder="Select Your Country"
              onChange={(value) => setSelectedState(value)}
              allowClear
            >
              {
                states && states.map((state)=>{
                  return (
                    <Option key={state['id']} value={state['id']}>
                      {state['name']}
                    </Option>
                  )
                })
              }
            </Select>
          </Form.Item>
        </Col>
    </>
  )
}

export default SelectCountry
