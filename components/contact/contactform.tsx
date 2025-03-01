'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  email: string;
  phone?: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [formStatus, setFormStatus] = useState('');

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      console.log(data);  // Для отладки
      setFormStatus('Message sent successfully!');
    } catch (error) {
      setFormStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="email" className="block">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: 'Email is required' })}
            className="border p-2 w-full"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email?.message}</p> // Используем строку ошибки
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block">Phone</label>
          <input
            id="phone"
            type="text"
            {...register('phone')}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="message" className="block">Message</label>
          <textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
            className="border p-2 w-full"
          />
          {errors.message && (
            <p className="text-red-500">{errors.message?.message}</p> // Используем строку ошибки
          )}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
      {formStatus && <p className="mt-4">{formStatus}</p>}
    </div>
  );
}
