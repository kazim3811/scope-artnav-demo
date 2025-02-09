
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      toast({
        title: "Success",
        description: "Welcome back to Artnav Portal",
      });
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f3f3]">
      <div className="flex w-full max-w-[1200px] h-[600px] shadow-xl rounded-xl overflow-hidden bg-white">
        <div className="w-1/2 p-14 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2 text-[#1A1F2C]">ARTNAV PORTAL</h1>
            <h2 className="text-xl font-medium mb-8 text-[#1A1F2C]">Welcome</h2>
            <p className="text-[#8E9196] mb-10">
              Please sign in to your Artnav Portal account below
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1A1F2C]">Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-[#f3f3f3] border-0 focus-visible:ring-1 focus-visible:ring-[#9b87f5]"
                  placeholder="admin@artnav.com"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-[#1A1F2C]">Password</label>
                  <Link to="/forgot-password" className="text-sm text-[#8E9196] hover:text-[#1A1F2C]">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 bg-[#f3f3f3] border-0 focus-visible:ring-1 focus-visible:ring-[#9b87f5]"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  className="data-[state=checked]:bg-[#9b87f5] data-[state=checked]:border-[#9b87f5]"
                />
                <label htmlFor="remember" className="text-sm text-[#8E9196]">
                  Remember me
                </label>
              </div>

              <Button type="submit" className="w-full bg-[#9b87f5] text-white hover:bg-[#7E69AB] transition-colors">
                Sign in
              </Button>
            </form>
          </div>

          <div className="text-sm text-[#8E9196]">
            <p>If you do not have a Artnav Portal account, please contact:</p>
            <p className="mt-2">
              <a href="mailto:info@artnav.co" className="text-[#1A1F2C] hover:underline">
                info@artnav.co
              </a>
            </p>
          </div>
        </div>

        <div className="w-1/2 relative bg-[#f3f3f3]">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Placeholder for the image */}
            <div className="text-[#8E9196]">Placeholder Image</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
