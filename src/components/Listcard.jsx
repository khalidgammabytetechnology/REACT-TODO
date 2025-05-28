import styles from "./Netflix.module.css";

export const Seriescard = ({ data }) => {
  // console.log(props)
  const { img_url, name, rating, description, genre, cast, watch_url } = /*props.*/data;

  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "red" : "pink" }`,
    color: "var(--bg-color)",
    fontWeight: "bold",
    cursor: "pointer"

  };

  const ratingclass = rating >= 8.5 ? styles.super_hit : styles.average
  return (
    <li className={styles.card}>

      <div>
        <img src={img_url} alt="image.jpg" width="40%" height="50%" />
      </div>
      <div className={styles[`card-content`]}>
        <h1 className="text-5xl font-bold text-blue-400 underline">Name: {name} </h1>
        <h2>Rating:
          <span className={`${styles.rating} ${ratingclass}`}>{rating}</span> 
          </h2>
        <p>summary:{description}</p>
        <p>Genre : {genre}</p>
        <p>Cast : {cast}</p>
        <a href={watch_url} target="_self">
          <button style={btn_style}>Watch Now</button>
        </a>
      </div>
    </li>
  );

}