const goals = [
  { label: 'Daily Goal', target: '10,000 steps', current: 8542, max: 10000, color: '#4CAF50' },
  { label: 'Weekly Goal', target: '70,000 steps', current: 52300, max: 70000, color: '#2196F3' },
  { label: 'Monthly Goal', target: '300,000 steps', current: 241500, max: 300000, color: '#9C27B0' },
]

export default function Goals() {
  return (
    <div>
      <h2 className="text-[16px] font-bold text-gray-900 mb-3 px-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
        Goals
      </h2>
      <div
        className="bg-white rounded-[20px] p-5 space-y-5 card-hover"
        style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}
      >
        {goals.map((g) => {
          const pct = Math.round((g.current / g.max) * 100)
          return (
            <div key={g.label}>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-[13px] font-semibold text-gray-900">{g.label}</div>
                  <div className="text-[11px] text-gray-400">{g.current.toLocaleString()} / {g.target}</div>
                </div>
                <span
                  className="text-[12px] font-bold px-2.5 py-0.5 rounded-full"
                  style={{ background: g.color + '18', color: g.color }}
                >
                  {pct}%
                </span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${pct}%`,
                    background: `linear-gradient(90deg, ${g.color}99, ${g.color})`,
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
