import { React } from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_TITLE } from '../../utils/texts';

const Title = ({ text }) => <h2>{text || DEFAULT_TITLE}</h2>;

Title.propTypes = {
    text: PropTypes.string,
};

export default Title;
