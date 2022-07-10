import React, {useState, useEffect} from "react";
import Post from "./post";

const App = ({initialCount}) => {
  const [state, setState] = useState({
    count: initialCount,
    user: "Abdullah Ubaid",
  });

  let [posts, setPosts] = useState([
    {
      name: 'Super awesome post',
      body: 'The content of the post'
    },
    {
      name: 'JS is great',
      body: 'Something else'
    }
  ])

  const restOne = () => {
    setState({
      ...state,
      count: state.count-1
    })
  }
  
  const addOnePost = () => {
    let newPost = {
      name: 'PHP is still awesome',
      body: 'Something else'
    }

    setPosts([
      ...posts,
      newPost
    ])
  }

  const removePost = () => {
    setPosts([])
  }

  useEffect(()=>{
    // console.log('change on state')
  }, [state]);

  useEffect(()=>{
    // console.log('change on posts')
  }, [posts]);

  useEffect(()=>{
    // console.log('Mounted')
  }, []);


  return (
    <>
      <h1>{state.user}</h1>
      <h3>Count: {state.count}</h3>
      <button onClick={()=>setState({
        ...state,
        count:state.count + 1
        })}> Add One +1 </button>
      <button onClick={restOne}> Add One -1 </button>
      <button onClick={()=>setState({
        ...state,
        count: initialCount
      })}> Reset </button>

        <hr/>
        { posts.map((item, i) => (
          <Post key={i} item={item}/>
        )) }

        <button
          onClick={addOnePost}
        >
          Add one more
        </button>
        <button
          onClick={removePost}
        >
          Remove Post
        </button>
    </>
  );
}

export default App;
