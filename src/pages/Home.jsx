import style from "@/styles/homepage.module.css";

export const HomePage = () => {
  return (
    <main className={style.container}>
      {/* <h1>Home</h1> */}
      <ul>
        <h2>References</h2>
        <li>
          <a href="https://es.react.dev/">React</a>
        </li>
        <li>
          <a href="https://vitejs.dev/">Vite</a>
        </li>
        <li>
          <a href="https://tanstack.com/table/latest">TanStack react table</a>
        </li>

        <li>
          <a href="https://www.npmjs.com/package/react-autocomplete-input">
            React-autocomplete input
          </a>
        </li>

        <li>
          <a href="https://react-hook-form.com/">React hook form</a>
        </li>

        <li>
            <a href="https://reactrouter.com/en/main">React router</a>
        </li>
      </ul>
    </main>
  );
};
