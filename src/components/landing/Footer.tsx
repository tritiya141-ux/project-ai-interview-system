import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">InterviewAI</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Streamline your hiring process with AI-powered interview question generation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/login" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/login" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/login" className="hover:text-primary transition-colors">API</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/login" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/login" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/login" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} InterviewAI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/login" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/login" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
