import { connect } from 'react-redux';
import List from './List';

const mapStateToProps = state => state;

export default connect(mapStateToProps)(List);