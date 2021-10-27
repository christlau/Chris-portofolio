import React, { Component } from 'react';
import Social from '../components/Social';
class Contact extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Hubungi saya di :</h1>
            
            <h3>Instagram   :   @chrislaurenc_</h3>
            <h3>LinkedIn    :   Christian Laurence</h3>
            <h3>Email       :   laurentianchris@gmail.com</h3>
            <br/>

            <h3>Untuk social media lainya akan menyusul :)</h3>
            <Social />
            </div>
            )
        }
    }
    
    export default Contact
    