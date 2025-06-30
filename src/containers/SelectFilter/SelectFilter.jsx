import style from "./SelectFilter.module.scss";

const SelectFilter = ({ setSelectedCategory }) => {
  return (
    <>
      <div className={style["container_filter"]}>
        <p>Filter by:</p>
        <select
          name="filter-category"
          id="filter-category"
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
    </>
  );
};

export default SelectFilter;
