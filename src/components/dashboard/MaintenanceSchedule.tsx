
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Wrench, Calendar, AlertTriangle } from 'lucide-react';

interface MaintenanceItem {
  id: string;
  vehicleId: string;
  vehicleName: string;
  maintenanceType: string;
  date: string;
  urgency: 'low' | 'medium' | 'high';
}

const maintenanceItems: MaintenanceItem[] = [
  {
    id: 'm1',
    vehicleId: 'VH-1001',
    vehicleName: 'Delivery Truck 1',
    maintenanceType: 'Oil Change',
    date: '2025-04-20',
    urgency: 'high',
  },
  {
    id: 'm2',
    vehicleId: 'VH-1002',
    vehicleName: 'Delivery Van 3',
    maintenanceType: 'Tire Rotation',
    date: '2025-04-25',
    urgency: 'medium',
  },
  {
    id: 'm3',
    vehicleId: 'VH-1005',
    vehicleName: 'Courier Car 2',
    maintenanceType: 'Brake Inspection',
    date: '2025-05-02',
    urgency: 'low',
  },
];

const getUrgencyColor = (urgency: string) => {
  switch (urgency) {
    case 'high':
      return 'bg-red-500 hover:bg-red-600';
    case 'medium':
      return 'bg-amber-500 hover:bg-amber-600';
    case 'low':
      return 'bg-green-500 hover:bg-green-600';
    default:
      return 'bg-blue-500 hover:bg-blue-600';
  }
};

export const MaintenanceSchedule: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-semibold flex items-center gap-2">
          <Wrench className="h-5 w-5" />
          Upcoming Maintenance
        </CardTitle>
        <Badge variant="outline" className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          Next 30 days
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {maintenanceItems.map((item) => (
            <div key={item.id} className="flex items-start justify-between border-b border-border pb-3">
              <div>
                <div className="font-medium">{item.vehicleName}</div>
                <div className="text-sm text-muted-foreground">ID: {item.vehicleId}</div>
                <div className="text-sm mt-1">{item.maintenanceType}</div>
              </div>
              <div className="flex flex-col items-end">
                <Badge variant="secondary" className={`${getUrgencyColor(item.urgency)}`}>
                  {item.urgency === 'high' && <AlertTriangle className="h-3 w-3 mr-1" />}
                  {item.urgency.charAt(0).toUpperCase() + item.urgency.slice(1)}
                </Badge>
                <div className="text-sm mt-1">{new Date(item.date).toLocaleDateString()}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
