import shortid from "shortid";

export const getAllPosts = (state) => state.posts;
export const getPostById = ({posts}, postId) => posts.find(post => post.id === postId)

const createActionName = actionName => `app/posts/${actionName}`;

const DELETE_POST = createActionName('DELETE_POST')
const ADD_POST = createActionName('ADD_POST')

export const deletePost = payload => ({type: DELETE_POST, payload: payload})
export const addPost = payload => ({type: ADD_POST, payload: payload})
// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case DELETE_POST: {
      return statePart.filter(post => post.id !== action.payload)
    }
    case ADD_POST: {
      return ([...statePart, {...action.payload, id: shortid()}])
    }
    default:
      return statePart;
  };
};

export default postsReducer;