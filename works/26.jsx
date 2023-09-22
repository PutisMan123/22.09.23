function App() {
  const isAdult = false;
  let text;
  if (isAdult) {
    text = "Совершеннолетний";
  } else {
    text = "Несовершеннолетний";
  }

  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

export default App;
