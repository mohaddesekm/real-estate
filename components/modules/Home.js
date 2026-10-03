import React from 'react';
import Link from 'next/link';

export default function Home({ id, title, img, roomCount, meterage, price }) {
    return (
        <>
            <div className="card">
                <img src={img} alt="House 6" className="card__img" />
                <h5 className="card__title">{title}</h5>
                {/* <svg className="card__like">
                        <use xlink:href="img/sprite.svg#icon-heart-full"></use>
                    </svg> */}
                <div className="card__details">
                    <span className="">
                        <i className="fa fa-map-marker card__icon"></i>
                    </span>
                    <p className="card__text">مالدیو</p>
                    <span className="">
                        <i className="fa fa-user card__icon"></i>
                    </span>
                    <p className="card__text">{roomCount} اتاق</p>
                    <span className="">
                        <i className="fa fa-expand card__icon"></i>
                    </span>
                    <p className="card__text">{meterage} متر مربع</p>
                    <span className="">
                        <i className="fa fa-key card__icon"></i>
                    </span>
                    <p className="card__text">
                        {price.toLocaleString()} میلیون تومان
                    </p>
                </div>

                {/* <Link href={`/homes/${id}`} className="btn btn-brown btn-card"> */}
                <Link href={`/homes/${id}`} className="btn btn-brown btn-card">
                    مشاهده ملک
                </Link>
            </div>
        </>
    );
}
