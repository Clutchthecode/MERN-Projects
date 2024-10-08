import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from 'react';
import './index.css';
function App() {
  const[items,setItems]=useState([
    {
        id:1,
        checked:true,
        item:"do coding"
    },
    {
        id:2,
        checked:false,
        item:"do cooking"
    },
    {
        id:3,
        checked:false,
        item:"do drawing"
    }
]);

const handleCheck=(id)=>{
    const arr=items.map((item)=> 
    item.id===id ? {...item,checked:!item.checked}:item)

    setItems(arr);
    localStorage.setItem("todo_list",JSON.stringify(arr))
       
}

const handleDelete=(id)=>{
    const arr=items.filter((item)=>item.id!==id)
    {console.log('Updated Items:', arr);}
    setItems(arr);

    localStorage.setItem("todo_list",JSON.stringify(arr))
}
  
  return (
    <div className="app-container" >
     <Header />
     <Content 
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
     />
     <Footer
     length={items.length}
     />
    </div>
  );
}

export default App;
