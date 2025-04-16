
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { BellRing, Building2, CreditCard, Globe, Key, Lock, Settings as SettingsIcon, User } from "lucide-react";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your account and application preferences.</p>
        </div>
        
        <Tabs defaultValue="account" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:w-auto">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="company">Company</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="account" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
                <CardDescription>
                  Update your personal details and account preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position</Label>
                    <Input id="position" defaultValue="Fleet Manager" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Security & Authentication
                </CardTitle>
                <CardDescription>
                  Manage your password and account security settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </div>
                <div className="flex flex-col space-y-4 mt-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="2fa">Two-factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Switch id="2fa" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sessions">Active Sessions</Label>
                      <p className="text-sm text-muted-foreground">Manage your active sessions across devices</p>
                    </div>
                    <Button variant="outline">Manage</Button>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <Button>Update Security Settings</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="company" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Company Details
                </CardTitle>
                <CardDescription>
                  Manage your company information and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input id="company-name" defaultValue="Acme Logistics Inc." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business-type">Business Type</Label>
                    <Select defaultValue="logistics">
                      <SelectTrigger id="business-type">
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="logistics">Logistics</SelectItem>
                        <SelectItem value="transportation">Transportation</SelectItem>
                        <SelectItem value="delivery">Delivery Service</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tax-id">Tax ID / EIN</Label>
                    <Input id="tax-id" defaultValue="12-3456789" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" defaultValue="https://acme-logistics.example.com" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Business Address</Label>
                    <Input id="address" defaultValue="123 Logistics Way, Fleetville, CA 94107" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button>Save Company Details</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Billing Information
                </CardTitle>
                <CardDescription>
                  Manage your subscription and payment details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Current Plan</h4>
                      <div className="flex items-center mt-1">
                        <Badge>Professional</Badge>
                        <span className="ml-2 text-sm text-muted-foreground">$49.99/month</span>
                      </div>
                    </div>
                    <Button variant="outline">Upgrade Plan</Button>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Payment Method</h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-9 w-12 rounded border flex items-center justify-center bg-background">
                          <span className="text-xs font-bold">VISA</span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm">Visa ending in 4242</div>
                          <div className="text-xs text-muted-foreground">Expires 12/2025</div>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">Edit</Button>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Billing Address</h4>
                    <div className="text-sm">
                      <p>Acme Logistics Inc.</p>
                      <p>123 Logistics Way</p>
                      <p>Fleetville, CA 94107</p>
                      <p>United States</p>
                    </div>
                    <Button size="sm" variant="ghost" className="mt-2">Edit</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <BellRing className="h-5 w-5" />
                  Notification Preferences
                </CardTitle>
                <CardDescription>
                  Configure how you receive alerts and notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Vehicle Maintenance Alerts</Label>
                        <p className="text-sm text-muted-foreground">Receive alerts for scheduled maintenance</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="email-maintenance" className="text-sm">Email</Label>
                          <Switch id="email-maintenance" defaultChecked />
                        </div>
                        <div className="flex items-center gap-2">
                          <Label htmlFor="push-maintenance" className="text-sm">Push</Label>
                          <Switch id="push-maintenance" defaultChecked />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Route Deviation Notifications</Label>
                        <p className="text-sm text-muted-foreground">Get notified when vehicles go off-route</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="email-route" className="text-sm">Email</Label>
                          <Switch id="email-route" />
                        </div>
                        <div className="flex items-center gap-2">
                          <Label htmlFor="push-route" className="text-sm">Push</Label>
                          <Switch id="push-route" defaultChecked />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Fuel Level Warnings</Label>
                        <p className="text-sm text-muted-foreground">Be alerted when vehicle fuel is low</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="email-fuel" className="text-sm">Email</Label>
                          <Switch id="email-fuel" />
                        </div>
                        <div className="flex items-center gap-2">
                          <Label htmlFor="push-fuel" className="text-sm">Push</Label>
                          <Switch id="push-fuel" defaultChecked />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Weekly Reports</Label>
                        <p className="text-sm text-muted-foreground">Receive weekly performance reports</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="email-reports" className="text-sm">Email</Label>
                          <Switch id="email-reports" defaultChecked />
                        </div>
                        <div className="flex items-center gap-2">
                          <Label htmlFor="push-reports" className="text-sm">Push</Label>
                          <Switch id="push-reports" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="integrations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  External Integrations
                </CardTitle>
                <CardDescription>
                  Connect with third-party services and APIs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded bg-gray-100 flex items-center justify-center">
                          <SettingsIcon className="h-6 w-6 text-gray-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">GPS Tracking Service</h4>
                          <p className="text-sm text-muted-foreground">Connect to real-time GPS tracking</p>
                        </div>
                      </div>
                      <Button variant="outline">Connect</Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded bg-gray-100 flex items-center justify-center">
                          <Key className="h-6 w-6 text-gray-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Maintenance Management</h4>
                          <p className="text-sm text-muted-foreground">Link to your maintenance software</p>
                        </div>
                      </div>
                      <Button variant="outline">Connect</Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded bg-gray-100 flex items-center justify-center">
                          <CreditCard className="h-6 w-6 text-gray-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Fuel Card Integration</h4>
                          <p className="text-sm text-muted-foreground">Connect your fuel card accounts</p>
                        </div>
                      </div>
                      <Button variant="outline">Connect</Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded bg-green-100 flex items-center justify-center">
                          <Building2 className="h-6 w-6 text-green-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Accounting Software</h4>
                          <p className="text-sm text-muted-foreground">Export data to your accounting system</p>
                          <Badge className="mt-1 bg-green-500">Connected</Badge>
                        </div>
                      </div>
                      <Button variant="outline">Manage</Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded bg-gray-100 flex items-center justify-center">
                          <Globe className="h-6 w-6 text-gray-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">API Access</h4>
                          <p className="text-sm text-muted-foreground">Configure API keys and permissions</p>
                        </div>
                      </div>
                      <Button variant="outline">Configure</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
