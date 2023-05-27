import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

//https://yt3.ggpht.com/ytc/AKedOLQQA-EpUFJDO9xsxK5pozcD2EXZEQKAQ0GtiHzLQA=s900-c-k-c0x00ffffff-no-rj
const Blogger = () => {
  return(
    <div className='main-containter'>
      <Avatar />
      <BloggerName />
      <div>
        <Bio />
      </div>
    </div>
  );
};
const Avatar = () => {
  return (
    <div className='image-container'>
      <img className='profile-photo' />
    </div>
  );
};
const BloggerName = () =>{
  return (
    <div className='blogger-name-container'>
      <p>Сергей Иванов</p>
    </div>
  );
};
const Bio = () => {
  return (
    <div className='bio'>
      <p>
        vnlsdkjfvnlsdfvnlsjfvn lkjfdvnlsfvnsldfjvn sljfkvnlsdfjvnlsfvnlsfj.
    </p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='root'>
    <Blogger />
    <Blogger />
    <Blogger />
    <Blogger />
    
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
