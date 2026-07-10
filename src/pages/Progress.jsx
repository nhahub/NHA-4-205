import React, { useState, useEffect, useRef, useCallback } from 'react';

const API_BASE = 'https://nha-4-205-production.up.railway.app';

const fmtX = (iso) => {
  const d = new Date(iso);
  if (isNaN(d)) return iso;
  return `${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const fmtDate = (iso) => {
  const d = new Date(iso);
  if (isNaN(d)) return iso;
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const todayStr = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

//Trophy SVG 
const TrophyIcon = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5h-2V3H7v2H5C3.9 5 3 5.9 3 7v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V18H9v2h6v-2h-2v-2.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
    <path d="M11 20h2v2h-2z" />
    <path d="M8 22h8v-1H8z" />
  </svg>
);

//Line Chart with Hover Crosshair
const LineChart = ({
  data,
  yKey,
  yLabel,
  yGridLines,
  yMax,
  areaFill,
  W = 500,
  H = 160,
  padL = 25,
  padR = 10,
  padT = 10,
  padB = 20,
  tooltipW = 67.79,
  tooltipH = 45.6
}) => {
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const svgRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  const getPoints = () => data.map((d, i) => {
    const x = padL + (data.length === 1 ? innerW / 2 : (i / (data.length - 1)) * innerW);
    const val = Number(d[yKey]) || 0;
    const y = padT + innerH - (Math.min(val, yMax) / yMax) * innerH;
    return { x, y, val, date: d.date, idx: i };
  });

  const points = getPoints();

  const linePath = points.length > 1
    ? 'M ' + points.map(p => `${p.x},${p.y}`).join(' L ')
    : '';

  const areaPath = points.length > 1
    ? `M ${padL},${padT + innerH} L ` + points.map(p => `${p.x},${p.y}`).join(' L ') + ` L ${points[points.length - 1].x},${padT + innerH} Z`
    : '';

  const handleMouseMove = useCallback((e) => {
    if (!svgRef.current || points.length === 0) return;
    const rect = svgRef.current.getBoundingClientRect();
    const svgX = ((e.clientX - rect.left) / rect.width) * W;
    let nearest = points[0];
    let minDist = Math.abs(svgX - points[0].x);
    for (const p of points) {
      const dist = Math.abs(svgX - p.x);
      if (dist < minDist) { minDist = dist; nearest = p; }
    }
    setHovered(nearest);
  }, [points, W]);

  const handleMouseLeave = () => setHovered(null);

  const ttX = hovered ? Math.min(Math.max(hovered.x - 10, padL), W - tooltipW - 5) : 0;
  const ttY = hovered ? Math.max(hovered.y - tooltipH - 8, padT) : 0;

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-full cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <defs>
        <linearGradient id={`area-grad-${yKey}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8ff00" stopOpacity={areaFill ? '0.25' : '0'} />
          <stop offset="100%" stopColor="#c8ff00" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Y grid lines */}
      {yGridLines.map((v) => {
        const y = padT + innerH - (v / yMax) * innerH;
        return (
          <g key={v}>
            <line x1={padL} y1={y} x2={W - padR} y2={y} stroke="#222228" strokeDasharray="3 3" strokeWidth="1" />
            <text x={padL - 6} y={y + 3.5} fill="#555566" fontSize="9" textAnchor="end">{v}</text>
          </g>
        );
      })}

      {/* Axes */}
      <line x1={padL} y1={padT + innerH} x2={W - padR} y2={padT + innerH} stroke="#333340" strokeWidth="1" />
      <line x1={padL} y1={padT} x2={padL} y2={padT + innerH} stroke="#333340" strokeWidth="1" />

      {/* Area fill */}
      {areaFill && areaPath && (
        <path d={areaPath} fill={`url(#area-grad-${yKey})`} />
      )}

      {/* Line */}
      {linePath && (
        <path d={linePath} fill="none" stroke="#c8ff00" strokeWidth="2" strokeLinejoin="round" />
      )}

      {/* X labels */}
      {points.map((p, i) => {
        let anchor = "middle";
        if (i === 0) anchor = "start";
        if (i === points.length - 1) anchor = "end";
        return (
          <text key={i} x={p.x} y={padT + innerH + 14} fill="#555566" fontSize="9" textAnchor={anchor}>
            {fmtX(p.date)}
          </text>
        );
      })}

      {/* Normal dots */}
      {points.map((p, i) => (
        <circle
          key={i}
          cx={p.x} cy={p.y} r="4"
          fill="#0a0a0c"
          stroke={hovered && hovered.idx === i ? 'transparent' : '#c8ff00'}
          strokeWidth="2"
          opacity={hovered && hovered.idx !== i ? 0.3 : 1}
        />
      ))}

      {/* Hover crosshair */}
      {hovered && (
        <g>
          <line
            x1={hovered.x} y1={padT}
            x2={hovered.x} y2={padT + innerH}
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
            strokeDasharray="4 2"
          />
          <circle cx={hovered.x} cy={hovered.y} r="6" fill="#0a0a0c" stroke="white" strokeWidth="2" />
          <circle cx={hovered.x} cy={hovered.y} r="3" fill="#c8ff00" />

          {/* Tooltip */}
          <rect
            x={ttX} y={ttY}
            width={tooltipW} height={tooltipH}
            rx="5"
            fill="rgba(12,12,14,0.95)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
          <text x={ttX + 8} y={ttY + 18} fill="#ffffff" fontSize="9" fontWeight="600">{fmtX(hovered.date)}</text>
          <text x={ttX + 8} y={ttY + 34} fill="#c8ff00" fontSize="10" fontWeight="700">
            {yLabel} : {hovered.val}
          </text>
        </g>
      )}
    </svg>
  );
};

