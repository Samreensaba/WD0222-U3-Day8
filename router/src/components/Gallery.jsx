import SingleMovie from "./SingleMovie"
import { Spinner, Container, Row, Col } from "react-bootstrap"
import { useState } from "react"
import { useEffect } from "react"

const Gallery =({title, movieGenre})=>{

    const [movieList, setMovieList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
		movieFetch(movieGenre)
	}, [])

   const movieFetch= async(query)=>{
        const url=`http://www.omdbapi.com/?apikey=fcba03d5&s=${query}`

        const response = await fetch(url)
        if (response.ok){
            const data = await response.json()
            console.log(data)
            const movies = data.Search
            //this.setState({
            //    movieList: data.Search,
            //    isLoading: false
            //    
            //})
            setMovieList(movies)
            setIsLoading(false)
        }
        else{
            const message = response.text()
            console.log(message)
            //this.setState({isLoading: false})
            setIsLoading(false)
        }
    }

    return(
       <Container>
       <h2 style={{color:"white", textAlign:"left"}} >{title}</h2>
       <Row>
       {isLoading && (
           <Spinner animation="border" role="status"></Spinner>)}
           {movieList &&
          movieList.slice(0,6).map((movie)=>(
           <Col
           xs={6}
           md={3}
           lg={2}
           className="mb-5" key= {movie.imdbID}>
          <SingleMovie movie={movie}/>
           </Col>
          ))
          }
       </Row>
   </Container>
    )
   }
   export default Gallery