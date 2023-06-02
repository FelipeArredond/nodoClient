import "./homepage.css";

export default function HomePage() {
  return (
    <>
      <h1 className="title-home">Bienvenidos</h1>
      <div className="image-container">
        <img
          className="banner-image"
          src="https://firebasestorage.googleapis.com/v0/b/nodo-final.appspot.com/o/Banner.png?alt=media&token=80e8728a-b028-4de1-aa80-97edb33b22ee&_gl=1*19mpqi7*_ga*MTk1ODQxNTE4MS4xNjgxNTkwOTI3*_ga_CW55HF8NVT*MTY4NTcyNDI0My42LjEuMTY4NTcyNDI2MC4wLjAuMA.."
          alt="banner"
        />
      </div>
    </>
  );
}
