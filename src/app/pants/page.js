import NavBar from "../componants/NavBar/Navbar";
import Header from "../componants/Header/Header";
import Products from "../componants/products/Products";
import Footer from "../componants/Footer/Footer";
import styles from "./page.module.css";

export default function Shoes (){
    const style =  styles.cardStyle;
    const star = styles.star
    return (
        <>
        <main className="container">
            <NavBar/>
            <Header/>
            <Products/>
            <Footer/>
        </main> 
       </> 
    )
}