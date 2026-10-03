import React, { useEffect, useState } from 'react';
import db from './../../data/db.json';
import Home from '@/components/modules/Home';

export default function Index() {
    const [search, setSearch] = useState('');
    const [homes, setHomes] = useState([...db.homes]);

    useEffect(() => {
        const newHomes = db.homes.filter((home) => home.title.includes(search));
        setHomes(newHomes);
    }, [search]);

    return (
        <>
            <div className="home-section" id="houses">
                <div className="home-filter-search">
                    <div className="home-filter">
                        <select name="" id="">
                            <option value="" selected>
                                انتخاب کنید
                            </option>
                            <option value="">بر اساس قیمت</option>
                            <option value="">بر اساس تعداد اتاق</option>
                            <option value="">بر اساس ادرس</option>
                            <option value="">بر اساس اندازه</option>
                        </select>
                    </div>
                    <div className="home-search">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="جستجو کنید"
                        />
                    </div>
                </div>

                <div className="homes">
                    {homes.length > 0 ? (
                        homes.map((home) => <Home key={home.id} {...home} />)
                    ) : (
                        <p className="text-center text-4xl">
                            خانه‌ای با عنوان وارد شده وجود ندارد
                        </p>
                    )}
                </div>

                <ul className="pagination__list">
                    <li className="pagination__item">
                        <a href="#" className=""></a>
                    </li>
                    <li className="pagination__item">
                        <a href="#" className="">
                            2
                        </a>
                    </li>
                    <li className="pagination__item active">
                        <a href="#" className="">
                            1
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
