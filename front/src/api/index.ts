import createClient from "openapi-fetch";
import type { paths } from "@/api";

export const { 
    GET, 
    POST, 
    PUT, 
    DELETE 
} = createClient<paths>({ baseUrl: "http://localhost:3000" });

