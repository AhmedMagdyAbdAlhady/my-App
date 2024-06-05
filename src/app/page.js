import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./componants/NavBar/Navbar";
import Footer from "./componants/Footer/Footer"
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar ,} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook,faInstagram ,faLinkedinIn} from '@fortawesome/free-brands-svg-icons';



export default function Home() {
  const products = [
    {
      image:"/shoes-1.webp",
      name:'Awesome product',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      rating:5,

    },
    {
      image:"/shoes-3_rk25rt.jpg",
      name:'Awesome product',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      rating:5,

    },
    {
      image:"/shoes-4.webp",
      name:'Awesome product',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      rating:2,

    },
    {
      image:"/shoes-1.webp",
      name:'Awesome product',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      rating:5,

    },
    {
      image:"/shoes-3_rk25rt.jpg",
      name:'Awesome product',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      rating:5,

    },
    {
      image:"/shoes-4.webp",
      name:'Awesome product',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      rating:2,

    },
    {
      image:"/shoes-1.webp",
      name:'Awesome product',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      rating:5,

    },
    {
      image:"/shoes-3_rk25rt.jpg",
      name:'Awesome product',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      rating:5,

    },
    {
      image:"/shoes-4.webp",
      name:'Awesome product',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      rating:2,

    },
    {
      image:"/shoes-1.webp",
      name:'Awesome product',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      rating:7,

    },
    {
      image:"/shoes-3_rk25rt.jpg",
      name:'Awesome product',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      rating:5,

    },
    {
      image:"/shoes-4.webp",
      name:'Awesome product',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      rating:2,

    },
    
  ]; // Assuming you have an array of products
  
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
        <h2 className="font-weight-bold mb-2">From the Shop</h2>
        <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
      <div className="row  pb-5 mb-4">
        {products.map((product, index) => (
          <div key={index} className="col-lg-3 col-md-6 mb-4 ">
            {/* <!-- Card--> */}
            <div className={`card  shadow-sm  ${styles.cardStyle}`}>
              <div className={`card-body p-4`}>
                <Image
                  src={product.image}
                  width={300}
                  height={300}
                  alt=""
                  className="img-fluid d-block mx-auto mb-3" />
                <h5><a href="#" className="text-dark">{product.name}</a></h5>
                <p className="small text-muted font-italic">{product.description}</p>
                <ul className="list-inline small">
                  {  }
                  {product.rating <= 5 ? Array.from({ length: product.rating }, ( i) => (
                    <li key={i} className="list-inline-item m-0">
                      <i className={styles.star}><FontAwesomeIcon icon={faStar} size='sm' /></i>
                    </li>
                  )): 'Its too Much'}
                  {Array.from({ length: 5 - product.rating }, ( i) => (
                    <li key={i} className="list-inline-item m-0">
                      <i className=" text-success"><FontAwesomeIcon icon="fa-regular fa-star" /></i>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
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
