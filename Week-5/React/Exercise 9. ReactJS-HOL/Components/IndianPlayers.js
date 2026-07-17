import React from 'react';

export function OddPlayers({ first, third, fifth }) {

    return (
        <div>

            <h1>Odd Players</h1>

            <ul>
                <li>First : {first}</li>
                <li>Third : {third}</li>
                <li>Fifth : {fifth}</li>
            </ul>

        </div>
    );
}

export function EvenPlayers({ second, fourth, sixth }) {

    return (
        <div>

            <h1>Even Players</h1>

            <ul>
                <li>Second : {second}</li>
                <li>Fourth : {fourth}</li>
                <li>Sixth : {sixth}</li>
            </ul>

        </div>
    );
}

function IndianPlayers() {

    const T20Players = ['First Player', 'Second Player', 'Third Player'];

    const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];

    const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

    return (
        <div>

            <h1>List of Indian Players Merged:</h1>

            <ul>
                {
                    IndianPlayers.map((item, index) => (
                        <li key={index}>Mr. {item}</li>
                    ))
                }
            </ul>

        </div>
    );
}

export default IndianPlayers;