export default function TabButton({children}) {
    function handleClick() {
        console.log(`Clicked ${children} button`);
    }
    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}