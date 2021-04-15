import './App.css';
import Wilder from "./Wilder";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AddWilder from "./AddWilder";


const Container = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
`;

const CardRow = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 32%);
  justify-content: space-between;
`;

function App() {
  const [wilders, setWilders] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchWilders = async () => {
      try {
        const result = await axios("http://localhost:5000/api/wilder/read");
        console.log(result);
        setWilders(result.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWilders();
  }, []);
  return (
    <div>
      <header>
        <Container>
          <h1>Wilders Book</h1>
        </Container>
      </header>
      <Container>
        <AddWilder 
        onSuccess={(newWilder) => {
          setWilders([{ ...newWilder, justAdded: true }, ...wilders]);
        }}/>
      </Container>
      <Container>
        <h2>Wilders</h2>
        <CardRow>
          {wilders.map((wilder)=> (
            <Wilder key={wilder._id} {...wilder}/>
          ))}
        </CardRow>
      </Container>
      <footer>
        <Container>
          <p>&copy; 2020 Wild Code School</p>
        </Container>
      </footer>
      </div>
  );
}

export default App;
