import React, { useState } from 'react';

const EditTask = ({ task, updateTask, cancelEdit }) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(editedTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={editedTask.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        value={editedTask.description}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dueDate"
        value={editedTask.dueDate}
        onChange={handleChange}
        required
      />
      <select name="status" value={editedTask.status} onChange={handleChange}>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <button type="submit">Save</button>
      <button type="button" onClick={cancelEdit}>Cancel</button>
    </form>
  );
};

export default EditTask;
