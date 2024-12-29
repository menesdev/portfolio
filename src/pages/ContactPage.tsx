import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { submitContact } from '../api';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await submitContact(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-indigo-600" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">contact@example.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-indigo-600" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-indigo-600" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {status === 'success' && (
            <div className="p-4 bg-green-100 text-green-700 rounded-md">
              Message sent successfully!
            </div>
          )}
          {status === 'error' && (
            <div className="p-4 bg-red-100 text-red-700 rounded-md">
              Failed to send message. Please try again.
            </div>
          )}
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            <Send className="h-5 w-5 mr-2" />
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}