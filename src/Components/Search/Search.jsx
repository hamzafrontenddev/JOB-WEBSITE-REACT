import React, { useState } from 'react'

function Search(props) {

  const [jobCri, setJobCri] = useState({
    title : "",
    location : "",
    type : "",
    experience : "",
  })

  const handleChange = (e) => {
    setJobCri((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }
  console.log(jobCri)

  const search = async () => {
    await props.fetchJobsCustom(jobCri)
  }

  return (
    <div className='flex justify-center gap-4 my-10 px-20'>
      <select onChange={handleChange} name="title" value={jobCri.title} id="" className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" disabled hidden selected>Job Role</option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Developer Advocate">Developer Advocate</option>
      </select>

      <select onChange={handleChange} name="type" value={jobCri.type} id="" className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" disabled hidden selected>Job Type</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>

      <select onChange={handleChange} name="location" value={jobCri.location} id="" className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" disabled hidden selected>Location</option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-Office</option>
        <option value="Hybird">Hybird</option>
      </select>

      <select onChange={handleChange} name="experience" value={jobCri.experience} id="" className='w-64 py-3 pl-4 bg-zinc-200 rounded-md'>
        <option value="" disabled hidden selected>Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>

      <button onClick={search} className='w-64 py-3 text-white font-bold rounded-md bg-blue-500'>Search</button>
    </div>
  )
}

export default Search
