import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
    // children: PropTypes.node,
    ...SectionProps.types
  }
  
const defaultProps = {
    // children: null,
    ...SectionProps.defaults
  }
  
const Faq = ({
    className,
    children,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
  }) => {

const outerClasses = classNames(
    'section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
    );

    const innerClasses = classNames(
    'section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
    );

const sectionHeader = {
    title: 'Frequently Asked Questions',
    paragraph: 'Here are a few questions that you might have about the project.'
};


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
            {/* {children} ~REMOVE ME~ */}
          {/* Section header ~EDIT ME~ */}
          <SectionHeader data={sectionHeader} className="center-content" />

          {/* Faqs */}
          <div className="columns">
                <ul className="grid gap-8 md:grid-cols-2 xl:gap-x-16 lg:gap-y-12">
                    <li>
                    <h4 className="text-xl font-medium mb-2">How Do I Mint A Martian?</h4>
                    <p className="text-lg text-gray-400">You will need a Solana wallet funded with enough SOL to mint the amount of Martians you would like, our recommended choice is Phantom.  Once minted Martians will display within your Phantom wallet under the collectibles tab.</p>
                    </li>
                    <li>
                    <h4 className="text-xl font-medium mb-2">How Much Are Martians?</h4>
                    <p className="text-lg text-gray-400">Each martian will cost 1 SOL</p>
                    </li>
                    <li>
                    <h4 className="text-xl font-medium mb-2">How Many Martians Will Exist?</h4>
                    <p className="text-lg text-gray-400">There are only going to be 10,000 martians minted on the Solana blockchain.</p>
                    </li>
                    <li>
                    <h4 className="text-xl font-medium mb-2">When is Martian Madness dropping?</h4>
                    <p className="text-lg text-gray-400">To be announced.</p>
                    </li>
                    <li>
                    <h4 className="text-xl font-medium mb-2">When Are My Martians Revealed?</h4>
                    <p className="text-lg text-gray-400">To be announced.</p>
                    </li>
                    <li>
                    <h4 className="text-xl font-medium mb-2">Where Can I Find The Rarities Of My Martians?</h4>
                    <p className="text-lg text-gray-400">Martian rarities can be found on <a href="https://howrare.is/" target="blank">HowRare.is</a></p>
                    </li>
                    <li>
                    <h4 className="text-xl font-medium mb-2">Why Was The Solana Blockchain Chosen?</h4>
                    <p className="text-lg text-gray-400">We chose Solana based on faster confirmation times, and lower transaction costs than Ethereum. In addition the soon-to-be launched Martian Madness game will be a much more enjoyable experience on the Solana blockchain.</p>
                    </li>
                    <li>
                    <h4 className="text-xl font-medium mb-2">How Many Martians Can I Mint?</h4>
                    <p className="text-lg text-gray-400">As many as you would like, unlike Ethereum where batch mints were introduced to overcome the rising gas fees, Solana is not hampered by the same limitations.</p>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
}

Faq.propTypes = propTypes;
Faq.defaultProps = defaultProps;

export default Faq;
