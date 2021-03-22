import React, {Component} from 'react';
import './style.css';


class ListaObjetos extends Component{

    state = {
        products: [
            {
                id: 1,
                name: 'camisa',
                colors: ['red', 'blue', 'green'],
                price: 20
            },
            {
                id: 2,
                name: 'jeans',
                colors: ['red', 'blue', 'green'],
                price: 32
            }
        ]
    }

    render(){

        return(
            <div>
                <h1>Iterando Listas de objetos</h1>
                <div>
                    {this.state.products.map((product)=> {
                        return(
                            <div>
                                <h3>
                                {product.name}
                                </h3>
                                <h4>
                                $ {product.price}
                                </h4>
                                <div>
                                    {product.colors.map((color)=> {
                                        return(
                                            <span className="product-colors" style={{background: color}}>

                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ListaObjetos;