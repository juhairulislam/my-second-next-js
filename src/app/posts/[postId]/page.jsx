import DetailsContext from '@/app/Components/DetailsContext';
import { MyContext } from '@/Context/MyProvider';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { IoCaretBackOutline } from 'react-icons/io5';



const PostDetails =async ({params}) => {


 const {postId} = await params ;

 const res =await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${postId}`) ;
 const data =await res.json() ;

 const details = data.data ;


//  console.log(details)
    // console.log(postId) ;


    return (
  <div>

    
            <Link href='/posts' className='btn btn-dash btn-secondary  ml-4 mb-2'><IoCaretBackOutline /> Back</Link>

            <DetailsContext details={details}>

            </DetailsContext>
    
    

  </div>
    );
};

export default PostDetails;