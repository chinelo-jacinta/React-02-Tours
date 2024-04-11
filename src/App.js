import React, { useState, useEffect } from 'react';
import './index.css';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setloading] = useState(true);
  const [tours, setTour] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const fetchResponse = await response.json();
      setloading(false);
      setTour(fetchResponse);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const removeBtn = (id) => {
    const removeTour = tours.filter((item) => {
      return item.id !== id;
    });
    setTour(removeTour);
  };
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no more tours</h2>
          <button onClick={() => fetchData()} className='btn'>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <>
      <main>
        <section>
          <div className='title'>
            <h2>our tour</h2>
            <div className='underline'></div>
          </div>
          {tours.map((tour) => {
            return <Tours Tourz={tour} key={tour.id} removeBtn={removeBtn} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
