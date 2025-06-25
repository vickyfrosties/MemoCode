import style from "./NoteForm.module.scss";

const NoteForm = ({ data, setFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    setFormData({
      title: "",
      description: "",
      picture: "",
      link: "",
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
            autoComplete="off"
            onChange={(e) => setFormData({ ...data, title: e.target.value })}
          />
        </label>

        <label className={style["form_description_input"]}>
          Description:
          <textarea
            name="description"
            id="description"
            required
            value={data.description}
            autoComplete="off"
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
            autoComplete="off"
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
            autoComplete="off"
            onChange={(e) => setFormData({ ...data, link: e.target.value })}
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
