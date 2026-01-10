

const AboutSulgPages = async({params}) => {
const {slugs} = await params;
  return (
    <div className="mx-10"> name:{slugs}..</div>
  )
}

export default AboutSulgPages