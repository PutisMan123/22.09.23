function App() {
  let text;
  const isAdmin = false;

  if (isAdmin) {
    text = (
      <div>
        <p>hgidughfghisfsdfdsfafeg</p>
        <p>hgidughfghisfsdfdsfafeg</p>
      </div>
    );
  } else {
    text = "";
  }

  return text;
}

export default App;
