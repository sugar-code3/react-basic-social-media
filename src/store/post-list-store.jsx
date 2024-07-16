import { createContext, useEffect, useReducer, useState } from "react";


export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,
  deletePost: () => {},
});
const postListReducer = (currPostList, action) => {
let newPostList=currPostList;
if (action.type === "DELETE_POST") {
  newPostList = currPostList.filter(
    (post) => post.id !== action.payload.postId
  );
} else if (action.type === "ADD_POST") {
  newPostList = [action.payload, ...currPostList];
}
else if(action.type==="ADD_INITIAL_POST"){
  newPostList=action.payload.posts;
}
return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer,[]);
  const[fetching ,setFectching]=useState(false);
  const addPost = (userId, postTitle, postbody, views, reactions,tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postbody,
        views:views,
        userId: userId,
        reactions:reactions,
        tags:tags
      },
    });
  };
  const addInitialPost = (posts) => {
    dispatchPostList({
      type: 'ADD_INITIAL_POST',
      payload: { posts,
      },
    });
  };
  const deletePost = (postId) => {
dispatchPostList({
  type:'DELETE_POST',
  payload:{
    postId,
  },
})
  };

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
    <PostListContext.Provider value={{postList, addPost,fetching,deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
