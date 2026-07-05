import React, { useState } from 'react'

const mealData = {
  Breakfast: [
    {
      name: 'Ful Medames with Egg',
      kcal: 320,
      protein: 18,
      carbs: 30,
      fats: 14,
    },
    {
      name: 'Oatmeal & Banana',
      kcal: 280,
      protein: 9,
      carbs: 48,
      fats: 6,
    },
    {
      name: 'Greek Yogurt & Honey',
      kcal: 210,
      protein: 15,
      carbs: 24,
      fats: 5,
    },
  ],
  Lunch: [
    {
      name: 'Grilled Chicken & Rice',
      kcal: 520,
      protein: 42,
      carbs: 55,
      fats: 10,
    },
    {
      name: 'Koshary (Small)',
      kcal: 430,
      protein: 14,
      carbs: 72,
      fats: 9,
    },
    {
      name: 'Lentil Soup & Bread',
      kcal: 350,
      protein: 18,
      carbs: 52,
      fats: 6,
    },
  ],
  Dinner: [
    {
      name: 'Baked Fish & Salad',
      kcal: 380,
      protein: 36,
      carbs: 18,
      fats: 14,
    },
    {
      name: 'Grilled Vegetables & Eggs',
      kcal: 290,
      protein: 20,
      carbs: 22,
      fats: 12,
    },
    {
      name: 'Chicken Soup',
      kcal: 260,
      protein: 28,
      carbs: 16,
      fats: 7,
    },
  ],
  Snacks: [
    {
      name: 'Mixed Nuts (30g)',
      kcal: 180,
      protein: 5,
      carbs: 6,
      fats: 16,
    },
    {
      name: 'Apple & Peanut Butter',
      kcal: 200,
      protein: 4,
      carbs: 28,
      fats: 8,
    },
    {
      name: 'Dates & Almonds',
      kcal: 160,
      protein: 3,
      carbs: 26,
      fats: 6,
    },
  ],
}

const activityLevels = ['Sedentary', 'Light', 'Moderate', 'Active']

const healthyTips = [
  {
    num: '01',
    text: 'Cut added sugar by swapping sodas and juices for water or unsweetened tea.',
  },
  {
    num: '02',
    text: 'Stay hydrated — drink a glass of water before each meal to control portions.',
  },
  {
    num: '03',
    text: 'Build balanced plates: half veggies, a quarter protein, a quarter whole grains.',
  },
]

const avoidFoods = [
  'Sugary drinks & sodas',
  'Deep fried foods',
  'White bread & pastries',
  'Processed meats',
  'Excessive sweets',
  'Energy drinks',
]

const eatFoods = [
  'Leafy greens & vegetables',
  'Lean proteins (chicken, fish)',
  'Whole grains & legumes',
  'Fresh fruits',
  'Nuts & seeds',
  'Water & herbal tea',
]

