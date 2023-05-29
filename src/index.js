import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

const Blogger = (props) => {
  return(
    <div className='main-containter'>
      <Avatar />
      <BloggerName {...props}/>
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
const BloggerName = (props) =>{
  console.log("props: ", props);
  return (
    <div className='blogger-name-container'>
      <p>{props.name}</p>
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
    <Blogger name="Сергей Иванов"/>
    <Blogger name="Иван Иванов"/>
    <Blogger name="Петр Петров"/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
