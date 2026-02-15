import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardHome } from "@/components/dashboard/DashboardHome";
import { JDInput } from "@/components/dashboard/JDInput";
import { LoadingState } from "@/components/dashboard/LoadingState";
import { QuestionList } from "@/components/dashboard/QuestionList";
import { Question, generateMockQuestions } from "@/types/questions";

type DashboardState = "home" | "input" | "loading" | "results";

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [state, setState] = useState<DashboardState>("home");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [activeSection, setActiveSection] = useState("home");

  const handleGenerate = async (jd: string) => {
    setState("loading");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const generatedQuestions = generateMockQuestions();
    setQuestions(generatedQuestions);
    setState("results");
  };

  const handleBack = () => {
    setState("home");
    setQuestions([]);
  };

  const handlePasteJD = () => {
    setState("input");
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    if (section === "home") {
      setState("home");
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-background bg-dot-grid">
      <DashboardSidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        onPasteJD={handlePasteJD}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />

        <main className="flex-1 p-6 overflow-auto">
          <AnimatePresence mode="wait">
            {state === "home" && <DashboardHome key="home" />}
            {state === "input" && (
              <JDInput
                key="input"
                onGenerate={handleGenerate}
                isGenerating={false}
              />
            )}
            {state === "loading" && <LoadingState key="loading" />}
            {state === "results" && (
              <QuestionList
                key="results"
                questions={questions}
                onUpdateQuestions={setQuestions}
                onBack={handleBack}
              />
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
