import React, { useState, useEffect } from "react";

function App() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    if (!window.matchMedia) {
      return;
    }
    function listener(e) {
      const msg = `${new Date()}: ${e.matches}`;
      setEvents((ev) => [...ev, msg]);
    }

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(listener);

    return () => {
      mq.removeListener(listener);
    };
  }, []);

  return (
    <>
      <h1>Color Scheme Events</h1>
      {events}
    </>
  );
}

export default App;
