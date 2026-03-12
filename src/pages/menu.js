import {useEffect,useState} from "react"

export default function Menu(){

const [menu,setMenu] = useState([])

useEffect(()=>{

fetch("/api/menu")
.then(res=>res.json())
.then(data=>setMenu(data))

},[])

return(

<div>


<div className="container">

<h1 style={{textAlign:"center",marginBottom:"40px"}}>Our Menu</h1>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"25px"
}}>

{menu.map(item=>(

<div key={item._id} style={{
background:"white",
padding:"20px",
borderRadius:"10px",
boxShadow:"0 5px 15px rgba(0,0,0,0.1)"
}}>

<h3>{item.name}</h3>

<p>{item.description}</p>

<h4 style={{color:"#facc15"}}>₹{item.price}</h4>

</div>

))}

</div>

</div>

</div>

)

}