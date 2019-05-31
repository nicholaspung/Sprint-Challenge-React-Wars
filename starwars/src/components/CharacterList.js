import React from 'react';

import Character from './Character';

const CharacterList = props => {
    return (
        <div>
            {props.starwarsCharsList.map(starwarsChar => <Character character={starwarsChar} />)}
        </div>
    );
}

export default CharacterList;