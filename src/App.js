
import Header from './Postfile/Header'
import Nav from './Postfile/Nav'
import About from './Postfile/About'
import Footer from './Postfile/Footer'
import Home from './Postfile/Home'
import NewPost from './Postfile/NewPost'
import PostPage from './Postfile/PostPage'
import Missing from './Postfile/Missing'
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState,useEffect } from 'react'
import { format } from 'date-fns'
function App() {
   
  
   const [posts, setPosts] = useState([
      {
        id: 1,
        title: "My First Post",
        datetime: "July 01, 2021 11:17:36 AM",
        body: "this is the first post"
      },
      {
        id: 2,
        title: "My 2nd Post",
        datetime: "July 01, 2021 11:17:36 AM",
        body: "this is the secund result"
      },
      {
        id: 3,
        title: "My 3rd Post",
        datetime: "July 01, 2021 11:17:36 AM",
        body: "and this is the last result"
      },
      {
        id: 4,
        title: "My Fourth Post",
        datetime: "July 01, 2021 11:17:36 AM",
        body: "this is the last and only result"
      }
    ])
    const [search,setSearch]= useState('');
    const [searchResult,setSearchResult]=useState([]);
    const [postTitle,setPostTitle]= useState('');
    const [postBody,setPostBody]= useState('');
    const history = useHistory();
 
   
   
    const handleDelete=(id)=>{
      const postList = posts.filter(post=>post.id !== id);
      setPosts(postList);
      history.push('/');
    }


       
   
    const handleSubmit=(e)=>{ // when add  anew post
      e.preventDefult();
      const id= posts.length ? posts:posts[posts.length-1].id+1; //find the last id, and if there not id its insert 1
      const datetime =format(new Date(),'MMMM dd, yyyy pp');  //npm i date-fns -S
      const newPost = {id,title:postTitle,datetime,body:postBody}
      const allPost = [...posts,newPost];
      setPosts(allPost); // add to the list of post
      setPostTitle(''); // return to be empty
      setPostBody(''); // return to be empty
      history.push('/');
    }

    useEffect(()=>{
      const filterResult = posts.filter(post=>((post.body).toLowerCase()).includes(search.toLowerCase())
      ||((post.title).toLowerCase()).includes(search.toLowerCase())  );
      setSearchResult(filterResult.reverse());

    },[posts,search])

   return (
    <div className="App">
      <Header title="TskYz"/>
      <Nav search={search} setSearch={setSearch}/>
         <Switch>
            <Route exact path='/'>  <Home posts={searchResult}/> </Route>
            <Route exact path='/post'> 
             <NewPost 
                handleSubmit={handleSubmit} 
                postTitle={postTitle} 
                setPostTitle={setPostTitle}
                postBody ={postBody}
               setPostBody={setPostBody} /> 
                </Route>
            <Route path='/post/:id'> <PostPage posts={posts} handleDelete={handleDelete}/> </Route> 
            <Route path='/about' component={About}/>
            <Route path='*' component={Missing}/>  
         </Switch>
         <Footer/>
    </div>
   );
}

export default App;

