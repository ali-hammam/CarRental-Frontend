import React from 'react';
import { Collapse } from 'antd';
import AddBranch from '../../../Components/Forms/Branch/AddBranch';
import Loader from '../../../Components/Loader';
import AddCarManufacturer from '../../../Components/Forms/CarManufacturer/AddCarManufacturer';
import AddCarType from '../../../Components/Forms/CarType/AddCarType';
import EditCar from '../../../Components/Forms/Car/EditCar';

const { Panel } = Collapse;


const CollapsingForm = ({isBranchLoading, agency}) => {

  const existedBranches = () => {
    return(
      <div className='branch_description'>
        <h1>Welcome, Visit Your Branches.</h1>
        <Collapse accordion>
          <Panel header="Add New Branch" key="2">
            <AddBranch agency={agency}/>
          </Panel>
          <Panel header="Add New Manufacturer" key="3">
            <AddCarManufacturer agency={agency}/>
          </Panel>
          <Panel header="Add New Car Type" key="4">
            <AddCarType agency={agency}/>
          </Panel>
          <Panel header="Edit Existed Car" key="5">
            <EditCar agency={agency}/>
          </Panel>
        </Collapse>
      </div>
    );
  }

  return (
    <Loader renderSpinner={isBranchLoading}>
      <div>
        {existedBranches()}
      </div>
    </Loader>
  )
}

export default CollapsingForm
