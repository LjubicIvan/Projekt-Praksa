import { useState } from 'react';
import { Link } from 'react-router-dom';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [desc, setDesc] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://localhost:7248/admin/createpost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title,text}),
    });

    if (response.ok) {
      //return redirect("/home");
    } else {
      
      console.error('Greska-', response.statusText);
    }
  };

  return (
    <div className='create-post'>
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
       Short Description:
        <textarea
          
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
          rows="3" cols="25"
        />
      </label>
      <label>
       Text:
        <textarea
          
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          rows="3" cols="25"
        />
      </label>
    
      <button type="submit">Create Post</button>
    </form>
    <Link to="/admin" className='link'>Admin Panel</Link>

    </div>
  );
}

export default CreatePost;
