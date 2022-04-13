import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Table} from 'react-bootstrap';
import { useState } from 'react';
function App() {
  const [name, setName] = useState("");
  const [lahir, setLahir] = useState("");
  const [pesan, setPesan] = useState("");
  const [gender, setGender] = useState("");
  const [agama, setAgama] = useState("");
  const [show, setShow] = useState(false);
  const [userinfo, setUserInfo] = useState({
    hobi: [],
    response: [],
  });
  
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { hobi } = userinfo;
    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        hobi: [...hobi, value],
        response: [...hobi, value],
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        hobi: hobi.filter((e) => e !== value),
        response: hobi.filter((e) => e !== value),
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Biodata</h1>
          <Form.Label htmlFor="inputnamalengkap">Nama Lengkap</Form.Label>
          <Form.Control
            type="text"
            id="namalengkap"  
            aria-describedby="passwordHelpBlock" placeholder='Nama Lengkap'
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Label htmlFor="inputtanggal">Tanggal Lahir</Form.Label>
          <Form.Control
            type="date"
            id="tanggallahir"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => setLahir(e.target.value)}
          />
      <Form>
      <Form.Label htmlFor="inputtanggal">Jenis Kelamin</Form.Label>  
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Laki-Laki"
            value = "Laki-Laki"
            name="lahir"
            type={type}
            onChange = {(e) => setGender(e.target.value)}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Perempuan"
            value = "Perempuan"
            name="lahir"
            type={type}
            onChange = {(e) => setGender(e.target.value)}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="other"
            value = "Other"
            name="lahir"
            type={type}
            onChange = {(e) => setGender(e.target.value)}
            id={`inline-${type}-3`}
          />
        </div>
      ))}
    </Form>
    <Form>
      <Form.Label htmlFor="inputtanggal">Hobi</Form.Label>  
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Ngoding"
            value = "Ngoding, "
            name="hobi"
            type={type}
            onChange = {handleChange}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Rebahan"
            value = "Rebahan, "
            name="hobi"
            type={type}
            onChange = {handleChange}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Melamun"
            value = "Melamun, "
            name="hobi"
            type={type}
            onChange = {handleChange}
            id={`inline-${type}-3`}
          />
          <Form.Check
            inline
            label="Baca Buku"
            value = "Baca Buku, "
            name="hobi"
            type={type}
            onChange = {handleChange}
            id={`inline-${type}-4`}
          />
          <Form.Check
            inline
            label="Nonton Youtube"
            value = "Nonton Youtube, "
            name="hobi"
            type={type}
            onChange = {handleChange}
            id={`inline-${type}-5`}
          />
          <Form.Check
            inline
            label="Dengerin Lagu"
            value = "Dengerin Lagu, "
            name="hobi"
            type={type}
            onChange = {handleChange}
            id={`inline-${type}-6`}
          />
          <Form.Check
            inline
            label="Other"
            value = "Other"
            name="hobi"
            type={type}
            onChange = {handleChange}
            id={`inline-${type}-7`}
          />
        </div>
      ))}
    </Form>
      <Form.Label htmlFor="inputtanggal">Agama</Form.Label>
      <Form.Select aria-label="Default select example" onChange={(e) => setAgama(e.target.value)}>
        <option>Pilih Agama</option>
        <option value="Budha">Budha</option>
            <option value="Hindu">Hindu</option>
            <option value="Islam">Islam</option>
            <option value="Katolik">Katolik</option>
            <option value="Tao">Tao</option>
            <option value="Protestan">Protestan</option>
            <option value="Other">Other</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Pesan</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={(e) => setPesan(e.target.value)}/>
        </Form.Group>
        <Button type='submit' variant="primary" onClick={() => setShow(prev => !prev)}>Show Result</Button>{' '}
        {show &&
        <Table responsive>
        <thead>
          <tr>
            <th>Label</th>
              <th >Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nama</td>
              <td >{name}</td>
          </tr>
          <tr>
            <td>Tanggal Lahir</td>
              <td>{lahir}</td>
          </tr>
          <tr>
            <td>Jenis Kelamin</td>
              <td>{gender}</td>
          </tr>
          <tr>
            <td>Hobi</td>
            <td>{userinfo.response}</td>
          </tr>
          <tr>
            <td>Agama</td>
              <td>{agama}</td>
          </tr>
          <tr>
            <td>Pesan</td>
              <td>{pesan}</td>
          </tr>
        </tbody>
      </Table>
        }
      </form>
      
    </div>
     
  );
}

export default App;
