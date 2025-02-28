import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
const BASE_URL = "http://localhost:3000";

function App() {
  //VERİTABANINDAN GETİR.. 
   const getallPosts = async () =>{
   const response = await axios.get(BASE_URL+"/posts");
   console.log(response.data);
  }
  //VERİTABANINDAN GETİR.. 
   const getallComments = async () => {
   const responseComments = await axios.get(BASE_URL+"/comments");
   console.log(responseComments.data);
  }
  //VERİTABANINDAN ID İLE GETİR.. 
  const getselectedId = async (userıd) =>{
    const responseıd = await axios.get(BASE_URL+"/posts"+"/"+userıd);
    console.log(responseıd.data);

  }
 //VERİTABANINA EKLE.. 
   const createUser = async(newUser) =>{
   const responseadd =  await axios.post(`${BASE_URL}/posts`, newUser);
   console.log("Response =" , responseadd.data)
  }
   //VERİTABANINDA GÜNCELLE.. 
  const updateuserbyId = async(updateıd, updateduser) => {

      await axios.put(`${BASE_URL}/posts/${updateıd}`, updateduser)
  }
  //VERİTABANINDAN SİL
  const deleteuserbyId = async(deletethis) =>{

    await axios.delete(`${BASE_URL}/posts/${deletethis}`);
  }
  const newUser = {
     "title" : "beratc",
     "password" : "12345"
  }
  useEffect(()=>{
    deleteuserbyId("12")
 }, [])
  useEffect(()=>{
    updateuserbyId("2", {
       "title" : "hikmet aslan",
       "password" : "3333"
    })
 }, [])
  useEffect(()=>{
     createUser(newUser)
  }, [])
  useEffect(()=>{
    getallPosts();
  }, [])
  
  useEffect(() =>{
   getallComments();
  }, [])
  
  useEffect(() => {
 getselectedId(2);

  },[])


  return (
   <div>
    BERAT ÇAĞDAŞ
   </div>
  )
}

export default App
