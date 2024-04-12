import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Filter.css";

export function Filter({ handleFilter }) {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    handleFilter(filter);
  }, [filter]);

  function handleFilterChange(event) {
    if (event.target.value === "all") {
      setFilter([]);
    } else {
      if (event.target.checked) {
        setFilter((prevFilter) => [...prevFilter, event.target.value]);
      } else {
        setFilter((prevFilter) =>
          prevFilter.filter((item) => item !== event.target.value)
        );
      }
    }
  }

  return (
    <div className="filter">
      <h2>Filter:</h2>
      <label>
        <input
          type="checkbox"
          value="all"
          checked={filter.length === 0}
          onChange={handleFilterChange}
        />
        All
      </label>
      <label>
        <input
          type="checkbox"
          value="rich"
          checked={filter.includes("rich")}
          onChange={handleFilterChange}
        />
        Rich
      </label>
      <label>
        <input
          type="checkbox"
          value="tender"
          checked={filter.includes("tender")}
          onChange={handleFilterChange}
        />
        Tender
      </label>
      <label>
        <input
          type="checkbox"
          value="firm"
          checked={filter.includes("firm")}
          onChange={handleFilterChange}
        />
        Firm
      </label>
      <label>
        <input
          type="checkbox"
          value="buttery"
          checked={filter.includes("buttery")}
          onChange={handleFilterChange}
        />
        Buttery
      </label>
      <label>
        <input
          type="checkbox"
          value="oily"
          checked={filter.includes("oily")}
          onChange={handleFilterChange}
        />
        Oily
      </label>
      <label>
        <input
          type="checkbox"
          value="delicate"
          checked={filter.includes("delicate")}
          onChange={handleFilterChange}
        />
        Delicate
      </label>
      <label>
        <input
          type="checkbox"
          value="mild"
          checked={filter.includes("mild")}
          onChange={handleFilterChange}
        />
        Mild
      </label>
      <label>
        <input
          type="checkbox"
          value="sweet"
          checked={filter.includes("sweet")}
          onChange={handleFilterChange}
        />
        Sweet
      </label>
      <label>
        <input
          type="checkbox"
          value="succulent"
          checked={filter.includes("succulent")}
          onChange={handleFilterChange}
        />
        Succulent
      </label>
      <label>
        <input
          type="checkbox"
          value="chewy"
          checked={filter.includes("chewy")}
          onChange={handleFilterChange}
        />
        Chewy
      </label>
      <label>
        <input
          type="checkbox"
          value="briny"
          checked={filter.includes("briny")}
          onChange={handleFilterChange}
        />
        Briny
      </label>
      <label>
        <input
          type="checkbox"
          value="crunchy"
          checked={filter.includes("crunchy")}
          onChange={handleFilterChange}
        />
        Crunchy
      </label>
      <label>
        <input
          type="checkbox"
          value="creamy"
          checked={filter.includes("creamy")}
          onChange={handleFilterChange}
        />
        Creamy
      </label>
    </div>
  );
}

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
