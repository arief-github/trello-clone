import { useEffect, useRef  } from 'react';

export const useFocus = () => {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // the field current can still be null
        ref.current?.focus();
    }, []);

    return ref;
}