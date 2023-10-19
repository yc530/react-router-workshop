import { useNavigate } from "react-router-dom";
import '../index.css';

const shades = {
    blue: ['skyblue', 'navy', 'teal'],
    red: ['crimson', 'darkred', 'orangered']
  }

function AllShades() {
    const navigate = useNavigate()

    return (
        <>
        <h2>All Shades</h2>
        {shades.map((shade) => {
            return (
                <div onClick={() =>
                navigate(`/red/${shade.name}`)}>
                    {shade.name}
                </div>
            )
        })}
        </>
    )
}

export default AllShades