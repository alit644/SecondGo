import { Handbag } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg dark:bg-dark">
      <div className="text-center">
        <div className="relative inline-block">
          {/* Animated circles */}
          <div className="w-24 h-24 border-4 border-t-primary border-r-transparent border-b-primary border-l-primary rounded-full animate-spin"></div>
          
          {/* Shopping bag icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Handbag />
          </div>
        </div>
        
        <h2 className="mt-6 text-2xl font-semibold text-primary">Loading Your Listing</h2>
        <p className="mt-2 text-gray-500">Preparing your marketplace experience...</p>
      </div>
    </div>
  );
};

export default Loading;
