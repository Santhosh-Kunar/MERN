// import React, { useEffect, useState } from "react";
// import JSON from "./product1.json"
// const Task =()=>{
//     // let [state,setstate]=useState(JSON)
//     // console.log(state);
//     const [state,setstate]=useState([])
//     useEffect(()=>{
//         let newlist=JSON.slice(0,10);
//         setstate(newlist);
//     },0)
//     let handlePagination=(e)=>{
//         let CurrentPage=e.target.textContent;
//         if(CurrentPage==="1"){
//             setstate(JSON.slice(0,10));
//             return
//         }
//         let start=(CurrentPage*10)-10
//         let end=(CurrentPage*10)
//         let newlist=JSON.slice(start,end);
//         setstate(newlist)
//     }
//     return(
//                <section className="productsection">
//                    {state.map(user=>{
//                        return(
//                     <div className="productdiv">
//                     <h2>{user.title}</h2>
//                     <figure>
//                     <img src={user.thumbnail} alt="img" />
//                     </figure>
//                     <h3 style={
//                         user.rating>4.5?{backgroundColor:"lightgreen"}:{backgroundColor:"red"}}
//                     > Rating:{user.rating}</h3>
//                     <p>{user.description}</p>
//                     <h4 style={user.price>50?{backgroundColor:"lightblue"}:{backgroundColor:"orange"}}
//                     >Rs:{user.price}.00</h4>
//                     <h1>Brand:{user.brand}</h1>
//                     </div>
//                         )}
//                  )
//              }
//              <div className="productbutton">
//         <button style={{background:"rgb(162, 168, 169)"}} onClick={handlePagination}>1</button>
//         <button style={{background:"rgb(162, 168, 169)"}} onClick={handlePagination}>2</button>
//         <button style={{background:"rgb(162, 168, 169)"}} onClick={handlePagination}>3</button>
//         </div>
//             </section>
            
//          )}
// export default Task;






import React, { Component } from "react";
import JSON from "./product1.json"
export default class Task extends Component {
    constructor(props)
    {
      super(props)
      this.state={ users:JSON, 
      }
      console.log(this.state);
    }
    render() {
      return (
        <section id='gitRepo'>
            <h1>santhosh</h1>
           <article>
             {this.state.users.map(user=>{
               let {title,thumbnail,rating,descriptionl,brand}=user;
               return (
                 <div className='userGrid'>
                     <h2>{title}</h2>
                   <figure>
                     <img src={thumbnail} alt="login" />
                   </figure>
                   <main>
                   <h4 style={rating>30000?{backgroundColor:"green"}:{backgroundColor:"red"}}>
                        Rating:{rating}</h4>
                     <p>{descriptionl}</p>
                     <p>brand{brand}</p>
                   </main>
                 </div>
               );
             })}
           </article>
        </section>
      )
    }
  }  