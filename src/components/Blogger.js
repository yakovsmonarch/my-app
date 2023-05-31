import React from "react";
import Avatar from "./Avatar";
import BloggerName from "./BloggerName";
import Bio from "./Bio";

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

  export default Blogger