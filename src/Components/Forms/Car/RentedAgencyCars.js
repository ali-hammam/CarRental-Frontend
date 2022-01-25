import { Card } from 'antd';
import React, { useEffect, useState } from 'react'
import CarRequest from '../../../Requests/CarRequest';

const RentedAgencyCars = () => {
  const carRequest = CarRequest.getInstance();
  const urlParams = new URLSearchParams(window.location.search);
  const branch_id = urlParams.get('branch_id');
  const agency_id = urlParams.get('agency_id');
  const { mutate: sendParams ,isSuccess: isReservedCarSucess, data } = carRequest.useReservedCar();
  const [cars, setCars] = useState([]);
  const[carTypes, setCarTypes] = useState([]);
  const carTypesById = carTypes.reduce((obj, p) => ({...obj, [p['id']]: p}), {});

  useEffect(()=>{
    sendParams({data: {branch_id, agency_id}});
  }, []);

  useEffect(()=>{
    if(isReservedCarSucess){
      setCars(data['data']['cars']);
      setCarTypes(data['data']['car_types']);
    }
  }, [isReservedCarSucess])


  return (
    <div>
      <h1 style={{textAlign:'center'}}>Reserved Cars</h1>
      {carTypesById && console.log(carTypesById[3])}
      {
        carTypesById && cars && cars.map((car)=>{
          return(
            <Card title={carTypesById[car['id']]['model']} bordered={true} style={{ width: 300 }}>
              <p>color: {car['color']}</p>
            </Card>
          )
        })
      }
    </div>
  )
}

export default RentedAgencyCars
