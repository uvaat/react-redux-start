import * as types from '../actions/action-types';

export function action(params){

    return {
        type: types.ACTION_TYPE,
        params
    };

}
