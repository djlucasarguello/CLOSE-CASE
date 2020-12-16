import React from 'react';

const Document = (props) => {
    return (
        <svg
            height={512}
            viewBox="0 0 512 512"
            width={512}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M451 135l-105-30L316 0H106C81.147 0 61 20.147 61 45v422c0 24.853 20.147 45 45 45h300c24.853 0 45-20.147 45-45z"
                fill="#4086f4"
            />
            <path
                d="M451 135v332c0 24.853-20.147 45-45 45H256V0h60l30 105z"
                fill="#4175df"
            />
            <path
                d="M451 135H346c-16.5 0-30-13.5-30-30V0c3.9 0 7.8 1.5 10.499 4.501l120 120C449.5 127.2 451 131.1 451 135z"
                fill="#80aef8"
            />
            <path
                d="M346 241H166c-8.291 0-15-6.709-15-15s6.709-15 15-15h180c8.291 0 15 6.709 15 15s-6.709 15-15 15zM346 301H166c-8.291 0-15-6.709-15-15s6.709-15 15-15h180c8.291 0 15 6.709 15 15s-6.709 15-15 15zM346 361H166c-8.291 0-15-6.709-15-15s6.709-15 15-15h180c8.291 0 15 6.709 15 15s-6.709 15-15 15zM286 421H166c-8.291 0-15-6.709-15-15s6.709-15 15-15h120c8.291 0 15 6.709 15 15s-6.709 15-15 15z"
                fill="#fff5f5"
            />
            <g>
                <path
                d="M256 421h30c8.291 0 15-6.709 15-15s-6.709-15-15-15h-30zM256 361h90c8.291 0 15-6.709 15-15s-6.709-15-15-15h-90zM256 301h90c8.291 0 15-6.709 15-15s-6.709-15-15-15h-90zM256 241h90c8.291 0 15-6.709 15-15s-6.709-15-15-15h-90z"
                fill="#e3e7ea"
                />
            </g>
        </svg>
    )
}

export default Document;
