import { useParams} from "react-router-dom"

function Blue() {
  const {shade} = useParams();
    return (
      <>
        <div className="blue">
            <h1>Blue {shade}</h1>
        </div>
      </>
    )
  }
  
  export default Blue