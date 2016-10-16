import {Action} from '../../actions/ActionTypes'
export function ping(store: any) {
    return function (next: any) {
        return function (action: Action<any>) {
            console.log(`Тип события: ${action.type}, дополнительные данные события: ${action.payload}`)
            return next(action);
        }
    }
}