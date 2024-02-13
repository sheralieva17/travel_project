import React, { useEffect, useState } from 'react';
import "./HeadBg.css"
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContextProvider';
import { usePackage } from '../context/PackageContextProvider';

const HeadBg = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const { user, logOut } = useAuthContext();
  const navigate = useNavigate();
  const { getPackages } = usePackage();

  useEffect(() => {
    setSearchParams({
      q: search,
    })
  }, [search]);

  useEffect(() => {
    // Проверяем, отличаются ли новые параметры поиска от текущих
    const currentSearch = searchParams.get("q") || "";
    if (search !== currentSearch) {
      setSearch(currentSearch);
    }
  }, [searchParams, setSearch]);

  useEffect(() => {
    getPackages()
  }, [searchParams]);

  return (
    <div className='navbar'>
  <div className="let-s-make">
    <h2 className="let-s-make-your">Let’s Make your</h2>
    <h2 className="dream-vacation">Dream Vacation</h2>
  </div>
  <div className="input-container">
    <input
      placeholder='Search...'
      type='text'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
</div>

  );
}

export default HeadBg;