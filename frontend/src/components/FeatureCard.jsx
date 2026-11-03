

const FeatureCard = ({title,description}) => {
  return (
    <div className="mx-auto max-w-3xl  p-6 h-full border border-white/10 rounded-xl bg-white/5 backdrop-blur-xl transition duration-300 hover:border-purple-500/50 hover:-translate-y-2 hover:bg-white/10">
      <div >🤖</div>
      <h2 className="text-2xl font-bold mt-3">{title}</h2>
      <p className="mt-5 text-gray-200">{description}</p>
    </div>
  )
}

export default FeatureCard
