import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Sparkles,
  X,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface Position {
  reqId: string;
  role: string;
  bu: string;
  location: string;
  candidates: number;
  shortlisted: number;
  riskFlag: string | null;
  riskLevel: string | null;
  sla: string;
  slaLevel: string;
  updated: string;
}

const DEFAULT_POSITIONS: Position[] = [
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

const STORAGE_KEY = "hirehand-positions";

function loadPositions(): Position[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return DEFAULT_POSITIONS;
}

function savePositions(data: Position[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function generateReqId() {
  const num = Math.floor(1000 + Math.random() * 9000);
  return `REQ-2024-${num}`;
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export function DashboardHome() {
  const [positions, setPositions] = useState<Position[]>(loadPositions);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ title: "", bu: "", location: "", level: "Mid" });

  useEffect(() => {
    savePositions(positions);
  }, [positions]);

  const kpiData = useMemo(() => {
    const totalCandidates = positions.reduce((s, p) => s + p.candidates, 0);
    const totalShortlisted = positions.reduce((s, p) => s + p.shortlisted, 0);
    return [
      { label: "Open Positions", value: String(positions.length), icon: Briefcase, sub: "Active roles", trend: null },
      { label: "Total Candidates", value: String(totalCandidates), icon: Users, sub: `${totalShortlisted} shortlisted`, trend: null },
      { label: "Avg Time to Fill", value: "45 days", icon: Clock, sub: "+12%", trend: "up" },
      { label: "Offer Acceptance", value: "82%", icon: CheckCircle, sub: "+5%", trend: "up" },
    ];
  }, [positions]);

  const handleCreate = () => {
    if (!form.title.trim()) return;
    const today = new Date().toISOString().slice(0, 10);
    const newPos: Position = {
      reqId: generateReqId(),
      role: `${form.level} ${form.title}`.trim(),
      bu: form.bu || "General",
      location: form.location || "Remote",
      candidates: 0,
      shortlisted: 0,
      riskFlag: "New Opening",
      riskLevel: "new",
      sla: "On Track",
      slaLevel: "success",
      updated: today,
    };
    setPositions((prev) => [newPos, ...prev]);
    setForm({ title: "", bu: "", location: "", level: "Mid" });
    setModalOpen(false);
  };

  return (
    <>
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
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
                    <p className="text-sm text-muted-foreground truncate">{kpi.label}</p>
                    <p className="text-2xl font-bold font-display text-foreground">{kpi.value}</p>
                    {kpi.sub && (
                      <span className={`text-xs ${kpi.trend === "up" ? "text-emerald-400" : "text-muted-foreground"} flex items-center gap-1`}>
                        {kpi.trend === "up" && <TrendingUp className="h-3 w-3" />}
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
          <h2 className="text-lg font-semibold text-foreground mb-3 font-display">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Create a Position", icon: Plus, desc: "Post a new role", action: () => setModalOpen(true) },
              { label: "View Analytics", icon: BarChart3, desc: "Hiring insights", action: undefined },
              { label: "Decision Packs", icon: Package, desc: "Review bundles", action: undefined },
            ].map((qa) => (
              <Card
                key={qa.label}
                onClick={qa.action}
                className="glass hover:glow-sm transition-all duration-300 cursor-pointer group"
              >
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <qa.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{qa.label}</p>
                    <p className="text-xs text-muted-foreground">{qa.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Positions Table */}
        <motion.div variants={item}>
          <h2 className="text-lg font-semibold text-foreground mb-3 font-display">Open Positions</h2>
          <Card className="glass-strong overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-border/30 hover:bg-transparent">
                  <TableHead className="text-muted-foreground font-medium">Req ID</TableHead>
                  <TableHead className="text-muted-foreground font-medium">Role</TableHead>
                  <TableHead className="text-muted-foreground font-medium hidden md:table-cell">BU</TableHead>
                  <TableHead className="text-muted-foreground font-medium hidden lg:table-cell">Location</TableHead>
                  <TableHead className="text-muted-foreground font-medium text-center">Candidates</TableHead>
                  <TableHead className="text-muted-foreground font-medium text-center hidden sm:table-cell">Shortlisted</TableHead>
                  <TableHead className="text-muted-foreground font-medium hidden md:table-cell">Risk Flags</TableHead>
                  <TableHead className="text-muted-foreground font-medium">SLA</TableHead>
                  <TableHead className="text-muted-foreground font-medium hidden lg:table-cell">Updated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {positions.map((pos) => (
                  <TableRow key={pos.reqId} className="border-border/20 hover:bg-primary/5 transition-colors cursor-pointer">
                    <TableCell className="font-mono text-xs text-muted-foreground">{pos.reqId}</TableCell>
                    <TableCell className="font-medium text-foreground">{pos.role}</TableCell>
                    <TableCell className="text-muted-foreground hidden md:table-cell">{pos.bu}</TableCell>
                    <TableCell className="text-muted-foreground hidden lg:table-cell">{pos.location}</TableCell>
                    <TableCell className="text-center text-foreground">{pos.candidates}</TableCell>
                    <TableCell className="text-center text-foreground hidden sm:table-cell">{pos.shortlisted}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      {pos.riskFlag ? (
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            pos.riskLevel === "high"
                              ? "border-red-500/50 text-red-400 bg-red-500/10"
                              : pos.riskLevel === "new"
                              ? "border-emerald-500/50 text-emerald-400 bg-emerald-500/10"
                              : "border-yellow-500/50 text-yellow-400 bg-yellow-500/10"
                          }`}
                        >
                          {pos.riskLevel !== "new" && <AlertTriangle className="h-3 w-3 mr-1" />}
                          {pos.riskLevel === "new" && <Sparkles className="h-3 w-3 mr-1" />}
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
                    <TableCell className="text-muted-foreground text-xs hidden lg:table-cell">{pos.updated}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </motion.div>
      </motion.div>

      {/* Create Position Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setModalOpen(false)} />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md bg-card border border-border/40 rounded-2xl shadow-2xl glow-sm"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/30">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary">
                    <Plus className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground font-display">Create Position</h3>
                    <p className="text-xs text-muted-foreground">Add a new open role</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setModalOpen(false)} className="rounded-full">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Form */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Position Title</Label>
                  <Input
                    placeholder="e.g. Software Engineer"
                    value={form.title}
                    onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Business Unit</Label>
                  <Input
                    placeholder="e.g. Engineering"
                    value={form.bu}
                    onChange={(e) => setForm((f) => ({ ...f, bu: e.target.value }))}
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Location</Label>
                  <Input
                    placeholder="e.g. San Francisco, CA"
                    value={form.location}
                    onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Level</Label>
                  <Select value={form.level} onValueChange={(v) => setForm((f) => ({ ...f, level: v }))}>
                    <SelectTrigger className="bg-background/50 border-border/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Junior">Junior</SelectItem>
                      <SelectItem value="Mid">Mid</SelectItem>
                      <SelectItem value="Senior">Senior</SelectItem>
                      <SelectItem value="Executive">Executive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 p-6 border-t border-border/30">
                <Button variant="ghost" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={handleCreate}
                  disabled={!form.title.trim()}
                  className="gradient-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90"
                >
                  <Sparkles className="h-4 w-4 mr-1" />
                  Create Position
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
