'use client'
import { postSingleResource } from '@/app/actions/resource/resource.action';
import { useRouter } from 'next/navigation';



const CourseAdd = () => {
  const router = useRouter()
  
      const handleSubmit = async(e) => {
          e.preventDefault();
          const form = e.target.form;
          const courseTitle = form.courseTitle.value;
          const courseLink = form.courseLink.value;
          const payload = { title: courseTitle, link: courseLink };
          // const res = await fetch('/api/items',{method:'POST',body:JSON.stringify(payload),headers:{'Content-Type':'application/json'}})
          // const result = await res.json();
          const result = await postSingleResource("course", payload);
          form.reset();
          alert('course added successfully')
          router.push('/resource/course')
          router.refresh()
      }
    return (
      <main className="m-10">
          <form action="" className="  gap-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <input type="text" name="courseTitle" id="" placeholder="course title" className="p-5  bg-amber-700 rounded" />
              <input type="text" name="courseLink" id="" placeholder="course link" className="p-5  bg-amber-700 rounded" />
              <button type="submit" value="" onClick={handleSubmit} className="bg-blue-600 border-2 rounded-2xl p-4">Submit</button>
          </form>
      </main>
    )
}

export default CourseAdd