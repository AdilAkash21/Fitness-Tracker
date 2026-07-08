import { useEffect, useRef, useState } from 'react'
import { Flame, Footprints, Clock } from 'lucide-react'

const STEPS = 8542
const GOAL = 10000
const PERCENT = Math.round((STEPS / GOAL) * 100)

const RADIUS = 80
const CIRCUMFERENCE = 2 * Math.PI * RADIUS
const TARGET_OFFSET = CIRCUMFERENCE * (1 - PERCENT / 100)

const TODAY = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'short',
  day: 'numeric',
})

export default function DailyProgress() {
  const ringRef = useRef<SVGCircleElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setAnimated(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div
      className="bg-white rounded-[20px] p-5 card-hover"
      style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2
            className="text-[16px] font-bold text-gray-900"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {"Today's Progress"}
          </h2>
          <p className="text-[12px] text-gray-400 mt-0.5">{TODAY}</p>
        </div>
        <span
          className="text-[12px] font-semibold px-3 py-1 rounded-full"
          style={{ background: '#E8F5E9', color: '#2E7D32' }}
          aria-label={`${PERCENT} percent complete`}
        >
          {PERCENT}% done
        </span>
      </div>

      <div className="flex items-center gap-6">
        {/* Animated ring */}
        <div
          className="relative flex-shrink-0"
          style={{ width: 184, height: 184 }}
          role="img"
          aria-label={`${STEPS.toLocaleString()} of ${GOAL.toLocaleString()} steps`}
        >
          <svg width="184" height="184" viewBox="0 0 184 184" aria-hidden="true">
            <defs>
              <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#81C784" />
                <stop offset="100%" stopColor="#2E7D32" />
              </linearGradient>
              <filter id="ringGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Track */}
            <circle
              cx="92" cy="92" r={RADIUS}
              fill="none"
              stroke="#F0F4F0"
              strokeWidth="13"
            />
            {/* Progress arc */}
            <circle
              ref={ringRef}
              cx="92" cy="92" r={RADIUS}
              fill="none"
              stroke="url(#greenGrad)"
              strokeWidth="13"
              strokeLinecap="round"
              transform="rotate(-90 92 92)"
              filter="url(#ringGlow)"
              style={{
                strokeDasharray: CIRCUMFERENCE,
                strokeDashoffset: animated ? TARGET_OFFSET : CIRCUMFERENCE,
                transition: 'stroke-dashoffset 1.4s cubic-bezier(0.34, 1.1, 0.64, 1)',
              }}
            />
          </svg>
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center select-none">
            <span
              className="text-[26px] font-extrabold text-gray-900 leading-none"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {STEPS.toLocaleString()}
            </span>
            <span className="text-[10px] text-gray-400 mt-0.5">
              of {GOAL.toLocaleString()}
            </span>
            <span className="text-[11px] font-semibold text-[#4CAF50] mt-1">steps</span>
          </div>
        </div>

        {/* Metrics */}
        <div className="flex flex-col gap-4 flex-1">
          <Metric
            icon={<Flame size={16} className="text-orange-400" aria-hidden="true" />}
            label="Calories"
            value="386"
            unit="kcal"
            color="#FFF3E0"
          />
          <Metric
            icon={<Footprints size={16} className="text-[#4CAF50]" aria-hidden="true" />}
            label="Distance"
            value="6.2"
            unit="km"
            color="#E8F5E9"
          />
          <Metric
            icon={<Clock size={16} className="text-blue-400" aria-hidden="true" />}
            label="Active"
            value="48"
            unit="min"
            color="#E3F2FD"
          />
        </div>
      </div>
    </div>
  )
}

function Metric({
  icon,
  label,
  value,
  unit,
  color,
}: {
  icon: React.ReactNode
  label: string
  value: string
  unit: string
  color: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: color }}
      >
        {icon}
      </div>
      <div>
        <div className="text-[10px] text-gray-400 uppercase tracking-wide leading-none">
          {label}
        </div>
        <div
          className="text-[15px] font-bold text-gray-900 leading-tight"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {value}{' '}
          <span className="text-[11px] font-medium text-gray-400">{unit}</span>
        </div>
      </div>
    </div>
  )
}
