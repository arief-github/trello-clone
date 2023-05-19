import { AppState } from "../reducers/appStateReducer";

const save = (payload: AppState) => {
    return fetch(`${import.meta.env.VITE_BASE_URL}/save`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
    }).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Error while saving the state");
        }
    })
};

const load = () => {
    return fetch(`${import.meta.env.VITE_BASE_URL}/load`)
        .then((response) => {
            if (response.ok) {
                return response.json() as Promise<AppState>
            } else {
                throw new Error("Error while loading the state");
            }
        })
};

export { save, load };