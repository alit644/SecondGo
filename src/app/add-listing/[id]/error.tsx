'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background  flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden">
        <div className="bg-red-50 p-6 border-b border-red-100">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 bg-red-100 rounded-full">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Something went wrong</h1>
            <p className="text-red-600">{error?.message || 'An unexpected error occurred'}</p>
          </div>
        </div>
        
        <div className="p-6">
          <div className="text-center text-sm text-gray-500 mb-6">
            <p>Sorry, something went wrong while loading the page. Please try again.</p>
            {error.digest && (
              <p className="mt-2 text-xs text-gray-400">Error ID: {error.digest}</p>
            )}
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={() => reset()}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}