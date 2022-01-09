import React from 'react'
import { Row, Col } from 'antd';
import Car from '../../assets/car/Car';
import './home.css';

const Home = () => {
  return (
    <div className='home_body'>
      <Row className='align_row '>
        <Col xl={12}>
          <div className='description'>
            <h2>
              National Car Rental has worldwide locations in the United States,
              Canada, Europe, Latin America, the Caribbean, Asia-Pacific, Africa and Australia.
              Download the National Car Rental® app and tap into the power of more speed,
              choice and convenience - all at your fingertips.
            </h2>
          </div>
        </Col>
        <Col xl={12}>
          <div className='car_icon'>
            <Car/>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Home
