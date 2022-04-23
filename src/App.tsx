import './App.css';
import React, { useState } from 'react';
import logo from './logo.svg';
import { Layout, Tag } from 'antd';
import { PhotoGrid } from './components/PhotoGrid/PhotoGrid';
import { PhotoSortMenu } from './components/PhotoSortMenu/PhotoSortMenu';
const { Header, Content, Footer } = Layout;

function App() {
  const [selectedTags, setSelectedTags] = useState<string[]>(['dog', 'fish', 'land', 'snow', 'water'])
  const [selectedTag, setSelectedTag] = useState<string>('dog')


  return (
    <Layout className="layout">
      <Header className='app-header'>
        <div className="logo">
          Photo Sorter
        </div>

      </Header>
      <Content style={{ padding: '0 50px' }}>
      <PhotoSortMenu
          selectedTagsState={[selectedTags, setSelectedTags]}
          selectedTagState={[selectedTag, setSelectedTag]}
        />
        <PhotoGrid
          selectedTagsState={[selectedTags, setSelectedTags]}
          selectedTagState={[selectedTag, setSelectedTag]}
        />
      </Content>
      <Footer className='footer' style={{ textAlign: 'center' }}>Jared Moore ©2022 Created for Cloud Final Project</Footer>
    </Layout>
  );
}

export default App;
