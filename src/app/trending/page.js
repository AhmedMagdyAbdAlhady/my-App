import NavBar from "../componants/NavBar/Navbar";
import Header from "../componants/Header/Header";
import Products from "../componants/products/Products";
import Footer from "../componants/Footer/Footer";
import styles from "./page.module.css";

export default function trending() {
    const style = styles.cardStyle;
    const star = styles.star
    return (
        <>
            <main className="container">
                
                <NavBar />
                {/* <!-- For Demo Purpose--> */}
                <header className="text-center mb-5">
                    <h1 className="display-4 font-weight-bold">Trending Now</h1>
                    <p className="font-italic text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                </header>
                <Header />
                <Products />
                <Footer />
            </main>
        </>
    )
}