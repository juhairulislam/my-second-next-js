import React from 'react';
import Image from 'next/image'
import Link from 'next/link';


const Posts = async() => {

    const res =await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods');
    const data=await res.json() ;

    const datum = data.data



    // const {dish_name, category, image_link} = datum ;


    console.log(datum)


    return (


        <div className='grid grid-cols-3 gap-8 mt-5 p-4'>

            {
                datum.map(post => <div key={post.id} className='shadow border border-purple-500 rounded-2xl p-4'>

                     <Image
      src={post.image_link}
      alt={post.dish_name}
      width={500}
      height={500}
    />


                    <h1 className='font-bold text-xl text-pink-300'>{post.dish_name}</h1>
                    <h2 className='font-semibold badge badge-secondary mt-4'>{post.category}</h2>
                    <br />
                    <br />
                    <Link href={`/posts/${post.id}`} className='btn btn-soft btn-secondary'>Show details</Link>
                    
                </div>)
            }
            
        </div>
    );
};

export default Posts;