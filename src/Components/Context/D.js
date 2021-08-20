import React,{useContext} from 'react';
import mycontext from './Context';
function D(props) {


    const mycontextData = useContext(mycontext);
   
    return (
        <div className= "container">
          <div className = "row">
            <div className= "col mt-3">
              {

                mycontextData.map((data,index)=>{

                    return <div className = "col">
                    <div className="card-header bg-primary text-white mt-3">
                    <h2>Post Data</h2>
                    
                    </div>
                    <div className="card-body">
                    <h4>{data.id}</h4>
                    <h5>{data.title}</h5>
                    <p>{data.body}</p>

                    </div>
                    
                    
                    </div>


                })

              }
            
            </div>
          
          </div>
            
        </div>
    );
}

export default D;