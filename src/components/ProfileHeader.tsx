import { Pencil, Bell } from 'lucide-react'

export default function ProfileHeader() {
  return (
    <div className="relative px-5 pt-4 pb-6">
      {/* Top row */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-[18px] font-bold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
          Profile
        </span>
        <button className="w-9 h-9 rounded-full bg-[#F0F7F0] flex items-center justify-center">
          <Bell size={18} className="text-gray-600" />
        </button>
      </div>

      {/* Avatar + info */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <div
            className="w-20 h-20 rounded-full overflow-hidden border-[3px] border-[#4CAF50]"
            style={{ boxShadow: '0 4px 16px rgba(76,175,80,0.25)' }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&auto=format"
              alt="John Doe profile photo"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            className="absolute -bottom-0.5 -right-0.5 w-7 h-7 rounded-full bg-[#4CAF50] flex items-center justify-center border-2 border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50] focus-visible:ring-offset-1"
            style={{ boxShadow: '0 2px 8px rgba(76,175,80,0.4)' }}
            aria-label="Edit profile photo"
          >
            <Pencil size={12} className="text-white" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1">
          <h1 className="text-[20px] font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
            John Doe
          </h1>
          <p className="text-[13px] text-[#4CAF50] font-medium mt-0.5">Fitness Enthusiast</p>
          <div className="flex items-center gap-3 mt-2">
            <div className="text-center">
              <div className="text-[14px] font-bold text-gray-900">142</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-wide">Days</div>
            </div>
            <div className="w-px h-6 bg-gray-100" />
            <div className="text-center">
              <div className="text-[14px] font-bold text-gray-900">2.4M</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-wide">Steps</div>
            </div>
            <div className="w-px h-6 bg-gray-100" />
            <div className="text-center">
              <div className="text-[14px] font-bold text-gray-900">18</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-wide">Badges</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
