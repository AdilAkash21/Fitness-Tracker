import { useState } from 'react'
import ProfileHeader from './ProfileHeader'
import DailyProgress from './DailyProgress'
import StatsGrid from './StatsGrid'
import Achievements from './Achievements'
import HealthInfo from './HealthInfo'
import Goals from './Goals'
import ConnectedDevices from './ConnectedDevices'
import SettingsList from './SettingsList'
import BottomNav from './BottomNav'

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="flex flex-col h-full bg-[#F7FAF7] relative">
      {/* Status bar */}
      <div className="flex items-center justify-between px-6 pt-3 pb-1 bg-white flex-shrink-0">
        <span className="text-[13px] font-semibold text-gray-900" aria-hidden="true">9:41</span>
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {/* Signal bars */}
          <svg width="17" height="12" viewBox="0 0 17 12" fill="none" aria-hidden="true">
            <rect x="0" y="3" width="3" height="9" rx="1" fill="#111" />
            <rect x="4.5" y="2" width="3" height="10" rx="1" fill="#111" />
            <rect x="9" y="0.5" width="3" height="11.5" rx="1" fill="#111" />
            <rect x="13.5" y="0" width="3" height="12" rx="1" fill="#111" />
          </svg>
          {/* WiFi */}
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
            <path d="M8 2.5C10.2 2.5 12.2 3.4 13.6 4.9L15 3.5C13.2 1.6 10.7 0.5 8 0.5C5.3 0.5 2.8 1.6 1 3.5L2.4 4.9C3.8 3.4 5.8 2.5 8 2.5Z" fill="#111"/>
            <path d="M8 5.5C9.4 5.5 10.7 6.1 11.6 7L13 5.6C11.7 4.3 10 3.5 8 3.5C6 3.5 4.3 4.3 3 5.6L4.4 7C5.3 6.1 6.6 5.5 8 5.5Z" fill="#111"/>
            <circle cx="8" cy="10" r="1.5" fill="#111"/>
          </svg>
          {/* Battery */}
          <div className="w-[22px] h-[11px] border border-gray-900 rounded-[3px] flex items-center p-[1.5px]">
            <div className="h-full bg-gray-900 rounded-[1.5px]" style={{ width: '75%' }} />
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto hide-scroll pb-[76px]">
        <div className="bg-white">
          <ProfileHeader />
        </div>
        <div className="px-4 space-y-4 pt-4 pb-4">
          <DailyProgress />
          <StatsGrid />
          <Achievements />
          <HealthInfo />
          <Goals />
          <ConnectedDevices />
          <SettingsList />
        </div>
      </div>

      <BottomNav active={activeTab} onChange={setActiveTab} />
    </div>
  )
}
