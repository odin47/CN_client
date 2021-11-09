import Moment from 'moment';

const convertDate = (date) => {
	return Moment(date).format('DD-MM-YYYY')
}

export {convertDate}