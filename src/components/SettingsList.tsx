import { useState, type ComponentType } from 'react'
import {
  UserCog,
  Bell,
  Shield,
  Moon,
  Ruler,
  Bluetooth,
  HelpCircle,
  Info,
  LogOut,
  ChevronRight,
  type LucideProps,
} from 'lucide-react'

type BaseItem = {
  icon: ComponentType<LucideProps>
  label: string
  color: string
  bg: string
}
type LinkItem = BaseItem & { kind: 'link' }
type ToggleItem = BaseItem & { kind: 'toggle'; value: boolean; onToggle: () => void }
type UnitItem = BaseItem & { kind: 'unit' }
type SettingItem = LinkItem | ToggleItem | UnitItem

export default function SettingsList() {
  const [darkMode, setDarkMode] = useState(false)
  const [units, setUnits] = useState<'km' | 'mi'>('km')

  const sections: SettingItem[][] = [
    [
      { kind: 'link', icon: UserCog, label: 'Edit Profile', color: '#4CAF50', bg: '#E8F5E9' },
      { kind: 'link', icon: Bell, label: 'Notifications', color: '#FF9800', bg: '#FFF3E0' },
      { kind: 'link', icon: Shield, label: 'Privacy', color: '#2196F3', bg: '#E3F2FD' },
    ],
    [
      {
        kind: 'toggle',
        icon: Moon,
        label: 'Dark Mode',
        color: '#7B1FA2',
        bg: '#F3E5F5',
        value: darkMode,
        onToggle: () => setDarkMode((v) => !v),
      },
      { kind: 'unit', icon: Ruler, label: 'Units', color: '#0097A7', bg: '#E0F7FA' },
      { kind: 'link', icon: Bluetooth, label: 'Connected Devices', color: '#1565C0', bg: '#E8EAF6' },
    ],
    [
      { kind: 'link', icon: HelpCircle, label: 'Help & Support', color: '#43A047', bg: '#E8F5E9' },
      { kind: 'link', icon: Info, label: 'About', color: '#546E7A', bg: '#ECEFF1' },
    ],
  ]

  return (
    <div>
      <h2
        className="text-[16px] font-bold text-gray-900 mb-3 px-0.5"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Settings
      </h2>

      <div className="space-y-3">
        {sections.map((section, si) => (
          <div
            key={si}
            className="bg-white rounded-[20px] overflow-hidden"
            style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
          >
            {section.map((item, i) => (
              <div key={item.label}>
                <SettingRow item={item} units={units} onUnitChange={setUnits} />
                {i < section.length - 1 && <div className="mx-4 h-px bg-gray-50" />}
              </div>
            ))}
          </div>
        ))}

        {/* Logout — standalone section */}
        <div
          className="bg-white rounded-[20px] overflow-hidden"
          style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
        >
          <button
            className="w-full flex items-center gap-3.5 px-4 py-3.5 hover:bg-red-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
            aria-label="Logout"
          >
            <div className="w-9 h-9 rounded-[11px] flex items-center justify-center flex-shrink-0 bg-red-50">
              <LogOut size={17} className="text-red-500" aria-hidden="true" />
            </div>
            <span className="text-[14px] font-semibold text-red-500">Logout</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function SettingRow({
  item,
  units,
  onUnitChange,
}: {
  item: SettingItem
  units: 'km' | 'mi'
  onUnitChange: (u: 'km' | 'mi') => void
}) {
  const Icon = item.icon

  const rowClass =
    'w-full flex items-center gap-3.5 px-4 py-3.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50] focus-visible:ring-inset'

  const inner = (
    <>
      <div
        className="w-9 h-9 rounded-[11px] flex items-center justify-center flex-shrink-0"
        style={{ background: item.bg }}
      >
        <Icon size={17} style={{ color: item.color }} aria-hidden="true" />
      </div>
      <span className="flex-1 text-left text-[14px] font-medium text-gray-800">{item.label}</span>

      {item.kind === 'toggle' && (
        <div
          role="switch"
          aria-checked={item.value}
          aria-label={`${item.label} toggle`}
          tabIndex={0}
          className="toggle-track w-11 h-6 rounded-full relative cursor-pointer flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50]"
          style={{ background: item.value ? '#4CAF50' : '#E0E0E0' }}
          onClick={(e) => { e.stopPropagation(); item.onToggle() }}
          onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); item.onToggle() } }}
        >
          <div
            className="toggle-thumb absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow"
            style={{ transform: item.value ? 'translateX(20px)' : 'translateX(0)' }}
          />
        </div>
      )}

      {item.kind === 'unit' && (
        <div
          className="flex items-center bg-gray-100 rounded-full p-0.5 flex-shrink-0"
          onClick={(e) => e.stopPropagation()}
          role="group"
          aria-label="Distance units"
        >
          {(['km', 'mi'] as const).map((u) => (
            <button
              key={u}
              onClick={() => onUnitChange(u)}
              aria-pressed={units === u}
              className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full transition-all focus-visible:outline-none"
              style={
                units === u
                  ? { background: '#4CAF50', color: 'white' }
                  : { color: '#888' }
              }
            >
              {u}
            </button>
          ))}
        </div>
      )}

      {item.kind === 'link' && (
        <ChevronRight size={16} className="text-gray-300 flex-shrink-0" aria-hidden="true" />
      )}
    </>
  )

  if (item.kind === 'toggle') {
    return (
      <div className={`${rowClass} hover:bg-gray-50 cursor-default`}>
        {inner}
      </div>
    )
  }

  return (
    <button className={`${rowClass} hover:bg-gray-50`} aria-label={item.label}>
      {inner}
    </button>
  )
}
