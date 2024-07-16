import { useContext } from "react";
import Post from "./Post";
import { PostListContext as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { Loader } from "./Loader";
const PostList=()=>{
const {postList,fetching}  =useContext(PostListData)

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