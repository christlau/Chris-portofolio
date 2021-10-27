import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";


class Navitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trans: "",
    };
  }

  render() {
    let teks;
    switch (this.props.item) {
      case "Home":
        this.state.trans = "Beranda";
        break;
      case "About":
        this.state.trans = "Tentang Saya";
        break;
      case "Education":
        this.state.trans = "Pendidikan";
        break;
      case "Skills":
        this.state.trans = "Skills";
        break;
      case "Contact":
        this.state.trans = "Kontak";
    }

    return (
      <li id={this.props.item}>
        <Link
          to={this.props.tolink}
          onClick={this.props.activec.bind(this, this.props.item)}
        >
          {this.state.trans}
        </Link>
      </li>
    );
  }
}
        
        export default Navitem
        