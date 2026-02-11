import { useState, useEffect } from "react";
import { format } from "date-fns";
import "./App.css";

function App() {
  // Holds current time
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Interval to update in real time
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <p className="clock">
        {format(currentTime, "MMMM dd, yyyy hh:mm:ss a")}
      </p>
    </div>
  );
}

export default App;