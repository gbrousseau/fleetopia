
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Map, Plus, Route, Search } from "lucide-react";

const routesData = [
  { id: 'RT-1001', name: 'Downtown Delivery', vehicle: 'VH-1001', driver: 'Michael Brown', status: 'active', distance: '42 km', stops: 8, eta: '2h 15m' },
  { id: 'RT-1002', name: 'East Side Distribution', vehicle: 'VH-1002', driver: 'Sarah Johnson', status: 'active', distance: '37 km', stops: 12, eta: '3h 20m' },
  { id: 'RT-1003', name: 'Airport Delivery', vehicle: 'VH-1004', driver: 'Emily Davis', status: 'completed', distance: '25 km', stops: 5, eta: '0h 0m' },
  { id: 'RT-1004', name: 'North Zone Route', vehicle: 'VH-1006', driver: 'James Miller', status: 'planned', distance: '52 km', stops: 15, eta: '4h 30m' },
  { id: 'RT-1005', name: 'West Industrial Area', vehicle: 'VH-1010', driver: 'Robert Taylor', status: 'active', distance: '48 km', stops: 10, eta: '3h 45m' },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active':
      return <Badge className="bg-green-500 hover:bg-green-600">In Progress</Badge>;
    case 'planned':
      return <Badge className="bg-blue-500 hover:bg-blue-600">Planned</Badge>;
    case 'completed':
      return <Badge className="bg-gray-500 hover:bg-gray-600">Completed</Badge>;
    default:
      return <Badge>Unknown</Badge>;
  }
};

const Routes = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Route Management</h1>
            <p className="text-muted-foreground">Track and optimize delivery routes.</p>
          </div>
          <Button className="shrink-0">
            <Plus className="h-4 w-4 mr-2" />
            Create Route
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Route className="h-5 w-5" />
                  Active Routes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative max-w-sm mb-4">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search routes..."
                    className="pl-9 w-full"
                  />
                </div>
                
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Driver</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {routesData.map((route) => (
                        <TableRow key={route.id}>
                          <TableCell className="font-medium">{route.name}</TableCell>
                          <TableCell>{getStatusBadge(route.status)}</TableCell>
                          <TableCell>{route.driver}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Map className="h-5 w-5" />
                  Route Visualization
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 overflow-hidden rounded-b-lg">
                <div className="h-[400px] bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-muted-foreground">Select a route to view detailed visualization</p>
                    <p className="text-xs mt-2 text-muted-foreground">(Map integration will display selected route details)</p>
                  </div>
                  
                  {/* Placeholder for the map visualization */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
                      <path d="M100,200 C200,100 300,300 400,200 C500,100 600,300 700,200" stroke="#1E88E5" strokeWidth="3" fill="none" />
                      <circle cx="100" cy="200" r="10" fill="#FFB300" />
                      <circle cx="250" cy="150" r="8" fill="#1E88E5" />
                      <circle cx="400" cy="200" r="8" fill="#1E88E5" />
                      <circle cx="550" cy="150" r="8" fill="#1E88E5" />
                      <circle cx="700" cy="200" r="10" fill="#43A047" />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Routes;
