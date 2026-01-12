'use client'

const PdfAddPage = () => {
    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target.form;
        const pdfTitle = form.pdfTitle.value;
        const payload = { title: pdfTitle };
        const res = await fetch('/api/items',{method:'POST',body:JSON.stringify(payload),headers:{'Content-Type':'application/json'}})
        const result = await res.json();
    }
  return (
    <main className="m-10">
        <form action="">
            <input type="text" name="pdfTitle" id="" placeholder="pdf title" />
            <button type="submit" value="" onClick={handleSubmit} >Submit</button>
        </form>
    </main>
  )
}

export default PdfAddPage