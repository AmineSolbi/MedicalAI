import { create } from "zustand";

const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

interface EmergencyContact {
    id: string;
    name: string;
    phone_number: string;
    user_id: string;
}

interface EmergencyContactState {
    contacts: EmergencyContact[];
    loading: boolean;
    error: string | null;
    nullmesage: string | null;
    fetchContacts: () => Promise<void>;
}

export const useEmergencyContact = create<EmergencyContactState>((set) => ({
    contacts: [],
    loading: false,
    error: null, 
    nullmesage: null,

    fetchContacts: async () => {
        set({loading: true,error: null,nullmesage: null,});

        try {
            const response = await fetch(`${BASE_URL}/users`);
            const data = await response.json();
            if (!response.ok) {
                throw new Error("Failed to fetch emergency contacts");
            }

            if (Array.isArray(data) && data.length === 0) {
                set({contacts: [],nullmesage: "Empty phone contact",loading: false,});
                return;
            }
            set({contacts: Array.isArray(data) ? data : [],nullmesage: null,loading: false,});
            }
        catch (error) {
            set({error:error instanceof Error ? error.message : "Unknown error", loading: false, contacts: [],});
        }
    },
}));