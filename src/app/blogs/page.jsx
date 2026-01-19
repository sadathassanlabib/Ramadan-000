import { getResources } from '@/app/actions/resource/resource.action';
import BlogShort from './components/blogShort';


export const dynamic = 'force-dynamic';

const Blogs = async () => {
  const result = await getResources("blogs");

  if (!result.success) {
    return <p className="text-red-500">{result.message}</p>;
  }

  return <BlogShort data={result.data} />;
};

export default Blogs;
