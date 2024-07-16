import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postbodyElement = useRef();
  const viewsElement = useRef();
  const likesElement = useRef();
  const dislikesElement = useRef();
  const tagsElement =useRef();


  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postbody = postbodyElement.current.value;
    const views = viewsElement.current.value;
    const likes = likesElement.current.value;
    const dislikes = dislikesElement.current.value;
    const tags=tagsElement.current.value.split(" ");

    const reactions = {
     likes,
    dislikes,
    };

      addPost(userId, postTitle, postbody, views, reactions,tags);
  
      userIdElement.current.value = "";
      postTitleElement.current.value = "";
      postbodyElement.current.value = "";
      viewsElement.current.value = "";
      likesElement.current.value = "";
      dislikesElement.current.value = "";
      tagsElement.current.value="";
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your User Id
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your User Id "
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you felling today..."
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows="4"
          ref={postbodyElement}
          className="form-control"
          id="body"
          placeholder="tell us more about it.. "
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          ref={viewsElement}
          className="form-control"
          id="reactions"
          placeholder="How many reacted to this post"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Likes{" "}
        </label>
        <input
          type="number"
          ref={likesElement}
          className="form-control"
          id="likes"
          placeholder="Likes On Post  "
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Dislikes
        </label>
        <input
          type="number"
          ref={dislikesElement}
          className="form-control"
          id="dislike"
          placeholder="Dislike On Post"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
          placeholder="Please enter tags using space"
        />
      </div>

      <button className="btn btn-primary">Post</button>
    </form>
  );
};

export default CreatePost;
