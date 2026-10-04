import React from 'react';
import Link from 'next/link';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;

export default function Home({ id, title, img, roomCount, meterage, price }) {
    return (
        <>
            <div className="card">
                <img src={img} alt="House 6" className="card__img" />
                <h5 className="card__title">{title}</h5>

                <div className="card__details">
                    <span className="card__like">
                        <FontAwesomeIcon
                            icon={faMapMarked}
                            className="card__icon"
                        />
                    </span>
                    <p className="card__text">مالدیو</p>
                    <span className="card__like">
                        <FontAwesomeIcon icon={faUser} className="card__icon" />
                    </span>
                    <p className="card__text">{roomCount} اتاق</p>
                    <span className="card__like">
                        <FontAwesomeIcon
                            icon={faExpand}
                            className="card__icon"
                        />
                    </span>
                    <p className="card__text">{meterage} متر مربع</p>
                    <span className="card__like">
                        <FontAwesomeIcon icon={faKey} className="card__icon" />
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
