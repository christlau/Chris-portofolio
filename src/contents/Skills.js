import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['Web Development [HTML, CSS]','Javascript [beserta framework seperti react.js]','PHP','SQL','C/C++','Java','Python']
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">Kemampuan Saya</h1>
            <br/>
            <p>Adapun beberapa kemampuan atau bahasa pemorograman yang sudah pernah saya pelajari, baik secara ringkas maupun tingkat lanjutan:
            </p>
            <ul>
            {this.state.myskills.map((value)=>{
                return <li>-{value}</li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills
    