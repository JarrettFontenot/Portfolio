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
        { title: "EcoBytes", description: "Developed a full stack application that teaches the significgance of e-waste. The app locates nearby places to dispose of your own e-waste, and has sign up / log in features to enhance customization." },
        { title: "Todo List", description: "Created a todo list application using the MERN stack, with the vision of using it on my personal machine" },
        { title: "TravelBuddy", description: "Engineered a full stack travel planning application. The app allows users to book flights, hotels, and search for activities in the city of there choice."},
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