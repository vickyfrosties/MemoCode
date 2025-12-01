import { useState } from "react";
import style from "./NoteForm.module.scss";
import { useNavigate } from "react-router";
import BackTo from "../../components/BackTo/BackTo";

const NoteForm = ({ data, setFormData, resetDataForm }) => {
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
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

  async function createNote() {
    fetch(
      `${API_URL}/form`,

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
          throw new Error("Note couldn't be added");
        }
      })
      .catch((error) => {
        console.error("An error occured with the request:", error.message);
      });
  }

  const handleSubmit = (e) => {
    if (isSubmit) return;
    e.preventDefault();
    const errors = {};

    const descriptionCount = data.description.trim().length;

    if (descriptionCount > 2000) {
      alert(
        "The description must contain up to 2000 words maximum (less than 5 paragraphs)."
      );
      return;
    }

    if (!data.title) {
      errors.title = "Title is required, please enter a valid name.";
    }
    if (!data.description) {
      errors.description =
        "Description is required, please enter a description.";
    }
    if (!data.picture) {
      errors.picture =
        "Picture is required, please enter a valid link url picture.";
    }
    if (!data.link) {
      errors.link = "Link is required, please enter a valid link url.";
    }
    if (!data.category) {
      errors.category = "Category is required, please select a category.";
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmit(true);
    createNote();
    navigate("/notes");

    resetDataForm();

    setFormErrors({});
  };

  return (
    <>
      <BackTo resetDataForm={resetDataForm} />

      <h3 className={style["form-page-title"]}>Add a new memo</h3>

      <section className={style["form-container"]}>
        <form className={style["form"]} onSubmit={handleSubmit} id="note-form">
          <div className={style["form_title_container"]}>
            <label className={style["form_title_input"]}>
              Title
              <input
                type="text"
                name="title"
                id="title"
                value={data.title}
                autoFocus
                autoComplete="off"
                onChange={(e) =>
                  setFormData({ ...data, title: e.target.value })
                }
              />
              {formErrors.title && (
                <p className={style["form_errors"]}>{formErrors.title}</p>
              )}
            </label>

            <label className={style["form_category_select"]}>
              Category
              <select
                name="category"
                id="category-select"
                onChange={(e) =>
                  setFormData({ ...data, category: e.target.value })
                }
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
              Description
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
              <p className={style["form_validation_indication"]}>
                characters up to: 2000 max
              </p>
              {formErrors.description && (
                <p className={style["form_errors"]}>{formErrors.description}</p>
              )}
            </label>
          </div>

          <div className={style["form_attachment_input_container"]}>
            <div className={style["form_attachment_input_container_block"]}>
              <label className={style["form_attachment_input"]}>
                Attachment
                <input
                  type="url"
                  name="picture"
                  id="picture"
                  value={data.picture}
                  autoComplete="off"
                  onChange={(e) =>
                    setFormData({ ...data, picture: e.target.value })
                  }
                />
                {formErrors.picture && (
                  <p className={style["form_errors"]}>{formErrors.picture}</p>
                )}
              </label>

              <label className={style["form_link_input"]}>
                Useful link
                <input
                  type="url"
                  name="link"
                  id="link"
                  value={data.link}
                  autoComplete="off"
                  onChange={(e) =>
                    setFormData({ ...data, link: e.target.value })
                  }
                />
                <p className={style["form_link_warning"]}>
                  You can add up to 3 links url.
                </p>
                <button className={style["form_link_add_button"]} type="button">
                  + Add a link
                </button>
                {formErrors.link && (
                  <p className={style["form_errors"]}>{formErrors.link}</p>
                )}
              </label>
            </div>

            <div className={style["form_submit_button_container"]}>
              <input
                className={style["form_submit_button"]}
                type="submit"
                value={isSubmit ? "Submitting..." : "Submit"}
              />
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default NoteForm;
