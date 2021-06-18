import React, { Component } from 'react';
import '../pokecard.css'

const poki_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

// source for nicer images 
// const poki_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

// let padToThree = (number) => (number <= 999 ? `000{number}`.slice(-3): number )

class Pokecard extends Component {
    render() { 
        let imgSrc = `${poki_API}${this.props.id}.png`
        // let imgSrc = `${poki_API}${padToThree(this.props.id)}.png`

        return ( 
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <div className="Pokecard-image">
                    <img src={imgSrc} alt={this.props.name}/>
                </div>
                
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">EXP: {this.props.base_experience}</div>
            </div>
         );
    }
}
 
export default Pokecard;