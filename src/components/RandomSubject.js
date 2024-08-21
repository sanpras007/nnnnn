import React, { useState } from 'react';

function RandomSubject({ subjects, completeSubject }) {
  const [randomSubject, setRandomSubject] = useState(null);
  const [startTime, setStartTime] = useState(null);

  const pickRandomSubject = () => {
    if (subjects.length > 0) {
      const randomIndex = Math.floor(Math.random() * subjects.length);
      setRandomSubject(subjects[randomIndex]);
      setStartTime(new Date());
    }
  };

  const handleComplete = () => {
    if (randomSubject && startTime) {
      const endTime = new Date();
      const timeSpentMs = endTime - startTime;

      // Convert milliseconds to hours, minutes, and seconds
      //const hours = Math.floor(timeSpentMs / (1000 * 60 * 60));
      const minutes = Math.floor((timeSpentMs % (1000 * 60 * 60)) / (1000 * 60));
      //const seconds = Math.floor((timeSpentMs % (1000 * 60)) / 1000);
      const timeSpent = `${minutes}`;

      console.log('Subject Completed:', randomSubject);
      console.log('Time Spent:', timeSpent);

      completeSubject(randomSubject._id, timeSpent);
      setRandomSubject(null);
      setStartTime(null);
    } else {
      console.log('Random Subject or Start Time is not set.');
    }
  };

  return (
    <div className="random-subject">
      <button onClick={pickRandomSubject}>Pick a Random Subject</button>
      {randomSubject && (
        <div>
          <h3>{randomSubject.subject}</h3>
          <button onClick={handleComplete}>Complete</button>
        </div>
      )}
    </div>
  );
}

export default RandomSubject;
