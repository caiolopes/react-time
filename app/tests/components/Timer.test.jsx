import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Timer from 'Timer';

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleSetTimer', () => {
    it('should set state to started and timer', (done) => {
      const timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleSetTimer(10);

      expect(timer.state.count).toBe(10);
      expect(timer.state.timerStatus).toBe('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(9);
        done();
      }, 1001);
    });

    it('should never set count less than zero', (done) => {
      const timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleSetTimer(1);

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        done();
      }, 3001);
    });

    it('should pause timer on paused status', (done) => {
      const timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleSetTimer(3);
      timer.handleStatusChange('paused');

      setTimeout(() => {
        expect(timer.state.count).toBe(3);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 1001);
    });
    
    it('should stop timer on stopped status', (done) => {
      const timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleSetTimer(3);
      timer.handleStatusChange('stopped');

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 1001);
    });
  });
})