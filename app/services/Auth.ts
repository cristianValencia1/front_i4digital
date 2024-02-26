import { httpClient } from "@utils/httpClient";
import type { Auth } from "@types";

export const useAuth = async (auth: Auth) => {
  try {
    const { data } = await httpClient.post("/users/auth", auth);
    return {
      user: data,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
