import React, { Component } from 'react';

const poki_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
class Pokecard extends Component {
    render() { 
        let imgSrc = `${poki_API}${this.props.id}.png`
        return ( 
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name}/>
                <div>{this.props.type}</div>
                <div>{this.props.base_experience}</div>
            </div>
         );
    }
}
 
export default Pokecard;