import { useState } from "react";
import { toast } from "sonner";

// Generic useFetch hook
const useFetch = <TArgs extends any[], TResult>(
  cb: (...args: TArgs) => Promise<TResult>
) => {
  const [data, setData] = useState<TResult | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fn = async (...args: TArgs): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);
      setData(response);
    } catch (err: any) {
      const error = err instanceof Error ? err : new Error("Unknown error");
      setError(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn, setData };
};

export default useFetch;