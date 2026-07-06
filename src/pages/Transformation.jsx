import React, { useState } from 'react'

const allCards = [
  {
    id: 1,
    name: 'Ahmed H.',
    category: 'Weight Loss',
    duration: '6 months',
    badge: '-18 kg',
    quote: '"I never thought I could feel this good. The structured plan changed everything."',
    filter: 'Weight Loss',
  },
  {
    id: 2,
    name: 'Mona S.',
    category: 'Diabetes Management',
    duration: '8 months',
    badge: 'HbA1c 9.2 → 6.1',
    quote: '"My doctor was amazed. Diet and walking reversed my pre-diabetes."',
    filter: 'Diabetes Management',
  },
  {
    id: 3,
    name: 'Karim A.',
    category: 'Muscle Gain',
    duration: '10 months',
    badge: '+9 kg muscle',
    quote: '"Consistent gym workouts and protein tracking built the physique I wanted."',
    filter: 'Muscle Gain',
  },
  {
    id: 4,
    name: 'Sara M.',
    category: 'Weight Loss',
    duration: '5 months',
    badge: '-12 kg',
    quote: '"The before & after gallery kept me motivated until I hit my goal."',
    filter: 'Weight Loss',
  },
  {
    id: 5,
    name: 'Omar T.',
    category: 'Muscle Gain',
    duration: '7 months',
    badge: '+6 kg muscle',
    quote: '"Leg day and back & biceps splits gave me real, visible results."',
    filter: 'Muscle Gain',
  },
  {
    id: 6,
    name: 'Layla K.',
    category: 'Diabetes Management',
    duration: '12 months',
    badge: 'Off medication',
    quote: '"Lifestyle change, not pills, gave me my health back."',
    filter: 'Diabetes Management',
  },
]

const filters = ['All', 'Weight Loss', 'Muscle Gain', 'Diabetes Management']

const Transformation = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [showForm, setShowForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', story: '', result: '', duration: '' })

  const filtered = activeFilter === 'All' ? allCards : allCards.filter(c => c.filter === activeFilter)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setShowForm(false)
      setFormData({ name: '', story: '', result: '', duration: '' })
    }, 3000)
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'Arial, sans-serif' }}>

      {/* ── Hero ── */}
      <div style={{ textAlign: 'center', padding: '64px 24px 36px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '52px', fontWeight: '900', margin: '0 0 16px', letterSpacing: '-1px', lineHeight: 1.15 }}>
          Real Transformations,{' '}
          <span style={{ color: '#c8ff00' }}>Real Results</span>
        </h1>
        <p style={{ color: '#888', fontSize: '16px', margin: 0 }}>
          Get inspired by Egyptians who took control of their health and changed their lives.
        </p>
      </div>

      {/* ── Filter Tabs ── */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', padding: '0 24px 40px', flexWrap: 'wrap' }}>
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{
              padding: '9px 22px',
              borderRadius: '999px',
              border: activeFilter === f ? 'none' : '1px solid #333',
              backgroundColor: activeFilter === f ? '#c8ff00' : 'transparent',
              color: activeFilter === f ? '#000' : '#aaa',
              fontWeight: activeFilter === f ? '700' : '400',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ── Cards Grid ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
        gap: '20px',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 24px 60px',
      }}>
        {filtered.map(card => (
          <div
            key={card.id}
            style={{
              backgroundColor: '#111',
              border: '1px solid #1e1e1e',
              borderRadius: '16px',
              overflow: 'hidden',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 14px 36px rgba(200,255,0,0.07)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {/* Before / After image area */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '160px' }}>
              {/* Before */}
              <div style={{
                backgroundColor: '#2a2a2a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ fontSize: '13px', color: '#666', fontWeight: '600', letterSpacing: '2px' }}>BEFORE</span>
              </div>
              {/* After */}
              <div style={{
                backgroundColor: '#3d4a00',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ fontSize: '13px', color: '#c8ff00', fontWeight: '800', letterSpacing: '2px' }}>AFTER</span>
              </div>
            </div>

            {/* Card body */}
            <div style={{ padding: '18px 20px 20px' }}>
              {/* Name + badge row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontWeight: '800', fontSize: '17px' }}>{card.name}</span>
                <span style={{
                  fontSize: '12px',
                  color: '#c8ff00',
                  border: '1px solid #c8ff00',
                  borderRadius: '999px',
                  padding: '3px 12px',
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                }}>
                  {card.badge}
                </span>
              </div>

              {/* Category · Duration */}
              <div style={{ fontSize: '13px', color: '#666', marginBottom: '10px' }}>
                {card.category} · {card.duration}
              </div>

              {/* Quote */}
              <p style={{ fontSize: '13px', color: '#aaa', margin: '0 0 14px', lineHeight: '1.6' }}>
                {card.quote}
              </p>

              {/* Read story link */}
              <span style={{ fontSize: '13px', fontWeight: '700', color: '#c8ff00', cursor: 'pointer' }}>
                Read story →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA Banner ── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 100px' }}>
        <div style={{
          backgroundColor: '#111',
          border: '1px solid #1e1e1e',
          borderRadius: '16px',
          padding: '60px 24px',
          textAlign: 'center',
        }}>
          <h2 style={{ fontSize: '32px', fontWeight: '900', margin: '0 0 12px' }}>Got a transformation to share?</h2>
          <p style={{ color: '#888', fontSize: '15px', margin: '0 0 28px' }}>
            Inspire others by submitting your own before &amp; after journey.
          </p>

          {showForm ? (
            <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'left' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ color: '#c8ff00', fontWeight: '800', fontSize: '18px' }}>🎉 Submitted!</div>
                  <div style={{ color: '#666', fontSize: '14px', marginTop: '8px' }}>Thank you for inspiring others.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    { label: 'Your Name', key: 'name', type: 'text', placeholder: 'Ahmed H.' },
                    { label: 'Result (e.g. -18 kg)', key: 'result', type: 'text', placeholder: '-18 kg' },
                    { label: 'Duration', key: 'duration', type: 'text', placeholder: '6 months' },
                  ].map(field => (
                    <div key={field.key}>
                      <label style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '6px' }}>{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.key]}
                        onChange={e => setFormData(p => ({ ...p, [field.key]: e.target.value }))}
                        style={{
                          width: '100%', padding: '11px 14px',
                          backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a',
                          borderRadius: '8px', color: '#fff', fontSize: '14px',
                          outline: 'none', boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '6px' }}>Your Story</label>
                    <textarea
                      placeholder="Tell us about your journey..."
                      value={formData.story}
                      onChange={e => setFormData(p => ({ ...p, story: e.target.value }))}
                      rows={3}
                      style={{
                        width: '100%', padding: '11px 14px',
                        backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a',
                        borderRadius: '8px', color: '#fff', fontSize: '14px',
                        outline: 'none', resize: 'vertical', boxSizing: 'border-box',
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      padding: '13px', backgroundColor: '#c8ff00',
                      color: '#000', fontWeight: '800', fontSize: '15px',
                      border: 'none', borderRadius: '10px', cursor: 'pointer',
                    }}
                  >
                    Submit your transformation
                  </button>
                </form>
              )}
            </div>
          ) : (
            <button
              onClick={() => setShowForm(true)}
              style={{
                padding: '14px 36px',
                backgroundColor: '#c8ff00',
                color: '#000',
                fontWeight: '800',
                fontSize: '15px',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Submit your transformation
            </button>
          )}
        </div>
      </div>

    </div>
  )
}

export default Transformation
