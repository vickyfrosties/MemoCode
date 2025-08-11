import { useEffect, useState } from "react";
import { useParams } from "react-router";
import style from "../NoteForm/NoteForm.module.scss";

const EditForm = () => {
  const [dateNote, setDataNote] = useState({
    title: "",
    description: "",
    picture: "",
    link: "",
    category: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:8000/notes/${id}`, {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(response);
        }
        return response.json();
      })
      .then((data) => {
        setDataNote({
          title: data.data.title,
          description: data.data.description,
          picture: data.data.picture,
          link: data.data.link,
          category: data.data.category,
        });
      })

      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {isLoading ? (
        <form onSubmit={handleSubmit} className={style["form"]}>
          <label className={style["form_title_input"]}>
            Title:
            <input
              type="text"
              name="title"
              id="title"
              autoFocus
              autoComplete="off"
              value={dateNote.title}
              onChange={(e) =>
                setDataNote({ ...dateNote, title: e.target.value })
              }
            />
          </label>

          <label className={style["form_category_select"]}>
            Category:
            <select
              name="category"
              id="category-select"
              value={dateNote.category}
              onChange={(e) =>
                setDataNote({ ...dateNote, category: e.target.value })
              }
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
              autoComplete="off"
              rows={10}
              cols={50}
              value={dateNote.description}
              onChange={(e) =>
                setDataNote({ ...dateNote, description: e.target.value })
              }
            />
          </label>
          <p className={style["form_validation_indication"]}>
            characters up to: 2000 max
          </p>
          <label className={style["form_attachment_input"]}>
            Attachment:
            <input
              type="url"
              name="picture"
              id="picture"
              autoComplete="off"
              value={dateNote.picture}
              onChange={(e) =>
                setDataNote({ ...dateNote, picture: e.target.value })
              }
            />
          </label>
          <label className={style["form_link_input"]}>
            Useful link:
            <input
              type="url"
              name="link"
              id="link"
              autoComplete="off"
              value={dateNote.link}
              onChange={(e) =>
                setDataNote({ ...dateNote, link: e.target.value })
              }
            />
          </label>
          <input
            type="submit"
            value="Submit changes"
            className={style["form_submit_button"]}
          />
        </form>
      ) : (
        <p
          style={{
            textAlign: "center",
            color: "#bd2323",
          }}
        >
          Loading note...
        </p>
      )}
    </>
  );
};

export default EditForm;