const DietPlan = () => {
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [activity, setActivity] = useState('Sedentary')
  const [activeMeal, setActiveMeal] = useState('Breakfast')
  const [result, setResult] = useState(null)

  const handleCalculate = () => {
    const bmr = 10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) + 5
    const multipliers = { Sedentary: 1.2, Light: 1.375, Moderate: 1.55, Active: 1.725 }
    const tdee = Math.round(bmr * multipliers[activity])
    setResult(tdee)
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    backgroundColor: '#1a1a1a',
    border: '1px solid #2a2a2a',
    borderRadius: '10px',
    color: '#fff',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    color: '#888',
    marginBottom: '8px',
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'Arial, sans-serif' }}>

      {/* ── Hero ── */}
      <div style={{ textAlign: 'center', padding: '60px 24px 40px', maxWidth: '700px', margin: '0 auto' }}>
        {/* Apple outline SVG */}
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
            <path d="M10 2c1 .5 2 2 2 5" />
          </svg>
        </div>
        <h1 style={{ fontSize: '48px', fontWeight: '900', margin: '0 0 16px', letterSpacing: '-1px' }}>
          Nutrition & Diet Plans
        </h1>
        <p style={{ color: '#888', fontSize: '16px', margin: 0, lineHeight: '1.6' }}>
          Fuel your body right. Calculate your needs and follow balanced meal plans built for Egyptian cuisine.
        </p>
      </div>

      {/* ── Calorie Calculator ── */}
      <div style={{ maxWidth: '600px', margin: '0 auto 70px', padding: '0 24px' }}>
        <div style={{
          backgroundColor: '#111',
          border: '1px solid #1e1e1e',
          borderRadius: '16px',
          padding: '28px 28px 24px',
        }}>
          <h2 style={{ margin: '0 0 24px', fontSize: '18px', fontWeight: '800' }}>Calorie Calculator</h2>

          {/* Inputs row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <div>
              <label style={labelStyle}>Age</label>
              <input type="number" value={age} onChange={e => setAge(e.target.value)} placeholder="28" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Weight (kg)</label>
              <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="80" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Height (cm)</label>
              <input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="175" style={inputStyle} />
            </div>
          </div>

          {/* Activity level */}
          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>Activity level</label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {activityLevels.map(lvl => (
                <button
                  key={lvl}
                  onClick={() => setActivity(lvl)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '999px',
                    border: activity === lvl ? 'none' : '1px solid #333',
                    backgroundColor: activity === lvl ? '#c8ff00' : 'transparent',
                    color: activity === lvl ? '#000' : '#aaa',
                    fontWeight: activity === lvl ? '700' : '400',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Calculate button */}
          <button
            onClick={handleCalculate}
            style={{
              width: '100%',
              padding: '16px',
              backgroundColor: '#c8ff00',
              color: '#000',
              fontWeight: '800',
              fontSize: '16px',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
              marginBottom: result ? '16px' : '0',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Calculate
          </button>

          {/* Result — appears below button after Calculate is clicked */}
          {result && (
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              padding: '24px 18px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '13px', color: '#888', marginBottom: '10px' }}>
                Estimated daily calorie needs
              </div>
              <div style={{ fontSize: '42px', fontWeight: '900', color: '#c8ff00', lineHeight: 1 }}>
                {result} kcal
              </div>
            </div>
          )}
        </div>
      </div>


      {/* ── Meal Plans ── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto 70px', padding: '0 24px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: '900', margin: '0 0 24px' }}>Meal Plans</h2>

        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '32px', flexWrap: 'wrap' }}>
          {Object.keys(mealData).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveMeal(tab)}
              style={{
                padding: '9px 22px',
                borderRadius: '999px',
                border: activeMeal === tab ? 'none' : '1px solid #333',
                backgroundColor: activeMeal === tab ? '#c8ff00' : 'transparent',
                color: activeMeal === tab ? '#000' : '#aaa',
                fontWeight: activeMeal === tab ? '700' : '400',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Meal Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {mealData[activeMeal].map((meal, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#111',
                border: '1px solid #1e1e1e',
                borderRadius: '14px',
                padding: '20px',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(200,255,0,0.07)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Meal name + kcal */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontWeight: '700', fontSize: '15px', color: '#fff' }}>{meal.name}</span>
                <span style={{ fontWeight: '800', fontSize: '15px', color: '#c8ff00' }}>{meal.kcal} kcal</span>
              </div>

              {/* Macro pills */}
              <div style={{ display: 'flex', gap: '10px' }}>
                {[
                  { label: 'Protein', val: meal.protein },
                  { label: 'Carbs',   val: meal.carbs   },
                  { label: 'Fats',    val: meal.fats    },
                ].map(m => (
                  <div
                    key={m.label}
                    style={{
                      flex: 1,
                      backgroundColor: '#1a1a1a',
                      borderRadius: '10px',
                      padding: '10px 8px',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: '15px', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>{m.val}g</div>
                    <div style={{ fontSize: '11px', color: '#666' }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Healthy Tips ── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto 70px', padding: '0 24px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: '900', margin: '0 0 32px' }}>Healthy Tips</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {healthyTips.map((tip, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#111',
                border: '1px solid #1e1e1e',
                borderRadius: '14px',
                padding: '28px 24px',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(200,255,0,0.06)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ fontSize: '28px', fontWeight: '900', color: '#c8ff00', marginBottom: '14px' }}>{tip.num}</div>
              <p style={{ margin: 0, fontSize: '14px', color: '#888', lineHeight: '1.7' }}>{tip.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Foods to Avoid / Foods to Eat ── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto 100px', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
          gap: '20px',
        }}>

          {/* Foods to avoid */}
          <div style={{
            backgroundColor: '#111',
            border: '1px solid #1e1e1e',
            borderRadius: '14px',
            padding: '28px 24px',
          }}>
            <h3 style={{ margin: '0 0 20px', fontSize: '17px', fontWeight: '800', color: '#ff4d4d' }}>Foods to avoid</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {avoidFoods.map((food, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#ff4d4d', fontSize: '16px', flexShrink: 0 }}>✕</span>
                  <span style={{ fontSize: '14px', color: '#ccc' }}>{food}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Foods to eat */}
          <div style={{
            backgroundColor: '#111',
            border: '1px solid #1e1e1e',
            borderRadius: '14px',
            padding: '28px 24px',
          }}>
            <h3 style={{ margin: '0 0 20px', fontSize: '17px', fontWeight: '800', color: '#4dff88' }}>Foods to eat</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {eatFoods.map((food, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#4dff88', fontSize: '16px', flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: '14px', color: '#ccc' }}>{food}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default DietPlan
