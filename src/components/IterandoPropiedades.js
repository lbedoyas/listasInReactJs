import React from 'react';
import { Component } from 'react';

class IterandoPropiedades extends Component{

    state = {
        user: {
            name: 'Luis',
            country: 'Colombia',
            twitter: '@Lucho',
            youtube: 'Lucho'
        }
    }

    render() {

        const { user } = this.state;
        let keys = Object.keys(user);
        console.log(keys);


        return(
            <div>
                <h3>Iterando propiedades de Objetos</h3>
                <hr />
                <ul>
                    {keys.map(key => (
                        <li>
                           <strong> { key }: </strong> <span style= {{color: 'blue'}}> {user[key]} </span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default IterandoPropiedades;