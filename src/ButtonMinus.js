export default function ButtonMinus(props) {
  const subNumber = () => {
    props.setNumber((props.number -= 1));
  };
  return <button onClick={subNumber}>Subtract</button>;
}
