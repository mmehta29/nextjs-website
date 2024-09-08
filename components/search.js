'use client';
import { useRouter } from 'next/navigation';

export default function InputSearch() {
    const router = useRouter();
    const { query } = router.query;

    const handleChange = (e) => {
        const value = e.target.value;
        const params = new URLSearchParams(window.location.search);

        if (value) {
            params.set('query', value);
        } else {
            params.delete('query');
        }

        router.push(`?${params.toString()}`); // Update URL with new query params
    };

    return (
        <input
            placeholder="category..."
            onChange={handleChange}
            value={query || ''}
        />
    );
}
