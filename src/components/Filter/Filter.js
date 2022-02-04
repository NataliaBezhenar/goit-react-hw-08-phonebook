import { useSelector, useDispatch } from "react-redux";
import "./Filter.css";
import { filter } from "../../redux/filter/filter-actions";

const Filter = () => {
  const value = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <label className="Filter__label">
      Find contacts by name:{" "}
      <input
        type="text"
        className="Filter__input"
        value={value}
        onChange={(e) => dispatch(filter(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;
