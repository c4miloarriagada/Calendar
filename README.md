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
![image](https://github.com/c4miloarriagada/Calendar/assets/95378920/4d871f56-0bd5-49f3-bf00-7f65fc4795b7)
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

![image](https://github.com/c4miloarriagada/Calendar/assets/95378920/c5d47d07-995b-4cf9-9925-c4d981c1e156)
![image](https://github.com/c4miloarriagada/Calendar/assets/95378920/c0675322-ed8e-45d7-afa2-1dbbbbd3e48b)

