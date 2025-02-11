
import MainLayout from "@/components/layouts/MainLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  galleryName: z.string().min(2, {
    message: "Gallery name must be at least 2 characters.",
  }),
  primaryContactName: z.string().min(2, {
    message: "Contact name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  position: z.string().min(2, {
    message: "Position must be at least 2 characters.",
  }),
  website: z.string().url({
    message: "Please enter a valid URL.",
  }),
  exhibitType: z.string().min(2, {
    message: "Exhibit type must be at least 2 characters.",
  }),
  boothPreference: z.string().min(2, {
    message: "Booth preference must be at least 2 characters.",
  }),
  representedArtists: z.string().min(2, {
    message: "Please list at least one artist.",
  }),
  yearEstablished: z.string().min(4, {
    message: "Please enter a valid year.",
  }),
  previousFairs: z.string(),
  proposedProgram: z.string().min(50, {
    message: "Please provide a detailed program description (minimum 50 characters).",
  }),
});

const Applications = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      galleryName: "",
      primaryContactName: "",
      email: "",
      phone: "",
      position: "",
      website: "",
      exhibitType: "",
      boothPreference: "",
      representedArtists: "",
      yearEstablished: "",
      previousFairs: "",
      proposedProgram: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Application submitted successfully!");
  }

  return (
    <MainLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Gallery Application Form</h1>
        <div className="max-w-2xl bg-white p-6 rounded-lg shadow">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="galleryName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gallery Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter gallery name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="primaryContactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Contact Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter contact name" {...field} />
                    </FormControl>
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
                      <Input placeholder="Enter email address" type="email" {...field} />
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
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter position" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter website URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="exhibitType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Exhibit Type</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter exhibit type" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="boothPreference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Booth Preference</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter booth preference" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="representedArtists"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Represented Artists</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Enter represented artists (one per line)" 
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="yearEstablished"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year Established</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter year established" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="previousFairs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Previous Fairs</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Enter previous fairs (optional)" 
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="proposedProgram"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Proposed Program</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Enter proposed program details" 
                        className="min-h-[150px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">Submit Application</Button>
            </form>
          </Form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Applications;
