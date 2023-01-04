import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
// 
function App() {

  const [data, setData] = useState([]);
  useEffect(() => {
    const config = {
      headers: {
        Authorization: "whatever-you-want",
      },
    };

    const url = "https://reactnd-books-api.udacity.com/books";

    axios
      .get(url, config)
      .then((res) => {
        setData(res.data.books);
      })
      .catch(err=>{
            console.log("Status Code: "+err.response.status)
            if(err.response.status===404){
              console.log("Website not found")
            }
            else{
              console.log(err)
            }
          })
  }, []);
  

  return (
    <div>
      {data.map((item)=>{
        return(
          <div key={item.id}>
            <h4>{item.title}</h4>
            <div className='flex'>
              <img src={item.imageLinks.smallThumbnail} alt=""></img>
              <p>{item.description}</p>
            </div>
            {item.authors.map((author,index)=>{
              return <span key={index}>{author}</span>
            })}
            <hr></hr>
          </div>
        )
      })}

    </div>
  );
}

export default App;