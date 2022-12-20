import PropTypes from 'prop-types';
import React from 'react';
import Identicon from '../../../ui/identicon';
import Button from '../../../ui/button';
import withModalProps from '../../../../helpers/higher-order-components/with-modal-props';
import Modal from '../modal';
import Typography from '../../../ui/typography';
import {
  TYPOGRAPHY,
  FONT_WEIGHT,
  ALIGN_ITEMS,
  BLOCK_SIZES,
  DISPLAY,
} from '../../../../helpers/constants/design-system';
import HoldToRevealButton from '../../hold-to-reveal-button';
import { useI18nContext } from '../../../../hooks/useI18nContext';

const HoldToRevealModal = ({ onLongPressed, hideModal }) => {
  const t = useI18nContext();

  const unlock = () => {
    onLongPressed();
    hideModal();
  };

  return (
    <div>
      <Typography variant={TYPOGRAPHY.H2} fontWeight={FONT_WEIGHT.NORMAL}>
        Keep your SRP safe
      </Typography>
      <Typography variant={TYPOGRAPHY.H9} fontWeight={FONT_WEIGHT.NORMAL}>
        Your Secret Recovery Phrase provides full access to your wallet and
        funds
      </Typography>
      <HoldToRevealButton
        buttonText="Hold to reveal SRP"
        onLongPressed={unlock}
      />
    </div>
  );
};

HoldToRevealModal.propTypes = {
  onLongPressed: PropTypes.func.isRequired,
  hideModal: PropTypes.func,
};

export default withModalProps(HoldToRevealModal);
