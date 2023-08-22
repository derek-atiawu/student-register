import { Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import Studentcontent from "../../components/Studentcontent/Studentcontent";

function Home() {
  const student = useSelector((state) => state.student);
  console.log(student);
  return (
    <div>
      <h1>Class Attendance Record</h1>
      <Container>
        <Row>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Subject</th>
                <th>Tutor</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {student.students.map((item, index) => {
                return <Studentcontent item={item} key={item.id} />;
              })}
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
