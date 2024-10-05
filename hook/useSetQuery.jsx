"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import nProgress from "nprogress";

const useSetQuery = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const allParams = new URLSearchParams(searchParams.toString());

  const setQuery = useCallback((key, value) => {
    // const params = new URLSearchParams(searchParams.toString());
    allParams.set(key, value);
    const search = allParams.toString();
    console.log(search);
    const query = search ? `?${search}` : "";
    console.log(pathname);
    console.log(query);
    nProgress.start();
    router.push(pathname + query);
  }, []);

  const setMultiQuery = useCallback((data, newPathname) => {
    // const params = new URLSearchParams(searchParams.toString());
    data.map((item) => {
      allParams.set(item.key, item.value);
    });
    const search = allParams.toString();
    const query = search ? `?${search}` : "";
    nProgress.start();
    router.push(newPathname ? newPathname : pathname + query);
  }, []);

  const deleteQuery = useCallback((data) => {
    const params = new URLSearchParams(searchParams.toString());
    console.log(params);
    params.delete(data);
    const search = params.toString();
    const query = search ? `?${search}` : "";
    nProgress.start();
    router.push(pathname + query);
  }, []);
  const deleteSingleQuery = useCallback(
    (data, params, options, newPathName) => {
      data.map((item) => {
        params.delete(item.key, item.value);
      });
      const search = params.toString();
      const query = search ? `?${search}` : "";
      console.log(pathname);
      nProgress.start();
      router.push(newPathName ? newPathName : pathname + query, options);
    },
    [],
  );

  const updateMultiQuery = useCallback((data, params, options) => {
    data.map((item) => {
      params.set(item.key, item.value);
    });
    const search = params.toString();
    const query = search ? `?${search}` : "";
    nProgress.start();
    router.push(pathname + query, options);
  }, []);

  const updateQueryParams = useCallback(
    (newParams, newPathname, scroll) => {
      const currentParams = new URLSearchParams(searchParams);

      // Add new parameters to the current params
      Object.keys(newParams).forEach((key) => {
        currentParams.set(key, newParams[key]);
      });

      // Convert the updated params to a string
      const queryString = currentParams.toString();

      // Push the updated URL with new query parameters
      nProgress.start();
      router.push(`${newPathname ? newPathname : pathname}?${queryString}`, {
        shallow: true,
        scroll: scroll,
      });
    },
    [pathname, router, searchParams],
  );

  return {
    setQuery,
    setMultiQuery,
    deleteQuery,
    deleteSingleQuery,
    updateMultiQuery,
    updateQueryParams,
  };
};

export default useSetQuery;
