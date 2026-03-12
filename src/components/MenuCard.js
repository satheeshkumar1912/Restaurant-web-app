export default function MenuCard({item}){

return(

<div style={{
background:"#1e293b",
borderRadius:"15px",
padding:"20px",
width:"250px",
transition:"0.3s",
boxShadow:"0 10px 25px rgba(0,0,0,0.5)"
}}

onMouseEnter={(e)=>{
e.currentTarget.style.transform="translateY(-10px)"
}}

onMouseLeave={(e)=>{
e.currentTarget.style.transform="translateY(0)"
}}

>

<h3 style={{color:"#d4af37"}}>
{item.name}
</h3>

<p>{item.description}</p>

<h4 style={{color:"#e63946"}}>
₹{item.price}
</h4>

</div>

)

}