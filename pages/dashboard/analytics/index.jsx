"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Activity,
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  ChevronDown,
  Database,
  Download,
  FileDown,
  Filter,
  Globe,
  HardDrive,
  HelpCircle,
  Laptop,
  LayoutDashboard,
  LineChart,
  Menu,
  Network,
  Plus,
  RefreshCw,
  Search,
  Share2,
  SlidersHorizontal,
  Timer,
  X,
} from "lucide-react"

export default function AnalyticsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [analyticsOpen, setAnalyticsOpen] = useState(true)
  const [currentDateTime, setCurrentDateTime] = useState("")
  const [selectedTimeframe, setSelectedTimeframe] = useState("7d")
  const [selectedMetric, setSelectedMetric] = useState("events")
  const [selectedDeviceType, setSelectedDeviceType] = useState("all")
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

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

  // Simulate data refresh
  const refreshData = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setIsRefreshing(false)
    }, 1500)
  }

  // Mock metrics data
  const metrics = [
    {
      title: "Total Events",
      value: "1,284,392",
      change: "+12.5%",
      isIncrease: true,
      timeframe: "from last week",
      icon: <Activity className="h-5 w-5 text-purple-500" />,
    },
    {
      title: "Average Response Time",
      value: "235ms",
      change: "-18.3%",
      isIncrease: true,
      timeframe: "from last week",
      icon: <Timer className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Error Rate",
      value: "0.42%",
      change: "-0.8%",
      isIncrease: true,
      timeframe: "from last week",
      icon: <AlertTriangle className="h-5 w-5 text-green-500" />,
    },
    {
      title: "Log Data Processed",
      value: "450 GB",
      change: "+5.2%",
      isIncrease: false,
      timeframe: "from last week",
      icon: <Database className="h-5 w-5 text-amber-500" />,
    },
  ]

  // Device type distribution
  const deviceDistribution = [
    { name: "Servers", percentage: 35, color: "bg-blue-500" },
    { name: "Routers", percentage: 25, color: "bg-purple-500" },
    { name: "Workstations", percentage: 20, color: "bg-green-500" },
    { name: "Web Services", percentage: 15, color: "bg-amber-500" },
    { name: "Mobile Devices", percentage: 5, color: "bg-red-500" },
  ]

  // Top events
  const topEvents = [
    { name: "Authentication Success", count: 45892, trend: "+12%" },
    { name: "Page View", count: 32451, trend: "+8%" },
    { name: "API Request", count: 28764, trend: "+15%" },
    { name: "File Download", count: 15432, trend: "-3%" },
    { name: "User Login", count: 12876, trend: "+5%" },
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
                <Link
                  href="/dashboard"
                  className="flex items-center px-4 py-2.5 text-indigo-100 hover:bg-indigo-700/30 rounded-lg group transition-colors"
                >
                  <LayoutDashboard className="h-5 w-5 mr-3 text-indigo-200" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/incidents"
                  className="flex items-center justify-between px-4 py-2.5 text-indigo-100 hover:bg-indigo-700/30 rounded-lg group transition-colors"
                >
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-3 text-indigo-200" />
                    <span>Incidents</span>
                  </div>
                  <span className="inline-flex items-center justify-center h-5 w-5 text-xs font-semibold text-white bg-red-600 rounded-full">
                    2
                  </span>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-2.5 text-white bg-indigo-700/50 rounded-lg"
                  onClick={() => setAnalyticsOpen(!analyticsOpen)}
                >
                  <div className="flex items-center">
                    <LineChart className="h-5 w-5 mr-3 text-indigo-200" />
                    <span>Analytics</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${analyticsOpen ? "rotate-180" : ""}`} />
                </button>
                {analyticsOpen && (
                  <ul className="mt-1 ml-4 pl-4 border-l border-indigo-700/50 space-y-1">
                    <li>
                      <Link
                        href="/analytics"
                        className="flex items-center py-2 px-3 text-sm text-white bg-indigo-700/20 rounded-lg"
                      >
                        <LineChart className="h-4 w-4 mr-2" />
                        <span>Overview</span>
                      </Link>
                    </li>
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
                  placeholder="Search metrics..."
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
              <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
              <p className="text-gray-500 mt-1">Detailed metrics and performance analysis</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-3">
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2.5"
              >
                <option value="24h">Last 24 hours</option>
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
              <button
                onClick={refreshData}
                className="p-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <RefreshCw className={`h-5 w-5 ${isRefreshing ? "animate-spin" : ""}`} />
              </button>
              <button className="px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                <Download className="h-4 w-4 mr-2 inline-block" />
                Export Report
              </button>
            </div>
          </div>

          {/* Analytics tabs */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex overflow-x-auto">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                    activeTab === "overview"
                      ? "border-b-2 border-indigo-600 text-indigo-600"
                      : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("events")}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                    activeTab === "events"
                      ? "border-b-2 border-indigo-600 text-indigo-600"
                      : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Events
                </button>
                <button
                  onClick={() => setActiveTab("performance")}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                    activeTab === "performance"
                      ? "border-b-2 border-indigo-600 text-indigo-600"
                      : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Performance
                </button>
                <button
                  onClick={() => setActiveTab("errors")}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                    activeTab === "errors"
                      ? "border-b-2 border-indigo-600 text-indigo-600"
                      : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Errors
                </button>
                <button
                  onClick={() => setActiveTab("devices")}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                    activeTab === "devices"
                      ? "border-b-2 border-indigo-600 text-indigo-600"
                      : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Devices
                </button>
              </nav>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">{metric.title}</p>
                      <h3 className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</h3>
                      <div className="flex items-center mt-1">
                        <span
                          className={`text-xs font-medium flex items-center ${
                            metric.isIncrease ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {metric.isIncrease ? (
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                          ) : (
                            <ArrowDownRight className="h-3 w-3 mr-1" />
                          )}
                          {metric.change}
                        </span>
                        <span className="text-xs text-gray-500 ml-1.5">{metric.timeframe}</span>
                      </div>
                    </div>
                    <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      {metric.icon}
                    </div>
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 mb-6">
            <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
              <div className="flex items-center">
                <Filter className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm font-medium text-gray-700">Filters:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <select
                  value={selectedMetric}
                  onChange={(e) => setSelectedMetric(e.target.value)}
                  className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2"
                >
                  <option value="events">Events</option>
                  <option value="errors">Errors</option>
                  <option value="response_time">Response Time</option>
                  <option value="throughput">Throughput</option>
                </select>
                <select
                  value={selectedDeviceType}
                  onChange={(e) => setSelectedDeviceType(e.target.value)}
                  className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2"
                >
                  <option value="all">All Devices</option>
                  <option value="servers">Servers</option>
                  <option value="routers">Routers</option>
                  <option value="workstations">Workstations</option>
                  <option value="services">Web Services</option>
                </select>
                <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Advanced Filters
                </button>
                <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>

          {/* Charts section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Total Events Chart */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">Total Events</h3>
                <div className="flex items-center space-x-2">
                  <select className="text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Hourly</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                  </select>
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <FileDown className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <div className="h-[300px] w-full">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-full">
                      {/* Dummy chart for Total Events */}
                      <div className="relative">
                        <div className="h-[250px] bg-gradient-to-b from-indigo-50 to-white rounded-lg overflow-hidden">
                          <div className="absolute bottom-0 left-0 right-0">
                            <div className="h-[200px] w-full">
                              <svg viewBox="0 0 100 20" className="w-full h-full" preserveAspectRatio="none">
                                <path
                                  d="M0,10 Q10,5 20,10 T40,10 T60,15 T80,5 T100,10"
                                  fill="none"
                                  stroke="#8884d8"
                                  strokeWidth="0.5"
                                />
                                <path
                                  d="M0,10 Q10,5 20,10 T40,10 T60,15 T80,5 T100,10"
                                  fill="url(#gradient1)"
                                  strokeWidth="0"
                                  fillOpacity="0.2"
                                />
                                <defs>
                                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#8884d8" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#8884d8" stopOpacity="0" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 py-2 text-xs text-gray-500">
                            <span>Mon</span>
                            <span>Tue</span>
                            <span>Wed</span>
                            <span>Thu</span>
                            <span>Fri</span>
                            <span>Sat</span>
                            <span>Sun</span>
                          </div>
                        </div>
                        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-2 text-xs text-gray-500">
                          <span>5k</span>
                          <span>4k</span>
                          <span>3k</span>
                          <span>2k</span>
                          <span>1k</span>
                          <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Log Events vs Log Keys Chart */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">Log Events vs Log Keys</h3>
                <div className="flex items-center space-x-2">
                  <select className="text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Hourly</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                  </select>
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <FileDown className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <div className="h-[300px] w-full">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-full">
                      {/* Dummy chart for Log Events vs Log Keys */}
                      <div className="relative">
                        <div className="h-[250px] bg-gradient-to-b from-indigo-50 to-white rounded-lg overflow-hidden">
                          <div className="absolute bottom-0 left-0 right-0">
                            <div className="h-[200px] w-full">
                              <svg viewBox="0 0 100 20" className="w-full h-full" preserveAspectRatio="none">
                                <path
                                  d="M0,15 Q10,12 20,10 T40,8 T60,5 T80,7 T100,3"
                                  fill="none"
                                  stroke="#8884d8"
                                  strokeWidth="0.5"
                                />
                                <path
                                  d="M0,15 Q10,12 20,10 T40,8 T60,5 T80,7 T100,3"
                                  fill="url(#gradient2)"
                                  strokeWidth="0"
                                  fillOpacity="0.2"
                                />
                                <path
                                  d="M0,18 Q10,16 20,17 T40,15 T60,16 T80,14 T100,15"
                                  fill="none"
                                  stroke="#82ca9d"
                                  strokeWidth="0.5"
                                />
                                <path
                                  d="M0,18 Q10,16 20,17 T40,15 T60,16 T80,14 T100,15"
                                  fill="url(#gradient3)"
                                  strokeWidth="0"
                                  fillOpacity="0.2"
                                />
                                <defs>
                                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#8884d8" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#8884d8" stopOpacity="0" />
                                  </linearGradient>
                                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#82ca9d" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#82ca9d" stopOpacity="0" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 py-2 text-xs text-gray-500">
                            <span>00:00</span>
                            <span>04:00</span>
                            <span>08:00</span>
                            <span>12:00</span>
                            <span>16:00</span>
                            <span>20:00</span>
                            <span>24:00</span>
                          </div>
                        </div>
                        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-2 text-xs text-gray-500">
                          <span>10k</span>
                          <span>8k</span>
                          <span>6k</span>
                          <span>4k</span>
                          <span>2k</span>
                          <span>0</span>
                        </div>
                      </div>
                      <div className="flex justify-center mt-2 space-x-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-indigo-500 rounded-full mr-1"></div>
                          <span className="text-xs text-gray-600">Events</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                          <span className="text-xs text-gray-600">Keys</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Chart */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">Response Time</h3>
                <div className="flex items-center space-x-2">
                  <select className="text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Hourly</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                  </select>
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <FileDown className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <div className="h-[300px] w-full">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-full">
                      {/* Dummy chart for Response Time */}
                      <div className="relative">
                        <div className="h-[250px] bg-gradient-to-b from-indigo-50 to-white rounded-lg overflow-hidden">
                          <div className="absolute bottom-0 left-0 right-0">
                            <div className="h-[200px] w-full">
                              <svg viewBox="0 0 100 20" className="w-full h-full" preserveAspectRatio="none">
                                <path
                                  d="M0,10 L10,8 L20,12 L30,7 L40,9 L50,5 L60,11 L70,6 L80,10 L90,4 L100,8"
                                  fill="none"
                                  stroke="#ff7300"
                                  strokeWidth="0.5"
                                />
                                <path
                                  d="M0,10 L10,8 L20,12 L30,7 L40,9 L50,5 L60,11 L70,6 L80,10 L90,4 L100,8 L100,20 L0,20 Z"
                                  fill="url(#gradient4)"
                                  strokeWidth="0"
                                  fillOpacity="0.2"
                                />
                                <defs>
                                  <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#ff7300" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#ff7300" stopOpacity="0" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 py-2 text-xs text-gray-500">
                            <span>Page A</span>
                            <span>Page B</span>
                            <span>Page C</span>
                            <span>Page D</span>
                            <span>Page E</span>
                            <span>Page F</span>
                            <span>Page G</span>
                          </div>
                        </div>
                        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-2 text-xs text-gray-500">
                          <span>500ms</span>
                          <span>400ms</span>
                          <span>300ms</span>
                          <span>200ms</span>
                          <span>100ms</span>
                          <span>0ms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Error Rate Chart */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">Error Rate</h3>
                <div className="flex items-center space-x-2">
                  <select className="text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Hourly</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                  </select>
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <FileDown className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <div className="h-[300px] w-full">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-full">
                      {/* Dummy chart for Error Rate */}
                      <div className="relative">
                        <div className="h-[250px] bg-gradient-to-b from-red-50 to-white rounded-lg overflow-hidden">
                          <div className="absolute bottom-0 left-0 right-0">
                            <div className="h-[200px] w-full">
                              <svg viewBox="0 0 100 20" className="w-full h-full" preserveAspectRatio="none">
                                <path
                                  d="M0,15 Q10,12 20,13 T40,10 T60,8 T80,5 T100,7"
                                  fill="none"
                                  stroke="#ff0000"
                                  strokeWidth="0.5"
                                />
                                <path
                                  d="M0,15 Q10,12 20,13 T40,10 T60,8 T80,5 T100,7 L100,20 L0,20 Z"
                                  fill="url(#gradient5)"
                                  strokeWidth="0"
                                  fillOpacity="0.2"
                                />
                                <defs>
                                  <linearGradient id="gradient5" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#ff0000" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#ff0000" stopOpacity="0" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 py-2 text-xs text-gray-500">
                            <span>Jan</span>
                            <span>Feb</span>
                            <span>Mar</span>
                            <span>Apr</span>
                            <span>May</span>
                            <span>Jun</span>
                            <span>Jul</span>
                          </div>
                        </div>
                        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-2 text-xs text-gray-500">
                          <span>1.0%</span>
                          <span>0.8%</span>
                          <span>0.6%</span>
                          <span>0.4%</span>
                          <span>0.2%</span>
                          <span>0.0%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Device Distribution */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Device Distribution</h3>
              </div>
              <div className="p-5">
                <div className="flex justify-center mb-6">
                  <div className="relative h-48 w-48">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      {
                        deviceDistribution.reduce(
                          (acc, item, i) => {
                            const startAngle = acc.offset
                            const sliceAngle = (item.percentage / 100) * 360
                            const endAngle = startAngle + sliceAngle

                            // Convert angles to radians for calculation
                            const startAngleRad = (startAngle - 90) * (Math.PI / 180)
                            const endAngleRad = (endAngle - 90) * (Math.PI / 180)

                            // Calculate the coordinates of the outer arc
                            const x1 = 50 + 40 * Math.cos(startAngleRad)
                            const y1 = 50 + 40 * Math.sin(startAngleRad)
                            const x2 = 50 + 40 * Math.cos(endAngleRad)
                            const y2 = 50 + 40 * Math.sin(endAngleRad)

                            // Determine which direction to take the arc (large or small)
                            const largeArcFlag = sliceAngle > 180 ? 1 : 0

                            // Create the SVG arc path
                            const pathData = [
                              `M 50 50`,
                              `L ${x1} ${y1}`,
                              `A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                              `Z`,
                            ].join(" ")

                            acc.paths.push(
                              <path
                                key={i}
                                d={pathData}
                                fill={item.color.replace("bg-", "var(--")}
                                className={item.color}
                              />,
                            )

                            return {
                              offset: endAngle,
                              paths: acc.paths,
                            }
                          },
                          { offset: 0, paths: [] },
                        ).paths
                      }
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-3xl font-bold text-gray-900">12</span>
                      <span className="text-sm text-gray-500">Devices</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {deviceDistribution.map((device, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`h-3 w-3 rounded-full ${device.color} mr-2`}></div>
                        <span className="text-sm text-gray-700">{device.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{device.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Events */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Top Events</h3>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  {topEvents.map((event, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium mr-3">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{event.name}</p>
                          <p className="text-xs text-gray-500">{event.count.toLocaleString()} occurrences</p>
                        </div>
                      </div>
                      <span
                        className={`text-xs font-medium ${
                          event.trend.startsWith("+") ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {event.trend}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Device Performance */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Device Performance</h3>
              </div>
              <div className="p-5">
                <div className="h-[300px] w-full">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-full">
                      {/* Dummy chart for Device Performance */}
                      <div className="relative">
                        <div className="h-[250px] bg-gradient-to-b from-indigo-50 to-white rounded-lg overflow-hidden">
                          <div className="absolute bottom-0 left-0 right-0 h-[200px] w-full px-10">
                            <div className="flex h-full items-end justify-between">
                              <div className="w-[15%] bg-indigo-500 rounded-t-md" style={{ height: "90%" }}>
                                <div className="h-full relative">
                                  <div className="absolute -top-6 w-full text-center text-xs font-medium text-indigo-700">
                                    90%
                                  </div>
                                </div>
                              </div>
                              <div className="w-[15%] bg-indigo-500 rounded-t-md" style={{ height: "85%" }}>
                                <div className="h-full relative">
                                  <div className="absolute -top-6 w-full text-center text-xs font-medium text-indigo-700">
                                    85%
                                  </div>
                                </div>
                              </div>
                              <div className="w-[15%] bg-indigo-500 rounded-t-md" style={{ height: "78%" }}>
                                <div className="h-full relative">
                                  <div className="absolute -top-6 w-full text-center text-xs font-medium text-indigo-700">
                                    78%
                                  </div>
                                </div>
                              </div>
                              <div className="w-[15%] bg-indigo-500 rounded-t-md" style={{ height: "92%" }}>
                                <div className="h-full relative">
                                  <div className="absolute -top-6 w-full text-center text-xs font-medium text-indigo-700">
                                    92%
                                  </div>
                                </div>
                              </div>
                              <div className="w-[15%] bg-indigo-500 rounded-t-md" style={{ height: "88%" }}>
                                <div className="h-full relative">
                                  <div className="absolute -top-6 w-full text-center text-xs font-medium text-indigo-700">
                                    88%
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 py-2 text-xs text-gray-500">
                            <span>Server 1</span>
                            <span>Server 2</span>
                            <span>Router 1</span>
                            <span>Router 2</span>
                            <span>Switch 1</span>
                          </div>
                        </div>
                        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-2 text-xs text-gray-500">
                          <span>100%</span>
                          <span>80%</span>
                          <span>60%</span>
                          <span>40%</span>
                          <span>20%</span>
                          <span>0%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                    View Detailed Performance Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
