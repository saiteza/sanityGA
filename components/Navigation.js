import { Container,Navbar, Nav  } from 'react-bootstrap';
import Link from 'next/link'
import ThemeToggle from './ToggleComponent';
 
export default function Navigation({theme,toggleTheme}) {
   return (
    <div>
       <Container>

  {/* NAVBAR STARTS */}
  <Navbar    variant={theme.type} className="move fj-navbar fj-nav-base" bg="transparent" expand="lg" >
      <Navbar.Brand  className="fj-navbar-brand">
        <Link href="/">
        <a style={{color:theme.fontColor}}>Filip-Jerga</a>
        </Link>
        
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
         
          <Nav.Link
               
            as={()=>{return (
              <Link href="/"><a  className=" fj-navbar-link nav-link">Home</a></Link>
            )}}>
          </Nav.Link>
            
        </Nav>
        <ThemeToggle onChange={toggleTheme} />   
      </Navbar.Collapse>
     
    </Navbar>
   
  </Container>
    </div>
  );
}
