import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import reactLogo from "../assets/react.svg";

const header = () => {
  return (
    <Container>
      <Image fluid src={reactLogo} width="250px" alt="" />
    </Container>
  )
}

export default header