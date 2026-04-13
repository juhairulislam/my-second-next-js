'use client'
import { MyContext } from '@/Context/MyProvider';
import Image from 'next/image';
import React, { useContext } from 'react';

const DetailsContext = ({ details }) => {

    const {data} = useContext(MyContext);
    console.log(data)
    return (
        <div className="flex flex-col md:flex-row justify-between gap-10 bg-base-100 shadow-sm">
            <figure>
                <Image className='p-20'
                    src={details.image_link}
                    alt={details.dish_name}
                    width={500}
                    height={500}
                />

            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-extrabold mt-20">{details.dish_name}</h2>
                {
                    details.main_ingredients.map((ingredient, ind) => <div className='text-[15px] ' key={ind}>

                        <ul className='list-disc'>
                            <li>{ingredient}</li>
                        </ul>


                    </div>)

                }
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsContext;