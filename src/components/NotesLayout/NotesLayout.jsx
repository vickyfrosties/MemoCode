import style from "./NotesLayout.module.scss";

const NotesLayout = () => {
  return (
    <>
      <section className={style["container-notes"]}>
        <p>No current memo (✖╭╮✖)</p>
      </section>
    </>
  );
};

export default NotesLayout;
