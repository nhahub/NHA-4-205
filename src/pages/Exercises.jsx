import React, { useState } from 'react'

const exercises = [
  { id: 1, name: 'Walking', category: 'Beginner', emoji: '🚶', bg: '#1a2a1a', desc: 'Low-impact cardio perfect for starting your fitness journey.', time: 30, kcal: 150 },
  { id: 2, name: 'Bodyweight Squats', category: 'Beginner', emoji: '🦵', bg: '#1a2a1a', desc: 'Build lower body strength with no equipment needed.', time: 15, kcal: 100 },
  { id: 3, name: 'Chair Exercises', category: 'Low Impact', emoji: '🪑', bg: '#1a1a2a', desc: 'Gentle movements ideal for limited mobility.', time: 20, kcal: 80 },
  { id: 4, name: 'Swimming', category: 'Low Impact', emoji: '🏊', bg: '#1a1a2a', desc: "Full-body workout that's easy on the joints.", time: 40, kcal: 350 },
  { id: 5, name: 'Jogging', category: 'Intermediate', emoji: '🏃', bg: '#1a2a1a', desc: 'Boost cardiovascular health and burn calories.', time: 30, kcal: 300 },
  { id: 6, name: 'Jump Rope', category: 'Intermediate', emoji: '🧬', bg: '#2a1a1a', desc: 'High-intensity cardio for fat burning.', time: 15, kcal: 200 },
  { id: 7, name: 'Push Ups', category: 'Intermediate', emoji: '💪', bg: '#1a1a1a', desc: 'Classic upper body strength builder.', time: 10, kcal: 80 },
  { id: 8, name: 'Plank', category: 'Beginner', emoji: '🧘', bg: '#1a2a1a', desc: 'Strengthen your core and improve posture.', time: 10, kcal: 50 },
  { id: 9, name: 'Dumbbell Curls', category: 'Gym', emoji: '🏋️', bg: '#1a1a2a', desc: 'Isolate and grow your biceps.', time: 15, kcal: 90 },
  { id: 10, name: 'Treadmill', category: 'Gym', emoji: '🏃', bg: '#1a1a2a', desc: 'Controlled cardio with adjustable intensity.', time: 30, kcal: 320 },
  { id: 11, name: 'Cycling', category: 'Gym', emoji: '🚴', bg: '#1a2a1a', desc: 'Endurance and leg strength on the bike.', time: 45, kcal: 400 },
  { id: 12, name: 'Yoga', category: 'Low Impact', emoji: '🧘', bg: '#1a1a2a', desc: 'Improve flexibility, balance and mental clarity.', time: 45, kcal: 120 },
]

const categories = ['All Exercises', 'Beginner', 'Low Impact', 'Intermediate', 'Gym']

