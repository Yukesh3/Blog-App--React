import React from 'react'
import { Link } from 'react-router-dom'




const Navbar = () => {

  return (
    < >
      <div className='Navbar'>

        <h1 className='The'>The</h1>
        <h1 className='Siren'>Siren</h1>

        <div className='Nav_Links'>

          <Link className='Nav_Heading' to="/home">Home</Link>

          <Link className='Nav_Heading' to="/kollywood">Kollywood</Link>

          <Link className='Nav_Heading' to="/technology">Technology</Link>

          <Link className='Nav_Heading' to="/hollywood">Hollywood</Link>

          <Link className='Nav_Heading' to="/fitness">Fitness</Link>

          <Link className='Nav_Heading' to="/food">Food</Link>

        </div>



      </div>








    </>
  )
}

export default Navbar