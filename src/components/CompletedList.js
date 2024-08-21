import React from 'react';

function CompletedList({ completedSubjects = [], deleteCompletedSubject }) {
  return (
    <div className="completed-list">
      <h2>Completed Subjects</h2>
      <ul>
        {completedSubjects.length > 0 ? (
          completedSubjects.map((item, index) => (
            <li key={index}>
              {item.subject} - {item.studyTime} minutes
              <button onClick={() => deleteCompletedSubject(item._id)}>Delete</button>
            </li>
          ))
        ) : (
          <li>No completed subjects yet.</li>
        )}
      </ul>
    </div>
  );
}

export default CompletedList;