const Exercises = () => {
  const [activeFilter, setActiveFilter] = useState('All Exercises')
  const [started, setStarted] = useState({})

  const filtered = activeFilter === 'All Exercises'
    ? exercises
    : exercises.filter(e => e.category === activeFilter)

  const handleStart = (id) => {
    setStarted(prev => ({ ...prev, [id]: true }))
    setTimeout(() => setStarted(prev => ({ ...prev, [id]: false })), 2000)
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'Arial, sans-serif' }}>

      {/* Hero Section */}
      <div style={{ textAlign: 'center', padding: '60px 24px 40px', maxWidth: '700px', margin: '0 auto' }}>
        {/* dumbbell logo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <svg width="72" height="72" viewBox="0 0 100 100" style={{ display: 'block' }}>
            <g transform="rotate(-45 50 50)">
              {/* Left Tip */}
              <rect x="10" y="47.5" width="6" height="5" rx="2.5" fill="#c8ff00" />
              {/* Right Tip */}
              <rect x="84" y="47.5" width="6" height="5" rx="2.5" fill="#c8ff00" />
              {/* Handle */}
              <rect x="40" y="47.5" width="20" height="5" rx="1.5" fill="#c8ff00" />

              {/* Left Weights */}
              <rect x="16" y="38" width="6" height="24" rx="3" fill="#000" stroke="#c8ff00" strokeWidth="3" />
              <rect x="24" y="30" width="8" height="40" rx="4" fill="#000" stroke="#c8ff00" strokeWidth="3" />
              <rect x="34" y="35" width="6" height="30" rx="3" fill="#000" stroke="#c8ff00" strokeWidth="3" />

              {/* Right Weights */}
              <rect x="60" y="35" width="6" height="30" rx="3" fill="#000" stroke="#c8ff00" strokeWidth="3" />
              <rect x="68" y="30" width="8" height="40" rx="4" fill="#000" stroke="#c8ff00" strokeWidth="3" />
              <rect x="78" y="38" width="6" height="24" rx="3" fill="#000" stroke="#c8ff00" strokeWidth="3" />
            </g>
          </svg>
        </div>
        <h1 style={{ fontSize: '48px', fontWeight: '900', margin: '0 0 16px', color: '#fff', letterSpacing: '-1px' }}>
          Exercise Recommendations
        </h1>
        <p style={{ color: '#888', fontSize: '16px', margin: 0 }}>
          Move your body, boost your health. Find the right workout for your fitness level.
        </p>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', padding: '0 24px 40px', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            style={{
              padding: '10px 20px',
              borderRadius: '999px',
              border: activeFilter === cat ? 'none' : '1px solid #333',
              backgroundColor: activeFilter === cat ? '#c8ff00' : 'transparent',
              color: activeFilter === cat ? '#000' : '#ccc',
              fontWeight: activeFilter === cat ? '700' : '400',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Exercise Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 24px 80px',
      }}>
        {filtered.map(ex => (
          <div
            key={ex.id}
            style={{
              backgroundColor: '#111',
              borderRadius: '16px',
              overflow: 'hidden',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              border: '1px solid #1a1a1a',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(200,255,0,0.08)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {/* Card Image Area */}
            <div style={{
              backgroundColor: ex.bg,
              height: '130px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '52px',
            }}>
              {ex.emoji}
            </div>

            {/* Card Body */}
            <div style={{ padding: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h3 style={{ margin: 0, fontSize: '17px', fontWeight: '700', color: '#fff' }}>{ex.name}</h3>
                <span style={{ fontSize: '12px', color: '#888', backgroundColor: '#1a1a1a', padding: '3px 10px', borderRadius: '999px' }}>
                  {ex.category}
                </span>
              </div>
              <p style={{ color: '#888', fontSize: '13px', margin: '0 0 12px', lineHeight: '1.5' }}>{ex.desc}</p>
              <div style={{ display: 'flex', gap: '14px', fontSize: '13px', color: '#999', marginBottom: '14px' }}>
                <span>⏱ {ex.time} min</span>
                <span>🔥 {ex.kcal} kcal</span>
              </div>
              <button
                onClick={() => handleStart(ex.id)}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: started[ex.id] ? '#90b800' : '#c8ff00',
                  color: '#000',
                  fontWeight: '700',
                  fontSize: '14px',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease, transform 0.1s',
                  transform: started[ex.id] ? 'scale(0.98)' : 'scale(1)',
                }}
              >
                {started[ex.id] ? '✓ Started!' : 'Start Exercise'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ── Gym Workouts Section ── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '900', margin: '0 0 10px', color: '#fff' }}>Gym Workouts</h2>
          <p style={{ color: '#888', fontSize: '15px', margin: 0 }}>Structured splits to build strength at the gym.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(440px, 1fr))',
          gap: '20px',
        }}>
          {[
            {
              title: 'Chest Day',
              icon: '🏋️',
              moves: [
                { name: 'Bench Press', sets: '4×8' },
                { name: 'Incline Press', sets: '3×10' },
                { name: 'Chest Fly', sets: '3×12' },
                { name: 'Push Ups', sets: '3×15' },
              ],
            },
            {
              title: 'Leg Day',
              icon: '🦵',
              moves: [
                { name: 'Squats', sets: '4×8' },
                { name: 'Leg Press', sets: '3×10' },
                { name: 'Lunges', sets: '3×12' },
                { name: 'Calf Raises', sets: '4×15' },
              ],
            },
            {
              title: 'Back & Biceps',
              icon: '💪',
              moves: [
                { name: 'Deadlift', sets: '4×6' },
                { name: 'Pull Ups', sets: '3×8' },
                { name: 'Barbell Rows', sets: '3×10' },
                { name: 'Bicep Curls', sets: '3×12' },
              ],
            },
            {
              title: 'Shoulders & Triceps',
              icon: '🤸',
              moves: [
                { name: 'Overhead Press', sets: '4×8' },
                { name: 'Lateral Raise', sets: '3×12' },
                { name: 'Tricep Dips', sets: '3×10' },
                { name: 'Pushdowns', sets: '3×12' },
              ],
            },
          ].map((split, si) => (
            <div
              key={si}
              style={{
                backgroundColor: '#111',
                border: '1px solid #1e1e1e',
                borderRadius: '16px',
                padding: '24px',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(200,255,0,0.06)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Split Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <span style={{ fontSize: '28px' }}>{split.icon}</span>
                <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#fff' }}>{split.title}</h3>
              </div>

              {/* Exercise Rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {split.moves.map((move, mi) => (
                  <div
                    key={mi}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 0',
                      borderBottom: mi < split.moves.length - 1 ? '1px solid #1e1e1e' : 'none',
                    }}
                  >
                    <span style={{ fontSize: '14px', color: '#ccc' }}>{move.name}</span>
                    <span style={{ fontSize: '14px', fontWeight: '700', color: '#c8ff00' }}>{move.sets}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Exercise Tips Section ── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '900', margin: '0 0 10px', color: '#fff' }}>Exercise Tips</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {[
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              ),
              title: 'Start Slow',
              desc: 'Begin with manageable sessions and gradually increase intensity to avoid injury.',
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="17 1 21 5 17 9" />
                  <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                  <polyline points="7 23 3 19 7 15" />
                  <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                </svg>
              ),
              title: 'Stay Consistent',
              desc: 'Consistency beats intensity. Aim for regular movement every week.',
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M12 6v6l4 2" />
                </svg>
              ),
              title: 'Stay Hydrated',
              desc: 'Drink water before, during, and after workouts to keep performing well.',
            },
          ].map((tip, ti) => (
            <div
              key={ti}
              style={{
                backgroundColor: '#111',
                border: '1px solid #1e1e1e',
                borderRadius: '16px',
                padding: '32px 24px',
                textAlign: 'center',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(200,255,0,0.07)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Icon bubble */}
              <div style={{
                width: '56px',
                height: '56px',
                backgroundColor: '#1a1a1a',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}>
                {tip.icon}
              </div>
              <h3 style={{ margin: '0 0 10px', fontSize: '17px', fontWeight: '800', color: '#fff' }}>{tip.title}</h3>
              <p style={{ margin: 0, fontSize: '13px', color: '#888', lineHeight: '1.7' }}>{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Exercises
