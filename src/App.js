import logo from './logo.svg';
import { Row, Col, Divider } from 'antd';
import "antd/dist/antd.css";
import { PageHeader, Tabs, Button, Descriptions, Card } from 'antd';
import { Layout, Menu, Breadcrumb, Statistic } from 'antd';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const { TabPane } = Tabs;
const { Header, Content, Footer } = Layout;


function App() {

  const DivStyle = styled.div`
  min-height: 280px;
  padding: 24px;
  background: #fff;
`;

  const dadosCard = [{ title: "igor" },
  { title: "igor" },
  { title: "higor" },
  { title: "yigor" },
  { title: "igor" }]


  return (
    <Layout className="layout">
      <Header>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <DivStyle >

          <div className="site-card-wrapper">


            {dadosCard.map((item, index) => {


              return <Card title={item.title} >
                Card content
        </Card>



            })}

          </div>

        </DivStyle>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>

  );
}


export default App;










