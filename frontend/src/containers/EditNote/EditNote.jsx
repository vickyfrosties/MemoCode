import { useNavigate } from "react-router";

const EditNote = ({ id }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    navigate(`/form/edit/${id}`);
  };
  return (
    <>
      <button onClick={handleClick}>
        <img src="/assets/edit.svg" alt="Edit note button" />
      </button>
    </>
  );
};

export default EditNote;
