import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class NegocioSummary extends Component {
    render() {
        const {negocios}=this.props
        console.log(negocios)
        return (
        <div>
             <div class="card"  >
              <img class="card-img-top" src={negocios.urlPhoto} alt="Card image cap" />
            <div class="card-body">
               <h5 class="card-title">{negocios.NombreNegocio}</h5>
             <p class="card-text">{negocios.descripcion}</p>
               <Link to={'/negocioDetail/' + negocios.id}>Ver mas detalles...</Link>
            </div>
          </div> 
        </div>
        );
    }
}

export default NegocioSummary;