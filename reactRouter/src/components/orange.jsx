import { Link } from 'react-router-dom';

const shades = ['coral', 'peach', 'safetyorange']

function Orange() {

    return (
      <>
        <div className="orange">
            <h1>Orange</h1>
        </div>
        <div className="orange">
          <Link to={shades[0]}>{shades[0]}</Link>
          <Link to={shades[1]}>{shades[1]}</Link>
          <Link to={shades[2]}>{shades[2]}</Link>
        </div>
      </>
    )
  }
  
  export default Orange