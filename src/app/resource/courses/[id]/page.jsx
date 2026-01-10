import React from 'react'

const CoursesDetais = async({params}) => {
    
    const {id}= await params
    
    const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
     const posts = await res.json();

 
  return (
    <main className='m-10'>
        <div>CoursesDetais</div>
        <h1> Id: {id}</h1>
        <h2> Title: {posts.title}</h2>
    </main>
  )
}

export default CoursesDetais