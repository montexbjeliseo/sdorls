import style from "@/styles/homepage.module.css";

export const HomePage = () => {
  return (
    <main className={style.container}>
      {/* <h1>Home</h1> */}
      <ul className={style.referenceList}>
        <h2>References</h2>
        <li>
          <a href="https://es.react.dev/" target="_blank">React</a>
        </li>
        <li>
          <a href="https://vitejs.dev/" target="_blank">Vite</a>
        </li>
        <li>
          <a href="https://tanstack.com/table/latest" target="_blank">TanStack react table</a>
        </li>

        <li>
          <a href="https://www.npmjs.com/package/react-autocomplete-input" target="_blank">
            React-autocomplete input
          </a>
        </li>

        <li>
          <a href="https://react-hook-form.com/" target="_blank">React hook form</a>
        </li>

        <li>
            <a href="https://reactrouter.com/en/main" target="_blank">React router</a>
        </li>
      </ul>
    </main>
  );
};
