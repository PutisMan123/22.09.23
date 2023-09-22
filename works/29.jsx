function App() {
  const isAuth = true;
  return (
    <>
      <div className="theme">Тема 30</div>
      <div className="exercise">2:</div>
      {isAuth && <p>вы авторизованы</p>}
    </>
  );
}

export default App;
