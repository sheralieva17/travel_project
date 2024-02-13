import React, { useEffect } from "react";
import { usePackage } from "../context/PackageContextProvider";

const CategorySelect = (props) => {
  const { handleInput } = props;
  const { getCategories, categories } = usePackage();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div style={{ minWidth: 120 }}>
      <label>
        Choose category:
        <select
          defaultValue={"female"}
          name="category"
          onChange={handleInput}
        >
          {categories.map((elem) => (
            <option value={elem.name} key={elem.id}>
              {elem.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default CategorySelect;
