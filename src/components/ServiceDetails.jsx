import React from 'react';

const ServiceDetails = (props) => {
    return (
        <div>
            <h3>Service Details : {props.match.params.id}</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Eligendi quidem, aliquid nam molestias tempora quibusdam dolores assumenda 
                voluptas quos, dolore incidunt beatae iusto
                 expedita deserunt eius nemo laboriosam esse qui.
            </p>
        </div>
    );
}

export default ServiceDetails;
