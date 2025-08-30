import style from "./Loader.module.scss";

const Loader = () => {
  return (
    <>
      <section className={style["loader-container"]}>
        <div className={style["loader"]}></div>
      </section>
    </>
  );
};

export default Loader;
