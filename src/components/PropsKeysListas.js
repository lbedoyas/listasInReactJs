import React, {Component} from 'react';

const users = [
    {id: 1, name: 'luis', country: 'colombia'},
    {id: 2, name: 'gabriel', country: 'argentina'}
]

class PropsKeysListas extends Component{
    render(){
        return(
            <div>
                <h1>
                    Iterando
                </h1>
                <ul>
                    {users.map((user)=> (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}


export default PropsKeysListas;