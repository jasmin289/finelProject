const apiRequest =async (url='',optionsObj =null,erreMsg=null)=>{

    
    try{
        const response = await fetch(url, optionsObj)
    if(!response.ok) throw Error('please reload the app');
    }catch(err){
        erreMsg = err.message;
    }finally{
    return erreMsg;
    }
}
    export default apiRequest;