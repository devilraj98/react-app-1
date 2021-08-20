import axios from 'axios';
import React ,{useState,useEffect}from 'react';
import A from './A'
import mycontext from './Context';

function Post(props) {

     const [state, setstate] = useState([]);

     useEffect(() => {
       

        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{

    
                   setstate(response.data)

        },(err)=>{
            alert("error occoured")
        })

     }, [])


    return (
        <div>
            <mycontext.Provider value ={state}>
            <A />
            </mycontext.Provider>
         
        </div>
    );
}

export default Post;