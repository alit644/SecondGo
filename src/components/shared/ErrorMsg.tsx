const ErrorMsg = ({ message }: { message: string | undefined }) => {
  return message && <p className="text-red-500 text-sm mt-1">{message}</p>;
};

export default ErrorMsg;
