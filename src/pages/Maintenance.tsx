
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Plus, Search, Wrench } from "lucide-react";

const maintenanceItems = [
  { id: 'm1', vehicleId: 'VH-1001', name: 'Delivery Truck 1', type: 'Oil Change', status: 'scheduled', date: '2025-04-20', assignee: 'John Mechanic', cost: '$120' },
  { id: 'm2', vehicleId: 'VH-1002', name: 'Delivery Van 3', type: 'Tire Rotation', status: 'scheduled', date: '2025-04-25', assignee: 'Sarah Tech', cost: '$80' },
  { id: 'm3', vehicleId: 'VH-1003', name: 'Delivery Truck 3', type: 'Brake Replacement', status: 'in-progress', date: '2025-04-16', assignee: 'Mike Repair', cost: '$350' },
  { id: 'm4', vehicleId: 'VH-1005', name: 'Courier Car 2', type: 'Brake Inspection', status: 'scheduled', date: '2025-05-02', assignee: 'John Mechanic', cost: '$50' },
  { id: 'm5', vehicleId: 'VH-1008', name: 'Courier Car 5', type: 'Battery Replacement', status: 'in-progress', date: '2025-04-17', assignee: 'Sarah Tech', cost: '$200' },
  { id: 'm6', vehicleId: 'VH-1010', name: 'Delivery Van 5', type: 'Full Service', status: 'completed', date: '2025-04-10', assignee: 'Mike Repair', cost: '$450' },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'scheduled':
      return <Badge className="bg-blue-500 hover:bg-blue-600">Scheduled</Badge>;
    case 'in-progress':
      return <Badge className="bg-amber-500 hover:bg-amber-600">In Progress</Badge>;
    case 'completed':
      return <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>;
    default:
      return <Badge>Unknown</Badge>;
  }
};

const Maintenance = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Maintenance Management</h1>
            <p className="text-muted-foreground">Schedule and track vehicle maintenance operations.</p>
          </div>
          <Button className="shrink-0">
            <Plus className="h-4 w-4 mr-2" />
            New Maintenance
          </Button>
        </div>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Wrench className="h-5 w-5" />
              Maintenance Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="upcoming">
              <div className="flex justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="all">All</TabsTrigger>
                </TabsList>
                
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="pl-9 w-[200px]"
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Calendar className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <TabsContent value="upcoming" className="mt-0">
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Vehicle</TableHead>
                        <TableHead>Maintenance Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Assignee</TableHead>
                        <TableHead>Est. Cost</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {maintenanceItems.filter(item => item.status === 'scheduled').map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-xs text-muted-foreground">{item.vehicleId}</div>
                          </TableCell>
                          <TableCell>{item.type}</TableCell>
                          <TableCell>{getStatusBadge(item.status)}</TableCell>
                          <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
                          <TableCell>{item.assignee}</TableCell>
                          <TableCell>{item.cost}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              
              <TabsContent value="in-progress" className="mt-0">
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Vehicle</TableHead>
                        <TableHead>Maintenance Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Assignee</TableHead>
                        <TableHead>Est. Cost</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {maintenanceItems.filter(item => item.status === 'in-progress').map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-xs text-muted-foreground">{item.vehicleId}</div>
                          </TableCell>
                          <TableCell>{item.type}</TableCell>
                          <TableCell>{getStatusBadge(item.status)}</TableCell>
                          <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
                          <TableCell>{item.assignee}</TableCell>
                          <TableCell>{item.cost}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              
              <TabsContent value="completed" className="mt-0">
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Vehicle</TableHead>
                        <TableHead>Maintenance Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Assignee</TableHead>
                        <TableHead>Est. Cost</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {maintenanceItems.filter(item => item.status === 'completed').map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-xs text-muted-foreground">{item.vehicleId}</div>
                          </TableCell>
                          <TableCell>{item.type}</TableCell>
                          <TableCell>{getStatusBadge(item.status)}</TableCell>
                          <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
                          <TableCell>{item.assignee}</TableCell>
                          <TableCell>{item.cost}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              
              <TabsContent value="all" className="mt-0">
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Vehicle</TableHead>
                        <TableHead>Maintenance Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Assignee</TableHead>
                        <TableHead>Est. Cost</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {maintenanceItems.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-xs text-muted-foreground">{item.vehicleId}</div>
                          </TableCell>
                          <TableCell>{item.type}</TableCell>
                          <TableCell>{getStatusBadge(item.status)}</TableCell>
                          <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
                          <TableCell>{item.assignee}</TableCell>
                          <TableCell>{item.cost}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Maintenance;
