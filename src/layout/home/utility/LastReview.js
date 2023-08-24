//REACT
import React from 'react'
import Button from '../../../components/buttons/Button';

function LastReview({ listReviews }) {

    return (
        <section className="hidden lg:flex flex-col m-2 bg-sixth p-2 font-bold">
            <span className="text-third m-1 pb-2 border-b-primary border-b">LE ULTIME RECENSIONI</span>
            {
                listReviews && listReviews.slice(0, 5).map((review, index) =>
                    <div key={index} className="flex flex-row py-4 border-b-primary border-b cursor-pointer">
                        <div className="flex flex-col w-3/4">
                            <span className="text-sm text-white leading-4">{review.title.toUpperCase()}</span>
                            <span className="text-xs text-third">{review.platform}</span>
                        </div>
                        <span className="w-1/4 flex items-center justify-center text-third text-3xl">{review.vote}</span>
                    </div>
                )
            }
            <span className="text-end text-xs py-2 text-third hover:text-btnhover cursor-pointer">LEGGI LE ULTIME RECENSIONI</span>
        </section>
    )
}

export default LastReview;