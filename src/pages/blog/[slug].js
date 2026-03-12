import {useRouter} from "next/router"
import {useEffect,useState} from "react"

export default function BlogDetail(){

const router = useRouter()
const {slug} = router.query

const [blog,setBlog] = useState(null)

useEffect(()=>{

if(!slug) return

fetch(`/api/blogs/${slug}`)
.then(res=>res.json())
.then(data=>setBlog(data))

},[slug])

if(!blog) return <p>Loading...</p>

return(

<div style={{padding:"40px"}}>

<h1>{blog.title}</h1>

<p>{blog.content}</p>

</div>

)

}