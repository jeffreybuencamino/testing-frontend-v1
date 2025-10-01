const About = () => {
    return ( 
        <div className="about">
            <h1>About Page</h1>
            <form action="">
                <label for="name">Name: </label>
                <input type="text" id="name" name="name" required/><br /><br />

                <label for="email">Email: </label>
                <input type="text" id="email" name="email" required />

                <button type="submit">Submit</button>
            </form>
        </div>
     );
}
 
export default About;