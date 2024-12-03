import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

const Blogs = () => {

    const {posts,loading} = useContext(AppContext);

    console.log("I am inside blog components")
    console.log(posts)

  return (
    <div className='w-11/12 max-w-[550px] h-screen py-3 gap-y-7 flex flex-col mt-14 my-[100px] justify-center items-center'>
        {
            loading ? 

            (<Spinner/>) : 

            (
                posts.length === 0 ? 
                (
                    <div>
                        <p>No Post Found</p>
                    </div>
                ) : 
                (posts.map((post) =>(
                    <div key={post.id}>
                        <p className="font-bold text-xm">{post.title}</p>
                        <p className='text-[10px] mt-1'>
                            By <span className='italic'>{post.auther}</span> on <span className='underline font-bold'>{post.category}</span>
                        </p>
                        <p className='text-[10px]'>Posted on {post.date}</p>
                        <p className='text-[13px] mt-3 font-semibold'>{post.content}</p>
                        <div className='mt-1 text-xs  flex gap-[6px] '>
                            {
                                post.tags.map((tag,index)=>{
                                    return <span key={index} className='underline text-blue-600 font-bold' >
                                        {`#${tag}`}
                                    </span>
                                })
                            }
                        </div>
                    </div>
                )))
            )
        }
    </div>
  )
}

export default Blogs