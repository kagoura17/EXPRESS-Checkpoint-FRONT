import NavBare from "../../component/NavBare/NavBare";
import "./Home.css";

const Home = () => {
  return (
    <>
      <NavBare></NavBare>
      <div className="homePart1">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          similique quasi illo consectetur nulla beatae deserunt temporibus
          molestias quibusdam. Amet modi rem vero itaque unde ipsum doloribus
          possimus reprehenderit in! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Explicabo similique quasi illo consectetur nulla
          beatae deserunt temporibus molestias quibusdam. Amet modi rem vero
          itaque unde ipsum doloribus possimus reprehenderit in!
        </p>
      </div>
      <div className="homePart1">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          similique quasi illo consectetur nulla beatae deserunt temporibus
          molestias quibusdam. Amet modi rem vero itaque unde ipsum doloribus
          possimus reprehenderit in!
        </p>{" "}
      </div>
    </>
  );
};

export default Home;
