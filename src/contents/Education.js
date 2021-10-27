import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Pendidikan Saya</h1>
            <Widecard title="Teknik Informatika" where="Institut Sains & Teknologi TD. Pardede" from="2020" to="Sekarang"/>
            <Widecard title="Teknik Informatika" where="Institut Teknologi Del" from="2017" to="2019"/>
            <Widecard title="Sekolah menengah atas" where="Sekolah Menengah Atas Sutomo 1" from="2014" to="2017"/>
            </div>
            )
        }
    }
    
export default Education
    