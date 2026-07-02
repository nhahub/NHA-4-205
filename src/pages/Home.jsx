import React from 'react'

const Home = () => {
  return (
    <>
    {/* Hero section*/}
    <div className="flex flex-col items-center text-center px-6 pt-24 pb-16 max-w-5xl mx-auto">
    <span className="text-[#c8ff00] border-[#c8ff00] border-2 px-4 py-2 rounded-full">Health platform for Egypt</span>

    <div className=" my-4 mt-8 py-4">
    <h1 className="text-white text-5xl md:text-7xl font-bold">Take control of your <span className="text-[#c8ff00]">health journey</span></h1>
    <p className="text-[#666] text-base md:text-lg mt-4 ">Track your BMI, follow personalized diet plans, and access curated exercises — all designed to help Egyptians fight obesity and diabetes and build lasting healthy habits.</p>
    </div>

    <div className="flex gap-4 mt-6">
    <a href="/awareness" className="bg-[#c8ff00] text-black px-4 py-2 rounded-lg font-bold ">Calculate BMI</a>
    <a href="/login" className="border border-[#c8ff00] text-[#c8ff00] px-4 py-2 rounded-lg font-bold hover:bg-[#c8ff00] hover:text-black">Start your journey</a>
    </div>

    </div>

{/*  section 1 */}
    
    <div className="flex felx-col max-w-4xl mx-auto px-6 pb-24 mx-auto gap-6 md:flex-row md:justify-between ">
      {/*card 1 */}
      <div className="bg-[#0a0a0a] p-6 rounded-2xl">
        <div className=""></div>
        <div className="text-red-500 font-bold">39.5%</div>
        <div className="text-[#666]">Obesity rate in Egypt</div>
      </div>
      {/*card 2 */}
      <div className="bg-[#0a0a0a] p-6 rounded-2xl">
        <div className=""></div>
        <div className="text-[#bfff00]">15.6%</div>
        <div className="text-[#666]">Diabetes prevalence</div>
      </div>
      {/*card 3 */}
      <div className="bg-[#0a0a0a] p-6 rounded-2xl">
        <div className=""></div>
        <div className="text-[#4d9fff]">73%</div>
        <div className="text-[#666]">Need lifestyle change</div>
      </div>

      </div>

      {/*  section 2 */}
      
      <div className="featureSection">

        <div>
        <h2>Powerful features</h2>
        <p>Everything you need to elevate your health, in one place.</p>
        </div>
        
        {/*card 1 */}
        <div>
          <div className="">
            <span></span>
            <h3>AI Chatbot</h3>
            <p>Get instant answers about BMI, diet, and exercise from our smart health assistant.</p>
          </div>

          {/*card 2 */}
          <div className="">
            <span></span>
            <h3>Progress Tracker</h3>
            <p>Track your weight, BMI, and activity over time with beautiful charts.</p>
          </div>

          {/*card 3 */}
          <div className="">
            <span></span>
            <h3>Before & After</h3>
            <p>Showcase your transformation and get inspired by real results.</p>
          </div>

          {/*card 4 */}
          <div className="">
            <span></span>
            <h3>Gym & Exercises</h3>
            <p>Curated workouts for every level, from beginner to advanced.</p>
          </div>

          {/*card 5 */}
          <div className="">
            <span></span>
            <h3>Diet Plans</h3>
            <p>Personalized meal plans and calorie calculators tailored for you.</p>
          </div>

          {/*card 6 */}
          <div className="">
            <span></span>
            <h3>Admin Dashboard</h3>
            <p>Powerful tools to manage users, content, and platform reports.</p>
          </div>

        </div>

        </div>

      {/*  section 3*/}
        
        <div className="userSay">

          <div className="">
            <h2>What our users say</h2>
            <p>Real people, real results.</p>
          </div>

          <div className="">
            {/*card 1 */}
            <div className="">
              <span></span>
              <p>Ahmed Hassan</p>
              <p>"Elevate Fit helped me lose 12kg in 4 months. The BMI tracker kept me accountable every single day."</p>
            </div>
            {/*card 2 */}
            <div className="">
              <span></span>
              <p>Mona Salah</p>
              <p>"The diet plans are realistic and made for Egyptian food. I finally got my blood sugar under control."</p>
            </div>
            {/*card 3 */}
            <div className="">
              <span></span>
              <p>Karim Adel</p>
              <p>"The AI chatbot answers all my questions instantly. Best fitness platform I have ever used."</p>
            </div>
            
          </div>

          </div>
      {/*  section 4 */}
          
          <div className="readyToTransform">
            <div className="">
              <h2>Ready to transform your life?</h2>
              <p>Join thousands of Egyptians taking control of their health today. It's free to start.</p>
              <a href="/login" className="">Get Started free</a>
            </div>

            </div>
    </>
  )
}

export default Home