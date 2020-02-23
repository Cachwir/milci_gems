import React from "react";

function Footer()
{
    return (
        <div>
            {/* Footer / Start */}
            <footer id="footer">
                {/* 960 Container */}
                <div className="container">

                    {/* About */}
                    <div className="four columns">
                        <img id="logo-footer" src={process.env.PUBLIC_URL + "/assets/theme/images/logo-footer.png"} alt="" />
                        <p>Propulsé par ReactJS.</p>
                        <p>Images et textes par Milci.</p>
                    </div>

                    {/* Contact Details */}
                    <div className="four columns">
                        <h4>Coordonnées du développeur</h4>
                        <ul className="contact-details-alt">
                            <li><i className="halflings white user"></i> <p><strong>Discord:</strong> Cachwir#3822</p></li>
                            <li><i className="halflings white envelope"></i>
                                <p><strong>Email:</strong> cachwir@gmx.com</p></li>
                        </ul>
                    </div>

                </div>
                {/* 960 Container / End */}

            </footer>
            {/* Footer / End */}


            {/* Footer Bottom / Start  */}
            <footer id="footer-bottom">

                {/* 960 Container */}
                <div className="container">

                    {/* Copyrights */}
                    <div className="eight columns">
                        <div className="copyright">
                            © Copyright 2020 par Cachwir. Tous droits réservés.
                        </div>
                    </div>

                </div>
                {/* 960 Container / End */}

            </footer>
            {/* Footer Bottom / End */}
        </div>
    );
}

export default Footer;