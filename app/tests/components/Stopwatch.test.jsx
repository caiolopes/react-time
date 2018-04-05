import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Stopwatch from 'Stopwatch';

describe('Stopwatch', () => {
  it('should exist', () => {
    expect(Stopwatch).toExist();
  });

  describe('handleStatusChange', () => {
    it('should start stopwatch on started status', (done) => {
      const stopwatch = TestUtils.renderIntoDocument(<Stopwatch />);
      expect(stopwatch.state.count).toBe(0);
      stopwatch.handleStatusChange('started');

      setTimeout(() => {
        expect(stopwatch.state.stopwatchStatus).toBe('started');
        expect(stopwatch.state.count).toBe(1);
        done();
      }, 1001);
    });

    it('should stop stopwatch on stopped status', (done) => {
      const stopwatch = TestUtils.renderIntoDocument(<Stopwatch />);
      stopwatch.handleStatusChange('stopped');

      setTimeout(() => {
        expect(stopwatch.state.count).toBe(0);
        expect(stopwatch.state.stopwatchStatus).toBe('stopped');
        done();
      }, 1001);
    });

    it('should pause stopwatch on paused status', (done) => {
      const stopwatch = TestUtils.renderIntoDocument(<Stopwatch />);
      stopwatch.setState({ count: 10 });
      stopwatch.handleStatusChange('started');
      stopwatch.handleStatusChange('paused');

      setTimeout(() => {
        expect(stopwatch.state.count).toBe(10);
        expect(stopwatch.state.stopwatchStatus).toBe('paused');
        done();
      }, 1001);
    });


    it('should clear stopwatch on stopped status', (done) => {
      const stopwatch = TestUtils.renderIntoDocument(<Stopwatch />);
      stopwatch.setState({ count: 10 });
      stopwatch.handleStatusChange('started');
      stopwatch.handleStatusChange('stopped');

      setTimeout(() => {
        expect(stopwatch.state.count).toBe(0);
        expect(stopwatch.state.stopwatchStatus).toBe('stopped');
        done();
      }, 1001);
    });
  });
});
