import type { NewPet } from "@/types/pet";
import { GET, POST } from "@/api/index";

export const showPetById = async (id: number) => {
    return GET("/pets/{id}", {
        params: {
         path: { id },
        },
    });
}

export const createPets = async (pet: NewPet) => {
    return POST("/pets/create", {
        body: pet,            
    });
}

export const deletePet = async (id: number) => {
    return POST("/pets/{id}/delete", {
        params: {
         path: { id },
        },
    });
}

export const listPets = async (tags: string[] = [], limit: number = 10) => {
    return GET("/pets/", {
        params: {
            query: {
                tags,
                limit
            }
        },
    });
}