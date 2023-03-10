import React, { Component }  from 'react';
import './card.styles.css';

const Card = ({ ghoul }) => {
    const { id, name, email } = ghoul;
    return (
        <div className="card-container" key={id}>
            <img
                alt={`ghoul ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=240x240`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

// class Card extends Component {
//     render() {
//         const { id, name, email } = this.props.ghoul;
//         return (
//             <div className="card-container" key={id}>
//                 <img
//                     alt={`ghoul ${name}`}
//                     src={`https://robohash.org/${id}?set=set2&size=240x240`} />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         );
//     }
// }

export default Card;