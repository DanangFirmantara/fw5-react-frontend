import { AUTH_CLEARMSG } from '../reducers/auth'
import { CATEGORY_CLEARMSG } from '../reducers/category'
import { HISTORY_CLEARMSG } from '../reducers/history'
import { LOCATION_CLEARMSG } from '../reducers/location'
import { PAYMENT_CLEARMSG } from '../reducers/payment'
import { RESERVATION_CLEARMSG } from '../reducers/reservation'
import { USER_CLEARMSG } from '../reducers/user'
import { VEHICLE_CLEARMSG } from '../reducers/vehicle'

export const resetMsg = () =>{
	return dispatch =>{
		dispatch({ type: AUTH_CLEARMSG })
		dispatch({ type: CATEGORY_CLEARMSG })
		dispatch({ type: HISTORY_CLEARMSG })
		dispatch({ type: LOCATION_CLEARMSG })
		dispatch({ type: PAYMENT_CLEARMSG })
		dispatch({ type: RESERVATION_CLEARMSG })
		dispatch({ type: USER_CLEARMSG })
		dispatch({ type: VEHICLE_CLEARMSG })
	}
}
