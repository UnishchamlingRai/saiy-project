import { getAllCities } from "@/app/services/cityService";
import { useQuery } from "@tanstack/react-query";

export function useGetAllCities() {
  const {
    data: cities,
    isLoading,
    error,
  } = useQuery({ queryKey: ["todos"], queryFn: getAllCities });

  return { cities, isLoading, error };
}
