import React, { Component } from 'react';
import { LINKS } from 'config';

import { I18n } from 'react-i18next';
import i18next from 'i18next';
 // initialized i18next instance using reactI18nextModule


 i18next
  .init({
    debug: false,
    resources: {
      en: {
        namespace1: {
          key: 'hello from namespace 1'
        },
        namespace2: {
          key: 'hello from namespace 2'
        }
      },
      de: {
        namespace1: {
          key: 'hallo von namespace 1'
        },
        namespace2: {
          key: 'hallo von namespace 2'
        }
      }
    }
  });



export default class About extends Component {

  onClickFindOutMoreButton = () =>
    analytics.track("Link Find Out More Requested", { platform: "www"});

  render () {
    return (
      <section id={this.props.id} className="gc-section gc-g-service aligner">

        <div className="container">

          <h2 className="gc-section-title text-center">falconi IS A G SERVICE.</h2>

          <div className="col-md-10 col-md-offset-1 flex-container">
            <div className="flex gc-growth-container">
              <div className="gc-g-logo text-center aligner">
                <img alt="Github" src="/static/logos/logo-g-transparent.png" />
              </div>
              <span className="title">Where growth happens.</span>
              <p>G brings together  ’s services for small businesses by providing access to tools, connections and services that help them achieve their ambitions.</p>

              <a href={LINKS.GRANT_THORNTON_G} onClick={this.onClickFindOutMoreButton} target="_blank" rel="noopener">
                <button className="gc-button">Find out more</button>
              </a>
            </div>

            <div className="flex gc-image-container">
              <img className="img-responsive full-width" alt="G Service" src="/static/images/front-end-conftocat.png" />
            </div>
          </div>

        </div>

      </section>
    )
  }
}
