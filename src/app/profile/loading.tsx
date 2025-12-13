
const Loading = () => {
  return (
    <div className="min-h-svh w-full flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-6 text-center">
        <div className="space-y-4">
          <div className="h-8 w-48 bg-muted rounded-full mx-auto"></div>
          <div className="h-4 w-32 bg-muted/80 rounded-full mx-auto"></div>
        </div>
        
        <div className="flex justify-center space-x-3">
          {[1, 2, 3].map((i) => (
            <div 
              key={i}
              className="h-10 w-10 bg-muted/50 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 150}ms`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>
        
        <p className="text-muted-foreground text-sm">Please wait...</p>
      </div>
    </div>
  );
};

export default Loading;
