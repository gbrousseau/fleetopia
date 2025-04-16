
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Map, MapPin } from 'lucide-react';

export const VehicleMap: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-semibold flex items-center gap-2">
          <Map className="h-5 w-5" />
          Vehicle Location Map
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 overflow-hidden rounded-b-lg">
        <div className="h-[300px] relative bg-gray-100 flex items-center justify-center">
          <div className="text-center p-4">
            <div className="flex items-center justify-center mb-2">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <p className="text-muted-foreground">Interactive map with real-time vehicle tracking</p>
            <p className="text-xs mt-2 text-muted-foreground">(Connect to GPS provider to enable)</p>
          </div>
          
          {/* Placeholder for the map - in a real app, this would be a proper mapping component */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
              <path d="M100,200 Q400,50 700,200" stroke="#1E88E5" strokeWidth="2" fill="none" strokeDasharray="5,5" />
              <path d="M100,200 Q400,350 700,200" stroke="#43A047" strokeWidth="2" fill="none" strokeDasharray="5,5" />
              <circle cx="200" cy="150" r="8" fill="#1E88E5" />
              <circle cx="400" cy="120" r="8" fill="#1E88E5" />
              <circle cx="600" cy="170" r="8" fill="#1E88E5" />
              <circle cx="300" cy="250" r="8" fill="#43A047" />
              <circle cx="500" cy="280" r="8" fill="#43A047" />
            </svg>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
