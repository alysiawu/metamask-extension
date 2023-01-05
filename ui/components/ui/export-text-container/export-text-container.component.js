import React from 'react';
import PropTypes from 'prop-types';
import Copy from '../icon/copy-icon.component';
import { useI18nContext } from '../../../hooks/useI18nContext';
import { useCopyToClipboard } from '../../../hooks/useCopyToClipboard';
import { exportAsFile } from '../../../helpers/utils/export-utils';
import { ButtonSecondary, Text } from '../../component-library';
import { TEXT, COLORS } from '../../../helpers/constants/design-system';

function ExportTextContainer({
  text = '',
  onClickCopy = null,
  onClickDownload = null,
}) {
  const ONE_MINUTE = 1000 * 60;
  const t = useI18nContext();
  const [copied, handleCopy] = useCopyToClipboard(3000);

  return (
    <div className="export-text-container">
      <div className="export-text-container__text-container">
        <div className="export-text-container__text notranslate">{text}</div>
      </div>
      {onClickDownload ? (
        <div className="export-text-container__buttons-container">
          <div
            className="export-text-container__button export-text-container__button--copy"
            onClick={() => {
              if (onClickCopy) {
                onClickCopy();
              }
              handleCopy(text);
            }}
          >
            <Copy size={17} color="var(--color-primary-default)" />
            <div className="export-text-container__button-text">
              {copied ? t('copiedExclamation') : t('copyToClipboard')}
            </div>
          </div>
          <div
            className="export-text-container__button"
            onClick={() => {
              if (onClickDownload) {
                onClickDownload();
              }
              exportAsFile('', text);
            }}
          >
            <img src="images/download.svg" alt="" />
            <div className="export-text-container__button-text">
              {t('saveAsCsvFile')}
            </div>
          </div>
        </div>
      ) : (
        <div className="export-text-container__button">
          <div
            className="export-text-container__button export-text-container__button--copy"
            onClick={() => {
              if (onClickCopy) {
                onClickCopy();
              }
              handleCopy(text);
            }}
          >
            <ButtonSecondary>
              <Text variant={TEXT.BODY_MD} color={COLORS.PRIMARY_DEFAULT}>
                {copied ? t('copiedExclamation') : t('copyToClipboard')}
              </Text>
            </ButtonSecondary>
          </div>
        </div>
      )}
    </div>
  );
}

ExportTextContainer.propTypes = {
  text: PropTypes.string,
  onClickCopy: PropTypes.func,
  onClickDownload: PropTypes.func,
};

export default React.memo(ExportTextContainer);
