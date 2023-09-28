import createClient from "openapi-fetch";
import type { paths } from "@/openapi";

export const { 
    GET, 
    POST, 
    PUT, 
    DELETE 
} = createClient<paths>({ baseUrl: "https://localhost:8000" });

