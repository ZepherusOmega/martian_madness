import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Meet The Team',
    paragraph: 'The talent behind the Martian Madness NFT is truly a collective of highly skilled individuals. Specialists in their trade who came together purely by coincidence. Our focus is to deliver an exciting NFT collection with emphasis on rewarding the collectors.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <div className='team-member-img'>
                    <img src={require('./../../assets/images/team/zeph.png')} alt="Martian Madness NFT" />
                  </div>
                  <p className="text-sm-1 mb-0">
                  Our artist has been creating digital and traditional art from an early age and aims to visually tell the tale of Martian Madness.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Artist</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://twitter.com/zepherus_omega">Zepherus Omega</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                <div className='team-member-img'>
                    <img src={require('./../../assets/images/team/gigabit.png')} alt="Martian Madness NFT" />
                  </div>
                  <p className="text-sm-1 mb-0">
                    With years in programming, marketing and crypto, handbuilt the smart contract functionality and UI of the collection.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Blockchain</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://twitter.com/gigabit_eth">Gigabit</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                <div className='team-member-img'>
                    <img src={require('./../../assets/images/team/monb.png')} alt="Martian Madness NFT" />
                  </div>
                  <p className="text-sm-1 mb-0">
                  Our web developer brings a unique and critical perspective of reliable and accessible infrastructure, rivaled by none.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">DevOps</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://www.linkedin.com/in/monika12b/">Monika12b</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;