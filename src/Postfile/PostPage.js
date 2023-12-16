import React from 'react'
import { useParams,Link } from 'react-router-dom';
const PostPage = ({posts,handleDelete}) => {
  const {id} = useParams();
  const post = posts.find(post=>(post.id).toString()=== id);
  return (
    <main className='PostPage'>
      <article className='post'>
        {post && 
        <>

        <h2>{post.title}</h2>
        <p className='postDate'>{post.datetime} </p>
        <p className='postBody'>{post.body} </p>
        <button onClick={()=>handleDelete(post.id)}>
          מחק
        </button>
        </>
        }
        {!post&&
        <>
        <h2>Post not found</h2>
        <p>well, that's disappointing  </p>
        <p> <Link to='/'>Visit Our HomePage</Link> </p>

        </>}
      </article>
   
    </main>
  )
}

export default PostPage