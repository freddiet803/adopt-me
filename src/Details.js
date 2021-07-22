import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from './Modal';

class Details extends Component {
  //   constructor() { installation of babel es lint parcer makes it to change to just declaration of state
  //     super();
  //     this.state = { loading: true };
  //   }
  state = { loading: true, showModal: false };
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  toggleModal = () =>this.setState({showModal: !this.state.showModal})
  adopt = () => (window.location = 'http://bit.ly/pet-adopt')


  render() {
    console.log(this.state);
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }
    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;
    //<img src={images[0]}/> if we wanted to post image of animal in detail
    console.log(images);
    console.log(images[0]);
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <button onClick={this.toggleModal}>Adpot {name}</button>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ): null}
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}