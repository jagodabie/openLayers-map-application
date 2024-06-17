import { useState } from 'react';

export const useFetch = ({
  url,
  method,
  headers = {},
}: {
  url: string;
  method?: string;
  headers?: Record<string, string>;
}): {
  data: any;
  error: any;
  loading: boolean;
  handlePost: (data: Record<string, any>) => void;
} => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handlePost = async (formData: Record<string, any>) => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    handlePost,
  };
};
