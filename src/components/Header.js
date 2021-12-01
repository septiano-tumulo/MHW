import React from "react"

const Header = () => {
    return(
        <header className="bg-dark py-5 my-3">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Monster Hunter World</h1>
                    <p className="lead fw-normal text-white-50 mb-0">Search & Find Information About Weapon in MHW</p>
                </div>
            </div>
        </header>
    );
}

export default Header;