import { Link } from 'react-router-dom';

const shades = ['crimson', 'darkred', 'orangered']

function Red() {

    return (
      <>
        <div className="red">
          <h1>Red Shade:</h1>
        </div>
        <div className="red">
          <Link to={shades[0]}>{shades[0]}</Link>
          <Link to={shades[1]}>{shades[1]}</Link>
          <Link to={shades[2]}>{shades[2]}</Link>
        </div>
      </>
    )
  };

  export default Red