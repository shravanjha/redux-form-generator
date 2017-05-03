import PropTypes from 'prop-types';
import React from 'react';
import Wrap from './Wrap';
import {Field} from 'redux-form';

class Input extends Wrap {

  render() {
    return (
      <Field
        component={this.renderField}
        {...this.props.field}
        size={this.props.size}
        static={this.props.static}
        locale={this.props.locale}
        checkDisabled={this.props.checkDisabled}
      />
    );
  }
}

Input.propTypes = {
  'field': PropTypes.object,
  'checkDisabled': PropTypes.func,
  'size': PropTypes.string,
  'static': PropTypes.bool,
  'addField': PropTypes.func,
  'locale': PropTypes.object
};
Input.defaultProps = {};

export default Input;
