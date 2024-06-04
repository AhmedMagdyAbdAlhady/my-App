import Image from "next/image";
const Footer = () => {
    return (
        <div className="container">
            <footer className="row row-cols-4 py-5 my-5 border-top contaner FooterStyle">
                <div className="col-12  col-md-3 d-flex align-items-center flex-column ">
                    <div href="/" className="d-flex align-items-center flex-column mb-3 link-dark text-decoration-none ">
                        <Image
                            src="/images.png"
                            width={50}
                            height={50}
                            alt="Picture of the author"
                        />
                        Man Store
                    </div>
                    <p className="text-muted ">© Ahmed Magdy</p>
                </div>


                <div className="
                col-12
                col-md-3 
                d-flex 
                align-items-center
                flex-column
                d-md-block
                mt-3
                ">
                    <h5 className="">SHOP</h5>
                    <ul className="nav flex-column d-flex  align-items-center align-items-md-start ">
                        <li 
                        className="
                        nav-item 
                        mb-2  "
                        ><a href="#" className="nav-link p-0 text-muted">Men</a></li>
                        <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-muted">Women</a></li>
                        <li className="nav-item mb- "><a href="#" className="nav-link p-0 text-muted">Warrior Kids</a></li>
                        <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-muted">Headwear</a></li>
                        <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-muted">Accessories</a></li>
                        <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-muted">Join The Club</a></li>
                    </ul>
                </div>

                <div className="col-12 col-md-3 d-flex align-items-center flex-column d-md-block mt-3">
                    <h5>Company</h5> 
                    <ul className="nav flex-column d-flex  align-items-center align-items-md-start">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"> Jocko Podcast</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Giftcards</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-3 d-flex align-items-center flex-column d-md-block mt-3">
                    <h5>Customer Service</h5>
                    <ul className="nav flex-column d-flex  align-items-center align-items-md-start">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQ</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Log In Help</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About Jocko</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact Us</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">My Account</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
};
export default Footer;