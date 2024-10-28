import React from 'react';
import Message from '../components/message/message.jsx';
import Header from '../components/header/Header.jsx';

function Home() {
  return (
    <>
    <div className='background'>
        <div className='app'>
            <div className='content'>
            <Header />
            <Message />
            </div>
        </div>
    </div>
    </>
  )
}

export default Home;