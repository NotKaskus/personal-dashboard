"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long.",
    })
    .refine((password) => /[A-Z]/.test(password), {
      message: "Password must contain at least one uppercase letter.",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "Password must contain at least one lowercase letter.",
    })
    .refine((password) => /[0-9]/.test(password), {
      message: "Password must contain at least one number.",
    })
    .refine((password) => /[^a-zA-Z0-9]/.test(password), {
      message: "Password must contain at least one special character.",
    }), // Thanks Github Co-pilot
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { errors } = form.formState;

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Do something with this
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl>
                <div>
                  <Input placeholder="iamawesom@cool.me" {...field} />
                  {errors.email && (
                    <FormMessage>{errors.email.message}</FormMessage>
                  )}
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormControl>
                <div>
                  <Input
                    type="password"
                    placeholder="Your secure password"
                    {...field}
                  />
                  {errors.password && (
                    <FormMessage>{errors.password.message}</FormMessage>
                  )}
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <Checkbox
                id="remember"
                aria-describedby="remember"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              />
            </div>
            <div className="ml-3 text-sm">
              <Label
                htmlFor="remember"
                className="text-gray-500 dark:text-gray-300"
              >
                Remember me
              </Label>
            </div>
          </div>
          <Link
            href="/forgot-password"
            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Forgot password?
          </Link>
        </div>
        <Button
          className="bg-[#1d4ed8] w-full rounded-lg text-sm px-5 py-2.5 text-center"
          type="submit"
        >
          Log in to your account
        </Button>
        {/* <div className="flex items-center justify-center my-4">
          <Separator className="flex-grow" fullWidth={false} />
          <span className="px-2 text-sm text-foreground">or continue with</span>
          <Separator className="flex-grow" fullWidth={false} />
        </div>
        <div className="flex items-center justify-center my-4">
          <Button className="bg-background hover:bg-[#e5e7eb] dark:hover:bg-[#374151]/100 border-1 mx-2 px-5 py-3 w-full inline-flex">
            <Image
              src="/assets/logo/discord-icon.svg"
              alt="Discord Signin Logo"
              width={20}
              height={20}
              className="h-5 w-5 mr-2"
            />
            <span className="text-primary">Discord</span>
          </Button>
          <Button className="bg-background hover:bg-[#e5e7eb] dark:hover:bg-[#374151]/100 border-1 mx-2 px-5 py-3 w-full inline-flex">
            <Image
              src="/assets/logo/github-icon.svg"
              alt="Discord Signin Logo"
              width={20}
              height={20}
              className="h-5 w-5 mr-2"
            />
            <span className="text-primary">Github</span>
          </Button>
        </div> */}
      </form>
    </Form>
  );
}
