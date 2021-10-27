import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/pasfoto.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['Hai, saya Christian Laurence']} speed={25} eraseDelay={2000} typingDelay={1500}/>
            <ReactTypingEffect className="typingeffect" text={['Saya adalah murid ISTP Medan']} speed={25} eraseDelay={2000} typingDelay={1500}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    