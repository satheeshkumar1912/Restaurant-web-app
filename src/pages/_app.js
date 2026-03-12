import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/globals.css'

export default function MyApp({Component,pageProps}){
return(

    <>
    <Navbar/>
    <Component {...pageProps}/>
    <Footer/>
    </>
)
}