import React from 'react';

const Projects: React.FC = () => {
    return (
        <div className="ProjectComponent">
            <div className="project-container x-scroll x-mandatory">
                <div className="projects-wrapper">
                    <div className="project" id="Java">1</div>
                    <div className="project" id="System">2</div>
                    <div className="project" id="Mobile">3</div>
                    <div className="project" id="React">4</div>
                </div>
            </div>
        </div>
    );
}

export default Projects;