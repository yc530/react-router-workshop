import { Link } from 'react-router-dom';

const shades = ['lavender', 'indigo', 'grape']

function Violet() {

    return (
      <>
        <div className="violet">
            <h1>Violet</h1>
        </div>
        <div className="violet">
          <Link to={shades[0]}>{shades[0]}</Link>
          <Link to={shades[1]}>{shades[1]}</Link>
          <Link to={shades[2]}>{shades[2]}</Link>
        </div>
      </>
    )
  }
  
  export default Violet