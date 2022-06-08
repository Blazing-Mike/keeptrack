import React from "react";
import PropTypes from "prop-types";
import { Project } from "./Project";

  function ProjectForm({ onSave, onCancle }) {
   const handleSubmit = (event) => {
     event.preventDefault();
     onSave(new Project({ name: 'Updated Project' }));
   };
    return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
  <label htmlFor="name">Project Name</label>
  <input type="text" name="name" placeholder="enter name" />
  <label htmlFfor="description">Project Description</label>

  <textarea name="description" placeholder="enter description"></textarea>
  <label htmlFor="budget">Project Budget</label>

  <input type="number" name="budget" placeholder="enter budget" />
  <label htmlFor="isActive">Active?</label>
  <input type="checkbox" name="isActive" />

  <div className="input-group">
    <button className="primary bordered medium">Save</button>
    <span></span>
    <button type="button" className="bordered medium" onClick ={onCancle}>cancel</button>
  </div>
</form>
);
  }


ProjectForm.propTypes = {
  onCancle: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default ProjectForm;