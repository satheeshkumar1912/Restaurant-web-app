import {useState} from "react"
export default function Reservation(){

const [name,setName]=useState("")
const [date,setDate]=useState("")
const [time,setTime]=useState("")
const [guests,setGuests]=useState("")

async function handleSubmit(e){

e.preventDefault()

const res = await fetch("/api/reservations",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({name,date,time,guests})
})

const data = await res.json()

if(!res.ok){
alert(data.message)
return
}

alert("Reservation Confirmed!")

}

return(

<div>


<div style={{
height:"90vh",
backgroundImage:"url('https://www.shutterstock.com/image-photo/defocused-background-busy-restaurant-scene-600nw-2620694859.jpg')",
backgroundSize:"cover",
display:"flex",
justifyContent:"center",
alignItems:"center"
}}>

<form onSubmit={handleSubmit} style={{
background:"white",
padding:"40px",
borderRadius:"10px",
width:"350px"
}}>

<h2 style={{marginBottom:"20px"}}>Reserve Table</h2>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
style={{width:"100%",padding:"10px",marginBottom:"10px"}}
/>

<input
type="date"
value={date}
onChange={(e)=>setDate(e.target.value)}
required
style={{width:"100%",padding:"10px",marginBottom:"10px"}}
/>

<input
type="time"
value={time}
onChange={(e)=>setTime(e.target.value)}
required
style={{width:"100%",padding:"10px",marginBottom:"10px"}}
/>

<input
type="number"
placeholder="Guests"
value={guests}
onChange={(e)=>setGuests(e.target.value)}
required
style={{width:"100%",padding:"10px",marginBottom:"20px"}}
/>

<button style={{
width:"100%",
padding:"12px",
background:"#facc15",
border:"none",
fontSize:"18px",
borderRadius:"5px"
}}>
Reserve
</button>

</form>

</div>

</div>

)

}