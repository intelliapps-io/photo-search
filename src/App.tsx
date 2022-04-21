import './App.css';
import React from 'react';
import logo from './logo.svg';
import { Layout, Menu, Breadcrumb } from 'antd';
import { PhotoGrid } from './components/PhotoGrid/PhotoGrid';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">
          Photo Sorter
        </div>
      </Header>
      <Content style={{ padding: '0 50px' }}>

        <PhotoGrid />
      </Content>
        <Footer style={{ textAlign: 'center' }}>Jared Moore ©2022 Created for Cloud Final Project</Footer>
    </Layout>
  );
}

export default App;
