import lazyLoad from "../../utils/loadable";

const HomePage = lazyLoad(
  () => import("./HomePage"),
  (module) => module.default,
  {
    fallback: "Carregando..."
  }
)

export default HomePage;
