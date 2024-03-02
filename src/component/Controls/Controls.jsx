const Controls = ({ first, last, onPrev, onNext }) => {
  return (
    <div>
      <button disabled={first} onClick={onPrev}>
        Prev
      </button>
      <button disabled={last} onClick={onNext}>
        Next
      </button>
    </div>
  );
};

export default Controls;
