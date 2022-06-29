import { Link } from 'react-router-dom'
import {Button, Nav, Navbar, Form, FormControl} from "react-bootstrap"

const Mynav = ()=>{
    return(
        <>
       <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">EPIFLIX</Navbar.Brand>
            <Nav className="mr-auto">
        <Link to="/" className='nav-link'>Home </Link>
        <Link to="/TvShows" className='nav-link'>TV Shows</Link>
        
        <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
            </Form>
    </Navbar>
       </>
    )
}
      
   export default Mynav