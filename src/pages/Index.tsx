
import { 
  Activity,
  Car, 
  Clock, 
  Fuel, 
  LocateFixed, 
  Settings, 
  TrendingUp, 
  Users, 
  Wrench 
} from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { VehicleStatusChart } from "@/components/dashboard/VehicleStatusChart";
import { FleetUsageChart } from "@/components/dashboard/FleetUsageChart";
import { MaintenanceSchedule } from "@/components/dashboard/MaintenanceSchedule";
import { VehicleMap } from "@/components/dashboard/VehicleMap";
import { ActiveAlerts } from "@/components/dashboard/ActiveAlerts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Fleet Dashboard</h1>
          <p className="text-muted-foreground">Overview of your fleet performance and status.</p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard 
            title="Total Vehicles" 
            value="55" 
            icon={Car}
            trend={{ value: 12, isPositive: true }}
          />
          <StatsCard 
            title="Active Drivers" 
            value="42" 
            icon={Users}
            trend={{ value: 8, isPositive: true }}
          />
          <StatsCard 
            title="Total Distance" 
            value="13,248 km" 
            icon={LocateFixed}
            trend={{ value: 23, isPositive: true }}
          />
          <StatsCard 
            title="Fuel Usage" 
            value="1,432 L" 
            icon={Fuel}
            trend={{ value: 5, isPositive: false }}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-md font-semibold flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Fleet Usage
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <FleetUsageChart />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-md font-semibold flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Vehicle Status
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <VehicleStatusChart />
            </CardContent>
          </Card>
        </div>

        {/* Map, Maintenance and Alerts Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <VehicleMap />
          </div>
          
          <div className="md:col-span-1">
            <div className="space-y-4">
              <MaintenanceSchedule />
              <ActiveAlerts />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
