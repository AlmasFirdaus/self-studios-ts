'use client';
import { contacts } from '@/lib/data/contacts';
import Image from 'next/image';
import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type messageFormType = z.infer<typeof messageFormSchema>;

const messageFormSchema = z.object({
  firstname: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  lastname: z.string(),
  email: z.string().email('Email tidak valid').min(1, 'Email tidak boleh kosong'),
  message: z.string().min(6, 'Message minimal 6 karakter'),
});

const Page = () => {
  const form = useForm<messageFormType>({
    resolver: zodResolver(messageFormSchema),
  });

  const onSubmit = (data: messageFormType) => {
    console.log(data);
  };

  return (
    <section className="mt-14">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold lg:font-bold text-3xl lg:text-5xl/relaxed my-2 ">Contact Us</h1>
        <div className="mx-8 lg:mx-0 lg:w-5/12 font-sans text-sm lg:text-lg/relaxed text-center mt-6 space-y-4">
          <p>Should you have any inquiries about our service, don&apos;t hesitate to contact us. We&apos;re very happy to assist and welcome you to our humble studio.</p>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row my-14">
        <div className="w-full lg:w-1/2 aspect-video lg:aspect-square relative">
          <Image src={'/images/girls.jpg'} alt={'girls'} sizes="100%,100%" className="aspect-video lg:aspect-square object-cover grayscale" fill priority />
        </div>

        <div className="w-full lg:w-1/2 bg-gray-100 py-10 lg:py-14 text-base/relaxed flex justify-center items-center">
          <div className="mx-10">
            <div className="flex justify-evenly my-8">
              {contacts.map((contact) => (
                <div className="w-full flex flex-col gap-3 text-base/relaxed" key={contact.title}>
                  <p className="order-last lg:order-none">{contact.address}</p>
                  <div className="flex flex-col lg:flex-row gap-3 lg:gap-10">
                    <p className="order-first lg:order-none">{contact.email}</p>
                    <p className="hidden lg:flex">|</p>
                    <p>{contact.phone}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="flex flex-col lg:flex-row items-center gap-4">
                    <FormField
                      control={form.control}
                      name="firstname"
                      render={({ field }) => (
                        <FormItem className="w-full lg:w-1/2">
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastname"
                      render={({ field }) => (
                        <FormItem className="w-full lg:w-1/2">
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="" type="email" {...field} />
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
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button variant={'outline'} type="submit" className="text-white">
                    Submit
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
