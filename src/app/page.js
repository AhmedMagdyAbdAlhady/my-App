import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./componants/NavBar/Navbar";
import Footer from "./componants/Footer/Footer"
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  return (
    <main classNameName="container-fluid	">

      <NavBar />

      <div className="container py-5">
        {/* <!-- For Demo Purpose--> */}
        <header className="text-center mb-5">
          <h1 className="display-4 font-weight-bold">Man Store</h1>
          <p className="font-italic text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        </header>


        {/* <!-- First Row [Prosucts]--> */}
        <h2 className="font-weight-bold mb-2">From the Shop</h2>
        <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

        <div className="row pb-5 mb-4">
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            {/* <!-- Card--> */}
            <div className="card rounded shadow-sm border-0">
              <div className="card-body p-4">
                <Image
                  src="/shoes-1.webp"
                  width={300}
                  height={300}
                  alt=""
                  className="img-fluid d-block mx-auto mb-3" />
                <h5> <a href="#" className="text-dark">Awesome product</a></h5>
                <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <ul className="list-inline small">
                  <li className="list-inline-item m-0"><i className={styles.star}><FontAwesomeIcon icon={faStar} size='sm' /></i></li>
                  <li className="list-inline-item m-0"><i className={styles.star}><FontAwesomeIcon icon={faStar} size='sm' /></i></li>
                  <li className="list-inline-item m-0"><i className={styles.star}><FontAwesomeIcon icon={faStar} size='sm' /></i></li>
                  <li className="list-inline-item m-0"><i className={styles.star}><FontAwesomeIcon icon={faStar} size='sm' /></i></li>
                  <li className="list-inline-item m-0"><i className="fa fa-star-o text-success"></i></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            {/* <!-- Card--> */}
            <div className="card rounded shadow-sm border-0">
              <div className="card-body p-4">
                <Image
                  src="/shoes-3_rk25rt.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="img-fluid d-block mx-auto mb-3" />
                <h5> <a href="#" className="text-dark">Awesome product</a></h5>
                <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <ul className="list-inline small">
                  <li className="list-inline-item m-0"><i className={styles.star}><FontAwesomeIcon icon={faStar} size='sm' /></i></li>
                  <li className="list-inline-item m-0"><i className={styles.star}><FontAwesomeIcon icon={faStar} size='sm' /></i></li>
                  <li className="list-inline-item m-0"><i className={styles.star}><FontAwesomeIcon icon={faStar} size='sm' /></i></li>
                  <li className="list-inline-item m-0"><i className="fa fa-star-o text-success"></i></li>
                  <li className="list-inline-item m-0"><i className="fa fa-star-o text-success"></i></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            {/* <!-- Card--> */}
            <div className="card rounded shadow-sm border-0">
              <div className="card-body p-4">
                <Image
                  src="/shoes-3_rk25rt.jpg"
                  width={300}
                  height={300}
                  alt=""
                  className="img-fluid d-block mx-auto mb-3" />
                <h5> <a href="#" className="text-dark">Awesome product</a></h5>
                <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <ul className="list-inline small">
                  <li className="list-inline-item m-0"><i className={styles.star}><FontAwesomeIcon icon={faStar} size='sm' /></i></li>
                  <li className="list-inline-item m-0"><i className={styles.star}><FontAwesomeIcon icon={faStar} size='sm' /></i></li>
                  <li className="list-inline-item m-0"><i className={styles.star}><FontAwesomeIcon icon={faStar} size='sm' /></i></li>
                  <li className="list-inline-item m-0"><i className={styles.star}><FontAwesomeIcon icon={faStar} size='sm' /></i></li>
                  <li className="list-inline-item m-0"><i className={styles.star}><FontAwesomeIcon icon={faStar} size='sm' /></i></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            {/* <!-- Card--> */}
            <div className="card rounded shadow-sm border-0">
              <div className="card-body p-4">
                <Image
                  src="/shoes-4.webp"
                  alt=""
                  width={300}
                  height={300}
                  className="img-fluid d-block mx-auto mb-3" />
                <h5> <a href="#" className="text-dark">Awesome product</a></h5>
                <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <ul className="list-inline small">
                  <li className="list-inline-item m-0"><i className={styles.star}><FontAwesomeIcon icon={faStar} size='sm' /></i></li>
                  <li className="list-inline-item m-0"><i className={styles.star}><FontAwesomeIcon icon={faStar} size='sm' /></i></li>
                  <li className="list-inline-item m-0"><i className={styles.star}><FontAwesomeIcon icon={faStar} size='sm' /></i></li>
                  <li className="list-inline-item m-0"><i className={styles.star}><FontAwesomeIcon icon={faStar} size='sm' /></i></li>
                  <li className="list-inline-item m-0"><i className="fa fa-star-o text-success"></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        {/* <!-- Second Row [Team]--> */}
        <h2 className="font-weight-bold mb-2">Our Team</h2>
        <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

        <div className="row pb-5 mb-4">
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            {/* <!-- Card--> */}
            <div className="card shadow-sm border-0 rounded">
              <div className="card-body p-0">
                <Image
                  src="/profile-1_dewapk.webp"
                  alt=""
                  width={300}
                  height={300}
                  className="w-100 card-img-top" />
                <div className="p-4">
                  <h5 className="mb-0">Mark Rockwell</h5>
                  <p className="small text-muted">CEO - Consultant</p>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                    <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                    <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                    <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            {/* <!-- Card--> */}
            <div className="card shadow-sm border-0 rounded">
              <div className="card-body p-0">
                <Image
                  src="/profile-3.webp"
                  alt=""
                  width={300}
                  height={300}
                  className="w-100 card-img-top" />
                <div className="p-4">
                  <h5 className="mb-0">Mark Rockwell</h5>
                  <p className="small text-muted">CEO - Consultant</p>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                    <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                    <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                    <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            {/* <!-- Card--> */}
            <div className="card shadow-sm border-0 rounded">
              <div className="card-body p-0">
                <Image
                  src="/profile-2.webp"
                  alt=""
                  width={300}
                  height={300}
                  className="w-100 card-img-top" />
                <div className="p-4">
                  <h5 className="mb-0">Mark Rockwell</h5>
                  <p className="small text-muted">CEO - Consultant</p>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                    <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                    <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                    <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            {/* <!-- Card--> */}
            <div className="card shadow-sm border-0 rounded">
              <div className="card-body p-0">
                <Image
                  src="/profile-2.webp"
                  alt=""
                  width={300}
                  height={300}
                  className="w-100 card-img-top" />
                <div className="p-4">
                  <h5 className="mb-0">Mark Rockwell</h5>
                  <p className="small text-muted">CEO - Consultant</p>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                    <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                    <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                    <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Third Row [Profiles]--> */}
        <h2 className="font-weight-bold mb-2">Active Profiles</h2>
        <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

        <div className="row pb-5 mb-4">

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            {/* <!-- Card--> */}
            <div className="card rounded shadow-sm border-0">
              <div className="card-body p-0">
                <div className="bg-primary px-5 py-4 text-center card-Image-top">
                  <Image src="/teacher-4.jpg"
                    alt="..."
                    width={300}
                    height={300}
                    className="rounded-circle mb-2 img-thumbnail d-block mx-auto" />
                  <h5 className="text-white mb-0">Emma Nevoresky</h5>
                  <p className="small text-white mb-0">Elite user</p>
                </div>
                <div className="p-4 d-flex justify-content-center">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <h5 className="font-weight-bold mb-0 d-block">241</h5><small className="text-muted"><i className="fa fa-picture-o mr-1 text-primary"></i>Photos</small>
                    </li>
                    <li className="list-inline-item">
                      <h5 className="font-weight-bold mb-0 d-block">84K</h5><small className="text-muted"><i className="fa fa-user-circle-o mr-1 text-primary"></i>Followers</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            {/* <!-- Card--> */}
            <div className="card rounded shadow-sm border-0">
              <div className="card-body p-0">
                <div className="bg-success px-5 py-4 text-center card-img-top">
                  <Image
                    src="/teacher-2.webp"
                    alt="..."
                    width={300}
                    height={300}
                    className="rounded-circle mb-2 img-thumbnail d-block mx-auto" />
                  <h5 className="text-white mb-0">Samuel Hardy</h5>
                  <p className="small text-white mb-0">Elite user</p>
                </div>
                <div className="p-4 d-flex justify-content-center">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <h5 className="font-weight-bold mb-0 d-block">241</h5><small className="text-muted"><i className="fa fa-picture-o mr-1 text-success"></i>Photos</small>
                    </li>
                    <li className="list-inline-item">
                      <h5 className="font-weight-bold mb-0 d-block">84K</h5><small className="text-muted"><i className="fa fa-user-circle-o mr-1 text-success"></i>Followers</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            {/* <!-- Card--> */}
            <div className="card rounded shadow-sm border-0">
              <div className="card-body p-0">
                <div className="bg-info px-5 py-4 text-center card-img-top">
                  <Image
                    src="/teacher-7.webp"
                    alt="..."
                    width={300}
                    height={300}
                    className="rounded-circle mb-2 img-thumbnail d-block mx-auto" />
                  <h5 className="text-white mb-0">Tom Sunderland</h5>
                  <p className="small text-white mb-0">Elite user</p>
                </div>
                <div className="p-4 d-flex justify-content-center">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <h5 className="font-weight-bold mb-0 d-block">241</h5><small className="text-muted"><i className="fa fa-picture-o mr-1 text-info"></i>Photos</small>
                    </li>
                    <li className="list-inline-item">
                      <h5 className="font-weight-bold mb-0 d-block">84K</h5><small className="text-muted"><i className="fa fa-user-circle-o mr-1 text-info"></i>Followers</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            {/* <!-- Card--> */}
            <div className="card rounded shadow-sm border-0">
              <div className="card-body p-0">
                <div className="bg-warning px-5 py-4 text-center card-img-top">
                  <Image
                    src="/teacher-1.webp"
                    alt="..."
                    width={300}
                    height={300}
                    className="rounded-circle mb-2 img-thumbnail d-block mx-auto" />
                  <h5 className="text-white mb-0">John Tarly</h5>
                  <p className="small text-white mb-0">Elite user</p>
                </div>
                <div className="p-4 d-flex justify-content-center">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <h5 className="font-weight-bold mb-0 d-block">241</h5><small className="text-muted"><i className="fa fa-picture-o mr-1 text-warning"></i>Photos</small>
                    </li>
                    <li className="list-inline-item">
                      <h5 className="font-weight-bold mb-0 d-block">84K</h5><small className="text-muted"><i className="fa fa-user-circle-o mr-1 text-warning"></i>Followers</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* <!-- First Row [Statistics]--> */}
        <h2 className="font-weight-bold mb-2">Latest Statistics</h2>
        <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

        <div className="row pb-5">
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            {/* <!-- Card--> */}
            <div className="card rounded shadow-sm border-0">
              <div className="card-body p-5"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                <h5>Products Sales</h5>
                <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className="progress rounded-pill">
                  <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }} className="progress-bar rounded-pill"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            {/* <!-- Card --> */}
            <div className="card rounded shadow-sm border-0">
              <div className="card-body p-5"><i className="fa fa-tasks fa-2x mb-3 text-success"></i>
                <h5>Completed Tasks</h5>
                <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className="progress rounded-pill">
                  <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }} className="progress-bar bg-success rounded-pill"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            {/* <!-- Card --> */}
            <div className="card rounded shadow-sm border-0">
              <div className="card-body p-5"><i className="fa fa-user-circle-o fa-2x mb-3 text-info"></i>
                <h5>New Users</h5>
                <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className="progress rounded-pill">
                  <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }} className="progress-bar bg-info rounded-pill"></div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Card --> */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className="card rounded shadow-sm border-0">
              <div className="card-body p-5"><i className="fa fa-shopping-bag fa-2x mb-3 text-warning"></i>
                <h5>New Products</h5>
                <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className="progress rounded-pill">
                  <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }} className="progress-bar bg-warning rounded-pill"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </main>
  );
}
