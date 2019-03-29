/**
 * @file
 * This file contains the code for inject Hypothesis client configuration.
 */

window.hypothesisConfig = function () {
  // Adding use strict as function encapsulation ECMA 6.
  'use strict';
  return {
    showHighlights: Drupal.settings.hypothesis.showHighlights,
    openSidebar: Drupal.settings.hypothesis.sidebarOpen
  };
};
