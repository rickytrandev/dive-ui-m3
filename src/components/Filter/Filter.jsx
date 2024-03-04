import { useEffect, useState } from "react"
import PropTypes from "prop-types";
import "./Filter.css"


export function Filter({ handleFilter }) {
  const [filter, setFilter] = useState([])

  useEffect(() => {
    handleFilter(filter)
  }, [filter])

  function handleFilterChange(event) {
    if (event.target.value === 'all') {
      setFilter([]);
    } else {
      setFilter(prevFilter => [...prevFilter, event.target.value]);
    }
  }
  

  return (
    <div className="filter">
      <h2>Filter:</h2>
      <label>
        <input
          type="radio"
          value="all"
          checked={filter.length === 0}
          onChange={handleFilterChange}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          value="rich"
          checked={filter.includes('rich')}
          onChange={handleFilterChange}
        />
        Rich
      </label>
      <label>
        <input
          type="radio"
          value="tender"
          checked={filter.includes('tender')}
          onChange={handleFilterChange}
        />
        Tender
      </label>
      <label>
        <input
          type="radio"
          value="firm"
          checked={filter.includes('firm')}
          onChange={handleFilterChange}
        />
        Firm
      </label>
      <label>
        <input
          type="radio"
          value="buttery"
          checked={filter.includes('buttery')}
          onChange={handleFilterChange}
        />
        Buttery
      </label>
      <label>
        <input
          type="radio"
          value="oily"
          checked={filter.includes('oily')}
          onChange={handleFilterChange}
        />
        Oily
      </label>
      <label>
        <input
          type="radio"
          value="delicate"
          checked={filter.includes('delicate')}
          onChange={handleFilterChange}
        />
        Delicate
      </label>
      <label>
        <input
          type="radio"
          value="mild"
          checked={filter.includes('mild')}
          onChange={handleFilterChange}
        />
        Mild
      </label>
      <label>
        <input
          type="radio"
          value="sweet"
          checked={filter.includes('sweet')}
          onChange={handleFilterChange}
        />
        Sweet
      </label>
      <label>
        <input
          type="radio"
          value="succulent"
          checked={filter.includes('succulent')}
          onChange={handleFilterChange}
        />
        Succulent
      </label>
      <label>
        <input
          type="radio"
          value="chewy"
          checked={filter.includes('chewy')}
          onChange={handleFilterChange}
        />
        Chewy
      </label>
      <label>
        <input
          type="radio"
          value="briny"
          checked={filter.includes('briny')}
          onChange={handleFilterChange}
        />
        Briny
      </label>
      <label>
        <input
          type="radio"
          value="crunchy"
          checked={filter.includes('crunchy')}
          onChange={handleFilterChange}
        />
        Crunchy
      </label>
      <label>
        <input
          type="radio"
          value="creamy"
          checked={filter.includes('creamy')}
          onChange={handleFilterChange}
        />
        Creamy
      </label>
      <label>
        <input
          type="radio"
          value="fluffy"
          checked={filter.includes('fluffy')}
          onChange={handleFilterChange}
        />
        Fluffy
      </label>
      
    </div>
  )
}

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired
}