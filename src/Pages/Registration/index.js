import { Tabs } from 'antd';
import { useEffect, useState } from 'react';
import CountryRequest from '../../Requests/CountryRequest';
import SignInRequest from '../../Requests/SignInRequest';
import OwnerRegistration from './OwnerRegistration';
import UserRegistration from './UserRegistration';

const { TabPane } = Tabs;

const Registration = () =>{ 

  const [credentials, setCredentials] = useState({});
  const [isDataGived, setIsDataGivded] = useState(false);
  const [countries, setCountries] = useState([]);

  const signInRequest = SignInRequest.getInstance();
  const {mutate: sendData, error: errorResponse} = signInRequest.useCreateUser();

  const countryRequest = CountryRequest.getInstance();
  const {data , isSuccess} = countryRequest.useCountries();

  useEffect(()=>{
    credentials !== {} && setIsDataGivded(true);
    isDataGived && sendData({user: credentials});
    //isDataGived && window.location.replace("http://localhost:3000/");
  }, [credentials])

  useEffect(() => {
    if(isSuccess){
      countries.push(...data);
    }
  },[isSuccess]);
  
  return(
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="User Registration" key="1">
        <UserRegistration 
          setCredentials={setCredentials} 
          countries={countries}
        />
      </TabPane>
      <TabPane tab="Owner Registration" key="2">
        <OwnerRegistration setCredentials={setCredentials} countries={countries}/>
      </TabPane>
    </Tabs> 
  )
};

export default Registration;