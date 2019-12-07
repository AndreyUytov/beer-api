import React from 'react'

export default function Main (props) {
    return (
        <main className="home-page__main">
            <div className="main__wrapper container">
                {props.children}
            </div>
        </main>
    )
}