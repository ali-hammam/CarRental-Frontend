import { Button, Card, Row, Space } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import './CarList.css'
import RentForm from './RentForm';

const CarList = ({agencies}) => {

  return (
    <div>
      {console.log(agencies)}
      <div className="site-card-border-less-wrapper">
        <Row style={{margin: '15px'}}>
          <Space dir='horizontal' size={15}>
            {
              agencies && agencies.map((agency) => (
                <>
                {
                  agency['manufacturers'].map((manufacturer) => {
                    return manufacturer['car_types'].map((carType)=>{
                      return carType['cars'].map((car)=> (
                        <Card title={agency['name']} bordered={true} style={{ width: 300 }} key={car['id']}>
                          <p>Manufacturer: <strong>{manufacturer['name']}</strong></p>
                          <p>model: <strong>{carType['model']}</strong></p>
                          <p>type: <strong>{carType['type']}</strong></p>
                          <p>number of seats: <strong>{carType['number_of_seats']}</strong></p>
                          <p>year: <strong>{carType['year']}</strong></p>
                          <p>color: <strong>{car['color']}</strong></p>
                          <p>hourly price: <strong>{car['hourly_price']}$</strong></p>
                          <Button type='primary' onClick={() =>(<RentForm />)}>
                            <Link to={'?car_id='+car['id']}>
                              Rent
                            </Link>
                          </Button>
                        </Card>
                      ))
                    })
                  })
                }
                </>
              ))
            }
          </Space>
        </Row>
      </div>
    </div>
  )
}

export default CarList
