import {Button, Card} from "react-bootstrap"
const SingleMovie =({movie})=>{
 return(
    <><Card>
    <Card.Img variant="top" src={movie.Poster}/>
    <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Button className="bg-dark text-white">Details</Button>
    </Card.Body>
    
</Card></>
 )
}
export default SingleMovie