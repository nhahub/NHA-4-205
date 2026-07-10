import React from 'react'
import { useNavigate } from 'react-router-dom';

const FeatureData = [
  {
    id: 1,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2M12 18v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        <rect x="6" y="8" width="12" height="10" rx="2" />
        <path d="M9 13h.01M15 13h.01" />
      </svg>
    ),
    title: "AI Chatbot",
    description: "Get instant answers about BMI, diet, and exercise from our smart health assistant.",
    path: "/chatbot"
  },
  {
    id: 2,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Progress Tracker",
    description: "Track your weight, BMI, and activity over time with beautiful charts.",
    path: "/progress"
  },
  {
    id: 3,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    title: "Before & After",
    description: "Showcase your transformation and get inspired by real results.",
    path: "/transformation"
  },
  {
    id: 4,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5h11M6.5 17.5h11M3 10h3M18 10h3M3 14h3M18 14h3" />
        <rect x="6" y="9" width="12" height="6" rx="1" />
      </svg>
    ),
    title: "Gym & Exercises",
    description: "Curated workouts for every level, from beginner to advanced.",
    path: "/exercises"
  },
  {
    id: 5,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c4.97 0 9-3.04 9-8a7 7 0 0 0-7-7c-.52 0-1.03.1-1.5.3A4.38 4.38 0 0 1 12 7c-.17 0-.33-.1-.5-.3A7 7 0 0 0 4.5 14c0 4.96 4.03 8 9 8z" />
        <path d="M12 7V3c0-1 1-2 2-2" />
      </svg>
    ),
    title: "Diet Plans",
    description: "Personalized meal plans and calorie calculators tailored for you.",
    path: "/diet"
  },
  {
    id: 6,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
    title: "User Dashboard",
    description: "Powerful tools to manage users, content, and platform reports.",
    path: "/dashboard"
  }
];

const testimonialsData = [
  { id: 1, initial: "AH",
      name: "Ahmed Hassan",
      review: '"Elevate Fit helped me lose 12kg in 4 months. The BMI tracker kept me accountable every single day."' 
  },

  { id: 2, initial: "MS",
      name: "Mona Salah",
      review: '"The diet plans are realistic and made for Egyptian food. I finally got my blood sugar under control."'
  },

  { id: 3, initial: "KA", 
    name: "Karim Adel", 
    review: '"The AI chatbot answers all my questions instantly. Best fitness platform I have ever used."' 
  },
];

const Home = () => {
const navigate = useNavigate();
  return (
    <>
    {/* Hero section*/}
    <div className="flex flex-col items-center text-center px-2 pt-20 pb-16 max-w-5xl mx-auto">
    <span className="text-[#c8ff00] border-[#c8ff00] border-1 px-4 py-1 rounded-full  text-xs">Health platform for Egypt</span>

    <div className=" my-4 mt-8 py-4">
    <h1 className="text-white text-5xl md:text-7xl font-bold">Take control of your <span className="text-[#c8ff00]">health journey</span></h1>
    <p className="text-[#666] text-base md:text-lg mt-4 ">Track your BMI, follow personalized diet plans, and access curated exercises — all designed to help Egyptians fight obesity and diabetes and build lasting healthy habits.</p>
    </div>

    <div className="flex gap-4 mt-6 ">
    <a href="/awareness" className="bg-[#c8ff00] text-black px-6 py-3 rounded-lg font-bold ">Calculate BMI</a>
    <a href="/login" className="border border-[#c8ff00] text-[#c8ff00] px-6 py-3 rounded-lg font-bold hover:bg-[#c8ff00] hover:text-black">Start your journey</a>
    </div>

    </div>

{/*  section 1 */}
    
<div className="max-w-7xl mx-auto px-6 pb-24">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
    
    {/* card 1 */}
    
    <div className="bg-[#0c0c0c] border border-zinc-900 p-8 rounded-2xl w-full flex flex-col justify-between min-h-[190px]">
      <div className="bg-red-500/10 text-red-500 w-10 h-10 rounded-xl flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      </div>
      <div className="mt-4">
        <div className="text-red-500 font-black text-4xl mb-1">39.5%</div>
        <div className="text-[#666] text-xs font-medium">Obesity rate in Egypt</div>
      </div>
    </div>

    {/* card 2 */}
    <div className="bg-[#0c0c0c] border border-zinc-900 p-8 rounded-2xl w-full flex flex-col justify-between min-h-[190px]">
      <div className="bg-green-500/10 text-green-500 w-10 h-10 rounded-xl flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </div>
      <div className="mt-4">
        <div className="text-[#bfff00] font-black text-4xl mb-1">15.6%</div>
        <div className="text-[#666] text-xs font-medium">Diabetes prevalence</div>
      </div>
    </div>

    {/* card 3 */}
    <div className="bg-[#0c0c0c] border border-zinc-900 p-8 rounded-2xl w-full flex flex-col justify-between min-h-[190px]">
      <div className="bg-blue-500/10 text-blue-500 w-10 h-10 rounded-xl flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path d="M12 6v6l4 2" />
        </svg>
      </div>
      <div className="mt-4">
        <div className="text-[#4d9fff] font-black text-4xl mb-1">73%</div>
        <div className="text-[#666] text-xs font-medium">Need lifestyle change</div>
      </div>
    </div>

  </div>
</div>

      {/*  section 2 */}

<div className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-900">

  <div className="items-center text-center mb-16">
    <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Powerful features</h2>
    <p className="text-[#666]">Everything you need to elevate your health, in one place.</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
    {FeatureData.map((feature) => ( 

     <div key={feature.id} className="bg-[#0a0a0a] p-8 rounded-2xl border border-zinc-900 hover:border-[#c8ff00] transition duration-300" onClick={() => navigate(feature.path)} style={{ cursor: 'pointer' }}> 
        
        <div>
          <span className="text-4xl">{feature.icon}</span>
          <h3 className="text-white font-bold text-lg mt-4">{feature.title}</h3>
          <p className="text-[#666] text-sm mt-2 leading-relaxed">{feature.description}</p>
        </div>

      </div>
    ))}
  </div>

</div>
      {/*  section 3*/}
        
        <div className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-900">
          <div className="text-center mb-12">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-3">What our users say</h2>
            <p className="text-[#666]">Real people, real results.</p>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {testimonialsData.map((testimonial) => (
                <div key={testimonial.id} className="bg-[#0a0a0a] p-8 rounded-2xl border border-zinc-900 hover:border-[#c8ff00] transition duration-300 flex flex-col justify-between min-h-[220px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#c8ff00] text-black w-10 h-10 rounded-full flex items-center justify-center font-bold">{testimonial.initial}</div>
                    <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
                  </div>
                  <p className="text-[#666] text-sm leading-relaxed">{testimonial.review}</p>
                </div>
              ))}
            </div>
          </div>
        
      {/*  section 4 */}
          
        <div className="max-w-7xl mx-auto px-6 pb-24 border-t border-zinc-900 pt-24">
          <div className="bg-[#0a0a0a] border border-zinc-900 rounded-2xl p-12 md:p-16 w-full flex flex-col items-center text-center">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Ready to transform your life?</h2>
            <p className="text-[#666] mb-8 max-w-2xl text-base md:text-lg leading-relaxed">Join thousands of Egyptians taking control of their health today. It's free to start.</p>
            <a href="/login" className="bg-[#c8ff00] text-black font-bold py-3.5 px-8 rounded-lg hover:bg-[#a8d000] transition duration-300">Get Started free</a>
          </div>
        </div>
          
    </>
  )
}

export default Home