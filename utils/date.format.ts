import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export const formatDateTime = (dateTime: string) => {
    return dayjs.utc(dateTime)
        .local()
        .locale('vi')
        .format('HH:mm ・ D [tháng] M, YYYY');
};
