import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { useRef, useState, useEffect } from 'react';

function App() {
  // move focus to next field
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  const handlekeyDown = (e, nextRef) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // prevent form submit
      nextRef.current.focus();
    }
  };
  //Scroll to Section
  const bottomRef = useRef(null);
  const scrolltoBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  // count Re rendering
  const [count, setCount] = useState(0);
  const renderCount = useRef(1); // start from 1
  useEffect(() => {
    renderCount.current += 1;
  });

  // video player
  const videoRef = useRef(null);
  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  // giving control of input field to useRef
  const inputRef = useRef(null);
  const inputHandler = () => {
    console.log(inputRef);

    // focusing on input field on clicking button
    inputRef.current.focus();
    inputRef.current.style.color = 'blue';
    inputRef.current.placeholder = 'Enter your Password';
    //inputRef.current.value = '@#378Khdh';
  };

  const toggleHandler = () => {
    if (inputRef.current.style.display != 'none') {
      inputRef.current.style.display = 'none';
    } else {
      inputRef.current.style.display = 'inline';
    }
  };

  const handleClear = () => {
    inputRef.current.value = '';
  };

  // getting the previous value of input field
  const [text, setText] = useState('');
  const prevRef = useRef('');

  useEffect(() => {
    prevRef.current = text;
  }, [text]);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1>Using React Bootstrap</h1>
      <Button style={{ margin: '10px' }}>Click me!</Button>
      <Alert variant="success">Success! Bootstrap installed</Alert>
      <Button
        style={{ margin: '10px' }}
        onClick={() => alert('Error 404!')}
        variant="danger"
      >
        Warning!
      </Button>
      <Button variant="link">Click here for more info!</Button>

      <h1>useRef Hook</h1>
      <p>Purpose: you can control any Component using useRef Hook</p>
      <input
        style={{ paddingLeft: '20px' }}
        ref={inputRef}
        type="text"
        placeholder="Enter user name"
      />

      <br />
      <br />
      <button style={{ margin: '10px' }} onClick={inputHandler}>
        Focus on input field
      </button>
      <button style={{ margin: '10px' }} onClick={toggleHandler}>
        Toggle
      </button>
      <button onClick={handleClear}>Clear</button>
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type any letter"
        />
        <p>Current value:{text || '(empty)'}</p>
        <p>Previous Value:{prevRef.current || '(none yet)'}</p>
      </div>
      <div
        style={{
          fontFamily: 'sans-serif',
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: 'lightcyan',
        }}
      >
        <h3>Video Player using useRef</h3>
        <video
          ref={videoRef}
          width="400"
          style={{ border: '1px solid #ccc ', borderRadius: '8px' }}
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />{' '}
          Your browser does not support the video
        </video>
        <br />
        <br />
        <button onClick={handlePlay} style={{ marginRight: '10px' }}>
          play
        </button>
        <button onClick={handlePause}>pause</button>
      </div>
      <div
        style={{
          backgroundColor: 'lightblue',
          borderRadius: '10px',
          padding: '20px',
          margin: '10px',
        }}
      >
        <p>Count:{count}</p>
        <p>Renders:{renderCount.current}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>

      <div
        style={{
          height: '50vh',
          padding: '20px',
          backgroundColor: 'lightgray',
        }}
      >
        <button onClick={scrolltoBottom}>Scroll to Bottom</button>

        <div style={{ height: '35vh' }}></div>
        <h3 ref={bottomRef}> you reached the bottom!</h3>
      </div>

      <form>
        <input
          ref={inputRef1}
          onKeyDown={(e) => handlekeyDown(e, inputRef2)}
          placeholder="First Name"
        />
        <br />
        <br />
        <input
          ref={inputRef2}
          onKeyDown={(e) => handlekeyDown(e, inputRef3)}
          placeholder="Last Name"
        />
        <br />
        <br />
        <input ref={inputRef3} placeholder="Email" />
      </form>
    </>
  );
}
export default App;
