import React, { Component } from 'react';
import '../pokecard.css'

const poki_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
class Pokecard extends Component {
    render() { 
        let imgSrc = `${poki_API}${this.props.id}.png`
        return ( 
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name}/>
                <div>Type: {this.props.type}</div>
                <div>EXP: {this.props.base_experience}</div>
            </div>
         );
    }
}
 
export default Pokecard;