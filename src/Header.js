import vars from "./func";

export default function Header(props) {
  return (
    <h1
      style={{
        color:
          vars.colors[props.number >= 0 ? props.number : Math.abs(props.number)]
      }}
    >
      {props.number}
    </h1>
  );
}
