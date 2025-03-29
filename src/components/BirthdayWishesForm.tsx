
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Please enter your name" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  message: z.string().min(10, { message: "Message should be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const BirthdayWishesForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Using FormSubmit without captcha or redirect
      const response = await fetch("https://formsubmit.co/ajax/adelekem600@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: `Birthday Wish for Ereyigabubari from ${data.name}`,
          _captcha: "false",
          _template: "table"
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Birthday wish sent!",
          description: "Your message has been sent to Ereyigabubari.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send the message");
      }
    } catch (error) {
      toast({
        title: "Failed to send",
        description: "There was a problem sending your birthday wish. Please try again.",
        variant: "destructive",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 border border-birthday-blue/20">
      <h3 className="text-2xl font-dancing font-bold mb-4 text-gray-800">
        Send Your Birthday Wishes
      </h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Your Name</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    placeholder="Enter your name" 
                    className="border-birthday-blue/30 focus-visible:ring-birthday-blue"
                  />
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
                <FormLabel className="text-gray-700">Your Email</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    type="email" 
                    placeholder="Enter your email" 
                    className="border-birthday-blue/30 focus-visible:ring-birthday-blue"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Your Message</FormLabel>
                <FormControl>
                  <Textarea 
                    {...field} 
                    placeholder="Write your birthday wish here..." 
                    className="min-h-[120px] border-birthday-blue/30 focus-visible:ring-birthday-blue"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit"
            className="w-full bg-birthday-blue hover:bg-birthday-gold text-white font-medium py-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" /> Send Birthday Wish
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BirthdayWishesForm;
