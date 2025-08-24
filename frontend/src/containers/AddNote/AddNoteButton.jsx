import { Link } from "react-router";
import style from "./AddNoteButton.module.scss";
import SelectFilter from "../SelectFilter/SelectFilter";
import { useLocation } from "react-router";
import WordFilter from "../WordFilter/WordFilter";
import FiltersBtn from "../FiltersBtn/FiltersBtn";

//* Open the "New note form" when clicked
const AddNoteButton = ({
  setSelectedCategory,
  setWord,
  handleWordFilter,
  word,
  selectedCategory,
}) => {
  const location = useLocation("");
  return (
    <>
      <section className={style["container"]}>
        <FiltersBtn
          setWord={setWord}
          word={word}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <section className={style["container_filter_section"]}>
          {location.pathname === "/notes" && (
            <WordFilter
              setWord={setWord}
              handleWordFilter={handleWordFilter}
              word={word}
            />
          )}

          {location.pathname === "/notes" && (
            <SelectFilter setSelectedCategory={setSelectedCategory} />
          )}
        </section>

        {location.pathname === "/notes" && (
          <div className={style["container_button_form"]}>
            <Link to="/form">
              <button className={style["container_button"]} autoFocus>
                + Add note
              </button>
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default AddNoteButton;
