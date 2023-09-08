import "./Home.css"

import Navbar from "./../../Container/Navbar/Navbar"
import Button from "./../../Container/Button/Button"
export default function About()
{
    return(
        <div>
        <Navbar/>
        <h1 className="home">Home Page</h1>
        <Button text="About Me"/>
        <Button text="Contact Me"/>
        </div>
    );
}