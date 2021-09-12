import useSWR from "swr";
import { fetcher } from "./fetcher";

export function useMembers() {
  const { data: result } = useSWR("/api/members", fetcher);
  return { result };
}

export function useUser(keyword) {
  const { data: result } = useSWR(
    keyword ? `/api/users/${keyword}` : null,
    fetcher
  );
  return { result };
}
