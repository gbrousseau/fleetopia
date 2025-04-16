
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Battery, LocateFixed, Fuel } from 'lucide-react';

interface Alert {
  id: string;
  vehicleId: string;
  vehicleName: string;
  type: 'fuel' | 'battery' | 'location' | 'maintenance';
  message: string;
  timestamp: string;
}

const alerts: Alert[] = [
  {
    id: 'a1',
    vehicleId: 'VH-1003',
    vehicleName: 'Delivery Truck 3',
    type: 'fuel',
    message: 'Low fuel level (10%)',
    timestamp: '10 minutes ago',
  },
  {
    id: 'a2',
    vehicleId: 'VH-1008',
    vehicleName: 'Courier Car 5',
    type: 'battery',
    message: 'Battery voltage low',
    timestamp: '25 minutes ago',
  },
  {
    id: 'a3',
    vehicleId: 'VH-1012',
    vehicleName: 'Delivery Van 7',
    type: 'location',
    message: 'Off designated route',
    timestamp: '45 minutes ago',
  },
];

const getAlertIcon = (type: string) => {
  switch (type) {
    case 'fuel':
      return <Fuel className="h-5 w-5 text-amber-500" />;
    case 'battery':
      return <Battery className="h-5 w-5 text-red-500" />;
    case 'location':
      return <LocateFixed className="h-5 w-5 text-purple-500" />;
    default:
      return <AlertTriangle className="h-5 w-5 text-amber-500" />;
  }
};

export const ActiveAlerts: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-semibold flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Active Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        {alerts.length > 0 ? (
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-start space-x-3 border-b border-border pb-3">
                <div>{getAlertIcon(alert.type)}</div>
                <div className="flex-1">
                  <div className="font-medium">{alert.vehicleName}</div>
                  <div className="text-sm text-muted-foreground">ID: {alert.vehicleId}</div>
                  <div className="text-sm mt-1">{alert.message}</div>
                  <div className="text-xs text-muted-foreground mt-1">{alert.timestamp}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-32 text-muted-foreground">
            No active alerts at this time
          </div>
        )}
      </CardContent>
    </Card>
  );
};
