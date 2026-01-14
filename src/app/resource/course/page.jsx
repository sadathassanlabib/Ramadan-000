
import { getResources } from '@/app/actions/resource/resource.action';
import Link from 'next/link';

import React from 'react';

export const dynamic = 'force-dynamic';

const Course = async () => {
  // Admin check
 
  // Fetch PDFs
  const result = await getResources("course");
  if(!result.success) {
    return <p>Error loading PDFs: {result.message}</p>;
  }
  const data = result.data;

  return (
    <main className='m-10'>
      <h1>Muhasaba Page</h1>
      <div>
        {data?.map((singlePDF) => (
          <p key={singlePDF._id.toString()}>{singlePDF.title}</p>
        ))}
      </div>
      <Link href="/resource/course/add">Add Course</Link>
    </main>
  );
};

export default Course;
