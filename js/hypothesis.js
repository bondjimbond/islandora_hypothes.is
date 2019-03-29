/**
 * @file
 * This file contains most of the code for the configuration page.
 */

(function ($) {
  // Adding use strict as function encapsulation ECMA 6.
  'use strict';

  /**
   * Provide the summary information for the Hypothesis settings vertical tabs.
   */
  Drupal.behaviors.hypothesisSettingsSummary = {
    attach: function (context) {
      // The drupalSetSummary method required for this behavior is not available
      // on the Hypothesis settings page, so we need to make sure this
      // behavior is processed only if drupalSetSummary is defined.
      if (typeof jQuery.fn.drupalSetSummary == 'undefined') {
        return;
      }

      $('fieldset#edit-path', context).drupalSetSummary(function (context) {
        if (!$('textarea[name="hypothesis_pages"]', context).val()) {
          return Drupal.t('Not restricted');
        }
        else {
          return Drupal.t('Restricted to certain pages');
        }
      });

      $('fieldset#edit-node-type', context).drupalSetSummary(function (context) {
        var vals = [];
        $('input[type="checkbox"]:checked', context).each(function () {
          vals.push($.trim($(this).next('label').html()));
        });
        if (!vals.length) {
          vals.push(Drupal.t('Not restricted'));
        }
        return vals.join(', ');
      });

      $('fieldset#edit-role', context).drupalSetSummary(function (context) {
        var vals = [];
        $('input[type="checkbox"]:checked', context).each(function () {
          vals.push($.trim($(this).next('label').html()));
        });
        if (!vals.length) {
          vals.push(Drupal.t('Not restricted'));
        }
        return vals.join(', ');
      });
    }
  };
})(jQuery);
