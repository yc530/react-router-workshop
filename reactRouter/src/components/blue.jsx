import { Link } from 'react-router-dom';

const shades = ['skyblue', 'navy', 'teal']

function Blue() {

    return (
      <>
        <div className="blue">
            <h1>Blue {shade}</h1>
        </div>
        <div className="blue">
          <Link to={shades[0]}>{shades[0]}</Link>
          <Link to={shades[1]}>{shades[1]}</Link>
          <Link to={shades[2]}>{shades[2]}</Link>
        </div>
      </>
    )
  }
  
  export default Blue