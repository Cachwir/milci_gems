import React from "react";
import {Link} from "react-router-dom";

function Header()
{
    return (
        <div>
            <div id="top-line"></div>

            <div className="container">

                {/* Header */}
                <header id="header">
                    {/* Logo */}
                    <div className="ten columns">
                        <div id="logo">
                            <h1><Link to="/"><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="logo" /></Link></h1>
                            <div id="tagline">Des gemmes d'exception</div>
                            <div className="clearfix"></div>
                        </div>
                    </div>

                    {/* Social / Contact */}
                    <div className="six columns">

                        <div className="clearfix"></div>

                    </div>
                </header>

                <div className="clearfix"></div>

            </div>
        </div>
    );
}

export default Header;