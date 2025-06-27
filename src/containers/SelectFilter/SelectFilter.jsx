import style from "./SelectFilter.module.scss";

const SelectFilter = ({ notes }) => {
  console.log(notes);

  return (
    <>
      <div className={style["container_filter"]}>
        <p>Filter:</p>
        <select name="filter-category" id="filter-category" onChange={notes}>
          <option value="">Choose a category</option>
          <option value="all">All</option>
          <option value="programmation">Programmation</option>
          <option value="design">UX/UI</option>
          <option value="neuropsychology">Neuropsychology</option>
          <option value="astronomy">Astronomy</option>
          <option value="gaming">Gaming</option>
        </select>
      </div>
    </>
  );
};

export default SelectFilter;
