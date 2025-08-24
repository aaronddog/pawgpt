'use client';

import Link from 'next/link';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-datadog-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full text-center">
        <div className="mx-auto h-20 w-20 bg-datadog-red rounded-full flex items-center justify-center mb-6">
          <ExclamationTriangleIcon className="h-10 w-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-datadog-gray-900 mb-4">4-OH-4</h1>
        <h2 className="text-xl font-semibold text-datadog-gray-700 mb-4">Page Not Fetched</h2>
        <p className="text-datadog-gray-600 mb-8">
          Woof! The page you&apos;re looking for has gone to chase squirrels or been buried in the backyard. Even our best tracking dogs couldn&apos;t sniff it out!
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex w-full justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-datadog-purple hover:bg-datadog-purple-dark transition-colors duration-200"
          >
            Go to Doghouse
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex w-full justify-center items-center px-6 py-3 border border-datadog-gray-300 text-base font-medium rounded-md text-datadog-gray-700 bg-white hover:bg-datadog-gray-50 transition-colors duration-200"
          >
            View Dogboard
          </Link>
        </div>
      </div>
    </div>
  );
}
