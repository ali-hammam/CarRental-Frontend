import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import './sidebar.css';
import { Link } from 'react-router-dom';
//import AgencyRequest from '../../../Requests/AgencyRequest';
import BranchRequest from '../../../Requests/BranchRequest';

const SideBar = ({agencyName, setIsBranch, agency}) => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const branchRequest = BranchRequest.getInstance();
  const { data: branchesData, isSuccess: isBranchSucess} = branchRequest.useBranch();
  const [branches, setBranches] = useState([]);
  
  useEffect(() =>{
    if(isBranchSucess){
      branchesData && setBranches(branchesData);
    }
  }, [isBranchSucess]);

  return (
    <Sider 
      className='sider-color side-bar'
      collapsible 
      onCollapse={true}
      breakpoint="md"
      width={300}
    >
      <div className="logo" />
      <Menu className="sider-color sider-text-color menu-items" defaultSelectedKeys={['0']} >
        <Menu.Item key="1" icon={<HomeFilled width="20" height="20"/>} >
          <span style={{fontWeight:'450'}}>{agencyName}</span>
        </Menu.Item>
        <SubMenu 
          key="sub2"  
          title={<h1 >Branches</h1>} 
          className="user-menu-item menu-items"
        >
        <Menu.ItemGroup title="List">
          {
            branches && branches.map((branch, index) => {
              return (
                <Menu.Item key={branch['id'] + 1} onClick={()=>{setIsBranch(true)} }>
                  <Link to={'?branch_id='+branch['id']}>{branch['name']}</Link>
                </Menu.Item>
              )
            })
          }
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu 
          key="sub4"  
          title={<h1 >Reserved Cars</h1>} 
          className="user-menu-item menu-items"
        >
          {
            branches && branches.map((branch, index) => {
              return (
                <Menu.Item key={branch['id'] + 1} onClick={()=>{setIsBranch(true)} }>
                  <Link to={'/cars?branch_id='+branch['id']}>{branch['name']}</Link>
                </Menu.Item>
              )
            })
          }
      </SubMenu>
      </Menu>
    </Sider>
  )
}

export default SideBar
