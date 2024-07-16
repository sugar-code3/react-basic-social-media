import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  addInitialPost: () => {},
  deletePost: () => {},

});
const postListReducer = (currPostList, action) => {
  switch (action.type) {
    case 'DELETE_POST':
      return currPostList.filter(post => post.id !== action.payload.postId);
    case 'ADD_INITIAL_POST':
      return action.payload.posts;
    case 'ADD_POST':
      return [...currPostList, action.payload];
    default:
      return currPostList;
  }
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer,[]);
  const addPost = (userId,postTitle,postbody,reactions,views) => {
    dispatchPostList({
      type:'ADD_POST',
      payload:{
        id:Date.now() ,
        title:postTitle,
        body:postbody,
        reactions,
        views,
        userId:userId,

      }
    })
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

  return (
    <PostListContext.Provider value={{ postList, addPost,addInitialPost,deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
