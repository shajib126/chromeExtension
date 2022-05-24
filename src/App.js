import { useState } from "react";

const data = [
  {
    name:'Search Engine',
    url:["https://www.google.com","https://www.bing.com"]
  }
]
function App() {
  const [lists, setLists] = useState(data)
  const opentap = (url)=>{
    url.map(l => {
      return window.open(l,"_blank")
    })
  }
  return (
    <div className="app">
      {
        lists && lists.map(list =>{
          return(
            <button onClick={()=>opentap(list.url)}>{list.name}</button>
          )
        })
      }
    </div>
  );
}

export default App;
