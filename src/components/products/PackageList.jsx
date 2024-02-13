import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePackage } from '../context/PackageContextProvider';
import Package from './Package';
import { Pagination } from './Pagination';

const PackageList = () => {
    const { getPackages, packages } = usePackage(); // Fix variable name

    //!=====SEARCH============
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        getPackages();
    }, [searchParams]);

    //!=====PAGINATION=========
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    const ITEMS_PER_PAGE = 4;
    const count = Math.ceil(packages.length / ITEMS_PER_PAGE); // Fix variable name

    console.log(count);

    function currData() {
        const startIndex = (page - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return packages.slice(startIndex, endIndex); // Fix variable name
    }

    return (
        <div>
          <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: "25px",

        }}>
          {currData().map((elem) => (
            <Package key={elem.id} elem={elem} />
          ))}
      </div>
         
          <Pagination count={count} page={page} handleChange={handleChange} />
        </div>
      );
      
};

export default PackageList;
