import React, { useState } from "react";

const phases = [
    {
        id: 1, title: "Phase 1: Laying the Foundation (Q4 2024-Q1 2025)",
        content: "Content for Phase 1"
    },
    
    { id: 2, title: "Phase 2", content: "Content for Phase 2" },
    { id: 3, title: "Phase 3", content: "Content for Phase 3" },
    { id: 4, title: "Phase 4", content: "Content for Phase 4" },
];

const Roadmap = () => {
    const [selectedPhase, setSelectedPhase] = useState(1);

    return (
        <div className="roadmap-container">

            <div className="content">
                {phases.map((phase) => (
                    <div
                        key={phase.id}
                        className={`box ${selectedPhase === phase.id ? "active" : ""}`}
                    >
                        <h2>{phase.title}</h2>
                        <p>{phase.content}</p>
                    </div>
                ))}
            </div>

            <div className="timeline">
                {phases.map((phase) => (
                    <div
                        key={phase.id}
                        className={`circle ${selectedPhase === phase.id ? "highlight" : ""}`}
                        onClick={() => setSelectedPhase(phase.id)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Roadmap;
