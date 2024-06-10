import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./componants/NavBar/Navbar";
import Products from "./componants/products/Products";
import Footer from "./componants/Footer/Footer"
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar ,} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook,faInstagram ,faLinkedinIn} from '@fortawesome/free-brands-svg-icons';



export default function Home() {
 // Assuming you have an array of products
  const style =  styles.cardStyle;
  // Populate products array with your products
  const teams =[
    {
      image:"/profile-1_dewapk.webp",
      name:'Mark Rockwell',
      description:'CEO - Consultant',
      faceBook :'http/www.facebook.com',
    },
    {
      image:"/profile-3.webp",
      name:'Mark Rockwell',
      description:'CEO - Consultant',
      faceBook :'http/www.facebook.com',
    },
    {
      image:"/profile-2.webp",
      name:'Mark Rockwell',
      description:'CEO - Consultant',
      faceBook :'http/www.facebook.com',
    },
    
    {
      image:"/profile-2.webp",
      name:'Mark Rockwell',
      description:'CEO - Consultant',
      faceBook :'http/www.facebook.com',
    },
  ];
  return (
    <main className="container">
      <NavBar />
      
       {/* <!-- For Demo Purpose--> */}
       <header className="text-center mb-5">
          <h1 className="display-4 font-weight-bold">Man Store</h1>
          <p className="font-italic text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        </header>

        {/* <!-- First Row [Prosucts]--> */}
        <Products />
      {/* Rest of your components */}
      {/* <!-- Second Row [Team]--> */}
        <h2 className="font-weight-bold mb-2 mt-2">Our Team</h2>
        <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        <div className="row pb-5 mb-4">
        {teams.map((team, index)=>(
          <div key={index} className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className={`card mb-4 shadow-sm border-0 ${styles.cardStyle}`}>
            <div className="card-body p-0">
            <Image
                  src={team.image}
                  alt=""
                  width={300}
                  height={300}
                  className="w-100 card-img-top" />
            <div className="p-4">
                  <h5 className="mb-0">{team.name}</h5>
                  <p className="small text-muted">{team.description}</p>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item m-0"><a href={team.faceBook} className={`social-link ${styles.media}`}><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li className="list-inline-item m-0"><a href={team.faceBook} className={`social-link ${styles.media}`}><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li className="list-inline-item m-0"><a href={team.faceBook} className={`social-link ${styles.media}`}><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li className="list-inline-item m-0"><a href={team.faceBook} className={`social-link ${styles.media}`}><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                  </ul>
                </div>
            </div>
            </div>
          </div>
        ))}
        </div>
      <Footer />

    </main>
  );
}
