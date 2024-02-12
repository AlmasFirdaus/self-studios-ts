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
    <section className="mt-14 flex flex-col gap-10 lg:gap-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold lg:font-bold text-3xl lg:text-5xl/relaxed my-2 ">Contact Us</h1>
        <div className="mx-8 lg:mx-0 lg:w-5/12 font-sans text-sm lg:text-lg/relaxed text-center mt-6 space-y-4">
          <p>Should you have any inquiries about our service, don&apos;t hesitate to contact us. We&apos;re very happy to assist and welcome you to our humble studio.</p>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row">
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
                  <Button variant={'outline'} type="submit" className="text-white bg-[#686767]">
                    Submit
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-56 px-10 bg-gray-100 flex flex-col lg:flex-row justify-evenly items-start lg:items-center">
        <h3 className="font-semibold mt-14 lg:mt-0 text-2xl/relaxed lg:text-4xl/relaxed">Opening Hours</h3>
        <div className="grid grid-cols-1 gap-y-8 gap-x-4 my-10 lg:my-0 leading-relaxed">
          <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-x-12">
            <p>Mon - Fri</p>
            <p>9.00 am - 8.00 pm</p>
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-x-12">
            <p>Saturday & Sunday</p>
            <p>9.00 am - 9.00 pm</p>
          </div>
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.96791950473968!2d112.6597699568123!3d-7.9485499295027955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6296dd2e398f5%3A0xaa3fdcb12280190c!2sPondok%20Indah%20Estate!5e0!3m2!1sid!2sid!4v1707715986389!5m2!1sid!2sid"
          width="600"
          height="450"
          className="w-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Page;
