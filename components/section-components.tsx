"use client"

import { Star, Scissors, MapPin } from "lucide-react"
import { Button } from "@salonradar/ui/button"
import { Badge } from "@salonradar/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@salonradar/ui/card"
import { Input } from "@salonradar/ui/input"
import { Label } from "@salonradar/ui/label"
import { Textarea } from "@salonradar/ui/textarea"
import { Switch } from "@salonradar/ui/switch"
import { Separator } from "@salonradar/ui/separator"
import { Avatar, AvatarFallback } from "@salonradar/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@salonradar/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@salonradar/ui/tabs"

export function SectionComponents() {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      {/* Buttons + badges */}
      <Card>
        <CardHeader>
          <CardTitle>Buttons &amp; badges</CardTitle>
          <CardDescription>All variants and sizes from the system.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Button>Book now</Button>
            <Button variant="secondary">Save</Button>
            <Button variant="outline">Details</Button>
            <Button variant="ghost">Skip</Button>
            <Button variant="destructive">Cancel</Button>
            <Button variant="link">Learn more</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Trim">
              <Scissors />
            </Button>
          </div>
          <Separator />
          <div className="flex flex-wrap gap-2">
            <Badge>New</Badge>
            <Badge variant="secondary">Popular</Badge>
            <Badge variant="outline">Verified</Badge>
            <Badge variant="destructive">Closed</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Booking form */}
      <Card>
        <CardHeader>
          <CardTitle>Booking request</CardTitle>
          <CardDescription>Form primitives composed together.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="pet">Pet name</Label>
            <Input id="pet" placeholder="e.g. Biscuit" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="service">Service</Label>
            <Select>
              <SelectTrigger id="service">
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full">Full groom</SelectItem>
                <SelectItem value="bath">Bath &amp; brush</SelectItem>
                <SelectItem value="nails">Nail trim</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" placeholder="Anything the groomer should know?" />
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border p-3">
            <div className="space-y-0.5">
              <Label htmlFor="reminders">SMS reminders</Label>
              <p className="text-xs text-muted-foreground">Get a text before the appointment.</p>
            </div>
            <Switch id="reminders" defaultChecked />
          </div>
        </CardContent>
        <CardFooter className="gap-3">
          <Button className="flex-1">Request booking</Button>
          <Button variant="outline">Save draft</Button>
        </CardFooter>
      </Card>

      {/* Salon card with tabs */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Halo Studio</CardTitle>
          <CardDescription className="flex items-center gap-1">
            <MapPin className="size-3.5" /> Shoreditch, London
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="services">
            <TabsList>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
            </TabsList>
            <TabsContent value="services" className="mt-4 grid gap-3 sm:grid-cols-3">
              {["Full groom · £48", "Puppy intro · £30", "De-shed · £55"].map((s) => (
                <div key={s} className="rounded-lg border border-border p-4 text-sm">
                  {s}
                </div>
              ))}
            </TabsContent>
            <TabsContent value="reviews" className="mt-4 space-y-3">
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">4.9 · 212 reviews</span>
              </div>
              <p className="text-sm text-muted-foreground">
                &ldquo;Biscuit came back happy and impossibly soft. Booking took 30 seconds.&rdquo;
              </p>
            </TabsContent>
            <TabsContent value="team" className="mt-4 flex flex-wrap gap-4">
              {["AM", "JS", "MR", "RO"].map((initials) => (
                <div key={initials} className="flex items-center gap-2">
                  <Avatar>
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">Groomer</span>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}
