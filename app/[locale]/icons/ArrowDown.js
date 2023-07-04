export default function ArrowDown({ props }) {
    return (
        <svg className="w-4 h-4 m-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-value={props.data}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={props.width} d="M19 9l-7 7-7-7"></path>
        </svg>
    );
}