import { Watch, Bluetooth, RefreshCw } from 'lucide-react'

export default function ConnectedDevices() {
  return (
    <div>
      <h2 className="text-[16px] font-bold text-gray-900 mb-3 px-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
        Connected Devices
      </h2>
      <div
        className="bg-white rounded-[20px] p-4 card-hover"
        style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}
      >
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-[15px] flex items-center justify-center flex-shrink-0"
            style={{ background: '#E8F5E9' }}
          >
            <Watch size={22} className="text-[#4CAF50]" />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-semibold text-gray-900">Apple Watch S9</span>
              <span
                className="text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide"
                style={{ background: '#E8F5E9', color: '#2E7D32' }}
              >
                Connected
              </span>
            </div>
            <div className="flex items-center gap-3 mt-1.5">
              <div className="flex items-center gap-1">
                <Bluetooth size={11} className="text-blue-400" />
                <span className="text-[11px] text-gray-400">Bluetooth</span>
              </div>
              <div className="w-px h-3 bg-gray-200" />
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 flex items-end gap-px">
                  <div className="w-0.5 bg-[#4CAF50] rounded-sm" style={{ height: '60%' }} />
                  <div className="w-0.5 bg-[#4CAF50] rounded-sm" style={{ height: '80%' }} />
                  <div className="w-0.5 bg-gray-200 rounded-sm" style={{ height: '100%' }} />
                </div>
                <span className="text-[11px] text-gray-400">78% battery</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <button className="w-8 h-8 rounded-full bg-[#F0F7F0] flex items-center justify-center">
              <RefreshCw size={14} className="text-[#4CAF50]" />
            </button>
            <span className="text-[9px] text-gray-400">Just now</span>
          </div>
        </div>

        {/* Battery bar */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-[10px] text-gray-400 w-12">Battery</span>
          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#4CAF50] rounded-full" style={{ width: '78%' }} />
          </div>
          <span className="text-[10px] font-semibold text-[#4CAF50]">78%</span>
        </div>
      </div>
    </div>
  )
}
