import "./About.css"

import Navbar from "./../../Container/Navbar/Navbar"
import Button from "./../../Container/Button/Button"
export default function About()
{
    return(
        <div>
        <Navbar/>
        <h1 className="about">About Page</h1>
        <Button/>
        </div>
    );
}