export default function ButtonPlus(props) {
  const addNumber = () => {
    props.setNumber((props.number += 1));
  };
  return <button onClick={addNumber}>Add</button>;
}
