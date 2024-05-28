export default function Button({ text, fn, children }) {
    return (<button onClick={fn}>{children}
    </button>)
}