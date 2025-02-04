import dayjs from 'dayjs';
import React from 'react'

function Card(props) {

    // const skills = ["Javascript","React Js","Tailwind CSS"];
    const date1 = dayjs(Date.now());
    const diffday = date1.diff(props.postedOn,'day')
  return (
    <div className='mx-40 mb-4'>
        <div className='flex justify-between items-center bg-zinc-200 py-4 px-6 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1'>
            <div className='flex flex-col items-start gap-3'>
                <h2 className='text-lg font-semibold text-black'>{props.title} - {props.compnay}</h2>
                <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
                <div className='flex items-center gap-2'>
                    {props.skills.map((skills) => (
                        <p className='text-gray-500 py-2 px-2 rounded-md border border-black'>{skills}</p>
                    ))}
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <p className='text-gray-500'>Posted {diffday > 1? `${diffday} days`: `${diffday} day`} ago</p>
                <a href={props.job_link}>
                    <button className='text-blue-500 border border-blue-500 px-10 py-2 rounded-md'>Apply</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Card
