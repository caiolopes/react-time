import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import Clock from 'Clock';

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      const clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
      const $el = $(ReactDOM.findDOMNode(clock));
      const actualText = $el.find('.clock-text').text();
      expect(actualText).toBe('01:02');
    });
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      const clock = TestUtils.renderIntoDocument(<Clock />);
      let seconds = 615, expected = '10:15';
      expect(clock.formatSeconds(seconds)).toBe(expected);
    });
    it('should format seconds when min/sec are less than 10', () => {
      const clock = TestUtils.renderIntoDocument(<Clock />);
      let seconds = 61, expected = '01:01';
      expect(clock.formatSeconds(seconds)).toBe(expected);
    });
  });
});
