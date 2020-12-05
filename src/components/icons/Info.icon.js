import React from 'react';

const Info = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.093 512.093"
            {...props}
        >
            <g transform="translate(-1 -1)">
                <path
                d="M512.353 237.762a255.672 255.672 0 01-32.313 145.17 17.364 17.364 0 00-2.29 8.549v121.563l-65.872-39.493a17.904 17.904 0 00-18.779.398c-97.387 61.088-223.551 49.777-308.518-27.661S-23.323 244.276 28.492 141.655 194.168-16.471 306.926 5.925s196.765 117.203 205.427 231.837z"
                fill="#285680"
                />
                <circle cx={257.061} cy={257.044} r={203.034} fill="#4482c3" />
                <g fill="#e6e7e8">
                <circle cx={257.061} cy={142.286} r={35.31} />
                <path d="M239.405 257.044v70.621a8.828 8.828 0 01-8.828 8.828h-17.655a8.828 8.828 0 00-8.828 8.828v35.31a8.828 8.828 0 008.828 8.828h105.931a8.828 8.828 0 008.828-8.828v-35.31a8.828 8.828 0 00-8.828-8.828h-17.655a8.828 8.828 0 01-8.828-8.828V221.734a8.828 8.828 0 00-8.828-8.828H221.75a8.828 8.828 0 00-8.828 8.828v17.655a8.828 8.828 0 008.828 8.828h8.828a8.827 8.827 0 018.827 8.827z" />
                </g>
            </g>
        </svg>
    )
}

export default Info;