//Bar Chart
const BarChart = ({
  data,
  yKey,
  yGridLines,
  yMax,
  W = 500,
  H = 160,
  padL = 25,
  padR = 10,
  padT = 10,
  padB = 20
}) => {
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;

  const spacing = data.length > 1 ? innerW / data.length : innerW;
  const barW = Math.min(spacing * 0.6, 60);

  const positions = data.map((d, i) => {
    const cx = padL + (data.length === 1 ? innerW / 2 : spacing * i + spacing / 2);
    return { cx, d };
  });

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
      {yGridLines.map((v) => {
        const y = padT + innerH - (v / yMax) * innerH;
        return (
          <g key={v}>
            <line x1={padL} y1={y} x2={W - padR} y2={y} stroke="#222228" strokeDasharray="3 3" strokeWidth="1" />
            <text x={padL - 6} y={y + 3.5} fill="#555566" fontSize="9" textAnchor="end">{v}</text>
          </g>
        );
      })}
      <line x1={padL} y1={padT + innerH} x2={W - padR} y2={padT + innerH} stroke="#333340" strokeWidth="1" />
      <line x1={padL} y1={padT} x2={padL} y2={padT + innerH} stroke="#333340" strokeWidth="1" />

      {positions.map(({ cx, d }, i) => {
        const val = Math.min(yMax, Number(d[yKey]) || 0);
        const barH = (val / yMax) * innerH;
        const y = padT + innerH - barH;
        return (
          <g key={i}>
            <rect x={cx - barW / 2} y={y} width={barW} height={barH} fill="#3b82f6" rx="3" />
            <text x={cx} y={padT + innerH + 14} fill="#555566" fontSize="9" textAnchor="middle">{fmtX(d.date)}</text>
          </g>
        );
      })}
    </svg>
  );
};

