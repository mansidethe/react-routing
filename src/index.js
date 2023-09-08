
import ReactDOM from 'react-dom/client';
import About from "./Views/About/About"
import Contact from "./../src/Views/Contact/Contact"
import Home from "./Views/Home/Home"


function App() {
  const path = window.location.pathname;

   switch (path) {

    case "/":
      return <Home />;
     case "/about":
      return <About />;
     case "/contact":
       return <Contact />;
    default:
       return <h1>Page not found</h1>;
  }

  
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<> <App/> </>);

