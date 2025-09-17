import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);
  const [fours, setFours] = useState(0);

  const handleSingles = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };

  const handleFour = () => {
    const updatedRuns = runs + 4;
    const updatedFours = fours + 1;
    setFours(updatedFours);
    setRuns(updatedRuns);
  };
  const handleSix = () => {
    const updatedRuns = runs + 6;
    const updatedSixes = sixes + 1;
    setSixes(updatedSixes);

    setRuns(updatedRuns);
  };

  return (
    <div>
      <p></p>
      <h3>Player: Bangla Batsman</h3>
      {runs >= 50 && <p>Congratulation you score Half Century</p>}
      {runs >= 100 && <p>Congratulation you score Century</p>}
      <h1>Score:{runs} </h1>
      <button onClick={handleSingles}>singles</button>
      <button onClick={handleFour}>four</button>
      <button onClick={handleSix}>six</button>
      <br />
      <p>
        <small>four:{fours}</small>
      </p>
      <p>
        <small>six:{sixes}</small>
      </p>
    </div>
  );
}
