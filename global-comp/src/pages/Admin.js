import React, { useState } from 'react';
import './styles.css'; // Ensure this CSS file is configured for React

const Admin = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [removeTitle, setRemoveTitle] = useState('');

  const handleAddJob = (e) => {
    e.preventDefault();
    console.log("Job Added:", { jobTitle, jobDesc });
    setJobTitle('');
    setJobDesc('');
  };

  const handleRemoveJob = (e) => {
    e.preventDefault();
    console.log("Job Removed:", removeTitle);
    setRemoveTitle('');
  };

  return (
    <section id="admin">
      <h2>Admin Panel</h2>

      {/* Form to add new job */}
      <h3>Add a Job</h3>
      <form onSubmit={handleAddJob}>
        <label htmlFor="job-title">Job Title:</label>
        <input
          type="text"
          id="job-title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
        />

        <label htmlFor="job-desc">Roles and Responsibilities:</label>
        <textarea
          id="job-desc"
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
          required
        />

        <button type="submit">Add Job</button>
      </form>

      {/* Form to remove a job */}
      <h3>Remove a Job</h3>
      <form onSubmit={handleRemoveJob}>
        <label htmlFor="remove-title">Job Title to Remove:</label>
        <input
          type="text"
          id="remove-title"
          value={removeTitle}
          onChange={(e) => setRemoveTitle(e.target.value)}
          required
        />

        <button type="submit">Remove Job</button>
      </form>
    </section>
  );
};

export default Admin;
