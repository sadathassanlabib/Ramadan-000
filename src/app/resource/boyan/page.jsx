
import { getResources } from '@/app/actions/resource/resource.action';
import Link from 'next/link';

import React from 'react';

export const dynamic = 'force-dynamic';

const Boyan = async () => {
  // Admin check
 
  // Fetch PDFs
  const result = await getResources("boyans");
  if(!result.success) {
    return <p>Error loading PDFs: {result.message}</p>;
  }
  const data = result.data;

  return (
    <main className='m-10'>
      <h1>Boyan Page</h1>
      <div>
        {data?.map((singleBoyan) => (
          <p key={singleBoyan._id.toString()}>{singleBoyan.title}</p>
        ))}
      </div>
      <Link href="/resource/boyan/add">Add PDF</Link>
    </main>
  );
};

export default Boyan;
