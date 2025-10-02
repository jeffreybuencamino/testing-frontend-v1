const Create = () => {
    return ( 
        <div className="create">
            <h2>Create New Post</h2>
            <form action="">
                <label for="title">Title: </label>
                <input type="text" id="title" name="title" required/>

                <label for="subject">Subject: </label>
                <input type="text" id="subject" name="subject" required />
                
                <label for="body">Body: </label>
                <textarea name="body" id="body" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
     );
}
 
export default Create;