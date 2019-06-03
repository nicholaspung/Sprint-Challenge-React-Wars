import React from 'react';
import Dog from './Dog';

const DogList = props => {
    return (
        <div>
            {props.dogImgURLs.map(dogImgURL => <Dog url={dogImgURL} />)}
        </div>
    );
}

export default DogList;