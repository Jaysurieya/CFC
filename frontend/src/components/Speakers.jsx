import React from "react";
import { FocusCards } from './Focus_cards';

function Speakers() {
    const myCards = [
    {
        title: "Speaker 1",
        src: "https://preview--cfc-tribe-hub.lovable.app/assets/speaker-1-DNRV6Wsk.jpg",
    },
    {
        title: "Speaker 2",
        src: "https://preview--cfc-tribe-hub.lovable.app/assets/speaker-12-DsEpYluI.jpg",
    },
    {
        title: "Speaker 3",
        src: "https://preview--cfc-tribe-hub.lovable.app/assets/speaker-16-y2qbM_jE.jpg",
    },
    {
        title: "Speaker 4",
        src: "https://preview--cfc-tribe-hub.lovable.app/assets/speaker-7-COsJxg7i.jpg",
    },
    {
        title: "Speaker 5",
        src: "https://preview--cfc-tribe-hub.lovable.app/assets/speaker-9-DixuXGLz.jpg",
    },
    {
        title: "Speaker 6",
        src: "https://preview--cfc-tribe-hub.lovable.app/assets/speaker-5-Bhaw8g0S.jpg",
    },
    ];
    return (
        <div style={{ paddingBottom: "200px"}}>
            <h1 className="text-3xl font-bold mb-4 text-white"
            style={{ color: "#5aedbaff",paddingTop: "100px"}}>Speakers</h1>
            <p style={{ color: "#ffffff", paddingBottom: "90px" }}>A glimpse into our premium webinars and expert sessions.</p>
            <FocusCards cards={myCards} />
        </div>
    );
}

export default Speakers;
