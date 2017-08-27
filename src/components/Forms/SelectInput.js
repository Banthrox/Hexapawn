// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styled from 'styled-components';
import { color } from '../../utils/styles';
import InputWrapper from './InputWrapper';

// =============================================================================
// Styles
// =============================================================================

const Select = styled.select`
  outline: none;
  color: inherit;
  font-family: inherit;
  font-weight: 700;
  border: 1px solid ${color.grey.light};
  background-color: ${color.grey.lighter};
  display: ${props => (props.isInline ? 'inline' : 'initial')};
`;

Select.displayName = 'Select';

// =============================================================================
// Component
// =============================================================================

export default function SelectInput({
  name,
  value,
  label,
  description,
  children,
  marginBottom,
  onChange,
}) {
  return (
    <InputWrapper
      name={name}
      label={label}
      description={description}
      marginBottom={marginBottom}
    >
      <Select
        name={name}
        value={value}
        onChange={e => onChange(name, e.target.value)}
      >
        {children.map(child =>
          (<option key={child} value={child}>
            {child}
          </option>),
        )}
      </Select>
    </InputWrapper>
  );
}

SelectInput.propTypes = {
  name:     PropTypes.string.isRequired,
  value:    PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ).isRequired,
  label:        PropTypes.string,
  description:  PropTypes.string,
  marginBottom: PropTypes.string,
};

SelectInput.defaultProps = {
  label:        null,
  description:  null,
  marginBottom: null,
};
