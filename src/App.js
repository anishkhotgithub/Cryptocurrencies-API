import React from 'react';
import {Link, Route,Router,Routes} from 'react-router-dom';
import {Layout,Typography,Space} from 'antd';
import { Navbar,Homepage,Cryptocurrencies,CryptoDetails,News}  from './components';
import './App.css'
import { Exchanger } from './components';

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar/>
        </div>
        <div className='main'>
            <Layout>
              <div className='routes'>
                <Routes>
                  <Route exact path='/' element={<Homepage/>}/>
                  <Route exact path='/exchanges' element={<Exchanger/>}/>
                  <Route exact path='/cryptocurrencies'  element={<Cryptocurrencies/>}/>
                  <Route exact path='/crypto/:coinId'  element={<CryptoDetails/>}/>
                  <Route exact path='news' element={<News/>}/>
                </Routes>
              </div>
            </Layout>
        <div className='footer'>
            <Typography.Title level={5} style={{color:"white",textAlign:"center"}}>
                Cryptoverse<br/>
                All rights reserved
                <Space>
                  <Link to="/">Home</Link>
                  <Link to="/exchanges">Exchange</Link>
                  <Link to="/news">News</Link>
                </Space>
            </Typography.Title>
        </div>
        </div>
    </div>
  )
}

export default App
