import { useParams } from "react-router-dom"

function Red() {

const {shade} = useParams();

    return (
      <>
        <div className="red">
            <h1>Red - Shade: {shade}</h1>
        </div>
      </>
    )
  }
  
  export default Red