import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import margherita from "./images/margherita.jpg";
import bianca from "./images/bianca.jpg";
import capricciosa from "./images/capricciosa.jpg";
import focaccia from "./images/focaccia.jpg";
import funghi from "./images/funghi.jpg";
import parma from "./images/parma.jpg";
import pomodoroEolive from "./images/pomodoro-e-olive.jpg";
import pomodoroEorigano from "./images/pomodoro-e-origano.jpg";


class App extends Component {
  state = {
    cards: [
      {id: 0, nome: "Margherita", prezzo: 4.99, immagine: margherita },
      {id: 1, nome: "Bianca", prezzo: 3.99, immagine: bianca, quantità: 0 },
      {id: 2, nome: "Capricciosa", prezzo: 6.99, immagine: capricciosa, quantità: 0 },
      {id: 3, nome: "Focaccia", prezzo: 2.99, immagine: focaccia, quantità: 0 },
      {id: 4, nome: "Funghi", prezzo: 5.99, immagine: funghi, quantità: 0 },
      {id: 5, nome: "Parma", prezzo: 7.99, immagine: parma, quantità: 0 },
      {id: 6, nome: "Pomodoro e olive", prezzo: 3.99, immagine: pomodoroEolive, quantità: 0 },
      {id: 7, nome: "Pomodoro e origano", prezzo: 3.99, immagine: pomodoroEorigano, quantità: 0 },
    ]
  }

  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({ cards });
  }

  render() {
  return (
    <>
    <Navbar />
    <div className="container">
      <h1>Quale pizza preferisci?</h1>
      <hr/>
      <div className="row">
       {this.state.cards.map(card => (
         <Card key={card.id} onDelete={this.handleDelete} card={card} />
       )
       )
       }
      </div>
    </div>
    </>
  );
}
}

export default App;
