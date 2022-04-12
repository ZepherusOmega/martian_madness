import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Roadmap = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Let The Games Begin!',
    paragraph: 'Martian Madness NFT is a generative art project designed to give token holders a chance to earn big rewards through competitive games.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                  Phase One
                  </div>
                <h3 className="mt-0 mb-12">
                  25%-EARLY ADOPTERS
                  </h3>
                <h5 className="mt-0 mb-12">
                  Game Rewards Announced
                </h5>
                <p className="m-0">
                  Detailed video explaining how the game functions.<br />
                  Raffle 15 Martian mints to anyone who purchased within the first 25% of sales!
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-07.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                  Phase Two
                  </div>
                <h3 className="mt-0 mb-12">
                  50%-BRING A FRIEND
                </h3>
                <h5 className="mt-0 mb-12">
                  Game Mechanics Released
                </h5>
                <p className="m-0">
                  This starts the pot for first tournament winnings!<br />
                  Refer a friend in the Discord channel and we will enter them for a raffle! 3 lucky referrals will be awarded a full 4 Martian team!
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-06.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                  Phase Three
                  </div>
                <h3 className="mt-0 mb-12">
                  75%-ALL HOLDERS RAFFLE
                  </h3>
                <h5 className="mt-0 mb-12">
                  Game Release Date Set
                </h5>
                <p className="m-0">
                  Start the 1st Martian Madness Tournament. <br />
                  Anyone currently holding a Martian will be entered into a raffle of 15 Martian mints! 1 per winner!
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-05.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                  Phase Four
                  </div>
                <h3 className="mt-0 mb-12">
                  100%-SOLANA GIVEAWAY!
                  </h3>
                <h5 className="mt-0 mb-12">
                  Game Release Launch Day
                </h5>
                <p className="m-0">
                  Suit up your Martians and get ready for battle! <br />
                  20 lucky Martian holders will be awarded 2 Solana!!!
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-04.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Roadmap.propTypes = propTypes;
Roadmap.defaultProps = defaultProps;

export default Roadmap;