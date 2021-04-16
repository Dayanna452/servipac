import React from 'react';
import '../styles/Nosotros.css';
import photo from '../../imagen.jpg';

const Nosotros = () => {
    return (
        <section id="nosotros" className="section-nosotros">
            <div class="container-xl" id="nosotros-container">
                <h1 className="text-uppercase">12 Años En El Mundo De Los Camiones</h1>
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <p class="text-justify">
                            En CORPORACION SERVIPAC S.A.C. Nos dedicamos al mantenimiento,
                            reparación, camiones, montacarga, sistema hidráulico. Garantizando
                            que sus vehículos estén operativos al 100% en todo momento.
                            Nuestros servicios se realizar en el propio local del cliente,
                            según el requerimiento solido grupo empresarial con amplia
                            experiencia en el sector automotriz peruano¡
                        </p>
                    </div>
                    <div class="col-md-6">
                        <img src={photo} alt="" className="d-block w-100" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nosotros;
