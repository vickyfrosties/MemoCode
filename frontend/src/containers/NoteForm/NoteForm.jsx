import style from "./NoteForm.module.scss";
import { useNavigate } from "react-router";

const NoteForm = ({ data, setFormData }) => {
  const navigate = useNavigate();

  async function createNote() {
    fetch(
      "http://localhost:8000/form",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(response);
        }
      })
      .catch((error) => {
        console.log("Erreur de la requête:", error);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !data.title ||
      !data.category ||
      !data.description ||
      !data.picture ||
      data.length === 0
    ) {
      throw new Error("All inputs are mandatory and must be filled.");
    }

    createNote();
    navigate("/notes");

    // * Reset data form after submit
    setFormData({
      title: "",
      description: "",
      picture: "",
      link: "",
      category: "",
    });
  };

  return (
    <>
      <form className={style["form"]} onSubmit={handleSubmit} id="note-form">
        <label className={style["form_title_input"]}>
          Title:
          <input
            type="text"
            name="title"
            id="title"
            // required
            value={data.title}
            autoFocus
            // autoComplete="off"
            onChange={(e) => setFormData({ ...data, title: e.target.value })}
          />
        </label>

        <label className={style["form_category_select"]}>
          Category:
          <select
            name="category"
            id="category-select"
            // required
            onChange={(e) => setFormData({ ...data, category: e.target.value })}
          >
            <option value="">Choose a category</option>
            <option value="programmation">Programmation</option>
            <option value="neuropsychology">Neuropsychology</option>
            <option value="astronomy">Astronomy</option>
            <option value="gaming">Gaming</option>
          </select>
        </label>

        <label className={style["form_description_input"]}>
          Description:
          <textarea
            name="description"
            id="description"
            // required
            value={data.description}
            // autoComplete="off"
            rows={10}
            cols={50}
            onChange={(e) =>
              setFormData({ ...data, description: e.target.value })
            }
          />
        </label>

        <label className={style["form_attachment_input"]}>
          Attachment:
          <input
            type="url"
            name="picture"
            id="picture"
            value={data.picture}
            // autoComplete="off"
            onChange={(e) => setFormData({ ...data, picture: e.target.value })}
          />
        </label>

        <label className={style["form_link_input"]}>
          Useful link:
          <input
            type="url"
            name="link"
            id="link"
            value={data.link}
            // required
            // autoComplete="off"
            onChange={(e) => setFormData({ ...data, link: e.target.value })}
          />
        </label>

        <input
          className={style["form_submit_button"]}
          type="submit"
          value="✔ Submit note"
        />
      </form>
    </>
  );
};

export default NoteForm;
