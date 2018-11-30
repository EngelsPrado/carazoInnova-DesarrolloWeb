import React, { Component } from 'react';
import NegocioSummary from './NegocioSummary'
import {Link} from 'react-router-dom'

class ListNegocios extends Component {
  
    render() {
        const {negocios}=this.props
        console.log(negocios)    
        return (
            <div>
                <div className="project-list section">
                 
                {
                    negocios && negocios.map(negocio=>{
                       return <NegocioSummary negocios={negocio}  key={negocio.id} ></NegocioSummary>
                    })
                }
                
              </div>
            </div>
        );
    }
}


export default ListNegocios;