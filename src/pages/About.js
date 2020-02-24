import React from "react";

import "./About.css";

function About()
{
    return (
        <div id="content" className="about">

            {/* 960 Container */}
            <div className="container floated">

                <div className="sixteen floated page-title">

                    <h2>À propos</h2>

                </div>

            </div>
            {/* 960 Container / End */}


            {/* 960 Container */}
            <div className="container floated">

                {/* Sidebar */}
                <div className="four floated sidebar left">
                    <aside className="sidebar padding-reset">

                        <div className="widget">
                            <h4>Le développeur</h4>
                            <p>
                                Né en Bretagne, Cachwir a appris lui-même le développement web (html, css, php, symfony,
                                javascript, react, angular, cordova, ionic).<br />
                                Après un stage et un CDI dans le sud de la France, il se lance dans l'auto-entreprenariat
                                avec comme projet de partir vivre au Japon.
                            </p>
                        </div>

                        <div className="widget">
                            <h4>Ses coordonnées</h4>

                            <ul className="contact-informations second">
                                <li><i className="halflings envelope"></i> <p><a href="mailto:cachwir@gmx.com"
                                                                                 target="_blank" rel="noopener noreferrer">cachwir@gmx.com</a></p>
                                </li>
                                <li><i className="icon-github"></i> <p><a href="https://github.com/Cachwir"
                                                                                  target="_blank" rel="noopener noreferrer">https://github.com/Cachwir</a>
                                </p></li>
                                <li><i className="halflings globe"></i> <p><a href="http://cachwir.com"
                                                                              target="_blank" rel="noopener noreferrer">http://cachwir.com</a></p>
                                </li>
                                <li><i className="halflings user"></i> <strong>Discord:</strong> Cachwir#3822</li>
                            </ul>

                        </div>

                    </aside>
                </div>
                {/* Sidebar / End */}

                {/* Page Content */}
                <div className="eleven floated right">
                    <section className="page-content">

                        <h3 className="margin">À propos du site</h3>
                        <p className="margin">
                            Ce site a été conçu avec reactJS dans le cadre de l'apprentissage du-dit framework.<br />
                            Un grand merci à Milci pour avoir fourni le titre du site, ses images et ses textes.<br />
                            Pour me contacter, privilégiez l'envoi d'un email ou ajoutez-moi sur Discord.
                        </p>

                    </section>
                </div>
                {/* Page Content / End */}


            </div>
            {/* 960 Container / End */}

        </div>
    );
}

export default About;