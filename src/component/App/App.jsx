import { useEffect, useState } from "react";
import articles from "../../data/articles.json";
import Controls from "../Controls/Controls.jsx";
import Progress from "../Progress/Progress.jsx";
import ArticleView from "../ArticleView/ArticleView";

const App = () => {
  const [selectedIdx, setSelectedIdx] = useState(() => {
    const savedIdx = window.localStorage.getItem("article-idx");
    return savedIdx !== null ? JSON.parse(savedIdx) : 0;
  });

  const handlePrev = () => {
    setSelectedIdx(selectedIdx - 1);
  };

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };

  useEffect(() => {
    window.localStorage.setItem("article-idx", selectedIdx);
  }, [selectedIdx]);

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
      <Progress current={current} total={total} />
      <ArticleView topic={visibleArticle.topic} text={visibleArticle.text} />
    </div>
  );
};

export default App;
