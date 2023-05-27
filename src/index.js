import React from 'react';
import ReactDOM from 'react-dom/client';

const Blogger = () => {
  return(
    <div>
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
    <div>
      <img width='50px' src='https://yt3.ggpht.com/ytc/AKedOLQQA-EpUFJDO9xsxK5pozcD2EXZEQKAQ0GtiHzLQA=s900-c-k-c0x00ffffff-no-rj' alt='блогер' />
    </div>
  );
};
const BloggerName = () =>{
  return (
    <div>Сергей Иванов</div>
  );
};
const Bio = () => {
  return (
    <p>
      vnlsdkjfvnlsdfvnlsjfvn lkjfdvnlsfvnsldfjvn sljfkvnlsdfjvnlsfvnlsfj.
   </p>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Blogger />
    <Blogger />
    <Blogger />
    <Blogger />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
