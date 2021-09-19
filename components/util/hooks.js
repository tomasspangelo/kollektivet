import useSWR from "swr";
import { fetcher } from "./fetcher";

export function useMembers() {
  const { data: result } = useSWR("/api/members", fetcher, {
    refreshInterval: 1000,
  });
  return { result };
}

export function useUser(keyword) {
  const { data: result } = useSWR(
    keyword ? `/api/users/${keyword}` : null,
    fetcher
  );
  return { result };
}

export function useItems() {
  const { data: items } = useSWR("/api/items", fetcher, {
    refreshInterval: 500,
  });
  return { items };
}
