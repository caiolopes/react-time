import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import TimerForm from 'TimerForm';

describe('TimerForm', () => {
  it('should exist', () => {
    expect(TimerForm).toExist();
  });

  it('should call onSetCoutdown if valid seconds entered', () => {
    const spy = expect.createSpy();
    const timerForm = TestUtils.renderIntoDocument(<TimerForm onSetTimer={spy} />);
    const $el = $(ReactDOM.findDOMNode(timerForm));

    timerForm._seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call onSetCoutdown if invalid seconds entered', () => {
    const spy = expect.createSpy();
    const timerForm = TestUtils.renderIntoDocument(<TimerForm onSetTimer={spy} />);
    const $el = $(ReactDOM.findDOMNode(timerForm));

    timerForm._seconds.value = '109a';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});