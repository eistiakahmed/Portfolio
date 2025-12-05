import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-16 lg:py-24 bg-white
 dark:bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Form */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
                Get in Touch
              </h1>
              <p className="text-gray-600 dark:text-gray-400 max-w-lg">
                Have a project in mind or want to connect? Drop me a message
                below, and I'll get back to you as soon as possible.
              </p>
            </div>
            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-300 bg-gray-100 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 focus:outline-none focus:ring-2"
                  id="name"
                  placeholder="Enter your name"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full rounded-lg border-gray-300 bg-gray-100 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 focus:outline-none focus:ring-2"
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full resize-none rounded-lg border-gray-300 bg-gray-100 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 focus:outline-none focus:ring-2"
                  id="message"
                  placeholder="Enter your message"
                  rows="5"
                ></textarea>
              </div>
              <button
                className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-linear-to-r from-blue-600 to-purple-600 px-5 py-3 text-base font-bold text-white transition-colors hover:bg-primary/90"
                type="submit"
              >
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Right Column: Contact Details */}
          <div className="flex flex-col gap-8 lg:pt-20">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  eistiakahmedmeraj@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Phone
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  +880 1560064883
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Mirpur, Dhaka, BD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
