import { Link } from 'react-router-dom';

const shades = ['mint', 'lime', 'shamrock']

function Green() {

    return (
      <>
        <div className="green">
            <h1>Green</h1>
        </div>
        <div className="gfreen">
          <Link to={shades[0]}>{shades[0]}</Link>
          <Link to={shades[1]}>{shades[1]}</Link>
          <Link to={shades[2]}>{shades[2]}</Link>
        </div>
      </>
    )
  }
  
  export default Green