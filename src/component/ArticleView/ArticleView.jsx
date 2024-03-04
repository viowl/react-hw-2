const ArticleView = ({ topic, text }) => {
  return (
    <article>
      <h1>{topic}</h1>
      <p>{text}</p>
    </article>
  );
};

export default ArticleView;
