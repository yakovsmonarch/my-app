import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import {bloggers} from "./data/data";

const Blogger = (props) => {
  const {avatar, name, bio} = props;
  console.log("props: ", props);
  return(
    <div className='main-containter'>
      <Avatar url={avatar}/>
      <BloggerName name={name}/>
      <Bio bio={bio}/>
    </div>
  );
};
const Avatar = ({url}) => {
  return (
    <div className='image-container'>
      <img src={url} />
    </div>
  );
};
const BloggerName = ({name}) =>{
  return (
    <div className='blogger-name-container'>
      <p>{name}</p>
    </div>
  );
};
const Bio = ({bio}) => {
  return (
    <div className='bio'>
      <p>
        {bio}
    </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='root'>{
    bloggers.map((blogger)=>{
      return <Blogger key = {blogger.id} {...blogger}/>
    })
  }
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
