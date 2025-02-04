
import { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card/Card'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'
import jobDummyData from './jobDummyData.js'
import {collection, query, getDocs, orderBy, where} from "firebase/firestore"
import {db} from './firebase.config'

function App() {

  const [jobs, setJobs] = useState([])

  const fetchJobs = async () => {
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);
    req.forEach((job) =>{
      // console.log(doc.id , " => " , doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn : job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs)
  }

  const fetchJobsCustom = async (jobCri) => {
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, where("type", "==" , jobCri.type), where("title", "==" , jobCri.title), where("location", "==" , jobCri.location), where("experience", "==" , jobCri.experience), orderBy("postedOn", "desc"));
    const req = await getDocs(q);
    req.forEach((job) =>{
      // console.log(doc.id , " => " , doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn : job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  return (
    <>
    < Navbar />
    < Header />
    < Search fetchJobsCustom={fetchJobsCustom} />
    {jobs.map((job) => (
      <Card key={job.id} {...job} />
    ))}
    </>
  )
}

export default App
