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

export function useSearchTips(tipType) {
  const [tips, setTips] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!tipType) {
      setTips([]);
      return;
    }
    const fetchSearchedTips = async () => {
      setLoading(true);
      try {
        const result = await tipsAPI.searchTips(tipType);
        setTips(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSearchedTips();
  }, [tipType]);

  return { tips, error, loading };
}
