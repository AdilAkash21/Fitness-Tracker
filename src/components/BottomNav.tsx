import { Home, Activity, Clock, User, type LucideIcon } from 'lucide-react'

const tabs: { icon: LucideIcon; label: string; id: string }[] = [
  { icon: Home, label: 'Home', id: 'home' },
  { icon: Activity, label: 'Activity', id: 'activity' },
  { icon: Clock, label: 'History', id: 'history' },
  { icon: User, label: 'Profile', id: 'profile' },
]

export default function BottomNav({
  active,
  onChange,
}: {
  active: string
  onChange: (id: string) => void
}) {
  return (
    <nav
      aria-label="Main navigation"
      className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex items-end safe-bottom"
      style={{
        height: 76,
        paddingBottom: 12,
        boxShadow: '0 -4px 20px rgba(0,0,0,0.06)',
        zIndex: 10,
      }}
    >
      {tabs.map((tab) => {
        const Icon = tab.icon
        const isActive = active === tab.id
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            aria-label={tab.label}
            aria-current={isActive ? 'page' : undefined}
            className="flex-1 flex flex-col items-center justify-end gap-1 pt-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50] focus-visible:ring-inset"
          >
            <div
              className="w-10 h-10 rounded-[13px] flex items-center justify-center transition-all duration-200"
              style={
                isActive
                  ? { background: '#4CAF50', boxShadow: '0 4px 12px rgba(76,175,80,0.35)' }
                  : { background: 'transparent' }
              }
            >
              <Icon
                size={20}
                aria-hidden="true"
                style={{ color: isActive ? '#fff' : '#9E9E9E' }}
              />
            </div>
            <span
              className="text-[10px] font-semibold transition-colors duration-200"
              style={{ color: isActive ? '#4CAF50' : '#9E9E9E' }}
            >
              {tab.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
