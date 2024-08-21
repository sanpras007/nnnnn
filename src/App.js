import React, { useState, useEffect } from 'react';
import AddSubject from './components/AddSubject';
import RandomSubject from './components/RandomSubject';
import SubjectList from './components/SubjectList';
import CompletedList from './components/CompletedList';
import axios from 'axios';
import './App.css';

function App() {
  const [subjects, setSubjects] = useState([]);
  const [completedSubjects, setCompletedSubjects] = useState([]);

  useEffect(() => {
    axios.get('https://studyplanner-backend.vercel.app/api/v1/studyplanners/getSubjects')
      .then(response => {
        console.log('Subjects fetched:', response.data);
        setSubjects(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching subjects:', error);
      });

    axios.get('https://studyplanner-backend.vercel.app/api/v1/studyplanners/getCompletedSubjects')
      .then(response => {
        console.log('Completed subjects fetched:', response.data); 
        setCompletedSubjects(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching completed subjects:', error);
      });
  }, []);

  const addSubject = (subject) => {
    axios.post('https://studyplanner-backend.vercel.app/api/v1/studyplanners/addSubject', { "subject": subject })
      .then(response => {
        setSubjects([...subjects, response.data.data]);
      })
      .catch(error => {
        console.error('Error adding subject:', error);
      });
  };

  const completeSubject = (subjectId, timeSpent) => {
    axios.put('https://studyplanner-backend.vercel.app/api/v1/studyplanners/markAsCompleted', { id: subjectId, studyTime: timeSpent })
      .then(response => {
        const updatedSubject = response.data.data;
        setCompletedSubjects([...completedSubjects, updatedSubject]);
        setSubjects(subjects.filter(subject => subject._id !== subjectId));
      })
      .catch(error => {
        console.error('Error completing subject:', error);
      });
  };

  const deleteCompletedSubject = (subjectId) => {
    axios.delete(`https://studyplanner-backend.vercel.app/api/v1/studyplanners/deleteSubject/${subjectId}`)
      .then(response => {
        setCompletedSubjects(completedSubjects.filter(subject => subject._id !== subjectId));
      })
      .catch(error => {
        console.error('Error deleting subject:', error);
      });
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Study Planner</h1>
      <div className="planner-container">
        <AddSubject addSubject={addSubject} />
        <RandomSubject subjects={subjects} completeSubject={completeSubject} />
        <div className="lists-container">
          <SubjectList subjects={subjects} />
          <CompletedList completedSubjects={completedSubjects} deleteCompletedSubject={deleteCompletedSubject} />
        </div>
      </div>
    </div>
  );
}

export default App;
