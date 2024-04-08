# Date-Picker solid [WIP]

[NPM Solid Calendar](https://www.npmjs.com/package/solid-calendar?activeTab=readme).

### ...work in progress

```
types = "form" | "single" | "range"
```

1. How to use?

```
import { Calendar } from 'solid-calendar'
```

2. Create a signal with the shape of your type

```
import type { SingleDate } from 'solid-calendar'


const [date, setDate] = createSignal<SingleDate>({
    date: {}
  })

<Calendar type="form" setValues={setDate} values={date} />
```

OR

```
import type { RangeDate } from 'solid-calendar'


const [date, setDate] = createSignal<RangeDate>({
    dateTo: {},
    dateFrom: {}
  })


<Calendar date={date} setDate={setDate} type='range' />
```

![image](https://github.com/c4miloarriagada/Calendar/assets/95378920/dd3d7c8d-7664-43f4-8d95-d973f1320e22)

![image](https://github.com/c4miloarriagada/Calendar/assets/95378920/d2050087-9d25-46c5-8420-4b39ef88a666)
