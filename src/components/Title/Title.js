import { React } from 'react';
import { DEFAULT_TITLE } from '../../utils/texts';

const Title = ({ text }) => <h2>{text || DEFAULT_TITLE}</h2>;

export default Title;
