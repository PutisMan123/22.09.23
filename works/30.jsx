function App() {
  const isAuth = false;
  return (
    <>
      <div className="theme">Тема 31</div>
      <div className="exercise">2:</div>
      {!isAuth && <p>пожалуйста, авторизуйтесь</p>}
    </>
  );
}

export default App;
