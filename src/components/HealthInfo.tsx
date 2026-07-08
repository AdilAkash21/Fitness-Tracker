import { Ruler, Weight, Activity, Target } from 'lucide-react'

const metrics = [
  { icon: Ruler, label: 'Height', value: '178', unit: 'cm', color: '#4CAF50', bg: '#E8F5E9' },
  { icon: Weight, label: 'Weight', value: '74', unit: 'kg', color: '#2196F3', bg: '#E3F2FD' },
  { icon: Activity, label: 'BMI', value: '23.3', unit: 'Normal', color: '#4CAF50', bg: '#E8F5E9' },
  { icon: Target, label: 'Daily Goal', value: '10K', unit: 'steps', color: '#FF5722', bg: '#FBE9E7' },
]

export default function HealthInfo() {
  return (
    <div>
      <h2 className="text-[16px] font-bold text-gray-900 mb-3 px-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
        Health Info
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {metrics.map((m) => {
          const Icon = m.icon
          return (
            <div
              key={m.label}
              className="bg-white rounded-[18px] p-4 flex items-center gap-3 card-hover"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
            >
              <div
                className="w-10 h-10 rounded-[13px] flex items-center justify-center flex-shrink-0"
                style={{ background: m.bg }}
              >
                <Icon size={18} style={{ color: m.color }} />
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wide">{m.label}</div>
                <div className="text-[17px] font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {m.value}
                </div>
                <div className="text-[10px] text-gray-400">{m.unit}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
