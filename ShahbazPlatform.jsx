
// SHAHBAZ Platform UI with Automation Logic (Expanded for AI Simulation + Real Users)

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Video, ShieldCheck, Globe, Coins } from "lucide-react";

function generateUsers(count) {
  const names = ["Ali", "Sara", "John", "Maria", "Ahmed", "Fatima", "David", "Zara", "Usman", "Lina"];
  const types = ["Free", "Pro", "Business"];
  const users = [];
  for (let i = 0; i < count; i++) {
    const name = `👤 ${names[i % names.length]} ${Math.floor(Math.random() * 9999)}`;
    const type = types[i % types.length];
    users.push({ name, type });
  }
  return users;
}

export default function ShahbazPlatform() {
  const [autoSync, setAutoSync] = useState(false);
  const [users, setUsers] = useState(() => generateUsers(10000000));
  const [earnings, setEarnings] = useState({ total: 215000, shahbazShare: 10750 });

  // 🔄 Auto Sync every 10 seconds (simulated + boost)
  useEffect(() => {
    if (autoSync) {
      const interval = setInterval(() => {
        console.log("🔄 Auto-Sync Activated with AI Simulation...");
        const newUsers = generateUsers(1000);
        setUsers((prev) => [...newUsers, ...prev]);
        setEarnings((prev) => {
          const newTotal = prev.total + 25000;
          return {
            total: newTotal,
            shahbazShare: newTotal * 0.05,
          };
        });
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [autoSync]);

  const handleSyncToggle = () => {
    setAutoSync(!autoSync);
  };

  return (
    <div className="p-4 bg-gradient-to-br from-green-100 to-yellow-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-green-800">🦅 SHAHBAZ Platform</h1>
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid grid-cols-4 gap-2 mb-4">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <Card className="bg-white/80 shadow-md rounded-2xl">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">📊 Platform Status</h2>
              <p className="mb-2">Total Users: <b>{users.length.toLocaleString()}+</b></p>
              <p className="mb-2">Active Ads: <b>320</b></p>
              <Progress value={76} className="h-3 rounded-full" />
              <p className="text-sm mt-1">76% Complete</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users">
          <Card className="bg-white/90 shadow rounded-2xl">
            <CardContent className="p-4">
              <h2 className="text-lg font-bold mb-2">User List (Sample)</h2>
              <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-scroll">
                {users.slice(0, 100).map((user, idx) => (
                  <div key={idx} className="p-3 bg-green-50 rounded-xl shadow">
                    <p>{user.name}</p>
                    <Badge className={
                      user.type === "Pro" ? "bg-yellow-500" :
                      user.type === "Business" ? "bg-green-600 text-white" :
                      ""
                    }>{user.type}</Badge>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">Total {users.length.toLocaleString()} users in the system (showing top 100)</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="earnings">
          <Card className="bg-white/90 shadow rounded-2xl">
            <CardContent className="p-4">
              <h2 className="text-lg font-bold mb-2">💰 Earnings Overview</h2>
              <p>Total Revenue: <b>PKR {earnings.total.toLocaleString()}</b></p>
              <p>SHAHBAZ Share (5%): <b>PKR {earnings.shahbazShare.toLocaleString()}</b></p>
              {autoSync && <p className="text-sm text-green-600 mt-2">🔄 Auto Sync with AI Simulation running...</p>}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="bg-white/90 shadow rounded-2xl">
            <CardContent className="p-4 space-y-4">
              <h2 className="text-lg font-bold">⚙️ Settings</h2>
              <Input placeholder="Add new user" />
              <Textarea placeholder="Enable auto sync of public data" />
              <Button variant="default" onClick={handleSyncToggle}>
                {autoSync ? "Stop Sync" : "Start Sync (AI + Growth Boost)"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
