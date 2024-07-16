import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import {PostListContext} from "../store/post-list-store";
import { FaThumbsDown } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";

const Post = ({post}) => {

  const {deletePost}=useContext(PostListContext)
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
          <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        <div className="reactions-likes">
      <FaThumbsUp/>{post.reactions.likes}
      <FaThumbsDown/>{post.reactions["dislikes"]}
      </div>
      {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
      {post.views &&
        <div className="alert alert-success reactions" role="alert">
This post has reacted by {post.views} people
</div> }

      </div>
    </div>
  );
};
export default Post;
