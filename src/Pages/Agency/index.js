import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd';
import Loader from '../../Components/Loader';
import AgencyRequest from '../../Requests/AgencyRequest';
import AddAgency from '../../Components/Forms/Agency/AddAgency';
import SideBar from './SideBar';
import './agency.css';
import CollapsingForm from './CollapsingForm';
import AddCar from '../../Components/Forms/Car/AddCar';


const Agency = () => {
  const agencyRequest = AgencyRequest.getInstance();
  const { data, isSuccess, isLoading } = agencyRequest.useAgency();
  const [agency, setAgency] = useState({});
  const [isBranch, setIsBranch] = useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  const branch_id = urlParams.get('branch_id');

  useEffect(() => {
    data && setAgency({ ...data });
  }, [isSuccess]);

  useEffect(()=>{
    if(isBranch){
      if(branch_id == null){
        setIsBranch(false);
      }
    }
  }, [isBranch])

  return (
    <div>
      <Loader renderSpinner={isLoading}>
        <Row>
          <Col xl={Object.keys(agency).length === 0 ? 24 : 5}>
            {
              <div>
                {Object.keys(agency).length !== 0 && /*branches &&*/ <SideBar agency={agency} agencyName={agency['name']} /*branches={branches}*/ setIsBranch={setIsBranch} />}
              </div>
            }
            {
              Object.keys(agency).length === 0 && <AddAgency />
            }
          </Col>
          {!isBranch &&
            <Col xl={19}>
              {agency && /*branches &&*/
                <CollapsingForm
                  /*branches={branches}*/
                  /*isBranchLoading={isBranchLoading}*/
                  agency={agency} />
              }
            </Col>
          }

          {
            isBranch &&
            <Col xl={19}>
              {Object.keys(agency).length !== 0 && <AddCar agency={agency} branch_id={branch_id}/>}
            </Col>
          }
        </Row>
      </Loader>
    </div>
  )
}

export default Agency
