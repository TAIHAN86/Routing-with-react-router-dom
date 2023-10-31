import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return <>

    <nav className="navbar navbar-expand-lg ">
    <div className="container">
    <Link className="navbar-brand text-white fs-1 w-bolder my-3" to="home">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">


      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-pills ">

        <li className="nav-item">
          <Link className="nav-link active text-white w-bold my-3"   aria-current="page" to="about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-3 text-white w-bold my-3" to="protfolio">PROTFOLIO</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link text-white w-bold my-3" to="contact">CONTACT</Link>
        </li>
      </ul>


{/* <ul className="navbar-nav  ms-auto mb-2 mb-lg-0 nav-pills" id="pills-tab" role="tablist">

  <li className="nav-item" role="presentation">
    <Link className="nav-link active text-white w-bold my-3" aria-current="page" to="about" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"  role="tab" aria-controls="pills-home" aria-selected="true">ABOUT</Link>
  </li>

  <li className="nav-item" role="presentation">
    <Link className="nav-link mx-3 text-white w-bold my-3"  to="protfolio" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"  role="tab" aria-controls="pills-profile" aria-selected="false">PROTFOLIO</Link>
  </li>

  <li className="nav-item" role="presentation">
    <Link className="nav-link text-white w-bold my-3" to="contact" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact"  role="tab" aria-controls="pills-contact" aria-selected="false">CONTACT</Link>
  </li>

</ul> */}

    </div>
  </div>
</nav>

{/* <div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0"></div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0"></div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0"></div>
  <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0"></div>
</div> */}

    </>
  }
}
