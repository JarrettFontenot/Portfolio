import React from "react";
/*
function Project() {
    return(
        <div className="project-container">
        <h1>Projects</h1>
        <div className='ProjectHolder'>
            <p>Project 1</p>
        </div>
        </div>
    )
}
*/
function Project() {
    const projects = [
        { title: "Disease Diagnosis", description: "Description of project 1" },
        { title: "E-waste", description: "Description of project 2" },
        { title: "Todo List", description: "Description of project 3" },
        { title: "Travel Planner", description: "Description of project 4"},
    ];

    return (
        <div className="project-container">
            <h1>Projects</h1>
            {projects.map((project, index) => (
                <div className="ProjectHolder" key={index}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Project;