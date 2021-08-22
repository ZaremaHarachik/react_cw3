import "./Posts.css"
import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.service";
import Post from "../post/Post";
import PostDetails from "../post_details/PostDetails";


export default function Posts() {

  let[posts,setPosts] = useState([]);
  let[post,setPost] = useState(null);
  let[postDetails,setPostDetails] = useState([]);

  useEffect(() => {
    getPosts().then(value => setPosts([...value]));
  },[]);

  const chosePost=(post) => {
    console.log(post);
    setPost({...post});
    getPosts(post.id).then(value => setPostDetails([...value]));
  }

  return (
      <div className={"wrap"}>
        <div className={"posts-box"}>
          {
            posts.map(value => <Post key={value.id} item={value} chosePost={chosePost}/>)
          }
        </div>
        {
          post && <div className={"chosen-one"}>{JSON.stringify(post)}</div>
        }
        <PostDetails postDetails={postDetails}/>
      </div>
  );
}