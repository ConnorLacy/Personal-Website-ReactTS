import React from 'react';

const Projects: React.FC = () => {
    return (
        <div className="ProjectComponent">
            <div className="project-container x-scroll x-mandatory">
                <div className="projects-wrapper">
                    <div className="project" id="Java">Java</div>
                    <div className="project" id="System">C/Unix</div>
                    <div className="project" id="Mobile">Mobile App Development</div>
                    <div className="project" id="React">React UI</div>
                </div>
            </div>
        </div>
    );
}

export default Projects;