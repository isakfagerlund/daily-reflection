import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { addReflection, getReflections, Reflection } from "@/database/reflections";

export const reflectionsQueryKey = ["reflections"];

const sortReflections = (reflections: Reflection[]) => {
  return [...reflections].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
  );
};

export const useReflections = () => {
  return useQuery({
    queryKey: reflectionsQueryKey,
    queryFn: getReflections,
    select: sortReflections,
  });
};

export const useAddReflection = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addReflection,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: reflectionsQueryKey }),
  });
};
