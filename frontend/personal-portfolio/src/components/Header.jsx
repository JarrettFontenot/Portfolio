import React from "react";

function Header() {
    return(
        <header>
            <div className="HeaderText">
                 <a href="#name"><h1>Jarrett</h1></a>
                <a href="#projects"><h1>Projects</h1></a>
                <a href="#skills"><h1>Skills</h1></a>
                <a href="#contact"><h1>Contact</h1></a>
            </div>
        </header>
    );
}

export default Header;