import React from 'react';

// function SubjectList({ subjects }) {
//   return (
//     <div className="subject-list">
//       <h2>Subjects</h2>
//       <ul>
//         {subjects.map((subject,index) => (
//           <li key={index}>{subject.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

function SubjectList({ subjects }) {
  return (
    <div className="subject-list">
      <h2>Subjects</h2>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>{subject.subject}</li> // Access the 'subject' key to display the subject name
        ))}
      </ul>
    </div>
  );
}


export default SubjectList;
