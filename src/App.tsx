import ProfileScreen from './components/ProfileScreen'

export default function App() {
  return (
    <>
      {/*
        Desktop: centered phone frame at 390×844.
        Mobile (≤480px): full-screen, no frame chrome.
      */}
      <div className="min-h-screen bg-[#dce8dc] hidden sm:flex items-center justify-center p-6">
        <div
          className="relative overflow-hidden bg-white"
          style={{
            width: 390,
            height: 844,
            borderRadius: 48,
            boxShadow:
              '0 0 0 10px #1a1a1a, 0 0 0 12px #333, 0 40px 100px rgba(0,0,0,0.35)',
          }}
        >
          {/* Notch */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-[#1a1a1a]"
            style={{ width: 120, height: 30, borderBottomLeftRadius: 18, borderBottomRightRadius: 18 }}
          />
          <ProfileScreen />
        </div>
      </div>

      {/* Full-screen on real mobile */}
      <div
        className="sm:hidden w-full bg-[#F7FAF7]"
        style={{ height: '100dvh' }}
      >
        <ProfileScreen />
      </div>
    </>
  )
}
