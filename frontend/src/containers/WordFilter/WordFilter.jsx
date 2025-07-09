import style from "./WordFilter.module.scss";

const WordFilter = ({ setWord, word }) => {
  return (
    <>
      <div className={style["word-filter-container"]}>
        <p>Search by word:</p>
        <input
          type="text"
          placeholder="e.g. 'testing'"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
      </div>
    </>
  );
};

export default WordFilter;
