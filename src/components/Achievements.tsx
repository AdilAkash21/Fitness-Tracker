const badges = [
  { emoji: '🏅', title: '10K Steps', sub: 'Single day', date: 'Jun 12', color: '#FFF8E1', border: '#FFD54F' },
  { emoji: '🔥', title: '7-Day Streak', sub: 'Consistency', date: 'Jun 18', color: '#FBE9E7', border: '#FF7043' },
  { emoji: '🚶', title: 'Marathon', sub: '42.2 km walked', date: 'Jul 1', color: '#E8F5E9', border: '#4CAF50' },
  { emoji: '🌅', title: 'Early Bird', sub: '5 AM walks', date: 'Jul 5', color: '#E3F2FD', border: '#42A5F5' },
  { emoji: '⚡', title: 'Speed Demon', sub: '< 10 min/km', date: 'Jun 28', color: '#EDE7F6', border: '#7E57C2' },
]

export default function Achievements() {
  return (
    <div>
      <div className="flex items-center justify-between mb-3 px-0.5">
        <h2 className="text-[16px] font-bold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
          Achievements
        </h2>
        <button className="text-[12px] font-semibold text-[#4CAF50]">See all</button>
      </div>

      <div className="flex gap-3 overflow-x-auto hide-scroll pb-1">
        {badges.map((b) => (
          <div
            key={b.title}
            className="flex-shrink-0 w-[118px] bg-white rounded-[18px] p-3.5 card-hover border"
            style={{
              borderColor: b.border + '40',
              boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
            }}
          >
            <div
              className="w-12 h-12 rounded-[14px] flex items-center justify-center text-2xl mb-2.5"
              style={{ background: b.color }}
            >
              {b.emoji}
            </div>
            <div className="text-[13px] font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
              {b.title}
            </div>
            <div className="text-[10px] text-gray-400 mt-0.5">{b.sub}</div>
            <div
              className="mt-2 text-[9px] font-semibold px-2 py-0.5 rounded-full inline-block"
              style={{ background: b.color, color: b.border }}
            >
              {b.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
