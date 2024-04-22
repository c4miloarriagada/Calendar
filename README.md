# Date-Picker solid [WIP]

[NPM Solid Calendar](https://www.npmjs.com/package/solid-calendar?activeTab=readme).

### ...work in progress

```
types = "form" | "single" | "range"
```

1. How to use?

At your App.tsx

```
import '../node_modules/solid-calendar/dist/style.css'
```

---

```
import { Calendar } from 'solid-calendar'
```

2. Create a signal with empty object

```
import type { SingleDate } from 'solid-calendar'


const [date, setDate] = createSignal<SingleDate>({
    date: {}
  })

<Calendar type="form" setValues={setDate} values={date} />
```
![image](https://github.com/c4miloarriagada/Calendar/assets/95378920/20cabf26-1018-44c1-9817-ff5956696e27)

\
![image](https://github.com/c4miloarriagada/Calendar/assets/95378920/cc0692ad-af9f-431e-b2b9-13c62f6f105c)



OR

```
import type { RangeDate } from 'solid-calendar'


const [date, setDate] = createSignal<RangeDate>({
    dateTo: {},
    dateFrom: {}
  })


<Calendar date={date} setDate={setDate} type='range' />
```
![image](https://github.com/c4miloarriagada/Calendar/assets/95378920/5577ff75-9f3d-40f4-8c7e-de826473c03c)
\
![image](https://github.com/c4miloarriagada/Calendar/assets/95378920/33e44898-bd8c-4283-a70b-57906f31ec35)

