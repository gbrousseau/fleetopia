
import React from 'react';
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Activity, BarChart3, CalendarRange, TrendingUp } from "lucide-react";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const fuelConsumptionData = [
  { name: 'Jan', consumption: 310 },
  { name: 'Feb', consumption: 280 },
  { name: 'Mar', consumption: 320 },
  { name: 'Apr', consumption: 290 },
  { name: 'May', consumption: 350 },
  { name: 'Jun', consumption: 330 },
  { name: 'Jul', consumption: 375 },
];

const maintenanceCostData = [
  { name: 'Truck', cost: 8500 },
  { name: 'Van', cost: 5200 },
  { name: 'Car', cost: 3800 },
];

const routeEfficiencyData = [
  { date: '04/10', completed: 18, planned: 20, efficiency: 90 },
  { date: '04/11', completed: 19, planned: 22, efficiency: 86 },
  { date: '04/12', completed: 20, planned: 22, efficiency: 91 },
  { date: '04/13', completed: 17, planned: 18, efficiency: 94 },
  { date: '04/14', completed: 21, planned: 24, efficiency: 88 },
  { date: '04/15', completed: 22, planned: 25, efficiency: 88 },
  { date: '04/16', completed: 23, planned: 25, efficiency: 92 },
];

const driverPerformanceData = [
  { name: 'Michael B.', deliveries: 152, onTime: 148, rating: 4.8 },
  { name: 'Sarah J.', deliveries: 163, onTime: 155, rating: 4.7 },
  { name: 'David W.', deliveries: 147, onTime: 138, rating: 4.5 },
  { name: 'Emily D.', deliveries: 175, onTime: 172, rating: 4.9 },
  { name: 'James M.', deliveries: 142, onTime: 135, rating: 4.6 },
];

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Fleet Analytics</h1>
            <p className="text-muted-foreground">Analyze performance metrics and optimize operations.</p>
          </div>
          <div className="flex items-center gap-3">
            <Select defaultValue="30d">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="12m">Last 12 months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Tabs defaultValue="performance" className="space-y-4">
          <TabsList>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="costs">Costs</TabsTrigger>
            <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
            <TabsTrigger value="drivers">Drivers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="performance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Fleet Performance Metrics
                </CardTitle>
                <CardDescription>
                  Key performance indicators for your entire fleet
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={routeEfficiencyData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <defs>
                        <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#1E88E5" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#1E88E5" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="colorPlanned" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#43A047" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#43A047" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="completed" stroke="#1E88E5" fillOpacity={1} fill="url(#colorCompleted)" />
                      <Area type="monotone" dataKey="planned" stroke="#43A047" fillOpacity={1} fill="url(#colorPlanned)" />
                      <Line type="monotone" dataKey="efficiency" stroke="#8E24AA" strokeWidth={2} dot={{ r: 4 }} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="costs" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Fuel Consumption Trends
                  </CardTitle>
                  <CardDescription>
                    Monthly fuel usage in liters
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={fuelConsumptionData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="consumption" name="Fuel (L)" fill="#1E88E5" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Maintenance Costs by Vehicle Type
                  </CardTitle>
                  <CardDescription>
                    Total maintenance expenditure
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={maintenanceCostData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={5}
                          dataKey="cost"
                          nameKey="name"
                          label
                        >
                          <Cell fill="#1E88E5" />
                          <Cell fill="#43A047" />
                          <Cell fill="#8E24AA" />
                        </Pie>
                        <Tooltip formatter={(value) => [`$${value}`, 'Cost']} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="efficiency" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <CalendarRange className="h-5 w-5" />
                  Route Completion Efficiency
                </CardTitle>
                <CardDescription>
                  Planned vs. completed routes and efficiency percentage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={routeEfficiencyData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="date" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" domain={[60, 100]} />
                      <Tooltip />
                      <Legend />
                      <Bar yAxisId="left" dataKey="planned" name="Planned Routes" fill="#1E88E5" radius={[4, 4, 0, 0]} />
                      <Bar yAxisId="left" dataKey="completed" name="Completed Routes" fill="#43A047" radius={[4, 4, 0, 0]} />
                      <Line yAxisId="right" type="monotone" dataKey="efficiency" name="Efficiency %" stroke="#8E24AA" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="drivers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Driver Performance Metrics
                </CardTitle>
                <CardDescription>
                  Delivery statistics and ratings by driver
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={driverPerformanceData}
                      margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" domain={[0, 5]} />
                      <Tooltip />
                      <Legend />
                      <Bar yAxisId="left" dataKey="deliveries" name="Total Deliveries" fill="#1E88E5" radius={[4, 4, 0, 0]} />
                      <Bar yAxisId="left" dataKey="onTime" name="On-Time Deliveries" fill="#43A047" radius={[4, 4, 0, 0]} />
                      <Line yAxisId="right" type="monotone" dataKey="rating" name="Rating (0-5)" stroke="#8E24AA" strokeWidth={2} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
