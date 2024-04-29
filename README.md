# Date-Picker solid [WIP]

[NPM Solid Calendar](https://www.npmjs.com/package/solid-calendar?activeTab=readme).

### ...work in progress

```
types = "form" | "single" | "range"
```

1. How to use?
   > For darkmode just simply add class dark-mode to body.
   > Format Date with Intl.DateTimeFormat API.
   
At your App.tsx

```
import '../node_modules/solid-calendar/dist/style.css'
```

---

2. Create a signal with the signature of the type

```
import { Calendar } from 'solid-calendar'
import type { SingleDate } from 'solid-calendar'



const [date, setDate] = createSignal<SingleDate>({
    date: {}
  })



<Calendar<'single'> type="form" setValues={setDate} values={date} />

<Calendar<'single'>
        format={{
          locale: 'en-GB',
          options: {
            dateStyle: 'full',
            timeStyle: 'long',
            timeZone: 'Australia/Sydney'
          }
        }}
        date={date}
        setDate={setDate}
        type='single'
   />
```

![image](https://github.com/c4miloarriagada/Calendar/assets/95378920/20cabf26-1018-44c1-9817-ff5956696e27)

\
![image](https://github.com/c4miloarriagada/Calendar/assets/95378920/03c7e8b4-c62c-4463-bdb1-7decf889a3c5)


OR

```
import type { RangeDate } from 'solid-calendar'

const [date, setDate] = createSignal<RangeDate>({
    dateTo: {},
    dateFrom: {}
  })



<Calendar<'range'>
     format={{
       locale: 'en-GB',
       options: {
         dateStyle: 'full',
         timeStyle: 'long',
         timeZone: 'Australia/Sydney'
       }
     }}
     date={date}
     setDate={setDate}
     type='range'
   />

<Calendar<'range'> date={date} setDate={setDate} type='range' />
```

![image](https://github.com/c4miloarriagada/Calendar/assets/95378920/5577ff75-9f3d-40f4-8c7e-de826473c03c)
\
![image](https://github.com/c4miloarriagada/Calendar/assets/95378920/33e44898-bd8c-4283-a70b-57906f31ec35)
