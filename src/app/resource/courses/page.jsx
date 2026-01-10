import Link from "next/link";

const Courses = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  const posts = await res.json();

  return (
    <main className="m-4 md:m-8 lg:14">
    <h1>Courses</h1>
    <div className="mt-10  grid gap-4 p-5  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      
      {posts.slice(0, 100).map(post => (
        <div key={post.id} className="border border-gray-300 rounded-md p-5">
          <p className="text-lime-300">1...{post.title}</p>
          <p>{post.body}</p>
          <Link href={`/resource/courses/${post.id}`} type="button" className="border border-gray-500 mt-11 bg-amber-800 p-1"> course details</Link>
         
        </div>
        
      ))}
    </div>
    </main>
  );
};

export default Courses;
