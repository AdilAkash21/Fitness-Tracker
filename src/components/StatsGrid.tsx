import { TrendingUp, BarChart2, Flame, Award } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    label: 'Total Steps',
    value: '2.4M',
    sub: 'All time',
    color: '#4CAF50',
    bg: '#E8F5E9',
  },
  {
    icon: BarChart2,
    label: 'Weekly Avg',
    value: '9,218',
    sub: 'steps/day',
    color: '#2196F3',
    bg: '#E3F2FD',
  },
  {
    icon: Flame,
    label: 'Current Streak',
    value: '14 🔥',
    sub: 'days in a row',
    color: '#FF5722',
    bg: '#FBE9E7',
  },
  {
    icon: Award,
    label: 'Badges Earned',
    value: '18',
    sub: 'achievements',
    color: '#9C27B0',
    bg: '#F3E5F5',
  },
]

export default function StatsGrid() {
  return (
    <div>
      <h2 className="text-[16px] font-bold text-gray-900 mb-3 px-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
        Statistics
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {stats.map((s) => {
          const Icon = s.icon
          return (
            <div
              key={s.label}
              className="bg-white rounded-[18px] p-4 card-hover"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
            >
              <div
                className="w-9 h-9 rounded-[12px] flex items-center justify-center mb-3"
                style={{ background: s.bg }}
              >
                <Icon size={18} style={{ color: s.color }} />
              </div>
              <div className="text-[20px] font-extrabold text-gray-900 leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>
                {s.value}
              </div>
              <div className="text-[11px] font-semibold text-gray-700 mt-1">{s.label}</div>
              <div className="text-[10px] text-gray-400 mt-0.5">{s.sub}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
