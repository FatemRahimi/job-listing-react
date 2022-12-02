import { useState } from "react";
import "./App.css";
import jobsData from "./data.json";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [filterKeywords, setFilterKeywords] = useState([]);

  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setFilterKeywords([...filterKeywords, data]);
    }
  };

  const deleteKeyWord = (data) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setFilterKeywords(newKeywords);
  };

  // const clearAll = () => {
  //   setFilterKeywords([]);
  // }

  return (
    <div>
      <Header keywords={filterKeywords} removeKeywords={deleteKeyWord} />{" "}
      {/* clearAll={clearAll}  ===> was passed a props in header */}
      <section className="card--list">
        {jobsData.map((job) => (
          <Card
            job={job}
            key={job.id}
            setKeywords={addFilterKeywords}
            keywords={filterKeywords}
          />
        ))}
      </section>
      <footer>Challenge by Frontend Mentor. Coded by TeniolaO</footer>
    </div>
  );
}

export default App;
