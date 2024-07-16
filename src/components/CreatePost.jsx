import { useContext, useRef } from"react"
import {PostListContext} from "../store/post-list-store";

const CreatePost=()=>{
const {addPost }=useContext(PostListContext);

const userIdElement=useRef( );
const postTitleElement=useRef();
const postbodyElement  =useRef();
const viewsElement=useRef();

const handleSubmit=(event)=>{
  event.preventDefault();
  const userId=userIdElement.current.value;
  const postTitle= postTitleElement.current.value;
  const postbody=postbodyElement.current.value;
  const views=viewsElement.current.value;

  userIdElement.current.value=" ";
  postTitleElement.current.value="";
  postbodyElement.current.value="";
  viewsElement.current.value="";
 
  addPost(userId,postTitle,postbody,views);
}
    return (
    <form className="create-post" onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter Your User Id</label>
    <input type="text" ref={userIdElement} className="form-control" id="userId"  placeholder="Your User Id " aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" ref={postTitleElement} className="form-control" id="title"  placeholder="How are you felling today..." aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" rows="4" ref={postbodyElement} className="form-control" id="body"  placeholder="tell us more about it.. " aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Number of reactions</label>
    <input type="text" ref={viewsElement} className="form-control" id="reactions"  placeholder="How many reacted to this post" aria-describedby="emailHelp" />
  </div>

  <button className="btn btn-primary">Post</button>
</form>
);   
}

export default CreatePost;