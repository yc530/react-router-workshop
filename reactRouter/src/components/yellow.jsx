import { Link } from 'react-router-dom';

const shades = ['lemon', 'gold', 'mustard']

function Yellow() {

    return (
      <>
        <div className="yellow">
            <h1>Yellow</h1>
        </div>
        <div className="yellow">
          <Link to={shades[0]}>{shades[0]}</Link>
          <Link to={shades[1]}>{shades[1]}</Link>
          <Link to={shades[2]}>{shades[2]}</Link>
        </div>
      </>
    )
  }
  
  export default Yellow