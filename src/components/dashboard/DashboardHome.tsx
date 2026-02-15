import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Clock,
  CheckCircle,
  Plus,
  BarChart3,
  Package,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const kpiData = [
  {
    label: "Open Positions",
    value: "3",
    icon: Briefcase,
    sub: "Active roles",
    trend: null,
  },
  {
    label: "Total Candidates",
    value: "50",
    icon: Users,
    sub: "13 shortlisted",
    trend: null,
  },
  {
    label: "Avg Time to Fill",
    value: "45 days",
    icon: Clock,
    sub: "+12%",
    trend: "up",
  },
  {
    label: "Offer Acceptance",
    value: "82%",
    icon: CheckCircle,
    sub: "+5%",
    trend: "up",
  },
];

const quickActions = [
  { label: "Create a Position", icon: Plus, desc: "Post a new role" },
  { label: "View Analytics", icon: BarChart3, desc: "Hiring insights" },
  { label: "Decision Packs", icon: Package, desc: "Review bundles" },
];

const positions = [
  {
    reqId: "REQ-2024-0042",
    role: "Senior Software Engineer",
    bu: "Engineering",
    location: "San Francisco, CA",
    candidates: 24,
    shortlisted: 6,
    riskFlag: "Long time-to-fill",
    riskLevel: "high",
    sla: "At Risk",
    slaLevel: "warning",
    updated: "2024-12-15",
  },
  {
    reqId: "REQ-2024-0039",
    role: "Product Manager",
    bu: "Product",
    location: "New York, NY",
    candidates: 18,
    shortlisted: 4,
    riskFlag: null,
    riskLevel: null,
    sla: "On Track",
    slaLevel: "success",
    updated: "2024-12-14",
  },
  {
    reqId: "REQ-2024-0045",
    role: "UX Designer",
    bu: "Design",
    location: "Remote",
    candidates: 8,
    shortlisted: 3,
    riskFlag: "Low pipeline",
    riskLevel: "medium",
    sla: "On Track",
    slaLevel: "success",
    updated: "2024-12-13",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export function DashboardHome() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi) => (
          <motion.div key={kpi.label} variants={item}>
            <Card className="glass-strong hover:glow-sm transition-all duration-300 group">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl gradient-primary">
                  <kpi.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground truncate">
                    {kpi.label}
                  </p>
                  <p className="text-2xl font-bold font-display text-foreground">
                    {kpi.value}
                  </p>
                  {kpi.sub && (
                    <span
                      className={`text-xs ${
                        kpi.trend === "up"
                          ? "text-emerald-400"
                          : "text-muted-foreground"
                      } flex items-center gap-1`}
                    >
                      {kpi.trend === "up" && (
                        <TrendingUp className="h-3 w-3" />
                      )}
                      {kpi.sub}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div variants={item}>
        <h2 className="text-lg font-semibold text-foreground mb-3 font-display">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {quickActions.map((action) => (
            <Card
              key={action.label}
              className="glass hover:glow-sm transition-all duration-300 cursor-pointer group"
            >
              <CardContent className="p-5 flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <action.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {action.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{action.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Positions Table */}
      <motion.div variants={item}>
        <h2 className="text-lg font-semibold text-foreground mb-3 font-display">
          Open Positions
        </h2>
        <Card className="glass-strong overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-border/30 hover:bg-transparent">
                <TableHead className="text-muted-foreground font-medium">
                  Req ID
                </TableHead>
                <TableHead className="text-muted-foreground font-medium">
                  Role
                </TableHead>
                <TableHead className="text-muted-foreground font-medium hidden md:table-cell">
                  BU
                </TableHead>
                <TableHead className="text-muted-foreground font-medium hidden lg:table-cell">
                  Location
                </TableHead>
                <TableHead className="text-muted-foreground font-medium text-center">
                  Candidates
                </TableHead>
                <TableHead className="text-muted-foreground font-medium text-center hidden sm:table-cell">
                  Shortlisted
                </TableHead>
                <TableHead className="text-muted-foreground font-medium hidden md:table-cell">
                  Risk Flags
                </TableHead>
                <TableHead className="text-muted-foreground font-medium">
                  SLA
                </TableHead>
                <TableHead className="text-muted-foreground font-medium hidden lg:table-cell">
                  Updated
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {positions.map((pos) => (
                <TableRow
                  key={pos.reqId}
                  className="border-border/20 hover:bg-primary/5 transition-colors cursor-pointer"
                >
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {pos.reqId}
                  </TableCell>
                  <TableCell className="font-medium text-foreground">
                    {pos.role}
                  </TableCell>
                  <TableCell className="text-muted-foreground hidden md:table-cell">
                    {pos.bu}
                  </TableCell>
                  <TableCell className="text-muted-foreground hidden lg:table-cell">
                    {pos.location}
                  </TableCell>
                  <TableCell className="text-center text-foreground">
                    {pos.candidates}
                  </TableCell>
                  <TableCell className="text-center text-foreground hidden sm:table-cell">
                    {pos.shortlisted}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {pos.riskFlag ? (
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          pos.riskLevel === "high"
                            ? "border-red-500/50 text-red-400 bg-red-500/10"
                            : "border-yellow-500/50 text-yellow-400 bg-yellow-500/10"
                        }`}
                      >
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        {pos.riskFlag}
                      </Badge>
                    ) : (
                      <span className="text-muted-foreground text-xs">—</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={`text-xs ${
                        pos.slaLevel === "success"
                          ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                          : "bg-yellow-500/15 text-yellow-400 border-yellow-500/30"
                      }`}
                      variant="outline"
                    >
                      {pos.sla}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-xs hidden lg:table-cell">
                    {pos.updated}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </motion.div>
    </motion.div>
  );
}
