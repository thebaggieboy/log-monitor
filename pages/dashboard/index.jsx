"use client"
import { useEffect } from "react"

import { useState } from "react"
import Link from "next/link"
import {
  Activity,
  Server,
  Database,
  AlertTriangle,
  ChevronDown,
  Menu,
  X,
  LineChart,
  LayoutDashboard,
  Plus,
  Search,
  Bell,
  HelpCircle,
  ArrowUpRight,
  ArrowDownRight,
  Laptop,
  HardDrive,
  Network,
  Globe,
  MonitorSmartphone,
  CheckCircle,
} from "lucide-react"

// Import your chart components
import ChartOne from "../../components/Charts/ChartOne"
import ChartTwo from "../../components/Charts/ChartTwo"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [analyticsOpen, setAnalyticsOpen] = useState(false)
  const [selectedDuration, setSelectedDuration] = useState("24h")
  const [currentDateTime, setCurrentDateTime] = useState("")

  // Update current date and time
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }
      setCurrentDateTime(now.toLocaleDateString("en-US", options) + " GMT")
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 60000)

    return () => clearInterval(interval)
  }, [])

  // Mock data for stats
  const stats = [
    {
      title: "Total Events",
      value: "1,284",
      change: "+12.5%",
      isIncrease: true,
      timeframe: "from last week",
      icon: <Activity className="h-5 w-5 text-purple-500" />,
    },
    {
      title: "Active Devices",
      value: "12",
      change: "+2",
      isIncrease: true,
      timeframe: "from yesterday",
      icon: <Laptop className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Log Data Processed",
      value: "450 GB",
      change: "-5.2%",
      isIncrease: false,
      timeframe: "from last week",
      icon: <Database className="h-5 w-5 text-green-500" />,
    },
    {
      title: "Active Incidents",
      value: "2",
      change: "+1",
      isIncrease: false,
      timeframe: "from yesterday",
      icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
    },
  ]

  // Device categories
  const deviceCategories = [
    { name: "Servers", count: 4, icon: <Server className="h-4 w-4 text-blue-500" /> },
    { name: "Routers", count: 3, icon: <Network className="h-4 w-4 text-purple-500" /> },
    { name: "Workstations", count: 2, icon: <Laptop className="h-4 w-4 text-green-500" /> },
    { name: "Web Services", count: 2, icon: <Globe className="h-4 w-4 text-orange-500" /> },
    { name: "Mobile Devices", count: 1, icon: <MonitorSmartphone className="h-4 w-4 text-red-500" /> },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-gradient-to-b from-indigo-900 to-indigo-800 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-4 border-b border-indigo-700">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-md bg-white flex items-center justify-center">
                <Activity className="h-5 w-5 text-indigo-800" />
              </div>
              <h1 className="ml-2 text-xl font-bold text-white">LogMonitor</h1>
            </div>
            <button className="lg:hidden text-white hover:text-gray-200" onClick={() => setSidebarOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 px-3">
            <ul className="space-y-1">
              <li>
                <Link href="#" className="flex items-center px-4 py-2.5 text-white bg-indigo-700/50 rounded-lg">
                  <LayoutDashboard className="h-5 w-5 mr-3 text-indigo-200" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center justify-between px-4 py-2.5 text-indigo-100 hover:bg-indigo-700/30 rounded-lg group transition-colors"
                >
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-3 text-indigo-200" />
                    <Link href='/incidents'>Incidents</Link>
                  </div>
                  <span className="inline-flex items-center justify-center h-5 w-5 text-xs font-semibold text-white bg-red-600 rounded-full">
                    2
                  </span>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-2.5 text-indigo-100 hover:bg-indigo-700/30 rounded-lg transition-colors"
                  onClick={() => setAnalyticsOpen(!analyticsOpen)}
                >
                  <div className="flex items-center">
                    <LineChart className="h-5 w-5 mr-3 text-indigo-200" />
                    <Link href='/analytics'>Analytics</Link>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${analyticsOpen ? "rotate-180" : ""}`} />
                </button>
                {analyticsOpen && (
                  <ul className="mt-1 ml-4 pl-4 border-l border-indigo-700/50 space-y-1">
                    <li>
                      <Link
                        href="#"
                        className="flex items-center py-2 px-3 text-sm text-indigo-200 hover:text-white hover:bg-indigo-700/20 rounded-lg transition-colors"
                      >
                        <Network className="h-4 w-4 mr-2" />
                        <span>Routers</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex items-center py-2 px-3 text-sm text-indigo-200 hover:text-white hover:bg-indigo-700/20 rounded-lg transition-colors"
                      >
                        <HardDrive className="h-4 w-4 mr-2" />
                        <span>Switches</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex items-center py-2 px-3 text-sm text-indigo-200 hover:text-white hover:bg-indigo-700/20 rounded-lg transition-colors"
                      >
                        <Globe className="h-4 w-4 mr-2" />
                        <span>Website</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex items-center py-2 px-3 text-sm text-indigo-200 hover:text-white hover:bg-indigo-700/20 rounded-lg transition-colors"
                      >
                        <Database className="h-4 w-4 mr-2" />
                        <span>HDFS</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex items-center py-2 px-3 text-sm text-indigo-200 hover:text-white hover:bg-indigo-700/20 rounded-lg transition-colors"
                      >
                        <Laptop className="h-4 w-4 mr-2" />
                        <span>Windows</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center px-4 py-2.5 text-indigo-100 hover:bg-indigo-700/30 rounded-lg group transition-colors"
                >
                  <Plus className="h-5 w-5 mr-3 text-indigo-200" />
                  <span>Connect Log Source</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-indigo-700">
            <div className="flex items-center">
              <div className="h-9 w-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
                A
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">Admin User</p>
                <p className="text-xs text-indigo-200">admin@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:ml-64 flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center lg:hidden">
              <button
                className="p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            <div className="flex items-center">
              <div className="relative mr-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500 hidden md:block">{currentDateTime}</div>
              <button className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              <button className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100">
                <HelpCircle className="h-5 w-5" />
              </button>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="flex items-center space-x-3">
                <Link href="#" className="text-sm text-gray-600 hover:text-indigo-600">
                  Settings
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="#" className="text-sm text-red-600 hover:text-red-700 font-medium">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {/* Page header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
              <p className="text-gray-500 mt-1">Monitor your system performance and events</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-3">
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2.5"
              >
                <option value="1h">Last hour</option>
                <option value="12h">Last 12 hours</option>
                <option value="24h">Last 24 hours</option>
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
              </select>
              <button className="px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                Generate Report
              </button>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                      <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                      <div className="flex items-center mt-1">
                        <span
                          className={`text-xs font-medium flex items-center ${stat.isIncrease ? "text-green-600" : "text-red-600"}`}
                        >
                          {stat.isIncrease ? (
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                          ) : (
                            <ArrowDownRight className="h-3 w-3 mr-1" />
                          )}
                          {stat.change}
                        </span>
                        <span className="text-xs text-gray-500 ml-1.5">{stat.timeframe}</span>
                      </div>
                    </div>
                    <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center">{stat.icon}</div>
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              </div>
            ))}
          </div>

          {/* Charts section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Total Events Chart */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">Total Events</h3>
                <select className="text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Last 24 hours</option>
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                </select>
              </div>
              <div className="p-5">
                <ChartTwo />
              </div>
            </div>

            {/* Log Events vs Log Keys Chart */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">Log Events vs Log Keys</h3>
                <select className="text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Last 24 hours</option>
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                </select>
              </div>
              <div className="p-5">
                <ChartOne />
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Devices Monitored */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Devices Monitored</h3>
                <p className="text-xs text-gray-500 mt-1">Last updated 5 minutes ago</p>
              </div>
              <div className="p-5">
                <div className="flex flex-col items-center justify-center">
                  <div className="relative h-32 w-32 mb-4">
                    <div className="absolute inset-0 rounded-full bg-indigo-50 flex items-center justify-center">
                      <div className="text-5xl font-bold text-indigo-600">12</div>
                    </div>
                    <svg className="absolute inset-0" width="128" height="128" viewBox="0 0 128 128">
                      <circle cx="64" cy="64" r="60" fill="none" stroke="#E0E7FF" strokeWidth="8" />
                      <circle
                        cx="64"
                        cy="64"
                        r="60"
                        fill="none"
                        stroke="#6366F1"
                        strokeWidth="8"
                        strokeDasharray="377"
                        strokeDashoffset="94.25"
                        transform="rotate(-90 64 64)"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500">Total Active Devices</p>
                </div>

                <div className="mt-6 space-y-3">
                  {deviceCategories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        {category.icon}
                        <span className="ml-2 text-sm text-gray-700">{category.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{category.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Log Data Processed */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Log Data Processed</h3>
                <p className="text-xs text-gray-500 mt-1">Last 30 days</p>
              </div>
              <div className="p-5 flex flex-col items-center justify-center">
                <div className="relative h-40 w-40 mb-4">
                  <div className="absolute inset-0 rounded-full bg-blue-50 flex items-center justify-center flex-col">
                    <div className="text-5xl font-bold text-blue-600">450</div>
                    <div className="text-lg font-medium text-blue-600">GB</div>
                  </div>
                  <svg className="absolute inset-0" width="160" height="160" viewBox="0 0 160 160">
                    <circle cx="80" cy="80" r="70" fill="none" stroke="#DBEAFE" strokeWidth="12" />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="12"
                      strokeDasharray="440"
                      strokeDashoffset="110"
                      transform="rotate(-90 80 80)"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Monthly Quota: 500 GB</p>
                  <p className="text-xs text-gray-400 mt-1">90% of quota used</p>
                </div>
              </div>
            </div>

            {/* Recent Incidents */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">Recent Incidents</h3>
                <Link href="#" className="text-sm text-indigo-600 hover:text-indigo-800">
                  View all
                </Link>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="p-3 bg-red-50 border border-red-100 rounded-lg">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-red-800">Database Connection Failure</h4>
                        <p className="text-xs text-red-600 mt-1">Server DB-03 - 35 minutes ago</p>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-end">
                      <button className="text-xs text-red-700 font-medium hover:text-red-800">Investigate</button>
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50 border border-amber-100 rounded-lg">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-amber-800">High CPU Usage</h4>
                        <p className="text-xs text-amber-600 mt-1">Web Server WS-01 - 2 hours ago</p>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-end">
                      <button className="text-xs text-amber-700 font-medium hover:text-amber-800">Investigate</button>
                    </div>
                  </div>

                  <div className="p-3 bg-green-50 border border-green-100 rounded-lg">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-green-800">Network Latency Resolved</h4>
                        <p className="text-xs text-green-600 mt-1">Router R-02 - 4 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
