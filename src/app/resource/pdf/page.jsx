import { getResource } from '@/app/actions/resource/getResource';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

const PDF = async () => {
  // Admin check
 
  // Fetch PDFs
  const result = await getResource();
  if(!result.success) {
    return <p>Error loading PDFs: {result.message}</p>;
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
      <Link href="/resource/pdf/add">Add PDF</Link>
    </main>
  );
};

export default PDF;
