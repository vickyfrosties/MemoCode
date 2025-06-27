import style from "./NoteForm.module.scss";

const NoteForm = ({ data, setFormData, onSubmitHandle }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmitHandle(data);

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
            required
            value={data.title}
            autoFocus
            // autoComplete="off"
            onChange={(e) => setFormData({ ...data, title: e.target.value })}
          />
        </label>

        <label>
          Category:
          <select
            name="category"
            id="category-select"
            required
            onChange={(e) => setFormData({ ...data, category: e.target.value })}
          >
            <option value="">Choose a category</option>
            <option value="programmation">Programmation</option>
            <option value="design">UX/UI</option>
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
            required
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
            // autoComplete="off"
            onChange={(e) => setFormData({ ...data, link: e.target.value })}
          />
        </label>

        <input
          className={style["form_submit_button"]}
          type="submit"
          value="Submit note"
        />
      </form>
    </>
  );
};

export default NoteForm;
