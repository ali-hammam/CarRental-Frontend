import { Input, Row, Col, Select } from 'antd';
import React, { useEffect, useState } from 'react'
import UserRequest from '../../Requests/UserRequest';
import './CarList.css'
import CarList from './List';
import RentForm from './RentForm';

const {Search} = Input;
const {Option} = Select;

const List = () => {
  const userRequest = UserRequest.getInstance();
  const { data, isSuccess } = userRequest.useCars();
  const { mutate: sendCarByModel,data:carByModel ,isSuccess:isCarByModelSuccess } = userRequest.useCarsByModel();
  const { mutate: sendCarByManufacturer,data:carByManufacturer ,isSuccess:isCarByManufacturerSuccess } = userRequest.useCarsByManufacturer();
  const { mutate: sendCarByType,data:carByType ,isSuccess:isCarByTypeSuccess } = userRequest.useCarsByType();

  const [agencies, setAgencies] = useState([]);
  const [searchType, setSearchType] = useState('');

  const urlParams = new URLSearchParams(window.location.search);
  const [params, setParams] = useState(urlParams.get('car_id'));


  useEffect(()=>{
    setParams(urlParams.get('car_id'));
  }, [urlParams.get('car_id')]);

  useEffect(()=>{
    if(isSuccess){
      data && setAgencies([...data]);
    }
  }, [isSuccess]);

  useEffect(()=>{
    if(isSuccess){
      data && setAgencies([...data]);
    }
  }, [isSuccess]);

  useEffect(()=>{
    if(isCarByModelSuccess){
      data && setAgencies([...carByModel['data']['cars']]);
    }
  }, [isCarByModelSuccess]);

  useEffect(()=>{
    if(isCarByManufacturerSuccess){
      carByManufacturer && setAgencies([...carByManufacturer['data']['cars']]);
    }
  }, [isCarByManufacturerSuccess]);

  useEffect(()=>{
    if(isCarByTypeSuccess){
      carByType && setAgencies([...carByType['data']['cars']]);
    }
  }, [isCarByTypeSuccess]);

  const onSearch = (value) => {
    switch(searchType){
      case 'model':{
        sendCarByModel({model: value});
        break;
      }
      case 'manufacturer':{
        sendCarByManufacturer({manufacturer: value});
        break;
      }
      case 'type':{
        sendCarByType({type: value});
        break;
      }
      case 'type':{
        sendCarByType({type: value});
        break;
      }
      default:{
        console.log('xx');
      }
    }
  }

  const onSearchTypeChange = (value) => {
    setSearchType(value);
  }

  return (
    <>
      {
        !params && <Row>
          <Col>
            <Select
              placeholder="Select Car Type"
              onChange={onSearchTypeChange}
              allowClear
            >
              <Option key={1} value='manufacturer'>
                manufacturer
              </Option>

              <Option key={2} value='model'>
                model
              </Option>

              <Option key={3} value='type'>
                type
              </Option>

              <Option key={4} value='number_of_seats'>
                number of seats
              </Option>

              <Option key={5} value='year'>
                year
              </Option>

              <Option key={6} value='color'>
                color
              </Option>
            </Select>
          </Col>
          <Col xl={7}>
            <Search placeholder="input search text"
              onSearch={onSearch} 
              enterButton 
            />
          </Col>
        </Row>
      }

      {
        !params && <Row>
          {agencies && <CarList agencies={agencies}/>}
        </Row>
      }

      {
        params && <RentForm car_id={params}/>
      }
    </>
  )
}

export default List
