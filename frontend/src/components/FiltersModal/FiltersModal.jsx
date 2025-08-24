import style from "./FiltersModal.module.scss";

const FiltersModal = ({
  isActive,
  setWord,
  setSelectedCategory,
  word,
  selectedCategory,
}) => {
  function resetFilters() {
    setSelectedCategory("");
    setWord("");
  }
  return (
    <>
      <section className={isActive ? style.active : style.notActive}>
        <div className={style["filters_modal_container"]}>
          <div className={style["filters_modal_input_word"]}>
            <p>Search by word:</p>
            <input
              type="text"
              placeholder="e.g. 'testing'"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
          </div>

          <div className={style["filters_modal_select"]}>
            <p>Filter by:</p>
            <select
              name="filter-category"
              id="filter-category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="" disabled>
                Choose a category
              </option>
              <option value="all">All</option>
              <option value="programmation">Programmation</option>
              <option value="neuropsychology">Neuropsychology</option>
              <option value="astronomy">Astronomy</option>
              <option value="gaming">Gaming</option>
            </select>
          </div>

          <button onClick={resetFilters}>Reset</button>
        </div>
      </section>
    </>
  );
};
export default FiltersModal;
