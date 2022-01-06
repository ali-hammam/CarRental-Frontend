import React, { useEffect } from 'react'
import { Row, Col } from 'antd';
import Car from '../../assets/car/Car';
import './home.css';
import SignInRequest from '../../Requests/SignInRequest';
import { get } from '../../Libraries/Storage';

const Home = () => {
  /*const signInRequest = SignInRequest.getInstance();
  const {data , isSuccess} = signInRequest.useUser();
  //isSuccess && console.log(data);
  //const [name , setName] = useState();
  console.log(get('jwt'));
  
  useEffect(() => {
    if(isSuccess){
      console.log(data);
      //data && setName(data['ali']);
    }
  },[isSuccess]);*/

  return (
    <div className='home_body'>
      <Row className='align_row'>
        <Col xl={12}>
          <h2>
            National Car Rental has worldwide locations in the United States,
            Canada, Europe, Latin America, the Caribbean, Asia-Pacific, Africa and Australia.
            Download the National Car Rental® app and tap into the power of more speed,
            choice and convenience - all at your fingertips.
          </h2>
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
