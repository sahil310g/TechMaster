import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
    return (
        // <nav>
        //     <h1>TechMaster</h1>
        //     <main>

        //         <HashLink to={"/#home"}>Home</HashLink>

        //         <HashLink to={"/#about"}>About</HashLink>
        //         <HashLink to={"/#brands"}>Brands</HashLink>
        //         <Link to={"/contact"}>Contact</Link>
        //         <Link to={"/services"}>Services</Link>

        //     </main>
        // </nav>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <h1>TechMaster</h1>
                <main>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                        <div className="navbar-nav">
                            <HashLink className="nav-link" to={"/#home"}>Home</HashLink>
                            <HashLink className="nav-link" to={"/#about"}>About</HashLink>
                            <HashLink className="nav-link" to={"/#brands"}>Brands</HashLink>
                            <Link className="nav-link" to={"/contact"}>Contact</Link>
                            <Link className="nav-link" to={"/services"}>Services</Link>
                        </div>

                    </div>
                </main>
            </div>

        </nav>
    )
}

export default Header
