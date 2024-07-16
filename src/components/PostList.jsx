import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { Loader } from "./Loader";
const PostList=()=>{
  const {postList,addInitialPost}  =useContext(PostListData)
  const[fetching ,setFectching]=useState(false);
  useEffect(() => {
    const controller=new AbortController();
    const signal=controller.signal;
    fetch('https://dummyjson.com/posts',{signal})
      .then(res => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFectching(true)
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
<>
{!fetching && <Loader />}
{fetching && postList.length===0 && (<WelcomeMessage  />)}
{ fetching && 
    postList.map((post)=>(
    <Post key={post.id} post={post}/>
))}
</> );
}
export default PostList;