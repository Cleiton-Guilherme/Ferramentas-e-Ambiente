import './Reverse.css'
const Reverse = ({children}) => {
    const reverseText = children.split('').reverse().join('');
    console.log(reverseText);

    return (
        <p className="reverse-text">{children} <span> virou </span> {reverseText}</p>
  )
}
export default Reverse;
