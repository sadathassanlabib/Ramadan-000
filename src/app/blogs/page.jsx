
import { getResources } from '@/app/actions/resource/resource.action';
import Link from 'next/link';

import React from 'react';

export const dynamic = 'force-dynamic';

const Blogs = async () => {
  // Admin check
 
  // Fetch PDFs
  const result = await getResources("blogs");
  if(!result.success) {
    return <p>Error loading PDFs: {result.message}</p>;
  }
  const data = result.data;

  return (
    <main className='m-10'>
      <h1>Blogs Page</h1>
      <div>
        {data?.map((singlePDF) => (
          <p key={singlePDF._id.toString()}>{singlePDF.title}</p>
        ))}
      </div>
      <Link href="/resource/blogs/add">Add Course</Link>
    </main>
  );
};

export default Blogs;
