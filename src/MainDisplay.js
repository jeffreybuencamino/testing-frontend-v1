const MainDisplay = ({message, handleAddBook}) => {
    return ( 
        <div className="home">
            <h1>message from backend: { message}</h1>
            <button onClick={handleAddBook}>Click me</button>
        </div>
     );
}
 
export default MainDisplay;