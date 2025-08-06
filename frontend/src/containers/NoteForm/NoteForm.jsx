import { useState } from "react";
import style from "./NoteForm.module.scss";
import { useNavigate } from "react-router";

const NoteForm = ({ data, setFormData }) => {
  const navigate = useNavigate();
  // * Handle errors messages
  const [formErrors, setFormErrors] = useState({
    title: "",
    description: "",
    picture: "",
    link: "",
    category: "",
  });
  // * Check if form is not submitted or not
  const [isSubmit, setIsSubmit] = useState(false);

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
    if (isSubmit) return;
    e.preventDefault();
    const errors = {};

    if (!data.title) {
      errors.title = "Title is required, please enter a valid name.";
    }
    if (!data.description) {
      errors.description =
        "Description is required, please enter a valid description.";
    }
    if (!data.picture) {
      errors.picture =
        "Picture is required, please enter a valid link url picture.";
    }
    if (!data.link) {
      errors.link = "Link is required, please enter a valid link url.";
    }
    if (!data.category) {
      errors.category = "Category is required, please select one category.";
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmit(true);
    createNote();
    navigate("/notes");

    setFormData({
      title: "",
      description: "",
      picture: "",
      link: "",
      category: "",
    });

    setFormErrors({});
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
            value={data.title}
            autoFocus
            autoComplete="off"
            onChange={(e) => setFormData({ ...data, title: e.target.value })}
          />
          {formErrors.title && (
            <p className={style["form_errors"]}>{formErrors.title}</p>
          )}
        </label>

        <label className={style["form_category_select"]}>
          Category:
          <select
            name="category"
            id="category-select"
            onChange={(e) => setFormData({ ...data, category: e.target.value })}
          >
            <option value="">Choose a category</option>
            <option value="programmation">Programmation</option>
            <option value="neuropsychology">Neuropsychology</option>
            <option value="astronomy">Astronomy</option>
            <option value="gaming">Gaming</option>
          </select>
          {formErrors.category && (
            <p className={style["form_errors"]}>{formErrors.category} </p>
          )}
        </label>

        <label className={style["form_description_input"]}>
          Description:
          <textarea
            name="description"
            id="description"
            value={data.description}
            autoComplete="off"
            rows={10}
            cols={50}
            onChange={(e) =>
              setFormData({ ...data, description: e.target.value })
            }
          />
          {formErrors.description && (
            <p className={style["form_errors"]}>{formErrors.description}</p>
          )}
        </label>

        <label className={style["form_attachment_input"]}>
          Attachment:
          <input
            type="url"
            name="picture"
            id="picture"
            value={data.picture}
            autoComplete="off"
            onChange={(e) => setFormData({ ...data, picture: e.target.value })}
          />
          {formErrors.picture && (
            <p className={style["form_errors"]}>{formErrors.picture}</p>
          )}
        </label>

        <label className={style["form_link_input"]}>
          Useful link:
          <input
            type="url"
            name="link"
            id="link"
            value={data.link}
            autoComplete="off"
            onChange={(e) => setFormData({ ...data, link: e.target.value })}
          />
          {formErrors.link && (
            <p className={style["form_errors"]}>{formErrors.link}</p>
          )}
        </label>

        <input
          className={style["form_submit_button"]}
          type="submit"
          value={isSubmit ? "Submitting..." : "Submit"}
        />
      </form>
    </>
  );
};

export default NoteForm;
