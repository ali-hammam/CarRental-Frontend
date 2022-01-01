import React, { useEffect, useState } from 'react'
import HomeRequest from '../Requests/HomeRequest';

const Home = () => {
  const homeRequest = HomeRequest.getInstance();
  const {data , isSuccess} = homeRequest.useTest();
  const [name , setName] = useState();

  useEffect(() => {
    if(isSuccess){
      data && setName(data['ali']);
    }
  },[isSuccess]);

  return (
    <div>
      Hello {name}
    </div>
  )
}

export default Home
