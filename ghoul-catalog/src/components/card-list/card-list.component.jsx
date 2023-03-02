// import { Component } from "react";
import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ ghouls }) => (
    <div className="card-list">
        {ghouls.map(ghoul => {
            return <Card ghoul={ghoul} />;
        })}
    </div>
);


// class CardList extends Component {

//     render() {
//         const { ghouls } = this.props;

//         return (
//             <div className="card-list">
//                 {ghouls.map((ghoul) => {
//                     return (
//                         <Card ghoul={ghoul} />
//                     );
//                 })}
//             </div>
//         );
//     }
// }

export default CardList;