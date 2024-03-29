import ReactStars from "react-stars";
const StarRating = (props) => {

    const ratingChanged = (newRating) => {
        console.log(newRating)
      }
  return (
    <div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        color2={"#ffd700"}
        edit={props.edit}
        value={props.value}
      />
    </div>
  );
};

export default StarRating;
