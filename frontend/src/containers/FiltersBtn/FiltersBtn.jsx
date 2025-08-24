import FiltersModal from "../../components/FiltersModal/FiltersModal";
import { useState } from "react";

import style from "./FiltersBtn.module.scss";

const FiltersBtn = ({ setWord, word, setSelectedCategory }) => {
  const [isActive, setIsActive] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsActive((prev) => !prev);
    setFiltersOpen((prev) => !prev);
  };

  return (
    <>
      <div className={style["button-filters-container"]}>
        <button
          onClick={handleClick}
          className={style["button-filters-container-button"]}
        >
          {filtersOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="white"
              viewBox="0 0 256 256"
            >
              <path d="M227.82,66.76A16,16,0,0,0,216,40H40A16,16,0,0,0,28.19,66.76l.08.09L96,139.17V216a16,16,0,0,0,24.87,13.32l32-21.34A16,16,0,0,0,160,194.66V139.17l67.73-72.32ZM40,56h0Zm106.19,74.59A8,8,0,0,0,144,136v58.66L112,216V136a8,8,0,0,0-2.16-5.46L40,56H216Zm99.49,79.81a8,8,0,0,1-11.32,11.32L216,203.32l-18.34,18.35a8,8,0,0,1-11.31-11.32L204.69,192l-18.34-18.35a8,8,0,0,1,11.31-11.31L216,180.69l18.34-18.34a8,8,0,0,1,11.32,11.31L227.31,192Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="white"
              viewBox="0 0 256 256"
            >
              <path d="M230.6,49.53A15.81,15.81,0,0,0,216,40H40A16,16,0,0,0,28.19,66.76l.08.09L96,139.17V216a16,16,0,0,0,24.87,13.32l32-21.34A16,16,0,0,0,160,194.66V139.17l67.74-72.32.08-.09A15.8,15.8,0,0,0,230.6,49.53ZM40,56h0Zm106.18,74.58A8,8,0,0,0,144,136v58.66L112,216V136a8,8,0,0,0-2.16-5.47L40,56H216Z"></path>
            </svg>
          )}
          Filters
        </button>
      </div>

      <section className={style["modal-container"]}>
        <FiltersModal
          className={isActive ? style.active : style.notActive}
          isActive={isActive}
          setIsActive={setIsActive}
          setWord={setWord}
          word={word}
          setSelectedCategory={setSelectedCategory}
        />
      </section>
    </>
  );
};
export default FiltersBtn;
