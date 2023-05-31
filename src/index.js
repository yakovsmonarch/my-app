import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import {bloggers} from "./data/data";
import Blogger from './components/Blogger';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='root'>{
    bloggers.map((blogger)=>{
      return <Blogger key = {blogger.id} {...blogger}/>
    })
  }
  </div>
);