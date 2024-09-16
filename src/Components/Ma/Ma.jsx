import logo from '../foto/logo.png'
import './Ma.css'
import Dropdown from 'react-bootstrap/Dropdown';

function Ma() {
  
    return (
     <>

     <nav>

        <img src={logo} alt="" />

        <div className='wr'>

        <Dropdown>
      <Dropdown.Toggle variant="success" className='w' id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <a href=""><p>Developers</p></a>

    <Dropdown>
      <Dropdown.Toggle variant="success" className='w' id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <a href=""><p>Blog</p></a>
    <a href=""><p>Changelog</p></a>

        </div>

        <button>Join Waitlist</button>

     </nav>

     </>
   )
 }
 
 export default Ma;
 