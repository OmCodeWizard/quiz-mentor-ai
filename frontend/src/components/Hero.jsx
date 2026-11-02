import Button from "./Button";
const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-slate-950 text-white flex flex-col items-center justify-center lg:flex-row">
      
      {/* Left Section */}
      <div className="flex w-full flex-col items-center p-10 text-center lg:w-1/2 lg:items-start lg:text-left">

        {/* Badge */}
        <div className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
          ✦ AI-Powered Learning Platform
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl font-bold leading-tight text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.8)] md:text-5xl lg:text-6xl">
          Learn Smarter.
          <br />
          Test Better.
          <br />
          Master Anything.
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-xl text-gray-400">
          Create personalized quizzes with AI and get a mix of MCQs,
          short-answer questions, and subjective questions.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button
            text="Create Your Quiz"
            variant="primary"
            handleClick={()=>console.log("Create Quiz clicked")}
          />
          <Button
            text="Explore more features"
            variant="secondary"
            handleClick={()=>console.log("Explore features clicked")}
          />
        </div>

      </div>

      {/* Right Section */}
      <div className="flex w-full items-center justify-center p-10 lg:w-1/2">
        <div className="text-8xl md:text-9xl">
          🧠
        </div>
      </div>

    </section>
  );
};

export default Hero;