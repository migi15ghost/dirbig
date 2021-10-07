import React from 'react'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="f-heading">
                <h1>ENCUENTRANOS</h1>
                <p></p>
            </div>
            <div className="container" style={{  "border-top": "5px solid #53E7FF"}}>
                <div className="row">
                    <div className="col">
                        <h4>UBICACIÓN</h4>
                        <ul className="list-unstyled">
                            <li>Cochabamba, Bolivia</li>
                            <li>Km 11 Av. Blanco Galindo</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>QUIENES SOMOS</h4>
                        <p>
                        DRIBIG es una startup de servicio profesional en ingeniería de software y diseño gráfico que realiza sitios web, aplicaciones móviles, packaging, digitalización.
Cada trabajo que realizamos se lo hace con mucha dedicación y compromiso, con el único objetivo de dejar embelesados a cada uno de nuestros clientes.
Dedicamos todo el tiempo que sea nece       sario para entregar un trabajo perfecto.

¿Quiere el mejor resultado?elija a los mejores. DRIBIG
                        </p>
                    </div>
                    <div className="col">
                        <h4>CONTACTANOS</h4>
                        <ul className="list-unstyled">
                            <li>
                                Correo
                            </li>
                            <li>Teléfono</li>
                            <li>f in w</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
