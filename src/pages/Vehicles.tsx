
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Car, Plus, Search } from "lucide-react";

const vehiclesData = [
  { id: 'VH-1001', name: 'Delivery Truck 1', type: 'Truck', status: 'active', driver: 'Michael Brown', location: 'Chicago', lastService: '2025-03-10' },
  { id: 'VH-1002', name: 'Delivery Van 3', type: 'Van', status: 'active', driver: 'Sarah Johnson', location: 'New York', lastService: '2025-03-15' },
  { id: 'VH-1003', name: 'Delivery Truck 3', type: 'Truck', status: 'maintenance', driver: 'David Wilson', location: 'Garage', lastService: '2025-04-01' },
  { id: 'VH-1004', name: 'Courier Car 1', type: 'Car', status: 'active', driver: 'Emily Davis', location: 'Los Angeles', lastService: '2025-02-28' },
  { id: 'VH-1005', name: 'Courier Car 2', type: 'Car', status: 'inactive', driver: 'Unassigned', location: 'Garage', lastService: '2025-03-22' },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active':
      return <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>;
    case 'maintenance':
      return <Badge className="bg-amber-500 hover:bg-amber-600">Maintenance</Badge>;
    case 'inactive':
      return <Badge className="bg-red-500 hover:bg-red-600">Inactive</Badge>;
    default:
      return <Badge>Unknown</Badge>;
  }
};

const Vehicles = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Fleet Vehicles</h1>
            <p className="text-muted-foreground">Manage and monitor all vehicles in your fleet.</p>
          </div>
          <Button className="shrink-0">
            <Plus className="h-4 w-4 mr-2" />
            Add Vehicle
          </Button>
        </div>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Car className="h-5 w-5" />
              Vehicle Inventory
            </CardTitle>
            <CardDescription>
              Total of {vehiclesData.length} vehicles in your fleet
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between mb-4">
              <div className="relative max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search vehicles..."
                  className="pl-9 w-[300px] max-w-full"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  Export
                </Button>
              </div>
            </div>
            
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Driver</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Last Service</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vehiclesData.map((vehicle) => (
                    <TableRow key={vehicle.id}>
                      <TableCell className="font-medium">{vehicle.id}</TableCell>
                      <TableCell>{vehicle.name}</TableCell>
                      <TableCell>{vehicle.type}</TableCell>
                      <TableCell>{getStatusBadge(vehicle.status)}</TableCell>
                      <TableCell>{vehicle.driver}</TableCell>
                      <TableCell>{vehicle.location}</TableCell>
                      <TableCell>{new Date(vehicle.lastService).toLocaleDateString()}</TableCell>
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
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Vehicles;
