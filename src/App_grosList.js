
import Header1 from './Header1';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer1 from './Footer1';
import { useState ,useEffect} from 'react';
import apiRequest from './apiRequest';



function App_grosList() {
//JSON.parse(localStorage.getItem('shoppinglist'))||
const API_URL = 'http://localhost:3500/items'
  const [items, setItem]= useState([]);
  const [newItem,setNewItem]=useState(''); 
  const [search,setSearch]=useState('');  
  const [fetchError,setFetchError]=useState(null);
  const [isLoding,setIsLoading] = useState(true);
  

  const setAndSave=(newItem)=>{
    setItem(newItem);
    localStorage.setItem('shoppinglist',JSON.stringify(newItem));
  }

  useEffect(()=>{
    const fetchItem = async ()=>{
      try{
       
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('Did not receive expected data') 
        const listItems= await response.json();
        setItem(listItems);
        setFetchError(null)
      }
      catch(err){
        
        setFetchError(err.message)
      } finally{
        setIsLoading(false);
      }
  
    }
    setTimeout(() => {
      (async()=> await fetchItem())();
    }, 2000);

  },[])
  



     

  const addItem =async (item)=>{
    const id= items.length? items[items.length-1].id +1:1;// find the last id
    const myNewItem={id,checked:false,item} // build a new object
    const listItems = [...items,myNewItem]  // add the object to the arrey
    setAndSave(listItems);
  
    const postOption={
      method:`POST`,
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(myNewItem)
    }
  const result = await apiRequest(API_URL,postOption);
  if(result) setFetchError(result);
  
  }

  const handleCheck =async(id)=>{
    const listItem = items.map((item)=>item.id===id?{...item,checked:!item.checked}:item); //go over all the list and update when 
    //the checkbox is check
  
    const myItem = listItem.filter((item) => item.id === id);
    setAndSave(listItem);


    const updateOption={ 
      method: 'PATCH', // update checkbox
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({checked:myItem[0].checked})
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl,updateOption);
  if(result) setFetchError(result)
  };
  
  const handleDeleted =async(id)=>{
    const listItem = items.filter((item)=>item.id!==id);
    setAndSave(listItem);
    const deletedOption ={ method:'DELETE'  }
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl,deletedOption);
    if(result) setFetchError(result)


  }
  const hadndleSubmit=(e)=>{
    e.preventDefault();
    if(!newItem)return;
    addItem(newItem);
    console.log(newItem);
     setNewItem('')
  }

  return (
    <div className="App">
      <Header1 title="Grocery list"/>
      <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      hadndleSubmit={hadndleSubmit}
      />
      <SearchItem
      search={search}
      setSearch={setSearch}

      />
      <main>
        {isLoding&& <p>Loading Items...</p>}
        {fetchError &&<p style={{color:"red"}}>{`Error:${fetchError}`}</p>}
     {!fetchError && !isLoding&&<Content
      items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
      handleCheck ={handleCheck}
      handleDeleted={handleDeleted}
      />}
      </main>
      <Footer1 length={items.length}/>
      
    </div>
  );
}

export default App_grosList;

 // const storedList = JSON.parse(localStorage.getItem('shoppinglist'));

// Check if storedList is null
// const initialState = storedList !== null ? storedList : /* Default value */ [{
//   id: 1,
//   checked: false,
//    item: "example"
//  }];


// Use useState with the initialState