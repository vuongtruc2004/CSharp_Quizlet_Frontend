import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(relativeTime);
dayjs.locale('vi');

export const formatDateTime = (dateTime: string) => {
    return dayjs.utc(dateTime)
        .local()
        .locale('vi')
        .format('HH:mm ・ D [tháng] M, YYYY');
};

export const formatFromNow = (dateTime: string) => {
    return dayjs.utc(dateTime)
        .local()
        .fromNow();
};
