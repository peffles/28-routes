'use strict';

import React from 'react';

export default class Landing extends React.Component {
  render() {
    return (
      <section>
        <h2>Welcome to the best dang note keeping app on the web!</h2>
        <h3>Testimonials</h3>
        <ul className="testimonials">
        <li className="testLi">I use this app whenever I have to take notes - Captain Obvious</li>
        <li className="testLi">This app really is the best note keeping app! - Paid Spokesperson</li>
        <li className="testLi">Love this app to keep track of my errands! - Forgetful Housewife</li>
        <li className="testLi">This app is a life saver in class - Student That Forgot Their Pencil</li>
        <li className="testLi">This app lets my know when to feed all my cats - Animal Hoarder</li>

        </ul>
        
      </section>
    );
  }
}
