import { useEffect, useState } from 'react';

import tipsAPI from '../api/tips-api';

export function useCreateTip() {
  const tipCreateHandler = (tipData) => tipsAPI.create(tipData);

  return tipCreateHandler;
}

export function useGetAllTips() {
  const [tips, setTips] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const result = await tipsAPI.getAll();
        setTips(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTips();
  }, []);

  return { tips, error, loading };
}
