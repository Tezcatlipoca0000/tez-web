export default function ArrowUp({ props }) {
    return(
        <svg className={`w-4 h-4 m-2 ${props.class}`} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={props.width} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-value={props.data}>
          <path d="M4.5 15.75l7.5-7.5 7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}