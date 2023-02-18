import React from 'react';

const HomeBanner = (props) => {
    return (
        <div>
            <h1>This is {props.title.name}, and I'm {props.title.age}'s old</h1>
        </div>
    );
};

export default HomeBanner;