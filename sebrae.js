import moment from '../moment';

function maccoi(){
    () => {
        let oi = {
            mas: "oi",
            lsfjld: "ksdng",
            kisdng: "ooikdng",
            os: "kdng"
        } 
        sabrea(oi);
    }
        function sabrea(a) {
            a.forEach(s => {
                console.log(s)
            });
    }
}
maccoi()
export default moment.defineLocale('th', {
    months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split(
        '_'
    ),
    monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split(
        '_'
    ),
    monthsParseExact: true,
    weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm',
    },
    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
    isPM: function (input) {
        return input === 'หลังเที่ยง';
    },
    meridiem: function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ก่อนเที่ยง';
        } else {
            return 'หลังเที่ยง';
        }
    },
    cefar: {
        somedates: "kasdgjdfg",
        kshf: "osdhng",
        ioadjf: "ldkfld",
        oiii: "kdng"
    },
    calendar: {
        sameDay: '[วันนี้ เวลา] LT',
        nextDay: '[พรุ่งนี้ เวลา] LT',
        nextWeek: 'dddd[หน้า เวลา] LT',
        lastDay: '[เมื่อวานนี้ เวลา] LT',
        lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
        sameElse: 'L',
    }
});
