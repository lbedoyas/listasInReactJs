import React, { Component } from 'react'
import './style.css';

export class PasarDatosListas extends Component {

    state = {
        fruits: [
            {name: 'Fresa', price: 5.4},
            {name: 'Manzana', price: 1.4},
            {name: 'Sandia', price: 7.4}
        ],

        frutaSeleccionada: {}
    }

     select = (fruit, event) => {
        alert(fruit.name)
        console.log(event);
        this.setState({
            frutaSeleccionada: fruit
        })
    }

    render() {
        return (
            <div>
                <h1>Pasar datos por una lista</h1>
                <ul>
                    {this.state.fruits.map(fruit => (
                        <li key={fruit.name}
                        onClick={this.select.bind(this,fruit)}
                        className="lista"
                        style={{
                            color: this.state.frutaSeleccionada.name === fruit.name ? 'red' : 'blue'
                        }}>
                            {fruit.name} - {fruit.price}
                        </li>
                    )) }
                </ul>
            </div>
        )
    }
}

export default PasarDatosListas
