import React from 'react';
import Modal from 'react-modal';
import Logo from '../../../resources/logo_horizontal_selected.svg';
import './NavigationBar.css';
import modalStyles from "../../order/ModalStyles";

class NavigationBar extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false
    }
  }
  componentWillMount() {
    Modal.setAppElement('#root')
  }

  toggleModal = () => {
    this.setState((prevState) => {
      return {
        modalOpen: !prevState.modalOpen
      }
    });
  };

  render() {
    const {children} = this.props;
    return (
      <div className="NavigationBar">
        <div className="Logo">
          <object data={Logo}>Wash Up</object>
        </div>
        <div className="Links">{children}</div>
        <i
          className="fa fa-bars"
          aria-hidden="true"
          onClick={this.toggleModal}
        />
        <Modal
          isOpen={this.state.modalOpen}
          style={{
            overlay : {
              zIndex: 10,
              backgroundColor: 'rgba(41, 153, 187, 1)',
            },
            content: {
              backgroundColor: 'transparent',
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: "center",
              justifyContent: "flex-start"
            }
          }}>
            <div className="MobileMenu">
              <span
                className="close"
                onClick={this.toggleModal}>
                ⨉
              </span>
              <div className="MobileLinks">
                {children}
              </div>
            </div>
        </Modal>
      </div>
    );
  }
}

export default NavigationBar;