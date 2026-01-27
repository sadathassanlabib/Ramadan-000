import { getResources } from '@/app/actions/resource/resource.action';

import BookShort from './components/bookShort';


export const dynamic = 'force-dynamic';

const Book = async () => {
  const result = await getResources("blogs");

  if (!result.success) {
    return <p className="text-red-500">{result.message}</p>;
  }

  return <BookShort data={result.data} />;
};

export default Book;
