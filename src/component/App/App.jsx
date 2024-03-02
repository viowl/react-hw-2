import { useState } from "react";
import articles from "../../data/articles.json";
import Controls from "../Controls/Controls.jsx";

const App = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handlePrev = () => {
    setSelectedIdx(selectedIdx - 1);
  };

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };

  const visibleArticle = articles[selectedIdx];
  const isFirst = selectedIdx === 0;
  const isLast = selectedIdx === articles.length - 1;
  const current = selectedIdx + 1;
  const total = articles.length;

  console.log(visibleArticle);

  return (
    <div>
      <Controls
        first={isFirst}
        last={isLast}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <p>
        {current}/{total}
      </p>
      <article>
        <h1>{visibleArticle.topic}</h1>
        <p>{visibleArticle.text}</p>
      </article>
    </div>
  );
};

export default App;
