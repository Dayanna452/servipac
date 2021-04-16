import React from 'react';
import '../styles/NavBar.css';
import logo from '../../Servipac.svg';




const NavBar = () => {
    return (
        <React.Fragment>

            <header>
                <div className="barra-inicio"></div>
            </header>
            <nav className="navbar navbar-expand-md py-0 navbar-light position-sticky bg-light" id="barraNavegadora">
                <div class="container-fluid ">
                    <a class="navbar-brand" href="#">
                        <img class="img-fluid rounded float-start" src={logo} alt="" width="80" height="50" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarInicio"
                        aria-controls="navbarInicio" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse  justify-content-end" id="navbarInicio">
                        <ul class="navbar-nav ">
                            <li class="nav-item ">
                                <a class="nav-link active" href="#inicio" aria-current="page">
                                    <i class="fas fa-home"></i>
                                </a>
                            </li>
                            <li class="nav-item mb-2 pt-1">
                                <a class="nav-link active" href="#nosotros">NOSOTROS</a>
                            </li>
                            <li class="nav-item mb-2 pt-1">
                                <a class="nav-link active" href="#productos">PRODUCTOS</a>
                            </li>
                            <li class="nav-item mb-2 pt-1">
                                <a class="nav-link active" href=" #equipo">EQUIPO</a>
                            </li>
                            <li class="nav-item mb-2 pt-1">
                                <a class="nav-link active" href="#contactanos"><b>CONTÁCTANOS</b></a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link active" href="login.html">
                                    <i class="far fa-user">
                                        {/* {name} */}
                                    </i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>





        </React.Fragment>

    )
}

export default NavBar;
