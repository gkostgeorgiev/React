import { Component } from "react";

class CardList extends Component {

    render() {
        console.log(this.props.ghouls);
        console.log('render from Cardlist');
        const { ghouls } = this.props;

        return (
            <div>
                {ghouls.map(ghoul => (
                    <h1 key={ghoul.id} >{ghoul.name}</h1>
                ))}
            </div>
        );
    }
}

export default CardList;