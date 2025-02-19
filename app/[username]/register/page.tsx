"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { UserPlus } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(3, "Name must be at least 3 characters"),
  phone: z.string().regex(/^(\+62|62|0)8[1-9][0-9]{6,9}$/, "Please enter a valid Indonesian phone number"),
  email: z.string().email("Please enter a valid email address"),
  enableInstagram: z.boolean().default(false),
  instagram: z.string().optional(),
  enableFacebook: z.boolean().default(false),
  facebook: z.string().optional(),
  enableTwitter: z.boolean().default(false),
  twitter: z.string().optional(),
}).refine((data) => {
  if (data.enableInstagram && !data.instagram) {
    return false;
  }
  if (data.enableFacebook && !data.facebook) {
    return false;
  }
  if (data.enableTwitter && !data.twitter) {
    return false;
  }
  return true;
}, {
  message: "Social media username is required when enabled",
  path: ["instagram", "facebook", "twitter"],
});

export default function RegisterPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      enableInstagram: false,
      instagram: "",
      enableFacebook: false,
      facebook: "",
      enableTwitter: false,
      twitter: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
  }

  return (
    <div className="container max-w-2xl mx-auto py-10 pt-16">
      <Card>
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2">
            <UserPlus className="w-6 h-6" />
            <CardTitle className="text-2xl">Agent Registration</CardTitle>
          </div>
          <CardDescription>
            Register as a new car sales agent. Please fill in your details below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number (WhatsApp)</FormLabel>
                    <FormControl>
                      <Input placeholder="08123456789" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter your Indonesian phone number (e.g., 08123456789)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Social Media (Optional)</h3>

                <div className="space-y-4">
                  <div className="flex flex-col gap-4">
                    <FormField
                      control={form.control}
                      name="enableInstagram"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Instagram</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    {form.watch("enableInstagram") && (
                      <FormField
                        control={form.control}
                        name="instagram"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="@username" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>

                  <div className="flex flex-col gap-4">
                    <FormField
                      control={form.control}
                      name="enableFacebook"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Facebook</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    {form.watch("enableFacebook") && (
                      <FormField
                        control={form.control}
                        name="facebook"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Profile URL or username" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>

                  <div className="flex flex-col gap-4">
                    <FormField
                      control={form.control}
                      name="enableTwitter"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>X (Twitter)</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    {form.watch("enableTwitter") && (
                      <FormField
                        control={form.control}
                        name="twitter"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="@username" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full">Register</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}