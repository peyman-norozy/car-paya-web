"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const useSetQuery = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setQuery = useCallback((key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    const search = params.toString();
    const query = search ? `?${search}` : "";
    router.push(pathname + query);
  }, []);

  const setMultiQuery = useCallback((data) => {
    const params = new URLSearchParams(searchParams.toString());
    data.map((item) => {
      params.set(item.key, item.value);
    });
    const search = params.toString();
    const query = search ? `?${search}` : "";
    router.push(pathname + query);
  }, []);
  const deleteQuery = useCallback((data) => {
    const params = new URLSearchParams(searchParams.toString());
    data.map((item) => {
      params.delete(data);
    });
    const search = params.toString();
    const query = search ? `?${search}` : "";
    router.push(pathname + query);
  }, []);
  const deleteSingleQuery = useCallback((data, params, options) => {
    data.map((item) => {
      params.delete(item.key, item.value);
    });
    const search = params.toString();
    const query = search ? `?${search}` : "";
    router.push(pathname + query, options);
  }, []);
  const updateMultiQuery = useCallback((data, params, options) => {
    data.map((item) => {
      params.set(item.key, item.value);
    });
    const search = params.toString();
    const query = search ? `?${search}` : "";
    router.push(pathname + query, options);
  }, []);
  return {
    setQuery,
    setMultiQuery,
    deleteQuery,
    deleteSingleQuery,
    updateMultiQuery,
  };
};

export default useSetQuery;
