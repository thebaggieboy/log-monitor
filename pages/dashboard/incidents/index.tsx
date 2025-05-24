"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Activity,
  AlertTriangle,
  ArrowDownUp,
  Bell,
  CheckCircle,
  ChevronDown,
  Clock,
  Database,
  Filter,
  Globe,
  HardDrive,
  HelpCircle,
  Laptop,
  LayoutDashboard,
  LineChart,
  Menu,
  MoreHorizontal,
  Network,
  Plus,
  Search,
  Server,
  SlidersHorizontal,
  X,
} from "lucide-react"

export default function IncidentsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [analyticsOpen, setAnalyticsOpen] = useState(false)
  const [currentDateTime, setCurrentDateTime] = useState("")
  const [selectedSeverity, setSelectedSeverity] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedTimeframe, setSelectedTimeframe] = useState("7d")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortField, setSortField] = useState("date")
  const [sortDirection, setSortDirection] = useState("desc")
  const [selectedIncident, setSelectedIncident] = useState(null)

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
      //setCurrentDateTime(now.toLocaleDateString("en-US", options) + " GMT")
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 60000)

    return () => clearInterval(interval)
  }, [])

  // Mock incidents data
  const incidents = [
    {
      id: 1,
      title: "Database Connection Failure",
      description: "Primary database server DB-03 is not responding to connection requests.",
      severity: "critical",
      status: "active",
      device: "Server DB-03",
      deviceType: "database",
      dateCreated: "2023-05-20T08:23:15Z",
      lastUpdated: "2023-05-20T09:15:22Z",
      assignedTo: "John Smith",
      affectedServices: ["User Authentication", "Payment Processing", "Order Management"],
      logs: [
        { time: "2023-05-20T08:23:15Z", message: "Incident detected: Database connection timeout", user: "System" },
        {
          time: "2023-05-20T08:25:30Z",
          message: "Alert notification sent to on-call team",
          user: "System",
        },
        {
          time: "2023-05-20T08:32:45Z",
          message: "Initial investigation started. Checking network connectivity.",
          user: "John Smith",
        },
        {
          time: "2023-05-20T09:15:22Z",
          message: "Identified potential disk space issue. Checking storage allocation.",
          user: "John Smith",
        },
      ],
    },
    {
      id: 2,
      title: "High CPU Usage",
      description: "Web server WS-01 is experiencing sustained high CPU usage above 90%.",
      severity: "warning",
      status: "active",
      device: "Web Server WS-01",
      deviceType: "server",
      dateCreated: "2023-05-20T10:45:33Z",
      lastUpdated: "2023-05-20T11:20:10Z",
      assignedTo: "Sarah Johnson",
      affectedServices: ["Website Frontend", "API Services"],
      logs: [
        { time: "2023-05-20T10:45:33Z", message: "Incident detected: High CPU usage (95%)", user: "System" },
        {
          time: "2023-05-20T10:50:12Z",
          message: "Alert notification sent to on-call team",
          user: "System",
        },
        {
          time: "2023-05-20T11:05:45Z",
          message: "Initial investigation started. Checking active processes.",
          user: "Sarah Johnson",
        },
        {
          time: "2023-05-20T11:20:10Z",
          message: "Identified runaway process. Considering service restart.",
          user: "Sarah Johnson",
        },
      ],
    },
    {
      id: 3,
      title: "Network Latency Resolved",
      description: "High network latency issue on Router R-02 has been resolved.",
      severity: "info",
      status: "resolved",
      device: "Router R-02",
      deviceType: "network",
      dateCreated: "2023-05-19T14:12:05Z",
      lastUpdated: "2023-05-19T16:30:45Z",
      assignedTo: "Michael Chen",
      affectedServices: ["Internal Network", "VPN Access"],
      logs: [
        { time: "2023-05-19T14:12:05Z", message: "Incident detected: High network latency", user: "System" },
        {
          time: "2023-05-19T14:15:30Z",
          message: "Alert notification sent to on-call team",
          user: "System",
        },
        {
          time: "2023-05-19T14:25:15Z",
          message: "Initial investigation started. Running network diagnostics.",
          user: "Michael Chen",
        },
        {
          time: "2023-05-19T15:10:22Z",
          message: "Identified misconfigured routing table. Applying fix.",
          user: "Michael Chen",
        },
        {
          time: "2023-05-19T16:30:45Z",
          message: "Issue resolved. Network latency returned to normal levels.",
          user: "Michael Chen",
        },
      ],
    },
    {
      id: 4,
      title: "Authentication Service Degradation",
      description: "Users experiencing intermittent login failures due to authentication service issues.",
      severity: "warning",
      status: "investigating",
      device: "Auth Service AS-01",
      deviceType: "service",
      dateCreated: "2023-05-20T07:35:12Z",
      lastUpdated: "2023-05-20T08:15:30Z",
      assignedTo: "Emily Rodriguez",
      affectedServices: ["User Authentication", "Single Sign-On"],
      logs: [
        {
          time: "2023-05-20T07:35:12Z",
          message: "Incident detected: Increased authentication failures",
          user: "System",
        },
        {
          time: "2023-05-20T07:40:25Z",
          message: "Alert notification sent to on-call team",
          user: "System",
        },
        {
          time: "2023-05-20T07:55:18Z",
          message: "Initial investigation started. Checking auth service logs.",
          user: "Emily Rodriguez",
        },
        {
          time: "2023-05-20T08:15:30Z",
          message: "Identified potential cache issue. Investigating further.",
          user: "Emily Rodriguez",
        },
      ],
    },
    {
      id: 5,
      title: "Storage Space Critical",
      description: "File server FS-02 is critically low on storage space (98% used).",
      severity: "critical",
      status: "active",
      device: "File Server FS-02",
      deviceType: "storage",
      dateCreated: "2023-05-20T12:05:45Z",
      lastUpdated: "2023-05-20T12:35:10Z",
      assignedTo: "Unassigned",
      affectedServices: ["File Storage", "Backup Services"],
      logs: [
        {
          time: "2023-05-20T12:05:45Z",
          message: "Incident detected: Critical storage space (98% used)",
          user: "System",
        },
        {
          time: "2023-05-20T12:10:15Z",
          message: "Alert notification sent to on-call team",
          user: "System",
        },
        {
          time: "2023-05-20T12:35:10Z",
          message: "Automatic cleanup process initiated to free temporary files",
          user: "System",
        },
      ],
    },
    {
      id: 6,
      title: "API Rate Limiting",
      description: "External API calls being rate limited due to unexpected traffic spike.",
      severity: "warning",
      status: "resolved",
      device: "API Gateway AG-01",
      deviceType: "service",
      dateCreated: "2023-05-19T09:15:30Z",
      lastUpdated: "2023-05-19T11:45:22Z",
      assignedTo: "David Wilson",
      affectedServices: ["External API", "Partner Integrations"],
      logs: [
        {
          time: "2023-05-19T09:15:30Z",
          message: "Incident detected: API rate limiting triggered",
          user: "System",
        },
        {
          time: "2023-05-19T09:20:45Z",
          message: "Alert notification sent to on-call team",
          user: "System",
        },
        {
          time: "2023-05-19T09:35:12Z",
          message: "Initial investigation started. Analyzing traffic patterns.",
          user: "David Wilson",
        },
        {
          time: "2023-05-19T10:15:30Z",
          message: "Identified unusual traffic from specific client. Contacting client.",
          user: "David Wilson",
        },
        {
          time: "2023-05-19T11:45:22Z",
          message: "Issue resolved. Client fixed their integration. Traffic normalized.",
          user: "David Wilson",
        },
      ],
    },
    {
      id: 7,
      title: "SSL Certificate Expiration",
      description: "SSL certificate for customer portal will expire in 7 days.",
      severity: "low",
      status: "active",
      device: "Customer Portal",
      deviceType: "service",
      dateCreated: "2023-05-20T05:00:00Z",
      lastUpdated: "2023-05-20T05:00:00Z",
      assignedTo: "Unassigned",
      affectedServices: ["Customer Portal"],
      logs: [
        {
          time: "2023-05-20T05:00:00Z",
          message: "Incident detected: SSL certificate expiration warning (7 days)",
          user: "System",
        },
        {
          time: "2023-05-20T05:05:15Z",
          message: "Alert notification sent to security team",
          user: "System",
        },
      ],
    },
  ]

  // Filter incidents based on selected filters and search query
  const filteredIncidents = incidents
    .filter((incident) => {
      // Filter by severity
      if (selectedSeverity !== "all" && incident.severity !== selectedSeverity) {
        return false
      }

      // Filter by status
      if (selectedStatus !== "all" && incident.status !== selectedStatus) {
        return false
      }

      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        return (
          incident.title.toLowerCase().includes(query) ||
          incident.description.toLowerCase().includes(query) ||
          incident.device.toLowerCase().includes(query)
        )
      }

      return true
    })
    .sort((a, b) => {
      // Sort by selected field
      if (sortField === "date") {
        const dateA = new Date(sortField === "dateCreated" ? a.dateCreated : a.lastUpdated)
        const dateB = new Date(sortField === "dateCreated" ? b.dateCreated : b.lastUpdated)
        return sortDirection === "asc" ? dateA - dateB : dateB - dateA
      } else if (sortField === "severity") {
        const severityOrder = { critical: 3, warning: 2, low: 1, info: 0 }
        return sortDirection === "asc"
          ? severityOrder[a.severity] - severityOrder[b.severity]
          : severityOrder[b.severity] - severityOrder[a.severity]
      } else {
        // Default to string comparison for other fields
        const valueA = a[sortField]?.toString().toLowerCase() || ""
        const valueB = b[sortField]?.toString().toLowerCase() || ""
        return sortDirection === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA)
      }
    })

  // Handle sort toggle
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("desc") // Default to descending when changing fields
    }
  }

  // Get severity badge
  const getSeverityBadge = (severity) => {
    switch (severity) {
      case "critical":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Critical
          </span>
        )
      case "warning":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Warning
          </span>
        )
      case "low":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Low
          </span>
        )
      case "info":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Info
          </span>
        )
      default:
        return null
    }
  }

  // Get status badge
  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <Clock className="w-3 h-3 mr-1" />
            Active
          </span>
        )
      case "investigating":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <Search className="w-3 h-3 mr-1" />
            Investigating
          </span>
        )
      case "resolved":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Resolved
          </span>
        )
      default:
        return null
    }
  }

  // Get device type icon
  const getDeviceTypeIcon = (type) => {
    switch (type) {
      case "server":
        return <Server className="h-4 w-4 text-indigo-500" />
      case "database":
        return <Database className="h-4 w-4 text-blue-500" />
      case "network":
        return <Network className="h-4 w-4 text-green-500" />
      case "service":
        return <Globe className="h-4 w-4 text-amber-500" />
      case "storage":
        return <HardDrive className="h-4 w-4 text-purple-500" />
      default:
        return <Laptop className="h-4 w-4 text-gray-500" />
    }
  }

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleString()
  }

  // Calculate time since
  const getTimeSince = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now - date
    const diffSec = Math.floor(diffMs / 1000)
    const diffMin = Math.floor(diffSec / 60)
    const diffHour = Math.floor(diffMin / 60)
    const diffDay = Math.floor(diffHour / 24)

    if (diffDay > 0) {
      return `${diffDay} day${diffDay > 1 ? "s" : ""} ago`
    } else if (diffHour > 0) {
      return `${diffHour} hour${diffHour > 1 ? "s" : ""} ago`
    } else if (diffMin > 0) {
      return `${diffMin} minute${diffMin > 1 ? "s" : ""} ago`
    } else {
      return "Just now"
    }
  }

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
                  className="flex items-center justify-between px-4 py-2.5 text-white bg-indigo-700/50 rounded-lg"
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
                  className="flex items-center justify-between w-full px-4 py-2.5 text-indigo-100 hover:bg-indigo-700/30 rounded-lg transition-colors"
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
                        className="flex items-center py-2 px-3 text-sm text-indigo-200 hover:text-white hover:bg-indigo-700/20 rounded-lg transition-colors"
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
                  placeholder="Search incidents..."
                  className="w-64 pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500 hidden md:block"></div>
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
              <h1 className="text-2xl font-bold text-gray-900">Incidents</h1>
              <p className="text-gray-500 mt-1">Monitor and manage system incidents</p>
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
                <option value="all">All time</option>
              </select>
              <button className="px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                Create Incident
              </button>
            </div>
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
                  value={selectedSeverity}
                  onChange={(e) => setSelectedSeverity(e.target.value)}
                  className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2"
                >
                  <option value="all">All Severities</option>
                  <option value="critical">Critical</option>
                  <option value="warning">Warning</option>
                  <option value="low">Low</option>
                  <option value="info">Info</option>
                </select>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2"
                >
                  <option value="all">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="investigating">Investigating</option>
                  <option value="resolved">Resolved</option>
                </select>
                <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  More Filters
                </button>
                {(selectedSeverity !== "all" || selectedStatus !== "all" || searchQuery) && (
                  <button
                    onClick={() => {
                      setSelectedSeverity("all")
                      setSelectedStatus("all")
                      setSearchQuery("")
                    }}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Clear Filters
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Incidents table */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort("title")}
                    >
                      <div className="flex items-center">
                        <span>Incident</span>
                        {sortField === "title" && (
                          <ArrowDownUp
                            className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "text-indigo-600" : "text-gray-400"}`}
                          />
                        )}
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort("severity")}
                    >
                      <div className="flex items-center">
                        <span>Severity</span>
                        {sortField === "severity" && (
                          <ArrowDownUp
                            className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "text-indigo-600" : "text-gray-400"}`}
                          />
                        )}
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort("status")}
                    >
                      <div className="flex items-center">
                        <span>Status</span>
                        {sortField === "status" && (
                          <ArrowDownUp
                            className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "text-indigo-600" : "text-gray-400"}`}
                          />
                        )}
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort("device")}
                    >
                      <div className="flex items-center">
                        <span>Device</span>
                        {sortField === "device" && (
                          <ArrowDownUp
                            className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "text-indigo-600" : "text-gray-400"}`}
                          />
                        )}
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort("date")}
                    >
                      <div className="flex items-center">
                        <span>Last Updated</span>
                        {sortField === "date" && (
                          <ArrowDownUp
                            className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "text-indigo-600" : "text-gray-400"}`}
                          />
                        )}
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredIncidents.length > 0 ? (
                    filteredIncidents.map((incident) => (
                      <tr
                        key={incident.id}
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => setSelectedIncident(incident)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-md bg-indigo-100 flex items-center justify-center">
                              {getDeviceTypeIcon(incident.deviceType)}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{incident.title}</div>
                              <div className="text-sm text-gray-500 truncate max-w-xs">{incident.description}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{getSeverityBadge(incident.severity)}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(incident.status)}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{incident.device}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{getTimeSince(incident.lastUpdated)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedIncident(incident)
                            }}
                            className="text-indigo-600 hover:text-indigo-900 mr-3"
                          >
                            View
                          </button>
                          <button onClick={(e) => e.stopPropagation()} className="text-gray-600 hover:text-gray-900">
                            <MoreHorizontal className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="px-6 py-10 text-center">
                        <div className="flex flex-col items-center">
                          <CheckCircle className="h-12 w-12 text-gray-300 mb-4" />
                          <h3 className="text-lg font-medium text-gray-900 mb-1">No incidents found</h3>
                          <p className="text-gray-500 max-w-sm">
                            No incidents match your current filters. Try adjusting your search criteria or clear
                            filters.
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Incident details modal */}
          {selectedIncident && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <div
                      className={`h-10 w-10 rounded-md flex items-center justify-center mr-3 ${
                        selectedIncident.severity === "critical"
                          ? "bg-red-100"
                          : selectedIncident.severity === "warning"
                            ? "bg-amber-100"
                            : "bg-blue-100"
                      }`}
                    >
                      <AlertTriangle
                        className={`h-6 w-6 ${
                          selectedIncident.severity === "critical"
                            ? "text-red-600"
                            : selectedIncident.severity === "warning"
                              ? "text-amber-600"
                              : "text-blue-600"
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{selectedIncident.title}</h3>
                      <div className="flex items-center mt-1">
                        {getSeverityBadge(selectedIncident.severity)}
                        <span className="mx-2">•</span>
                        {getStatusBadge(selectedIncident.status)}
                        <span className="mx-2">•</span>
                        <span className="text-xs text-gray-500">ID: {selectedIncident.id}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedIncident(null)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-500" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="col-span-2">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Description</h4>
                      <p className="text-gray-900">{selectedIncident.description}</p>

                      <div className="mt-6">
                        <h4 className="text-sm font-medium text-gray-500 mb-2">Affected Services</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedIncident.affectedServices.map((service, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Details</h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Device</span>
                            <span className="text-sm font-medium text-gray-900">{selectedIncident.device}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Created</span>
                            <span className="text-sm font-medium text-gray-900">
                              {formatDate(selectedIncident.dateCreated)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Last Updated</span>
                            <span className="text-sm font-medium text-gray-900">
                              {formatDate(selectedIncident.lastUpdated)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Assigned To</span>
                            <span className="text-sm font-medium text-gray-900">
                              {selectedIncident.assignedTo || "Unassigned"}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 space-y-3">
                        <button className="w-full px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                          {selectedIncident.status === "resolved" ? "Reopen Incident" : "Resolve Incident"}
                        </button>
                        {selectedIncident.assignedTo === "Unassigned" ? (
                          <button className="w-full px-4 py-2 border border-indigo-600 text-indigo-600 text-sm font-medium rounded-lg hover:bg-indigo-50 transition-colors">
                            Assign to Me
                          </button>
                        ) : (
                          <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                            Reassign
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-medium text-gray-900">Activity Log</h4>
                      <button className="text-sm text-indigo-600 hover:text-indigo-800">Export Log</button>
                    </div>

                    <div className="space-y-4">
                      {selectedIncident.logs.map((log, index) => (
                        <div key={index} className="flex">
                          <div className="flex-shrink-0 mr-3">
                            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-medium">
                              {log.user.charAt(0)}
                            </div>
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center">
                              <span className="font-medium text-gray-900">{log.user}</span>
                              <span className="mx-2 text-gray-500">•</span>
                              <span className="text-sm text-gray-500">{formatDate(log.time)}</span>
                            </div>
                            <p className="mt-1 text-gray-700">{log.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <div className="flex">
                        <div className="flex-shrink-0 mr-3">
                          <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-medium">
                            A
                          </div>
                        </div>
                        <div className="flex-grow">
                          <textarea
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder="Add a comment or update..."
                          ></textarea>
                          <div className="mt-2 flex justify-end">
                            <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                              Add Comment
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
