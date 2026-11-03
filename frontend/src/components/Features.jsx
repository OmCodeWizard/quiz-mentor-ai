import FeatureCard from "./FeatureCard";


const Features = () => {
    const features = [
        {
            id:1,
            title: "AI Quiz Generation",
            description: "Create quizzes instantly based on your selected topic."
        },
        {
            id:2,
            title: "Multiple Question Types",
            description: "Practice MCQs, short-answer and subjective questions."
        },
        {
            id:3,
            title: "Personalized Learning",
            description: "Choose topics and difficulty levels based on your needs."
        }
    ];
    return (
        <section className="bg-slate-950 px-6 py-20 text-white"> 
            <div >

            <div className="mb-12 text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
                    Why QuizMentor AI?
                </p>

                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                    Everything you need to learn smarter
                </h2>
            </div>
            
            <div className="  grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                {
                features.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        title={feature.title}
                        description={feature.description}
                    />
                ))
            }
            </div>

        </div>
        </section>
    )
}

export default Features
