const MainDisplay = ({message, handleAddBook}) => {
    return ( 
        <div className="main-display">
            <h1>message from backend: { message}</h1>
            <button onClick={handleAddBook}>Click me</button>
        </div>
     );
}
 
export default MainDisplay;