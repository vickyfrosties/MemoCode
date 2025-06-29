import { Link } from "react-router";
import style from "./AddNoteButton.module.scss";
import SelectFilter from "../SelectFilter/SelectFilter";
import { useLocation } from "react-router";
import WordFilter from "../WordFilter/WordFilter";

//* Open the "New note form" when clicked
const AddNoteButton = ({
  setSelectedCategory,
  setWord,
  handleWordFilter,
  word,
}) => {
  const location = useLocation("");
  return (
    <>
      <section className={style["container"]}>
        {location.pathname === "/" && (
          <WordFilter
            setWord={setWord}
            handleWordFilter={handleWordFilter}
            word={word}
          />
        )}

        {location.pathname === "/" && (
          <SelectFilter setSelectedCategory={setSelectedCategory} />
        )}

        {location.pathname === "/" && (
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
