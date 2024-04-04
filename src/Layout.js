import React from 'react';
import { Outlet, Link } from "react-router-dom";

function Layout() {
    return(

    <div style={{ textAlign: 'center',marginTop:'150px' }}> 
      <p style={{fontSize:'50px',marginTop:'-150px'}}><strong>About</strong></p>
      <p><strong>BEM-VINDO</strong></p>
      <p>O objetivo dessa aplicação é ajudar turistas a conhecerem Recife e seus pontos turisticos.</p>
      <p><strong>Nomes da equipe : </strong>Cleyton,Italo e Elion</p>
      <p><strong>Link do repositório: </strong> https://github.com/cleyton123/web.git</p>
      
         
         <nav>
            <Link to="/home">Home</Link>
         </nav>
         <Outlet />
    </div>
    )
}

export default Layout;
