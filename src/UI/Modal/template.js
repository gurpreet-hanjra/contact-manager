import React, { PureComponent } from 'react';
import { Modal } from 'semantic-ui-react';

class ModalWrapper extends PureComponent {
  closeModal = () => {
    this.props.toggleModal();
  };

  render() {
    const { title, feature, open } = this.props;
    return (
      <Modal
        open={open}
        closeOnDimmerClick
        closeOnDocumentClick
        closeIcon
        closeOnEscape
        onClose={this.closeModal}
      >
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content content={feature} />
      </Modal>
    );
  }
}

export default ModalWrapper;
