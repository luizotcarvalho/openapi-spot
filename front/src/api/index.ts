import createClient from "openapi-fetch";
import type { paths } from "@/api";

export const { 
    GET, 
    POST
} = createClient<paths>({ baseUrl: "http://localhost:8000" });

