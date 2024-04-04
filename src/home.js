import React from 'react';
import { Outlet, Link } from "react-router-dom";

function Home () {
    return(
        <div style={{textAlign:'center',marginTop:'50px'}}>
            <p style={{fontSize:'50px'}}><strong>Home</strong></p>
            <p>Bem vindo a tela de Home</p>
            <nav>
                <Link to="/">About</Link>

            </nav>
            <Outlet/>
        </div>

    )
}
export default Home;