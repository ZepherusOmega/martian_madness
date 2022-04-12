import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'An Era of Martians',
    paragraph: 'In a remote solar system, much like our own, a species of alien had separated into 5 distinct races through colonization of different planets. These aliens became pigmented by the strange atmospheres of their home worlds and now have unique coloring.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-xs">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className="center-content">
            <p className="m-0">This is where their differences end. Through technological prosperity and a bond unbroken by color, these aliens have thrived for thousands of years and now, they’re bored… But what to do?</p>
            <p></p>
            <p className="m-0">A council of the five races came together to ponder this very question. A think for the ages! In a monumental ceremony it was announced across the solar system that a tournament would be held! And the prize, a new source of endless fun from a distant solar system called . . . SOLANA!!!</p>
            {/* <p className="m-0">. . . Let the games begin!</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;