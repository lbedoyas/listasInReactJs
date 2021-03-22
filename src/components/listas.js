import React, { Component } from 'react';

const frutas = [
    'fresa',
    'manzana',
    'sandia',
    'kiwi',
    'durazno',
    'mango',
    'piña'
]

class Lista extends Component{
    render(){
        return(
            <div>
                <h1>Listas</h1>
                <div>
                    <ul>
                        {frutas.map((fruta) => {
                            return (
                                <li>{fruta}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}


export default Lista;