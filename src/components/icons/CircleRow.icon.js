import React from 'react';

const CircleRow = (props) => {
    return (
        <svg
            viewBox="0 0 42 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
        <path
            d="M27.212 20.362H1.338C.6 20.362 0 19.678 0 18.835c0-.843.6-1.527 1.338-1.527h25.874c.738 0 1.338.684 1.338 1.527 0 .843-.6 1.527-1.338 1.527z"
            fill="#fff"
        />
        <path
            d="M19.744 27.489c-.357 0-.712-.133-.983-.4a1.35 1.35 0 010-1.934l6.432-6.32-6.432-6.32a1.35 1.35 0 010-1.934 1.408 1.408 0 011.967 0l7.415 7.287a1.35 1.35 0 010 1.932l-7.415 7.286c-.273.27-.629.403-.985.403z"
            fill="#fff"
        />
        <path
            d="M21.815 38c-8.295 0-15.619-4.73-18.66-12.05-.278-.663.068-1.416.77-1.678.7-.26 1.497.064 1.774.732 2.626 6.32 8.953 10.405 16.116 10.405 9.547 0 17.316-7.362 17.316-16.409 0-9.047-7.769-16.41-17.316-16.41-7.163 0-13.49 4.086-16.116 10.406-.28.668-1.074.991-1.774.732-.702-.262-1.048-1.015-.77-1.678C6.195 4.73 13.52 0 21.814 0c11.055 0 20.05 8.524 20.05 19s-8.995 19-20.05 19z"
            fill="#fff"
        />
        </svg>
    )
}

export default CircleRow;
