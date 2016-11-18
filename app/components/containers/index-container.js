import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import store from '../../store';
import * as AxiosApi from '../../api/axios-api';

class IndexContainer extends React.Component {

    componentDidMount (){
        AxiosApi.get();
    }

    render (){
        return ()
    }

}

const mapStateToProps = function(store) {
    return {
        stateIndex : store.state.datas
    };
};

export default connect(mapStateToProps)(IndexContainer);
