import React from 'react';
import ProjectCard from './ProjectCard';
import PropTypes from 'prop-types';
import { Project } from './Project';
import ProjectForm from './ProjectForm';

 function ProjectList({ projects }) {
    const handleEdit  = (project) => {
       console.log(project);

    };

    const items = projects.map(project => (
        <div key={project.id} className="cols-sm">
            <ProjectCard project={project} onEdit={handleEdit}></ProjectCard>
            <ProjectForm />
            </div>
    ));
    return <div className="row">{items}</div>;

 }

 ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
 };



export default ProjectList;

