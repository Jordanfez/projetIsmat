import React from 'react'
import './LoginStyle.css'
import './bootstrap.min.css'

const login = () => {
  return (
    <div>
        <div> 
            <nav className="facebook"> 
                <h1 style={{ color: 'blue'}}> facebook </h1>
                <h5> Avec facebook,  <br />partagez et restez en contact avec votre entourage</h5>
            </nav>
         </div>
         <div>
            <form action="" className="connection">
                 <input class="form-control" type="text" placeholder='adress email ou numero de tél'/><br />
                 <input class="form-control"  type="text" placeholder='Mot de passe' /><br />
                 <button  class="btn btn-primary" style={{backgroundColor: 'blue', color: 'white'}}> Se connecter</button><br />
                 <p style={{color: 'rgba(41, 41, 165, 0.596)', left:'29%', position:'relative'}}> <a href="">Mot de passe oublié ?</a> </p>
                    <p> <hr /> </p>
                 <button class="btn btn-primary" style={{backgroundColor: 'rgb(24, 180, 10)', color: 'white'}}> Créeer nouveau compte</button>
            </form><br />
            <p style={{marginLeft: '52%'}}> Créeer une Page pour une célébrité, une marque ou une<br /> <h6 style={{marginLeft: '25%'}}> entreprise.</h6> </p>
         </div>
    </div>
  )
}

export default login
