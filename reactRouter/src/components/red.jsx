import { useParams } from "react-router-dom"

function Red() {
const Red= ({shades}) =>{
const {shade} = useParams();

    return (
      <>
        <div className="red">
            <h1>Red {shade}</h1>
        </div>
      </>
    )
  }
}
  export default Red