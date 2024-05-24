import classes from "./MeetUpDetails.module.css";

const MeetUpDetails = (props) => {
  return (
    <section className={classes.details}>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <address>{props.address}</address>
    </section>
  );
};

export default MeetUpDetails;
