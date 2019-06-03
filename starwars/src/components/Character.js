import React from 'react';

const Character = props => {
    return (
        <div class="row">
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">{props.character.name}</span>
                        <p>Height: {props.character.height}</p>
                    </div>
                    {/* <div class="card-action">
                        <a href="#">This is a link</a>
                        <a href="#">This is a link</a>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Character;