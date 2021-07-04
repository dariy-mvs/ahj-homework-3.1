export default function getPosition() {
  let number = Math.round(0 - 0.5 + Math.random() * (15 + 1));
  number = Math.abs(number);
  return number;
}
