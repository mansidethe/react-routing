import "./Button.css"


export default function Button({text})
{
    return(

        <div >
           <button className="btn">{text}</button>
        </div>
    )
}