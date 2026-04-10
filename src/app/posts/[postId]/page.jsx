import Image from 'next/image';
import React from 'react';

const PostDetails =async ({params}) => {
 const {postId} = await params ;

 const res =await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${postId}`) ;
 const data =await res.json() ;

 const details = data.data ;

 console.log(details)
    // console.log(postId) ;


    return (
       <div className="flex justify-between gap-10 bg-base-100 shadow-sm">
  <figure>
    <Image className='p-20'
      src={details.image_link}
      alt={details.dish_name}
      width={500}
      height={500}
    />
    
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold mt-20">{details.dish_name}</h2>
    <p>{
    details.main_ingredients.map((ingredient, ind) => <div className='text-[15px] ' key={ind}>

        <ul className='list-disc'>
            <li>{ingredient}</li>
        </ul>


    </div>)
    
    }</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
    );
};

export default PostDetails;