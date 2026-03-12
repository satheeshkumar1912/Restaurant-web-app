import {useEffect,useState} from "react"
import Link from "next/link"

export default function Blog(){

const [blogs,setBlogs] = useState([])

useEffect(()=>{

fetch("/api/blogs")
.then(res=>res.json())
.then(data=>setBlogs(data))

},[])

return(

<div style={{padding:"40px"}}>

<h1>Restaurant Blog</h1>

{blogs.map(blog=>(

<div key={blog._id} style={{
border:"1px solid #ddd",
padding:"20px",
margin:"20px 0"
}}>

<h2>{blog.title}</h2>

<p>{blog.summary}</p>

<Link href={`/blog/${blog.slug}`}>
Read More
</Link>

</div>

))}

</div>

)

}