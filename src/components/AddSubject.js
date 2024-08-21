import React, { useState } from 'react';

function AddSubject({ addSubject }) {
  const [subject, setSubject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subject.trim()) {
      addSubject(subject);
      setSubject('');
    }
  };

  return (
    <div className="add-subject">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter subject"
        />
        <button type="submit">Add Subject</button>
      </form>
    </div>
  );
}

export default AddSubject;
