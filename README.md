# Date-Picker solid [WIP]

[NPM Solid Calendar](https://www.npmjs.com/package/solid-calendar?activeTab=readme).


## How to Use

There are a couple of important points to keep in mind when using this component:

#### Dark Mode
To enable dark mode, you can add the `dark-mode` class to the `<body>` element of your application. This will automatically apply the appropriate styling for the date picker in dark mode.



### Formatting

Date Formatting
This component uses the Intl.DateTimeFormat API for date formatting. You can customize the date and time format by passing the format prop to the <Calendar> component. This prop accepts an object with locale and options properties, which follow the same structure as the parameters of the Intl.DateTimeFormat constructor.

```
<Calendar
  format={{
    locale: 'en-GB', // Specify the locale for date formatting
    options: {
      dateStyle: 'full', // Set the desired date format style
      timeStyle: 'long', // Set the desired time format style
      timeZone: 'Australia/Sydney' // Set the desired time zone
    }
  }}
  // Other props...
/>

```

| Type     | Description |
|----------|-------------|
| `"form"` | Select a single date, with the maximum allowed date being the current day. |
| `"single"` | Select a single date from a calendar view. |
| `"range"` | Select a range of dates with start and end dates. |


At your App.tsx

```
import '../node_modules/solid-calendar/dist/style.css'
```


2. Create a signal with the signature of the type

```
import { Calendar } from 'solid-calendar'
import type { SingleDate } from 'solid-calendar'



const [date, setDate] = createSignal<SingleDate>({
    date: {}
  })

<Calendar<'single'> type="form" setValues={setDate} values={date} />

```

![image](https://github.com/c4miloarriagada/Calendar/assets/95378920/20cabf26-1018-44c1-9817-ff5956696e27)

\
![image](https://github.com/c4miloarriagada/Calendar/assets/95378920/c1441a8a-d7e3-456e-b044-dd42978970a4)


OR

```
import type { RangeDate } from 'solid-calendar'

const [date, setDate] = createSignal<RangeDate>({
    dateTo: {},
    dateFrom: {}
  })


<Calendar<'range'> date={date} setDate={setDate} type='range' />
```

![image](https://github.com/c4miloarriagada/Calendar/assets/95378920/5577ff75-9f3d-40f4-8c7e-de826473c03c)
\
![image](https://github.com/c4miloarriagada/Calendar/assets/95378920/33e44898-bd8c-4283-a70b-57906f31ec35)
