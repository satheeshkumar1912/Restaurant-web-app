export default function Home(){

return(

<div>


{/* HERO */}

<div style={{
height:"90vh",
backgroundImage:"url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D')",
backgroundSize:"cover",
backgroundPosition:"center",
display:"flex",
alignItems:"center",
justifyContent:"center",
color:"white"
}}>

<div style={{
background:"rgba(0,0,0,0.6)",
padding:"50px",
borderRadius:"10px",
textAlign:"center"
}}>

<h1 style={{fontSize:"60px",marginBottom:"20px"}}>
RoyalBite Restaurant
</h1>

<p style={{fontSize:"22px",marginBottom:"30px"}}>
Luxury Dining Experience
</p>

<a href="/reservation">

<button style={{
padding:"15px 40px",
background:"#facc15",
border:"none",
fontSize:"18px",
borderRadius:"5px"
}}>
Book Table
</button>

</a>

</div>

</div>

{/* SPECIAL DISHES */}

<div className="container">

<h2 style={{
textAlign:"center",
marginBottom:"40px"
}}>
Our Special Dishes
</h2>

<div style={{
display:"flex",
gap:"30px",
justifyContent:"center",
flexWrap:"wrap"
}}>

<img src="https://t3.ftcdn.net/jpg/08/84/96/06/360_F_884960685_aXx1WK7aLtjK3mpiGGmtlR75ntdZpNtw.jpg" style={{width:"300px",borderRadius:"10px"}}/>
<img src="https://www.shutterstock.com/image-photo/side-view-isometric-angle-crispy-600nw-2600398075.jpg" style={{width:"300px",borderRadius:"10px"}}/>
<img src="https://www.relishthebite.com/wp-content/uploads/2017/07/fishfry-3.jpg" style={{width:"300px",borderRadius:"10px"}}/>

</div>

</div>

</div>

)

}