//Main Component
const Progress = () => {
  const token = localStorage.getItem('token');

  const [entries, setEntries] = useState([]);
  const [localMeta, setLocalMeta] = useState({});

  const [date, setDate] = useState(todayStr());
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [activity, setActivity] = useState('');
  const [notes, setNotes] = useState('');

  const [saving, setSaving] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  // Load stored meta + fetch history
  useEffect(() => {
    const stored = localStorage.getItem('progress_meta_v2');
    if (stored) {
      try { setLocalMeta(JSON.parse(stored)); } catch { }
    }
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    if (!token) return;
    try {
      const res = await fetch(`${API_BASE}/api/progress/history`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setEntries(Array.isArray(data) ? data : []);
      }
    } catch (e) {
      console.error('Fetch history error:', e);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setErrMsg('');
    if (!weight) { setErrMsg('Weight is required.'); return; }
    if (!token) { setErrMsg('Please log in first.'); return; }

    const wNum = parseFloat(weight);
    const bfNum = bmi ? parseFloat(bmi) : 0;
    if (isNaN(wNum) || wNum <= 0) { setErrMsg('Enter a valid weight.'); return; }

    setSaving(true);
    try {
      const res = await fetch(`${API_BASE}/api/progress`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
       body: JSON.stringify({ weight: wNum, bmi: bfNum, activity: activity.trim(), notes: notes.trim() })
      });

      if (res.ok) {
        const saved = await res.json();
        // Backend returns progress inside the .data object!
        const progressObj = saved.data || saved;
        const entryId = progressObj._id || progressObj.id || `local_${Date.now()}`;
        const dateWeightKey = `${fmtDate(progressObj.date)}_${progressObj.weight}`;

        const meta = {
          ...localMeta,
          [entryId]: {
            activity: activity.trim(),
            notes: notes.trim(),
            bmi: bfNum,
            date: date,
          },
          [dateWeightKey]: {
            activity: activity.trim(),
            notes: notes.trim(),
            bmi: bfNum,
            date: date,
          }
        };
        localStorage.setItem('progress_meta_v2', JSON.stringify(meta));
        setLocalMeta(meta);

        setWeight(''); setBmi(''); setActivity(''); setNotes('');
        await fetchHistory();
      } else {
        const d = await res.json();
        setErrMsg(d.error || d.message || 'Failed to save.');
      }
    } catch (e) {
      setErrMsg('Network error.');
    } finally {
      setSaving(false);
    }
  };

  //Login Gate Render
  if (!token) {
    return (
      <div className="min-h-[85vh] flex flex-col items-center justify-center bg-black text-white px-4">
        <div className="flex flex-col items-center max-w-sm text-center">
          <div className="w-16 h-16 bg-[#141416] rounded-full flex items-center justify-center mb-6 border border-zinc-900">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2 tracking-tight">Login required</h2>
          <p className="text-zinc-500 text-sm mb-8">Sign in to track and save your progress over time.</p>
          <button
            onClick={() => window.location.href = '/login'}
            className="bg-[#c8ff00] text-black font-bold py-2.5 px-8 rounded-lg text-sm hover:bg-[#aadb00] transition cursor-pointer"
          >
            Log in
          </button>
        </div>
      </div>
    );
  }

  // Sort oldest → newest
  const sorted = [...entries].sort((a, b) => new Date(a.date) - new Date(b.date));
  const tableEntries = [...sorted].reverse();

  // Achievements
  const has1 = entries.length >= 1;
  const has3 = entries.length >= 3;
  let streak = false;
  if (sorted.length >= 2) {
    const diff = new Date(sorted[sorted.length - 1].date) - new Date(sorted[0].date);
    if (diff >= 7 * 86400000) streak = true;
  }
  let lost5 = false;
  if (sorted.length >= 2) {
    const first = sorted[0].weight;
    const min = Math.min(...sorted.map(e => e.weight));
    if (first - min >= 5) lost5 = true;
  }

  const achievements = [
    { label: 'First Entry', unlocked: has1 },
    { label: '3 Entries', unlocked: has3 },
    { label: '1 Week Streak', unlocked: streak },
    { label: 'Lost 5kg', unlocked: lost5 },
  ];

  // Lookup helper for metadata
  const getMeta = (entry) => {
    const entryId = entry._id || entry.id;
    const dateWeightKey = `${fmtDate(entry.date)}_${entry.weight}`;
    return localMeta[entryId] || localMeta[dateWeightKey] || {};
  };

  // Chart data
  const chartData = sorted.map(e => {
    const meta = getMeta(e);
    return {
      date: e.date,
      weight: e.weight,
      bodyFat: meta.bmi ?? (e.bodyFat ?? 0),
      bmiCalc: meta.bmi ?? (e.bodyFat ?? 0),
    };
  });

  const maxWeight = chartData.length ? Math.max(...chartData.map(d => d.weight)) : 80;
  const weightYMax = Math.ceil(maxWeight / 20) * 20 + 20;
  const weightGrid = Array.from({ length: Math.floor(weightYMax / 20) + 1 }, (_, i) => i * 20);

  const hasEntries = entries.length > 0;

  return (
    <div className="min-h-screen bg-black text-white pt-10 pb-20 px-4">
      <div style={{ maxWidth: '1104px' }} className="mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">Progress Tracker</h1>
          <p className="text-zinc-500 text-sm">Log your numbers, watch the trends, and celebrate every milestone.</p>
        </div>

        {/* Add new entry */}
        <div className="bg-[#0c0c0e] border border-zinc-900 rounded-2xl p-6 mb-8">
          <p className="text-white font-bold mb-4 text-base">Add new entry</p>
          <form onSubmit={handleSave}>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-4">
              <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                className="bg-[#1a1a1e] border border-zinc-800 rounded-lg px-3 py-2.5 text-zinc-300 text-sm focus:outline-none focus:border-[#c8ff00]"
              />
              <input
                type="number" step="0.1" placeholder="Weight (kg)"
                value={weight} onChange={e => setWeight(e.target.value)}
                className="bg-[#1a1a1e] border border-zinc-800 rounded-lg px-3 py-2.5 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#c8ff00]"
              />
              <input
                type="number" step="0.1" placeholder="BMI"
                value={bmi} onChange={e => setBmi(e.target.value)}
                className="bg-[#1a1a1e] border border-zinc-800 rounded-lg px-3 py-2.5 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#c8ff00]"
              />
              <input
                type="text" placeholder="Activity"
                value={activity} onChange={e => setActivity(e.target.value)}
                className="bg-[#1a1a1e] border border-zinc-800 rounded-lg px-3 py-2.5 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#c8ff00]"
              />
              <input
                type="text" placeholder="Notes"
                value={notes} onChange={e => setNotes(e.target.value)}
                className="bg-[#1a1a1e] border border-zinc-800 rounded-lg px-3 py-2.5 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#c8ff00]"
              />
            </div>
            {errMsg && <p className="text-red-400 text-xs mb-3 font-medium">{errMsg}</p>}
            <button
              type="submit" disabled={saving}
              className="w-full bg-[#c8ff00] text-black font-bold py-3 rounded-lg text-sm hover:bg-[#aadb00] transition disabled:opacity-60 cursor-pointer"
            >
              {saving ? 'Saving...' : 'Save entry'}
            </button>
          </form>
        </div>

        {/* Empty state OR Charts */}
        {!hasEntries ? (
          <p className="text-center text-zinc-600 text-sm py-10">
            No entries yet — add your first one above!
          </p>
        ) : (
          <div className="space-y-6">

            {/* Row 1: Weight + Weekly Activity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div
                className="bg-[#0c0c0e] border border-zinc-900 rounded-2xl p-5 flex flex-col"
                style={{ width: '540px', height: '349.6px' }}
              >
                <p className="text-white font-bold text-lg mb-4 shrink-0 tracking-tight">Weight over time</p>
                <div className="flex-1 min-h-0">
                  <LineChart
                    data={chartData}
                    yKey="weight"
                    yLabel="Weight"
                    yGridLines={weightGrid}
                    yMax={weightYMax}
                    areaFill={false}
                    W={465.66}
                    H={246.92}
                    padL={23.33}
                    padR={22.33}
                    padT={11.2}
                    padB={19.72}
                    tooltipW={80}
                    tooltipH={45.6}
                  />
                </div>
              </div>

              <div
                className="bg-[#0c0c0e] border border-zinc-900 rounded-2xl p-5 flex flex-col"
                style={{ width: '540px', height: '349.6px' }}
              >
                <p className="text-white font-bold text-lg mb-4 shrink-0 tracking-tight">Weekly activity</p>
                <div className="flex-1 min-h-0">
                  <BarChart
                    data={chartData.slice(-7)}
                    yKey="bodyFat"
                    yGridLines={[0, 7, 14, 21, 28]}
                    yMax={28}
                    W={465.66}
                    H={246.92}
                    padL={23.33}
                    padR={22.33}
                    padT={11.2}
                    padB={19.72}
                  />
                </div>
              </div>
            </div>

            {/* BMI trend */}
            <div
              className="bg-[#0c0c0e] border border-zinc-900 rounded-2xl p-5 flex flex-col"
              style={{ width: '1104px', height: '349.6px' }}
            >
              <p className="text-white font-bold text-lg mb-4 shrink-0 tracking-tight">BMI trend</p>
              <div className="flex-1 min-h-0">
                <LineChart
                  data={chartData}
                  yKey="bmiCalc"
                  yLabel="BMI"
                  yGridLines={[0, 7, 14, 21, 28]}
                  yMax={28}
                  areaFill={true}
                  tooltipW={67.79}
                  tooltipH={45.6}
                />
              </div>
            </div>

            {/* Progress log */}
            <div className="bg-[#0c0c0e] border border-zinc-900 rounded-2xl p-5">
              <p className="text-white font-bold text-lg mb-4 tracking-tight">Progress log</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-900 text-zinc-500 text-left">
                      <th className="pb-3 pr-6 font-medium">Date</th>
                      <th className="pb-3 pr-6 font-medium">Weight</th>
                      <th className="pb-3 pr-6 font-medium">BMI</th>
                      <th className="pb-3 pr-6 font-medium">Activity</th>
                      <th className="pb-3 font-medium">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-900/40">
                    {tableEntries.map((entry, i) => {
                      const meta = getMeta(entry);
                      return (
                        <tr key={entry._id || i} className="text-zinc-300">
                          <td className="py-3.5 pr-6 font-medium text-white">{fmtDate(entry.date)}</td>
                          <td className="py-3.5 pr-6">{entry.weight} kg</td>
                          <td className="py-3.5 pr-6">{meta.bmi !== undefined ? meta.bmi : (entry.bodyFat ?? '—')}</td>
                          <td className="py-3.5 pr-6 text-white font-medium">{meta.activity || '—'}</td>
                          <td className="py-3.5 text-zinc-500">{meta.notes || '—'}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* Achievements */}
        <div className="mt-10">
          <p className="text-white font-bold text-lg mb-4 tracking-tight">Achievements</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map(({ label, unlocked }) => (
              <div
                key={label}
                className={`rounded-xl flex flex-col items-center justify-center py-7 px-4 transition-all duration-200 ${unlocked
                  ? 'bg-[#0e0e10] border border-[#c8ff00]'
                  : 'bg-[#0a0a0c] border border-zinc-900'
                  }`}
              >
                <TrophyIcon color={unlocked ? '#c8ff00' : '#3a3a45'} />
                <span className={`mt-3 text-xs font-semibold ${unlocked ? 'text-white' : 'text-zinc-600'}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Progress;
