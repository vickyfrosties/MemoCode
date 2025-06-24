import { useRef, useState } from "react";
import style from "./NoteForm.module.scss";

const NoteForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    picture: "",
    link: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
            required
            value={formData.title}
            autoFocus
            autoComplete="off"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </label>

        <label className={style["form_description_input"]}>
          Description:
          <textarea
            name="description"
            id="description"
            required
            value={formData.description}
            autoComplete="off"
            rows={10}
            cols={50}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </label>

        <label className={style["form_attachment_input"]}>
          Attachment:
          <input
            type="url"
            name="picture"
            id="picture"
            value={formData.picture}
            autoComplete="off"
            onChange={(e) =>
              setFormData({ ...formData, picture: e.target.value })
            }
          />
        </label>

        <label className={style["form_link_input"]}>
          Useful link:
          <input
            type="url"
            name="link"
            id="link"
            value={formData.link}
            autoComplete="off"
            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
          />
        </label>

        <input
          className={style["form_submit_button"]}
          type="submit"
          value="Add note"
        />
      </form>
    </>
  );
};

export default NoteForm;
