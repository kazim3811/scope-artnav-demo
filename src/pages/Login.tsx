
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
    // For demo purposes
    if (email && password) {
      toast({
        title: "Success",
        description: "Welcome back to Artnav Portal",
      });
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex w-full max-w-[1200px] h-[600px] shadow-2xl rounded-2xl overflow-hidden bg-white">
        <div className="w-1/2 p-12 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-semibold mb-1">ARTNAV PORTAL</h1>
            <h2 className="text-xl font-medium mb-8">Welcome</h2>
            <p className="text-gray-600 mb-8">
              Please sign in to your Artnav Portal account below
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 bg-gray-50"
                  placeholder="admin@artnav.com"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium">Password</label>
                  <Link to="/forgot-password" className="text-sm text-gray-500 hover:text-gray-700">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 bg-gray-50"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>

              <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                Sign in
              </Button>
            </form>
          </div>

          <div className="text-sm text-gray-600">
            <p>If you do not have a Artnav Portal account, please contact:</p>
            <p className="mt-2">
              <a href="mailto:info@artnav.co" className="text-black hover:underline">
                info@artnav.co
              </a>
            </p>
          </div>
        </div>

        <div className="w-1/2 relative bg-gray-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/lovable-uploads/714b964e-d446-449a-ad96-7e462427ad36.png"
              alt="Artnav 2025"
              className="max-w-[80%] max-h-[80%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
