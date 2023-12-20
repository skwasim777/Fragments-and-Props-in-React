const ErrorMassege = ({ items }) => {
  return <>{items.length === 0 ? <h3>Still i am hungry</h3> : null};</>;
};
export default ErrorMassege;
