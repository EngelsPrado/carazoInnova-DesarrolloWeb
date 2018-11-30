import React, { Component } from 'react';
import Footer from '../layout/Footer';


class Presentation extends Component {
    render() {
        return (
         <section >
           <img className="section"  width="1350" height="800"></img>

           <Footer></Footer>

          <img    src="https://firebasestorage.googleapis.com/v0/b/businic-aeaea.appspot.com/o/Call%20to%20action-01.png?alt=media&token=67b0a289-3480-4ca5-82c3-bf9da6c09f3d"  className="img-thumbnail mx-auto d-block rounded " alt="Responsive image" > 
             </img>

         </section>
         
         
        );
    }
}


export default Presentation;