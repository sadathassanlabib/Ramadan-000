
import { getResources } from '@/app/actions/resource/resource.action';
import Link from 'next/link';

import React from 'react';

export const dynamic = 'force-dynamic';

const Book = async () => {
  const result = await getResources("book");
  if(!result.success) {
    return <p>Error loading Books: {result.message}</p>;
  }
  const data = result.data;

  return (
    <main className='m-10'>
      <h1>PDF Page</h1>
      <div>
        {data?.map((singlePDF) => (
          <p key={singlePDF._id.toString()}>{singlePDF.title}</p>
        ))}
      </div>
      <Link href="/resource/book/add">Add Book</Link>
    </main>
  );
};

export default Book;
