"use client"

import { useState } from "react"

export default function Header() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isCinemaOpen, setIsCinemaOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white shadow-2xl">
      {/* Top Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative group">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search Movies..."
                className="w-full pl-10 pr-4 py-2 bg-black/20 border border-white/20 text-white placeholder:text-gray-300 focus:bg-black/30 focus:border-red-400 focus:ring-2 focus:ring-red-400/50 rounded-full transition-all duration-300 hover:bg-black/25 focus:outline-none"
              />
            </div>
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <div className="flex space-x-1">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
              <h1 className="text-3xl font-bold tracking-wider">
                <span className="text-white">LEGEND</span>
              </h1>
              <div className="text-sm font-medium tracking-[0.2em] text-red-300">CINEMA</div>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex-1 flex items-center justify-end space-x-4">
            <button className="flex items-center text-white hover:bg-white/10 hover:text-red-300 transition-all duration-300 rounded-full px-4 py-2">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
              Ticket
            </button>

            <button className="flex items-center text-white hover:bg-white/10 hover:text-red-300 transition-all duration-300 rounded-full px-4 py-2">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Join Now
            </button>

            <button className="relative text-white hover:bg-white/10 hover:text-red-300 transition-all duration-300 rounded-full p-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-5 5v-5zM4 19h5a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            </button>

            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center text-white hover:bg-white/10 hover:text-red-300 transition-all duration-300 rounded-full px-3 py-2"
              >
                <div className="w-5 h-4 bg-red-600 rounded-sm mr-2 flex items-center justify-center">
                  <span className="text-xs font-bold">🇬🇧</span>
                </div>
                EN
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-red-900 border border-red-700 rounded-md shadow-lg z-50">
                  <button className="w-full text-left px-4 py-2 text-white hover:bg-red-800 flex items-center">
                    <span className="mr-2">🇬🇧</span> English
                  </button>
                  <button className="w-full text-left px-4 py-2 text-white hover:bg-red-800 flex items-center">
                    <span className="mr-2">🇪🇸</span> Español
                  </button>
                  <button className="w-full text-left px-4 py-2 text-white hover:bg-red-800 flex items-center">
                    <span className="mr-2">🇫🇷</span> Français
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Left Navigation */}
            <nav className="flex items-center space-x-8">
              <button className="flex items-center text-white hover:bg-red-600/30 hover:text-red-300 transition-all duration-300 rounded-lg px-4 py-2 group">
                <svg
                  className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Home
              </button>

              <button className="flex items-center text-white/80 hover:bg-red-600/30 hover:text-red-300 transition-all duration-300 rounded-lg px-4 py-2 group">
                <svg
                  className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Cinemas
              </button>

              <button className="flex items-center text-white/80 hover:bg-red-600/30 hover:text-red-300 transition-all duration-300 rounded-lg px-4 py-2 group">
                <svg
                  className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
                Offers
              </button>

              <button className="flex items-center text-white/80 hover:bg-red-600/30 hover:text-red-300 transition-all duration-300 rounded-lg px-4 py-2 group">
                <svg
                  className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
                F&B
              </button>
            </nav>

            {/* Right Navigation */}
            <div className="relative">
              <button
                onClick={() => setIsCinemaOpen(!isCinemaOpen)}
                className="flex items-center text-white hover:bg-red-600/30 hover:text-red-300 transition-all duration-300 rounded-lg px-4 py-2"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                All Cinemas
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isCinemaOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-red-900 border border-red-700 rounded-md shadow-lg z-50">
                  <button className="w-full text-left px-4 py-2 text-white hover:bg-red-800">Downtown Cinema</button>
                  <button className="w-full text-left px-4 py-2 text-white hover:bg-red-800">
                    Mall Cinema Complex
                  </button>
                  <button className="w-full text-left px-4 py-2 text-white hover:bg-red-800">Westside Theater</button>
                  <button className="w-full text-left px-4 py-2 text-white hover:bg-red-800">Premium IMAX</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
